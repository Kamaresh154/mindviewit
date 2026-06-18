import React, { useState } from 'react';
import { ArrowRight, Check, RefreshCw, BarChart, ChevronRight } from 'lucide-react';
import { Button } from './Button';

interface Question {
  id: number;
  text: string;
  options: { label: string; score: number }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "How is employee time currently captured?",
    options: [
      { label: "Manual timesheets / Excel", score: 1 },
      { label: "Biometric clocks (Not integrated)", score: 2 },
      { label: "Cloud-based clocks / Mobile app", score: 3 }
    ]
  },
  {
    id: 2,
    text: "How often do you encounter payroll errors?",
    options: [
      { label: "Every cycle (Major corrections)", score: 1 },
      { label: "Occasionally (Minor adjustments)", score: 2 },
      { label: "Rarely / Never", score: 3 }
    ]
  },
  {
    id: 3,
    text: "Is your WFM system integrated with ERP/Payroll?",
    options: [
      { label: "No, manual file uploads", score: 1 },
      { label: "Semi-automated (Script based)", score: 2 },
      { label: "Real-time API Integration", score: 3 }
    ]
  },
  {
    id: 4,
    text: "Can you see real-time overtime costs?",
    options: [
      { label: "No, only after payroll runs", score: 1 },
      { label: "Yes, but data is delayed 24h", score: 2 },
      { label: "Yes, instant visibility", score: 3 }
    ]
  },
  {
    id: 5,
    text: "Do you have automated scheduling rules?",
    options: [
      { label: "No, manual scheduling", score: 1 },
      { label: "Basic patterns", score: 2 },
      { label: "AI-driven demand forecasting", score: 3 }
    ]
  }
];

export const DiagnosticTool: React.FC = () => {
  const [step, setStep] = useState(0); // 0 = start, 1-5 = questions, 6 = result
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleStart = () => setStep(1);

  const handleAnswer = (points: number) => {
    const newScore = score + points;
    setScore(newScore);
    setAnswers([...answers, points]);
    
    if (step < QUESTIONS.length) {
      setStep(step + 1);
    } else {
      setStep(6); // Finish
    }
  };

  const reset = () => {
    setStep(0);
    setScore(0);
    setAnswers([]);
  };

  const getResult = () => {
    const maxScore = QUESTIONS.length * 3;
    const percentage = (score / maxScore) * 100;

    if (percentage < 50) return {
      tier: "Foundational",
      color: "text-amber-500",
      desc: "Your WFM processes are high-risk. You likely face significant labor leakage and compliance vulnerabilities. Immediate modernization recommended."
    };
    if (percentage < 80) return {
      tier: "Operational",
      color: "text-purple-400",
      desc: "You have the basics, but disconnected systems are slowing you down. Optimization can unlock 10-15% efficiency gains."
    };
    return {
      tier: "Strategic",
      color: "text-emerald-400",
      desc: "You are a leader! The next step is AI-driven forecasting and advanced analytics to turn WFM into a competitive advantage."
    };
  };

  return (
    <section id="diagnostic" className="py-24 bg-slate-950 text-white relative overflow-hidden transition-colors duration-700">
      {/* Background Decor - Amber/Purple Theme */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/40">
          
          {step === 0 && (
            <div className="text-center animate-in fade-in slide-in-from-bottom-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-purple-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-8 shadow-lg shadow-amber-500/5">
                Free Assessment
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-white">WFM Maturity Score™</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
                Is your workforce management setup stuck in 2015? Take our 60-second diagnostic to benchmark your maturity against 500+ Indian enterprises.
              </p>
              <Button variant="premium" size="lg" onClick={handleStart} className="w-full md:w-auto">
                Start Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}

          {step > 0 && step <= QUESTIONS.length && (
            <div className="animate-in fade-in slide-in-from-right duration-300">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Question {step} / {QUESTIONS.length}</span>
                <div className="w-1/3 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${(step / QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-8 text-white font-heading leading-snug">{QUESTIONS[step-1].text}</h3>

              <div className="space-y-4">
                {QUESTIONS[step-1].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all group flex justify-between items-center text-slate-300 hover:text-white"
                  >
                    <span className="font-medium text-base">{option.label}</span>
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-purple-400 transition-colors transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="text-center animate-in zoom-in-95 duration-500">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-900 rounded-full mb-8 relative border border-white/10 shadow-xl">
                 <BarChart className="w-10 h-10 text-white" />
                 <div className="absolute inset-0 border-4 border-amber-500/50 rounded-full animate-[spin_4s_linear_infinite] border-t-transparent"></div>
                 <div className="absolute inset-0 border-4 border-purple-500/50 rounded-full animate-[spin_3s_linear_infinite_reverse] border-b-transparent"></div>
              </div>
              
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Your Maturity Level</h3>
              <div className={`text-4xl md:text-5xl font-extrabold mb-8 font-heading ${getResult().color} drop-shadow-sm`}>
                {getResult().tier}
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                <p className="text-slate-300 leading-relaxed">
                    {getResult().desc}
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button variant="premium" onClick={() => window.document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                   Get Full PDF Report
                </Button>
                <button 
                  onClick={reset}
                  className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  <RefreshCw className="w-4 h-4" /> Retake
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};