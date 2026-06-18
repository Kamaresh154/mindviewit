import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, CheckCircle2, ArrowRight, Building2, MapPin, Tag, Activity, Globe, Calendar, Briefcase
} from 'lucide-react';
import { CaseStudy } from '../types';
import { Roadmap } from './Roadmap';

interface CaseStudyDetailProps {
  study: CaseStudy;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="absolute top-6 right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 z-50 backdrop-blur-md border border-white/20 text-white"
    aria-label="Close dialog"
  >
    <X className="w-6 h-6" />
  </button>
);

const QuickFactsBadge = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 border border-white/30 rounded-full text-white text-xs md:text-sm font-semibold backdrop-blur-sm">
    <Icon className="w-3.5 h-3.5" />
    {text}
  </span>
);

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ study, onClose, onNavigate }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => { 
      setMounted(false);
      document.body.style.overflow = 'unset'; 
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const content = (
    <div 
        className="fixed inset-0 z-[9999] bg-slate-900 font-sans" 
        role="dialog" 
        aria-modal="true"
    >
      
      {/* Full Screen Container */}
      <div 
        className="relative w-full h-full flex flex-col bg-white animate-in slide-in-from-bottom-10 fade-in duration-300 overflow-hidden"
      >
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar relative">
            
            {/* --- HEADER SECTION --- */}
            <div className="relative bg-gradient-to-br from-amber-500 via-purple-600 to-indigo-700 pt-16 pb-12 px-8 md:px-12 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-400/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

                <CloseButton onClick={onClose} />

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start max-w-7xl mx-auto">
                    {/* Company Icon */}
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl shrink-0 animate-in zoom-in duration-500">
                        <Building2 className="w-10 h-10 md:w-12 md:h-12 text-white opacity-90" />
                    </div>

                    <div className="flex-1 animate-in slide-in-from-bottom-4 duration-500 delay-100">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3 font-heading leading-tight">
                            {study.caseStudyTitle}
                        </h2>
                        <div className="flex flex-col mb-6">
                            <span className="text-white text-lg md:text-xl font-bold font-heading">{study.companyName}</span>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="px-2 py-0.5 bg-amber-400 text-slate-900 text-[10px] font-bold uppercase rounded">{study.moduleName}</span>
                                <span className="text-white/60 text-sm font-medium">Enterprise Success Story</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                             <QuickFactsBadge icon={Globe} text={study.country} />
                             <QuickFactsBadge icon={Activity} text={study.projectType} />
                             <QuickFactsBadge icon={Briefcase} text={study.industry} />
                             <QuickFactsBadge icon={Tag} text={study.difficulty + " Complexity"} />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- ROADMAP SECTION --- */}
            <div className="bg-white relative">
                 <div className="px-6 py-12 md:px-12 md:py-16 max-w-7xl mx-auto">
                     <Roadmap 
                        problem={{
                            title: "The Challenge",
                            subtitle: study.roadmap.problem.short,
                            content: study.deepDive.challengeSection
                        }}
                        action={{
                            title: "Strategic Approach",
                            subtitle: study.roadmap.action.short,
                            content: study.deepDive.approachSection
                        }}
                        solution={{
                            title: "Technical Solution",
                            subtitle: study.roadmap.solution.short,
                            content: study.deepDive.technicalSection,
                            tags: study.roadmap.solution.full.includes("API") ? ["API Integration", "Middleware"] : ["Configuration", "Rules Engine"]
                        }}
                        result={{
                            title: "Business Impact",
                            subtitle: study.roadmap.result.short,
                            content: study.deepDive.impactSection
                        }}
                        metrics={study.metrics}
                     />
                 </div>
            </div>

            {/* --- CTA SECTION --- */}
            <div className="bg-gradient-to-r from-amber-50 via-white to-purple-50 border-t border-amber-100 p-10 md:p-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 font-heading">
                        Facing a similar challenge?
                    </h3>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        Our architects have solved this specific problem for dozens of enterprises. Let's discuss how we can adapt this blueprint for your environment.
                    </p>
                    <button 
                        onClick={() => {
                            onClose();
                            const el = document.getElementById('contact');
                            if(el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-purple-600 hover:from-amber-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-1 transition-all duration-300 group"
                    >
                        Schedule a Strategy Session
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );

  return mounted ? createPortal(content, document.body) : null;
};