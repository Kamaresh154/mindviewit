import React, { useState } from 'react';
import { Rocket, Settings2, LifeBuoy, ArrowRight, Wand2, Loader2, Database, Network } from 'lucide-react';
import { generateImage } from '../services/geminiService';

const PROMPTS = {
  implementation: "Isometric 3D glass illustration of a digital foundation being built, blocks interlocking perfectly, glowing amber and maroon data streams, translucent glass texture with soft subsurface scattering, high-tech minimalist aesthetic, dark moody background, studio lighting, 8k resolution, octane render --v 6.0",
  optimization: "Abstract 3D representation of data flow optimization, complex knot of wires untangling into straight glowing maroon lines, metallic silver and amber color palette, clean and organized, floating elements, depth of field, hyper-realistic materials, glossy finish, dark background --v 6.0",
  support: "3D icon of a floating digital shield made of frosted glass and neon amber light, protecting a central core, soft maroon glow, symbolizing security and continuous support, minimalist isometric view, high-end tech product design style, dark background --v 6.0"
};

export const Services: React.FC = () => {
  const [images, setImages] = useState<{ [key: string]: string }>({});
  const [generating, setGenerating] = useState<{ [key: string]: boolean }>({});

  const handleGenerate = async (key: string, prompt: string) => {
    setGenerating(prev => ({ ...prev, [key]: true }));
    const image = await generateImage(prompt, '4:3');
    if (image) {
      setImages(prev => ({ ...prev, [key]: image }));
    }
    setGenerating(prev => ({ ...prev, [key]: false }));
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden transition-colors duration-700">
      {/* Background Blobs for Glass Effect - UPDATED TO AMBER/MAROON DARK MODE */}
      <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-[#ad577b]/20 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-900/20 rounded-full blur-[100px] translate-x-1/3 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-3xl mb-16">
          <h4 className="text-amber-400 font-bold tracking-wide uppercase text-sm mb-2">Our Expertise</h4>
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6 font-heading">
            Beyond Go-Live. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ad577b] to-amber-400">Total Workforce Optimization.</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed font-sans">
            We don't just "turn on" software. We engineer outcomes. From rapid deployment to complex data rescue operations, we cover the entire lifecycle of your UKG investment.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Implementation (Large, Left) */}
          <div className="col-span-1 md:col-span-7 row-span-2 group relative p-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-[#ad577b]/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
            
            {/* Image Area */}
            <div className="h-64 relative bg-[#ad577b]/20 overflow-hidden">
                {images['implementation'] ? (
                     <img src={images['implementation']} alt="Implementation" className="w-full h-full object-cover animate-in fade-in duration-700" />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ad577b]/20 rounded-full mix-blend-screen filter blur-3xl"></div>
                         <button 
                            onClick={() => handleGenerate('implementation', PROMPTS.implementation)}
                            className="z-10 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur text-[#ad577b] text-xs font-semibold rounded-full border border-[#ad577b]/30 hover:bg-black/60 hover:text-white transition-colors"
                            disabled={generating['implementation']}
                         >
                            {generating['implementation'] ? <Loader2 className="h-3 w-3 animate-spin" /> : <Wand2 className="h-3 w-3" />}
                            Visualize Foundation
                         </button>
                    </div>
                )}
            </div>

            <div className="relative z-10 flex flex-col justify-between p-10 pt-8 flex-grow">
              <div>
                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-[#ad577b] to-[#853856] text-white shadow-lg shadow-[#ad577b]/50 mb-6 -mt-16 relative z-20 group-hover:scale-110 transition-transform duration-300 border-4 border-slate-950">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">UKG Dimensions & Pro Implementation</h3>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Direct, clean implementation services that prioritize user adoption over just "checking the boxes." We ensure a single source of truth for your workforce data.
                </p>
                <ul className="space-y-4">
                  {[
                    "Full-Suite Deployment (WFM, HRSD, Advanced Scheduling)",
                    "Legacy Data Migration & Integrity Checks",
                    "Custom Integrations & Middleware (SAP/Oracle)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center text-[#ad577b] font-semibold group-hover:translate-x-2 transition-transform cursor-pointer">
                View Deployment Plan <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Card 2: Optimization (Top Right) */}
          <div className="col-span-1 md:col-span-5 group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
             {/* Dynamic Background Image Layer */}
             {images['optimization'] && (
                 <img src={images['optimization']} alt="Optimization" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay animate-in fade-in duration-700" />
             )}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full mix-blend-screen filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-lg shadow-amber-900/50 group-hover:scale-110 transition-transform duration-300 border border-amber-400/20">
                    <Settings2 className="h-6 w-6" />
                  </div>
                  {!images['optimization'] && (
                      <button 
                        onClick={() => handleGenerate('optimization', PROMPTS.optimization)}
                        disabled={generating['optimization']}
                        className="text-amber-400 hover:text-amber-300 p-1"
                        title="Visualize Data Flow"
                      >
                         {generating['optimization'] ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
                      </button>
                  )}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">Optimization & Rescue</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                 For clients who have UKG but need it fixed. We conduct 50-point diagnostics to identify broken workflows and pay rule errors.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <Database className="h-3 w-3 text-amber-500" /> System Health Audits
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <Network className="h-3 w-3 text-amber-500" /> Advanced Analytics & BI
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <Settings2 className="h-3 w-3 text-amber-500" /> Workflow Automation
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Support (Bottom Right) */}
          <div className="col-span-1 md:col-span-5 group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-[#ad577b]/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
             {/* Dynamic Background Image Layer */}
             {images['support'] && (
                 <img src={images['support']} alt="Support" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay animate-in fade-in duration-700" />
             )}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-[#ad577b]/20"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ad577b]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <LifeBuoy className="h-6 w-6" />
                </div>
                {!images['support'] && (
                      <button 
                        onClick={() => handleGenerate('support', PROMPTS.support)}
                        disabled={generating['support']}
                        className="text-slate-500 hover:text-white p-1"
                        title="Visualize Support Shield"
                      >
                         {generating['support'] ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
                      </button>
                  )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 font-heading">Client-Side Support</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Your partner in the foxhole. We handle the heavy lifting of testing and stabilization so your team doesn't burn out.
              </p>
              <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1 h-1 bg-amber-400 rounded-full shadow-[0_0_5px_rgba(251,191,36,0.8)]"></span> "Testing-as-a-Service" (UAT)
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1 h-1 bg-amber-400 rounded-full shadow-[0_0_5px_rgba(251,191,36,0.8)]"></span> Change Management Training
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1 h-1 bg-amber-400 rounded-full shadow-[0_0_5px_rgba(251,191,36,0.8)]"></span> Post-Live Hypercare
                  </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};