import React from 'react';
import { Award, BookOpen, Users, CheckCircle2, Star } from 'lucide-react';

export const SMEAcademy: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decor - Premium Amber/Purple Theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-bold text-xs uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            Knowledge Transfer
          </span>
          <h2 className="text-4xl font-bold text-white mb-6 font-heading">
            The SME Academy
          </h2>
          <p className="text-lg text-slate-400">
            We don't create dependency; we build capability. Our 12-week certification program ensures your internal team can manage UKG independently.
          </p>
        </div>

        <div className="relative">
            {/* Timeline Line - Gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500/20 via-purple-500/20 to-amber-500/20 hidden md:block"></div>

            <div className="space-y-12">
                {/* Month 1 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right p-8 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl shadow-black/20 border border-white/10 md:mr-12 hover:border-amber-500/30 hover:shadow-amber-500/10 transition-all duration-300 group">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Phase 1: Foundations</h3>
                        <p className="text-slate-400 text-sm mb-4 leading-relaxed">Core concepts of Timekeeping, Scheduling, and Leave logic. Admin navigation mastery.</p>
                        <ul className="text-sm text-slate-500 space-y-2 inline-block text-left">
                            <li className="flex items-center gap-2 text-slate-400"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Basic Configuration</li>
                            <li className="flex items-center gap-2 text-slate-400"><CheckCircle2 className="w-4 h-4 text-amber-500" /> User Security Mgmt</li>
                        </ul>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-slate-950 rounded-full border-2 border-amber-500 flex items-center justify-center text-white font-bold text-lg z-10 hidden md:flex shadow-[0_0_15px_rgba(245,158,11,0.4)]">1</div>
                    <div className="md:w-1/2"></div>
                </div>

                {/* Month 2 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
                    <div className="md:w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-slate-950 rounded-full border-2 border-purple-500 flex items-center justify-center text-white font-bold text-lg z-10 hidden md:flex shadow-[0_0_15px_rgba(168,85,247,0.4)]">2</div>
                    <div className="md:w-1/2 p-8 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl shadow-black/20 border border-white/10 md:ml-12 hover:border-purple-500/30 hover:shadow-purple-500/10 transition-all duration-300 group">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Phase 2: Advanced Logic</h3>
                        <p className="text-slate-400 text-sm mb-4 leading-relaxed">Deep dive into Pay Rules, Accrual Profiles, and building custom Hyperfind queries.</p>
                         <ul className="text-sm text-slate-500 space-y-2">
                            <li className="flex items-center gap-2 text-slate-400"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Pay Rule Testing</li>
                            <li className="flex items-center gap-2 text-slate-400"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Workflow Building</li>
                        </ul>
                    </div>
                </div>

                {/* Month 3 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
                     <div className="md:w-1/2 md:text-right p-8 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl shadow-black/20 border border-white/10 md:mr-12 hover:border-amber-500/30 hover:shadow-amber-500/10 transition-all duration-300 group">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Phase 3: Certification</h3>
                        <p className="text-slate-400 text-sm mb-4 leading-relaxed">Capstone project: Configure a new pay group from scratch. Final exam & certification.</p>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-amber-500/20 text-amber-300 rounded-full text-xs font-bold mt-2 shadow-sm">
                            <Award className="w-4 h-4" /> Certified MindView Admin
                        </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-slate-950 rounded-full border-2 border-indigo-500 flex items-center justify-center text-white font-bold text-lg z-10 hidden md:flex shadow-[0_0_15px_rgba(99,102,241,0.4)]">3</div>
                   <div className="md:w-1/2"></div>
                </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto">
                {[
                  { label: "Weeks", value: "12", color: "text-amber-400" },
                  { label: "Modules", value: "5+", color: "text-purple-400" },
                  { label: "Hands-on", value: "100%", color: "text-indigo-400" },
                  { label: "Access", value: "24/7", color: "text-teal-400" }
                ].map((stat, idx) => (
                  <div key={idx} className="p-6 bg-white/5 rounded-2xl text-center border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg">
                      <div className={`text-4xl font-bold ${stat.color} mb-2 font-heading`}>{stat.value}</div>
                      <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">{stat.label}</div>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};