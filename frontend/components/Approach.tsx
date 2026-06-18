import React, { useState } from 'react';
import { Search, Code2, Database, Users, Rocket, Check, ArrowUp, Activity, Lock, RefreshCw } from 'lucide-react';

// --- Visualizations ---

const BlueprintViz = () => (
  <div className="w-full h-full bg-slate-900 relative overflow-hidden flex items-center justify-center border-b border-indigo-500/20">
    {/* Grid Background */}
    <div className="absolute inset-0 opacity-20" style={{ 
      backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', 
      backgroundSize: '24px 24px' 
    }}></div>
    
    {/* Blueprint Artifact */}
    <div className="relative z-10 w-72 h-56 border-2 border-indigo-500/30 bg-indigo-950/50 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 shadow-[0_0_50px_rgba(99,102,241,0.15)] transform rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
      <div className="flex justify-between items-center border-b border-indigo-500/30 pb-2">
         <div className="w-1/3 h-2 bg-indigo-400/40 rounded-full"></div>
         <div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center">
            <Search className="w-3 h-3 text-indigo-300" />
         </div>
      </div>
      
      <div className="flex gap-3 h-full">
         <div className="w-2/3 space-y-2">
             <div className="w-full h-2 bg-slate-700/50 rounded-full"></div>
             <div className="w-3/4 h-2 bg-slate-700/50 rounded-full"></div>
             <div className="w-full h-20 mt-2 border border-dashed border-indigo-400/20 rounded bg-indigo-500/5"></div>
         </div>
         <div className="w-1/3 space-y-2">
            <div className="w-full h-8 bg-teal-500/10 border border-teal-500/20 rounded"></div>
            <div className="w-full h-8 bg-purple-500/10 border border-purple-500/20 rounded"></div>
            <div className="w-full h-8 bg-indigo-500/10 border border-indigo-500/20 rounded"></div>
         </div>
      </div>
      
      {/* Floating badges */}
      <div className="absolute -right-4 top-10 px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full shadow-lg border border-teal-400">
        FDD Approved
      </div>
    </div>
  </div>
);

const AgileViz = () => (
  <div className="w-full h-full bg-slate-900 relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950"></div>
    
    {/* Orbit Container */}
    <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-2 border-indigo-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-t-2 border-t-teal-400 rounded-full animate-spin duration-[3000ms]"></div>
        
        {/* Middle Ring */}
        <div className="absolute inset-8 border-2 border-purple-500/20 rounded-full"></div>
        <div className="absolute inset-8 border-b-2 border-b-purple-400 rounded-full animate-spin direction-reverse duration-[4000ms]" style={{ animationDirection: 'reverse' }}></div>

        {/* Center Node */}
        <div className="relative z-10 bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-2xl flex flex-col items-center">
           <Code2 className="w-10 h-10 text-white mb-2" />
           <div className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-[10px] font-mono rounded">SPRINT 2</div>
        </div>
        
        {/* Orbiting Elements */}
        <div className="absolute top-0 left-1/2 -ml-3 -mt-3 w-6 h-6 bg-teal-500 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.5)] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
    </div>
  </div>
);

