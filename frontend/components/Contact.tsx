import React, { useState } from 'react';
import { Button } from './Button';
import { Check, Mail, Phone, ArrowRight, Send, ShieldCheck, Zap, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const API_URL = (import.meta as any).env?.VITE_API_URL || (process.env as any).REACT_APP_BACKEND_URL || '';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    auditType: 'Comprehensive System Health Check'
  });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_URL}/api/contact/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          company: formState.company,
          audit_type: formState.auditType,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const detail = (body && (body.detail || body.message)) || `Submission failed (${res.status})`;
        throw new Error(typeof detail === 'string' ? detail : 'Submission failed');
      }

      setStatus('success');
      setFormState({ name: '', email: '', company: '', auditType: 'Comprehensive System Health Check' });
    } catch (err: any) {
      console.error('Contact submit error:', err);
      setErrorMsg(err?.message || 'Could not send your request. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
        {/* Background Decor - Light */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ad577b]/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              <Zap className="w-3 h-3 fill-amber-500" />
              Limited Availability for Q4
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight font-heading text-slate-900">
              Audit Your Current <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-[#ad577b]">UKG Setup</span>
            </h2>
            
            <p className="text-slate-600 mb-10 text-xl leading-relaxed font-medium font-sans max-w-lg">
              Is your implementation delivering the ROI promised? Most aren't. 
              Get a free 30-minute expert analysis of your WFM environment to uncover hidden inefficiencies.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Identify license under-utilization",
                "Review compliance workflow gaps",
                "Benchmark against industry adoption rates"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="p-1 rounded-full bg-[#ad577b]/10 text-[#ad577b] border border-[#ad577b]/20">
                    <Check className="h-4 w-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 pt-10 border-t border-slate-200 text-slate-600">
              <a href="mailto:contact@mindviewit.com" className="flex items-center gap-3 group cursor-pointer hover:text-[#ad577b] transition-colors">
                <div className="p-2 bg-white rounded-full border border-slate-200 group-hover:border-[#ad577b]/30 transition-colors shadow-sm">
                    <Mail className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold">contact@mindviewit.com</span>
              </a>
              <div className="flex items-center gap-3 group cursor-pointer hover:text-[#ad577b] transition-colors">
                <div className="p-2 bg-white rounded-full border border-slate-200 group-hover:border-[#ad577b]/30 transition-colors shadow-sm">
                    <Phone className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold">+1 (888) 555-0123</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#ad577b]/10 relative overflow-hidden group">
            {/* Subtle Gradient Glow inside Card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ad577b]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-[#ad577b]/15 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 font-heading">Request Your Audit</h3>
                        <p className="text-slate-500 mt-1 text-sm">No commitment required.</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-amber-50 to-[#ad577b]/10 rounded-xl border border-slate-200 text-[#ad577b]">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                </div>

                {/* SUCCESS STATE */}
                {status === 'success' ? (
                  <div data-testid="contact-success" className="py-10 text-center animate-in fade-in zoom-in-95 duration-300">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-[#ad577b]/15 border border-[#ad577b]/20 flex items-center justify-center mb-5 shadow-md shadow-[#ad577b]/10">
                      <CheckCircle2 className="w-8 h-8 text-[#ad577b]" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 font-heading mb-2">Request Received</h4>
                    <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                      Thanks! We've sent a confirmation to your inbox and our team will get back to you within <strong>1 business day</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      data-testid="contact-send-another"
                      className="mt-6 text-sm font-bold text-[#ad577b] hover:text-[#853856] transition-colors"
                    >
                      Send another request →
                    </button>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Work Email</label>
                    <input 
                    type="email" 
                    required
                    data-testid="contact-email-input"
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ad577b] focus:border-transparent focus:bg-white outline-none transition-all text-slate-900 placeholder-slate-400 font-medium"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    placeholder="name@company.com"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Name</label>
                    <input 
                        type="text" 
                        required
                        data-testid="contact-name-input"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ad577b] focus:border-transparent focus:bg-white outline-none transition-all text-slate-900 placeholder-slate-400 font-medium"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                        placeholder="John Doe"
                    />
                    </div>
                    <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Company</label>
                    <input 
                        type="text" 
                        required
                        data-testid="contact-company-input"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ad577b] focus:border-transparent focus:bg-white outline-none transition-all text-slate-900 placeholder-slate-400 font-medium"
                        value={formState.company}
                        onChange={e => setFormState({...formState, company: e.target.value})}
                        placeholder="Acme Inc."
                    />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Area of Focus</label>
                    <div className="relative">
                    <select 
                        data-testid="contact-audit-type-select"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ad577b] focus:border-transparent focus:bg-white outline-none appearance-none text-slate-900 font-medium cursor-pointer"
                        value={formState.auditType}
                        onChange={e => setFormState({...formState, auditType: e.target.value})}
                    >
                        <option>Comprehensive System Health Check</option>
                        <option>Performance & Speed Optimization</option>
                        <option>Reporting & Analytics Review</option>
                        <option>Compliance & Pay Rule Validation</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ArrowRight className="h-4 w-4 rotate-90" />
                    </div>
                    </div>
                </div>

                {status === 'error' && (
                  <div data-testid="contact-error" className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
                    <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                    <span><strong>Couldn't send your request.</strong> {errorMsg}</span>
                  </div>
                )}

                <div className="pt-4">
                    <Button
                      type="submit"
                      variant="premium"
                      className="w-full h-14 text-lg flex items-center justify-center gap-2 font-bold tracking-wide"
                      size="lg"
                      disabled={status === 'submitting'}
                      data-testid="contact-submit-button"
                    >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Send Request
                          </>
                        )}
                    </Button>
                </div>
                </form>
                )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
