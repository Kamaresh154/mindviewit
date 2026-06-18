"""
Mindview IT Services - Backend API tests
Covers:
- /api/health
- /api/contact/submit (success persistence, validation errors)
- MongoDB persistence verification
- Resend graceful degradation (ack to verified address should populate ack_email_id)
"""
import os
import time

import pytest
import requests
from pymongo import MongoClient

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "mindview_db")

# Resend testing-mode verified recipient (account owner)
VERIFIED_EMAIL = "shritainnovate@gmail.com"


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="module")
def mongo():
    c = MongoClient(MONGO_URL, serverSelectionTimeoutMS=3000)
    return c[DB_NAME]


# ---------- Health ----------
class TestHealth:
    def test_health_ok(self, api):
        r = api.get(f"{BASE_URL}/api/health")
        assert r.status_code == 200
        data = r.json()
        assert data["status"] == "ok"
        assert data["service"] == "mindview-api"


# ---------- Validation ----------
class TestContactValidation:
    def test_invalid_email_returns_422(self, api):
        r = api.post(f"{BASE_URL}/api/contact/submit", json={
            "name": "TEST User",
            "email": "not-an-email",
            "company": "TEST Co",
            "audit_type": "Comprehensive System Health Check",
        })
        assert r.status_code == 422, f"got {r.status_code}: {r.text}"

    def test_missing_required_fields_returns_422(self, api):
        r = api.post(f"{BASE_URL}/api/contact/submit", json={"email": "x@y.com"})
        assert r.status_code == 422

    def test_empty_name_returns_422(self, api):
        r = api.post(f"{BASE_URL}/api/contact/submit", json={
            "name": "",
            "email": "a@b.com",
            "company": "TEST",
            "audit_type": "Comprehensive System Health Check",
        })
        assert r.status_code == 422


# ---------- Submission success path (persistence + emails) ----------
class TestContactSubmit:
    def test_submit_to_unverified_email_still_succeeds(self, api, mongo):
        """Resend testing mode will fail to send the ack to a non-verified address,
        but the API must still return 200 + status=received (graceful degradation)."""
        payload = {
            "name": "TEST Prospect Unverified",
            "email": "TEST_unverified+lead@example.com",
            "company": "TEST Co Unverified",
            "audit_type": "Performance & Speed Optimization",
            "message": "TEST message — audit our timekeeping setup.",
        }
        r = api.post(f"{BASE_URL}/api/contact/submit", json=payload)
        assert r.status_code == 200, f"got {r.status_code}: {r.text}"
        body = r.json()
        assert body["status"] == "received"
        assert "id" in body and len(body["id"]) > 10
        assert isinstance(body["message"], str) and len(body["message"]) > 0

        # Persistence check
        doc = mongo.contact_submissions.find_one({"id": body["id"]})
        assert doc is not None, "submission not persisted in MongoDB"
        assert doc["name"] == payload["name"]
        assert doc["email"] == payload["email"]
        assert doc["company"] == payload["company"]
        assert doc["audit_type"] == payload["audit_type"]
        assert doc["message"] == payload["message"]
        assert "submitted_at" in doc and doc["submitted_at"]
        # email id fields exist (may be None due to Resend testing-mode block)
        assert "internal_email_id" in doc
        assert "ack_email_id" in doc

    def test_submit_to_verified_email_populates_ack_id(self, api, mongo):
        """Sending the ack to Resend account owner address should succeed and
        populate ack_email_id with a UUID-shaped id."""
        payload = {
            "name": "TEST Verified Owner",
            "email": VERIFIED_EMAIL,
            "company": "TEST Verified Co",
            "audit_type": "Reporting & Analytics Review",
        }
        r = api.post(f"{BASE_URL}/api/contact/submit", json=payload)
        assert r.status_code == 200, f"got {r.status_code}: {r.text}"
        body = r.json()
        submission_id = body["id"]

        # Allow background update of email ids (best-effort) to flush
        time.sleep(1.0)

        doc = mongo.contact_submissions.find_one({"id": submission_id})
        assert doc is not None
        # ack to the verified address should succeed
        assert doc.get("ack_email_id"), (
            f"expected ack_email_id to be populated for verified recipient, got doc={doc}"
        )
        # internal email goes to contact@mindviewit.com which is NOT verified — expected to be None
        # (we don't fail the test on this; just record)

    def test_submit_minimal_payload_without_message(self, api, mongo):
        payload = {
            "name": "TEST Min",
            "email": "TEST_minimal+a@example.com",
            "company": "TEST MinCo",
            "audit_type": "Compliance & Pay Rule Validation",
        }
        r = api.post(f"{BASE_URL}/api/contact/submit", json=payload)
        assert r.status_code == 200
        sid = r.json()["id"]
        doc = mongo.contact_submissions.find_one({"id": sid})
        assert doc is not None
        assert doc["message"] is None


# ---------- Cleanup ----------
@pytest.fixture(scope="module", autouse=True)
def _cleanup(mongo):
    yield
    try:
        mongo.contact_submissions.delete_many({"company": {"$regex": "^TEST"}})
    except Exception:
        pass