const DataViz = () => (
  <div className="w-full h-full bg-slate-900 relative overflow-hidden flex items-center justify-center">
     <div className="flex justify-between items-center w-full max-w-md px-8 relative z-10">
        
        {/* Source System */}
        <div className="flex flex-col items-center gap-3 relative group">
            <div className="w-20 h-20 bg-slate-800 rounded-xl border border-slate-600 flex items-center justify-center shadow-lg group-hover:border-slate-400 transition-colors">
                <Database className="w-8 h-8 text-slate-400" />
            </div>
            <span className="text-xs text-slate-500 font-mono tracking-widest">LEGACY</span>
        </div>

        {/* Data Stream Connection */}
        <div className="flex-1 mx-4 relative h-16 flex items-center">
             {/* Pipes */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400 to-transparent w-1/2 opacity-75 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
            </div>
            
            {/* Moving Packets */}
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50 -mt-1"></div>
            <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50 -mt-1"></div>
            
            {/* Status */}
            <div className="absolute -top-2 left-0 right-0 text-center">
                <div className="inline-flex items-center gap-1 bg-indigo-900/50 px-2 py-1 rounded text-[10px] text-indigo-300 border border-indigo-500/20">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    Syncing
                </div>
            </div>
        </div>

        {/* Target System */}
        <div className="flex flex-col items-center gap-3 relative">
            <div className="w-20 h-20 bg-gradient-to-b from-indigo-600 to-indigo-800 rounded-xl border border-indigo-400 flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                <div className="relative">
                    <Database className="w-8 h-8 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 blur-md rounded-full animate-pulse"></div>
                </div>
            </div>
            <span className="text-xs text-indigo-400 font-mono tracking-widest font-bold">UKG PRO</span>
        </div>
     </div>
     
     {/* Background Particles */}
     <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
  </div>
);

const UATViz = () => (
  <div className="w-full h-full bg-slate-900 relative overflow-hidden flex items-center justify-center">
     {/* Mock UI Card */}
     <div className="w-72 bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-[-3deg] border border-slate-200 transition-transform hover:rotate-0 duration-500">
        <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center justify-between px-3">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">UAT_Environment_v2.0</div>
        </div>
        
        <div className="p-5 space-y-4">
             {/* Test Case 1 */}
            <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded border border-green-200 bg-green-50 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                </div>
                <div className="space-y-1 w-full">
                    <div className="h-2 w-3/4 bg-slate-200 rounded"></div>
                    <div className="h-1.5 w-1/2 bg-slate-100 rounded"></div>
                </div>
            </div>
             {/* Test Case 2 */}
            <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded border border-green-200 bg-green-50 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                </div>
                <div className="space-y-1 w-full">
                    <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
                    <div className="h-1.5 w-1/3 bg-slate-100 rounded"></div>
                </div>
            </div>
            {/* Test Case 3 */}
             <div className="flex items-center gap-3 opacity-50">
                <div className="w-5 h-5 rounded border border-slate-200 bg-slate-50 flex items-center justify-center shrink-0">
                     <div className="w-3 h-3 border-2 border-slate-300 rounded-full border-t-slate-500 animate-spin"></div>
                </div>
                <div className="space-y-1 w-full">
                    <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                </div>
            </div>
            
            <div className="pt-2">
                 <button className="w-full py-2 bg-indigo-600 text-white text-xs font-bold rounded shadow-lg shadow-indigo-200 hover:bg-indigo-700">
                    Approve Pay Rules
                 </button>
            </div>
        </div>
     </div>
     
     <div className="absolute top-1/2 -right-4 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-xl">
        <Lock className="w-6 h-6 text-teal-400" />
     </div>
  </div>
);

const GoLiveViz = () => (
  <div className="w-full h-full bg-slate-900 relative overflow-hidden flex items-center justify-center">
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/50 to-transparent"></div>
     
     <div className="relative z-10 flex flex-col items-center">
        {/* Rocket Icon Container */}
        <div className="w-28 h-28 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-[0_10px_60px_rgba(79,70,229,0.6)] mb-6 relative group animate-bounce duration-[3000ms]">
            <Rocket className="w-14 h-14 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            <div className="absolute -bottom-1 left-4 right-4 h-1 bg-white/50 blur-md rounded-full"></div>
        </div>
        
        {/* Text Stats */}
        <div className="text-center space-y-1">
            <h4 className="text-white font-bold text-2xl tracking-tight">LIVE</h4>
            <div className="flex items-center justify-center gap-1.5 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full">
                <Activity className="w-3.5 h-3.5 text-teal-400" />
                <span className="text-xs font-mono text-teal-300 font-bold">100% ADOPTION</span>
            </div>
        </div>
     </div>
     
     {/* Confetti / Stars */}
     <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-10 left-10 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
         <div className="absolute top-1/4 right-12 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-75"></div>
         <div className="absolute bottom-1/3 left-12 w-1 h-1 bg-teal-400 rounded-full animate-pulse delay-150"></div>
         <div className="absolute top-12 left-1/2 w-1 h-1 bg-white rounded-full opacity-50"></div>
     </div>
  </div>
);

// --- Main Component ---

export const Approach: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
        title: "1. Discovery & Blueprinting",
        desc: "We don't guess; we map. We dive deep into complex pay rules, union agreements, and shift differentials to create a functional design blueprint.",
        icon: <Search className="h-5 w-5" />,
        Viz: BlueprintViz
    },
    {
        title: "2. Agile Configuration",
        desc: "Building in 2-week sprints. You see your system evolve in a 'Playground' environment, allowing for real-time feedback loops.",
        icon: <Code2 className="h-5 w-5" />,
        Viz: AgileViz
    },
    {
        title: "3. Data & Integration Engineering",
        desc: "Our technical edge. We run parallel data validation scripts to ensure UKG matches your source system down to the penny.",
        icon: <Database className="h-5 w-5" />,
        Viz: DataViz
    },
    {
        title: "4. User-Centric UAT & Training",
        desc: "We simulate real-world chaos—missed punches, shift swaps—to ensuring the system holds up under pressure before launch.",
        icon: <Users className="h-5 w-5" />,
        Viz: UATViz
    },
    {
        title: "5. Go-Live & Stability",
        desc: "We stay for the 'stabilization period,' resolving end-user tickets until your internal team is 100% confident.",
        icon: <Rocket className="h-5 w-5" />,
        Viz: GoLiveViz
    }
  ];

  const ActiveViz = steps[activeStep].Viz;

  return (
    <section id="approach" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Side: Steps List */}
          <div className="order-2 lg:order-1">
             <div className="mb-8 lg:hidden">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
                  Agile 3.0
                </div>
                <h2 className="text-3xl font-bold text-slate-900">The "Velocity" Methodology</h2>
             </div>

            <div className="relative z-10 space-y-2">
                {steps.map((step, index) => (
                    <div 
                        key={index} 
                        className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                            activeStep === index 
                            ? 'bg-white border-indigo-200 shadow-xl shadow-indigo-100/50 scale-[1.02]' 
                            : 'bg-white/50 border-transparent hover:bg-white hover:border-slate-200'
                        }`}
                        onClick={() => setActiveStep(index)}
                    >
                        <div className="flex gap-4">
                            <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                activeStep === index ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'
                            }`}>
                                {step.icon}
                            </div>
                            <div>
                                <h4 className={`font-bold text-lg mb-2 transition-colors ${activeStep === index ? 'text-indigo-900' : 'text-slate-700'}`}>
                                    {step.title}
                                </h4>
                                <p className={`text-sm leading-relaxed transition-colors ${activeStep === index ? 'text-slate-600' : 'text-slate-500'}`}>
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Right Side: Sticky Visual & Stats */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="hidden lg:block mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
                Agile 3.0
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">The "Velocity" Methodology</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We don't just install software; we engineer outcomes. Our 5-step process minimizes disruption and maximizes speed-to-value.
                </p>
            </div>

            {/* Fixed Visualization Area */}
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group transition-all duration-500">
                 {/* Render Active Visualization */}
                 <div className="absolute inset-0 animate-in fade-in zoom-in-95 duration-500 key={activeStep}">
                    <ActiveViz />
                 </div>
                 
                 <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                    <p className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-1 shadow-black drop-shadow-md">Step {activeStep + 1}</p>
                    <h3 className="text-2xl font-bold text-white shadow-black drop-shadow-md">{steps[activeStep].title.split('. ')[1]}</h3>
                 </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span className="block text-3xl font-bold text-indigo-600 mb-1">40%</span>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Faster Go-Live</span>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span className="block text-3xl font-bold text-teal-500 mb-1">Zero</span>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Data "Ghosts"</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
