import React, { useState } from 'react';
import { Database, Network, Shield, AlertCircle, CheckCircle, Clock, Server, Zap, RefreshCw, Layers } from 'lucide-react';

export const Technical: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'integrations' | 'hypercare'>('integrations');

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative transition-colors duration-700">
       {/* Background Decor - Amber/Maroon Theme */}
       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2"></div>
       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3"></div>
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-heading">Technical Excellence</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed">
            We bridge the gap between HR and IT. From robust API architectures to SLA-backed stability guarantees.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 backdrop-blur-md p-1.5 rounded-2xl flex gap-1 border border-white/10 shadow-xl shadow-black/20">
            <button
              onClick={() => setActiveTab('integrations')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 outline-none ${
                activeTab === 'integrations' 
                ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-lg shadow-rose-500/30 ring-1 ring-rose-400' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Integration Architecture
            </button>
            <button
              onClick={() => setActiveTab('hypercare')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 outline-none ${
                activeTab === 'hypercare' 
                ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-lg shadow-rose-500/30 ring-1 ring-rose-400' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Hypercare & SLAs
            </button>
          </div>
        </div>

        <div className="min-h-[500px]">
          {activeTab === 'integrations' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-heading">
                  <Network className="text-amber-400 w-6 h-6" /> API-Led Middleware Strategy
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                  Stop using fragile flat-files. We architect robust, real-time middleware solutions (MuleSoft, Boomi, N8N) that ensure your UKG data flows seamlessly into SAP, Oracle, or Workday without manual intervention.
                </p>
                <div className="space-y-4">
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
                    <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-rose-400" /> UKG + SAP SuccessFactors
                    </h4>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Bi-directional employee master sync and payroll export with error handling.</p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
                    <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                         <Database className="w-4 h-4 text-teal-400" /> UKG + Oracle HCM
                    </h4>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Real-time accrual sync and GL posting automation.</p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
                    <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-amber-400" /> Data Integrity Promise
                    </h4>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">We run parallel validation scripts 48h before go-live to ensure 0% variance.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-full min-h-[400px] bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 flex items-center justify-center shadow-2xl shadow-black/40 overflow-hidden">
                 {/* Decorative Glow inside diagram container */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

                 {/* Abstract Architecture Diagram */}
                 <div className="relative w-full max-w-sm">
                    {/* Center Node (UKG) */}
                    <div className="mx-auto w-24 h-24 bg-gradient-to-br from-indigo-600 to-rose-600 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.4)] z-20 relative border border-white/20 animate-breathe">
                        <span className="font-bold text-white text-xl tracking-wider">UKG</span>
                        <div className="absolute inset-0 bg-white/20 blur-lg rounded-2xl -z-10"></div>
                    </div>
                    
                    {/* Orbiting Systems */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-dashed border-white/20 rounded-full animate-[spin_30s_linear_infinite] z-10">
                         {/* Nodes on orbit */}
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900/90 rounded-xl border border-white/20 flex items-center justify-center text-xs font-bold text-teal-400 shadow-lg backdrop-blur-md transform -rotate-[0deg]">SAP</div>
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 bg-slate-900/90 rounded-xl border border-white/20 flex items-center justify-center text-xs font-bold text-amber-400 shadow-lg backdrop-blur-md">Oracle</div>
                         <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900/90 rounded-xl border border-white/20 flex items-center justify-center text-xs font-bold text-pink-400 shadow-lg backdrop-blur-md">POS</div>
                         <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900/90 rounded-xl border border-white/20 flex items-center justify-center text-xs font-bold text-blue-400 shadow-lg backdrop-blur-md">BI</div>
                    </div>

                    {/* Connecting Pulses */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-rose-500/20 rounded-full animate-ping opacity-20"></div>
                 </div>
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                 
                 {/* P1 Card */}
                 <div className="bg-red-500/5 backdrop-blur-sm border border-red-500/20 p-8 rounded-3xl hover:bg-red-500/10 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                        <AlertCircle className="text-red-500 w-6 h-6" />
                        <h3 className="font-bold text-red-200 text-lg">Critical (P1)</h3>
                    </div>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300">System down or payroll calculation failure. Business stoppage.</p>
                    <div className="flex items-baseline gap-2">
                        <div className="text-3xl font-bold text-white">&lt; 2 Hours</div>
                    </div>
                    <p className="text-xs text-red-400 mt-2 font-bold uppercase tracking-wider">Response Time</p>
                 </div>

                 {/* P2 Card */}
                 <div className="bg-amber-500/5 backdrop-blur-sm border border-amber-500/20 p-8 rounded-3xl hover:bg-amber-500/10 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                        <AlertCircle className="text-amber-500 w-6 h-6" />
                        <h3 className="font-bold text-amber-200 text-lg">High (P2)</h3>
                    </div>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300">Major workflow broken or interface failure. Workaround available.</p>
                    <div className="flex items-baseline gap-2">
                        <div className="text-3xl font-bold text-white">&lt; 4 Hours</div>
                    </div>
                    <p className="text-xs text-amber-400 mt-2 font-bold uppercase tracking-wider">Response Time</p>
                 </div>

                 {/* P3 Card */}
                 <div className="bg-blue-500/5 backdrop-blur-sm border border-blue-500/20 p-8 rounded-3xl hover:bg-blue-500/10 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                        <CheckCircle className="text-blue-500 w-6 h-6" />
                        <h3 className="font-bold text-blue-200 text-lg">Medium (P3)</h3>
                    </div>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300">Minor configuration issues or user questions. No business impact.</p>
                    <div className="flex items-baseline gap-2">
                        <div className="text-3xl font-bold text-white">&lt; 24 Hours</div>
                    </div>
                    <p className="text-xs text-blue-400 mt-2 font-bold uppercase tracking-wider">Response Time</p>
                 </div>
              </div>

              <div className="text-center p-8 bg-white/5 border border-white/10 rounded-3xl max-w-2xl mx-auto">
                 <h4 className="text-xl font-bold text-white mb-4">The "Sleep Well" Guarantee</h4>
                 <p className="text-slate-400 mb-6 leading-relaxed">
                   We don't disappear after go-live. Our managed support packages include proactive system health checks, quarterly business reviews, and UKG release management so you never fall behind.
                 </p>
                 <div className="flex justify-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-emerald-400 font-bold">
                        <CheckCircle className="w-4 h-4" /> Uptime Monitoring
                    </div>
                    <div className="flex items-center gap-2 text-sm text-emerald-400 font-bold">
                        <CheckCircle className="w-4 h-4" /> Release Testing
                    </div>
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};