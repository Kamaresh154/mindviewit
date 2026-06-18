import React, { useState } from 'react';
import { ArrowRight, Sparkles, PlayCircle, Loader2, Wand2, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { generateImage } from '../services/geminiService';

// Updated prompt for the Premium Amber-Maroon Aesthetic
const HERO_PROMPT = "Abstract 3D glass isometric shapes floating, amber and maroon gradients, premium corporate aesthetic, frosted glass textures, subsurface scattering, glowing edges, soft cream background, 8k render, octane render, high-tech minimalism";

interface HeroProps {
  onNavigate: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateBackground = async () => {
    setIsGenerating(true);
    const image = await generateImage(HERO_PROMPT, '16:9');
    if (image) {
      setBgImage(image);
    }
    setIsGenerating(false);
  };

  const stats = [
    { value: "10+", label: "Enterprise Clients" },
    { value: "20+", label: "Implementations" },
    { value: "100%", label: "Compliance Rate" },
  ];

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-12 pb-16 overflow-hidden bg-slate-50 group">
      
      {/* --- BACKGROUND LAYER (Light Theme) --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-gradient-to-br from-amber-50/40 via-slate-50 to-[#ad577b]/5">
        {/* Animated Blobs - softened for light theme */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ad577b]/15 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[0%] right-[-5%] w-[600px] h-[600px] bg-amber-300/30 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] bg-[#ad577b]/10 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="flex-1 text-center lg:text-left pt-8 lg:pt-0">
            
            {/* Animated Badge */}
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-bold animate-in fade-in slide-in-from-bottom duration-500 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Premium HR & Payroll Solutions</span>
            </div>

            {/* Hero Title */}
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-6 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Transform Your <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-[#ad577b]">
                Workforce Potential
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 font-medium">
              Expert implementation, strategic guidance, and continuous support for UKG Pro, Dimensions, and enterprise workforce management solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button variant="premium" size="lg" onClick={() => onNavigate('contact')}>
                Schedule Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => onNavigate('case-studies')}>
                <PlayCircle className="mr-2 h-5 w-5" />
                View Success Stories
              </Button>
            </div>

            {/* Trust Indicators (Small) */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-semibold text-slate-600 animate-in fade-in duration-700 delay-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-amber-500" />
                <span>Certified UKG Consultants</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#ad577b]" />
                <span>100% Implementation Success</span>
              </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN: VISUAL --- */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
             
             {/* Light Card Container */}
             <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-[#ad577b]/15 bg-white group/card">
                
                {/* Image Layer */}
                {bgImage ? (
                  <img 
                    src={bgImage} 
                    alt="AI Generated Concept" 
                    className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-1000 opacity-95 group-hover/card:scale-105 transition-transform duration-700"
                  />
                ) : (
                  // Fallback Abstract Visual
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-50 via-white to-[#ad577b]/5">
                     <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 via-transparent to-[#ad577b]/15"></div>
                     <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-400 rounded-full blur-[60px] animate-float opacity-50"></div>
                     <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#ad577b] rounded-full blur-[70px] animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
                     
                     {/* Decorative Lines */}
                     <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" />
                        <path d="M20 100 L100 20" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" />
                        <path d="M0 80 L80 0" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" />
                        <defs>
                           <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#F59E0B" />
                              <stop offset="100%" stopColor="#ad577b" />
                           </linearGradient>
                        </defs>
                     </svg>
                  </div>
                )}

                {/* Soft top-to-bottom gradient for stats legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent"></div>

                {/* Floating Sparkle Badge */}
                <div className="absolute top-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl animate-float">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-[#ad577b] flex items-center justify-center">
                       <Sparkles className="w-4 h-4 text-white" />
                    </div>
                </div>

                {/* Generator Button */}
                {!bgImage && (
                  <button 
                    onClick={handleGenerateBackground}
                    disabled={isGenerating}
                    className="absolute top-6 left-6 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-slate-600 hover:text-[#ad577b] border border-slate-200 transition-colors flex items-center gap-2 text-xs z-20 shadow-sm"
                  >
                    {isGenerating ? <Loader2 className="h-3 w-3 animate-spin" /> : <Wand2 className="h-3 w-3" />}
                    <span>Visualize Concept</span>
                  </button>
                )}

                {/* Integrated Stats Row inside the Image Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                   <div className="grid grid-cols-3 gap-4">
                      {stats.map((stat, i) => (
                        <div key={i} className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 text-center shadow-sm">
                           <div className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-[#ad577b] mb-1">{stat.value}</div>
                           <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
