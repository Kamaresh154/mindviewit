"""
MindView IT Services — Backend API
Handles contact/audit-request submissions and sends notification + acknowledgement emails via Resend.
"""

import asyncio
import logging
import os
import uuid
from datetime import datetime, timezone
from typing import Optional

import resend
from dotenv import load_dotenv
from fastapi import APIRouter, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, EmailStr, Field

# ----- Boot -----
load_dotenv()

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(name)s: %(message)s")
logger = logging.getLogger("mindview")

MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME")
RESEND_API_KEY = os.environ.get("RESEND_API_KEY")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
CONTACT_EMAIL = os.environ.get("CONTACT_EMAIL", "contact@mindviewit.com")
CORS_ORIGINS = os.environ.get("CORS_ORIGINS", "*")

resend.api_key = RESEND_API_KEY

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

app = FastAPI(title="MindView IT Services API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in CORS_ORIGINS.split(",")] if CORS_ORIGINS != "*" else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api = APIRouter(prefix="/api")


# ----- Models -----
class ContactSubmission(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    company: str = Field(..., min_length=1, max_length=200)
    audit_type: str = Field(..., min_length=1, max_length=200)
    message: Optional[str] = Field(None, max_length=2000)


class ContactResponse(BaseModel):
    id: str
    status: str
    message: str


# ----- Email Templates -----
BRAND_PRIMARY = "#ad577b"
BRAND_ACCENT = "#F59E0B"


def _internal_notification_html(payload: ContactSubmission, submission_id: str, when: str) -> str:
    msg_block = (
        f'<tr><td style="padding:14px 24px;border-bottom:1px solid #e2e8f0;vertical-align:top;color:#475569;font-weight:600;">Message</td>'
        f'<td style="padding:14px 24px;border-bottom:1px solid #e2e8f0;color:#0f172a;white-space:pre-wrap;">{payload.message}</td></tr>'
        if payload.message
        else ""
    )
    return f"""\
<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 6px 18px rgba(173,87,123,0.08);">
        <tr><td style="background:linear-gradient(90deg,{BRAND_ACCENT} 0%,{BRAND_PRIMARY} 100%);padding:24px 32px;color:#ffffff;">
          <div style="font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">MindView IT Services</div>
          <div style="font-size:22px;font-weight:800;margin-top:6px;">New Audit Request</div>
        </td></tr>
        <tr><td style="padding:24px 32px 8px 32px;color:#475569;font-size:14px;line-height:1.6;">
          A new prospect has submitted the audit form on your website. Details below.
        </td></tr>
        <tr><td style="padding:8px 32px 16px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;font-size:14px;">
            <tr><td style="padding:14px 24px;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:600;width:32%;">Name</td><td style="padding:14px 24px;border-bottom:1px solid #e2e8f0;color:#0f172a;">{payload.name}</td></tr>
            <tr><td style="padding:14px 24px;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:600;">Email</td><td style="padding:14px 24px;border-bottom:1px solid #e2e8f0;color:#0f172a;"><a href="mailto:{payload.email}" style="color:{BRAND_PRIMARY};text-decoration:none;font-weight:600;">{payload.email}</a></td></tr>
            <tr><td style="padding:14px 24px;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:600;">Company</td><td style="padding:14px 24px;border-bottom:1px solid #e2e8f0;color:#0f172a;">{payload.company}</td></tr>
            <tr><td style="padding:14px 24px;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:600;">Area of Focus</td><td style="padding:14px 24px;border-bottom:1px solid #e2e8f0;color:#0f172a;">{payload.audit_type}</td></tr>
            {msg_block}
            <tr><td style="padding:14px 24px;color:#475569;font-weight:600;">Submitted</td><td style="padding:14px 24px;color:#0f172a;">{when}</td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:8px 32px 24px 32px;">
          <a href="mailto:{payload.email}?subject=Re:%20Your%20UKG%20Audit%20Request" style="display:inline-block;background:linear-gradient(90deg,{BRAND_ACCENT} 0%,{BRAND_PRIMARY} 100%);color:#ffffff;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:10px;font-size:14px;">Reply to {payload.name.split(' ')[0]}</a>
        </td></tr>
        <tr><td style="padding:18px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:12px;">
          Submission ID: <span style="font-family:Menlo,monospace;color:#64748b;">{submission_id}</span>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>"""


def _acknowledgement_html(payload: ContactSubmission) -> str:
    first_name = payload.name.split(" ")[0] if payload.name else "there"
    return f"""\
<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 6px 18px rgba(173,87,123,0.08);">
        <tr><td style="background:linear-gradient(90deg,{BRAND_ACCENT} 0%,{BRAND_PRIMARY} 100%);padding:28px 32px;color:#ffffff;text-align:center;">
          <div style="font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;opacity:0.9;">MindView IT Services</div>
          <div style="font-size:24px;font-weight:800;margin-top:8px;">We received your request</div>
        </td></tr>
        <tr><td style="padding:32px 32px 8px 32px;font-size:16px;line-height:1.7;color:#0f172a;">
          Hi {first_name},
        </td></tr>
        <tr><td style="padding:8px 32px;font-size:15px;line-height:1.7;color:#334155;">
          Thanks for reaching out to <strong>MindView IT Services</strong>. Your UKG audit request has been received and a senior consultant on our team will personally review it.
          <br/><br/>
          You can expect a response within <strong>1 business day</strong> with next steps and available 30-minute strategy session slots.
        </td></tr>
        <tr><td style="padding:18px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
            <tr><td style="padding:18px 22px;font-size:13px;color:#475569;line-height:1.7;">
              <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#94a3b8;margin-bottom:8px;">Your Submission</div>
              <strong style="color:#0f172a;">Company:</strong> {payload.company}<br/>
              <strong style="color:#0f172a;">Area of Focus:</strong> {payload.audit_type}
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:8px 32px 28px 32px;font-size:15px;line-height:1.7;color:#334155;">
          In the meantime, feel free to explore our <a href="#" style="color:{BRAND_PRIMARY};text-decoration:none;font-weight:600;">success stories</a> and <a href="#" style="color:{BRAND_PRIMARY};text-decoration:none;font-weight:600;">latest insights</a> on UKG WFM strategy.
          <br/><br/>
          Talk soon,<br/>
          <strong>The MindView Strategy Team</strong>
        </td></tr>
        <tr><td style="padding:18px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:12px;text-align:center;">
          MindView IT Services Pvt Ltd &nbsp;·&nbsp; Boston · London · Bangalore<br/>
          Not affiliated with UKG Inc.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>"""


# ----- Email helper -----
async def _send_email(to_email: str, subject: str, html: str, reply_to: Optional[str] = None) -> Optional[str]:
    """Send an email via Resend. Returns email id on success, None on failure."""
    if not RESEND_API_KEY:
        logger.warning("RESEND_API_KEY not configured — skipping email to %s", to_email)
        return None

    params: dict = {
        "from": f"MindView IT Services <{SENDER_EMAIL}>",
        "to": [to_email],
        "subject": subject,
        "html": html,
    }
    if reply_to:
        params["reply_to"] = [reply_to]

    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        email_id = result.get("id") if isinstance(result, dict) else None
        logger.info("Email sent to %s (id=%s)", to_email, email_id)
        return email_id
    except Exception as e:  # noqa: BLE001
        logger.error("Failed to send email to %s: %s", to_email, e)
        return None


# ----- Routes -----
@api.get("/health")
async def health() -> dict:
    return {"status": "ok", "service": "mindview-api"}


@api.post("/contact/submit", response_model=ContactResponse)
async def submit_contact(payload: ContactSubmission) -> ContactResponse:
    submission_id = str(uuid.uuid4())
    submitted_at = datetime.now(timezone.utc)
    pretty_when = submitted_at.strftime("%b %d, %Y · %H:%M UTC")

    # 1. Persist
    doc = {
        "id": submission_id,
        "name": payload.name,
        "email": payload.email,
        "company": payload.company,
        "audit_type": payload.audit_type,
        "message": payload.message,
        "submitted_at": submitted_at.isoformat(),
        "internal_email_id": None,
        "ack_email_id": None,
    }
    try:
        await db.contact_submissions.insert_one(dict(doc))
    except Exception as e:  # noqa: BLE001
        logger.error("Mongo insert failed: %s", e)
        # don't block the user — continue with emails

    # 2. Send both emails in parallel
    internal_subject = f"[New Lead] {payload.company} — {payload.audit_type}"
    ack_subject = "We received your UKG audit request — MindView IT Services"

    internal_id, ack_id = await asyncio.gather(
        _send_email(
            CONTACT_EMAIL,
            internal_subject,
            _internal_notification_html(payload, submission_id, pretty_when),
            reply_to=payload.email,
        ),
        _send_email(
            payload.email,
            ack_subject,
            _acknowledgement_html(payload),
        ),
    )

    # 3. Update record with email IDs (best-effort)
    try:
        await db.contact_submissions.update_one(
            {"id": submission_id},
            {"$set": {"internal_email_id": internal_id, "ack_email_id": ack_id}},
        )
    except Exception as e:  # noqa: BLE001
        logger.error("Mongo update failed: %s", e)

    return ContactResponse(
        id=submission_id,
        status="received",
        message="Thanks! We've received your request and sent a confirmation to your inbox.",
    )


app.include_router(api)


@app.get("/")
async def root() -> dict:
    return {"service": "mindview-api", "docs": "/docs"}
