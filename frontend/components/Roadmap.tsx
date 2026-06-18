import React, { useEffect, useState, useRef } from 'react';
import { 
  AlertCircle, Search, Zap, Trophy, 
  TrendingUp, Clock, Target, Shield, DollarSign, 
  Activity, PieChart, Lightbulb, CheckCircle, 
  BarChart3, Minimize2, CheckCircle2, ArrowDown,
  Users, ShieldCheck, Trash2, Scale, FileText, Minimize
} from 'lucide-react';
import { CaseStudyMetric } from '../types';

// --- Types ---

export interface RoadmapStepData {
  title: string;
  subtitle: string;
  content: string;
  tags?: string[];
}

interface RoadmapProps {
  problem: RoadmapStepData;
  action: RoadmapStepData;
  solution: RoadmapStepData;
  result: RoadmapStepData;
  metrics?: CaseStudyMetric[];
}

// --- Icons & Helpers ---

const getMetricIcon = (iconName: string) => {
  const icons: Record<string, any> = {
    TrendingDown: ArrowDown, 
    TrendingUp, Clock, Zap, CheckCircle2, 
    Shield, ShieldCheck, AlertCircle, Search, DollarSign, Target, 
    Activity, PieChart, BarChart3, Minimize2, Minimize,
    Users, Trash2, Scale, FileText
  };
  const Icon = icons[iconName] || Target;
  return Icon;
};

// --- Sub-Components ---

const MetricCounter: React.FC<{ value: string; delay?: number }> = ({ value, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  // Parse numeric part and suffix (e.g., "70%" -> 70, "%")
  const numericMatch = value.match(/[\d,.]+/);
  const numberPart = numericMatch ? parseFloat(numericMatch[0].replace(/,/g, '')) : 0;
  const prefix = value.match(/^[^\d]+/)?.[0] || "";
  const suffix = value.match(/[^\d]+$/)?.[0] || "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentNumber = numberPart * ease;
      
      // Format logic: maintain decimals if original had them, otherwise integer
      const formattedNumber = Number.isInteger(numberPart) 
        ? Math.floor(currentNumber).toLocaleString() 
        : currentNumber.toFixed(1).toLocaleString();

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value); // Ensure final value is exact string
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, value, numberPart, prefix, suffix, delay]);

  return <span ref={ref}>{displayValue}</span>;
};

interface StationProps {
  id: string;
  data: RoadmapStepData;
  icon: React.ElementType;
  index: number;
  config: {
    bgGradient: string;
    borderTop: string;
    iconGradient: string;
    titleColor: string;
    subtitleColor: string;
    shadow: string;
  };
  metrics?: CaseStudyMetric[];
  isLast?: boolean;
}

const RoadmapStation: React.FC<StationProps> = ({ id, data, icon: Icon, index, config, metrics, isLast }) => {
  return (
    <div 
      className={`
        relative flex flex-col items-center w-full max-w-4xl mx-auto mb-4
        opacity-0 animate-roadmap-enter
      `}
      style={{ animationDelay: `${index * 400}ms`, animationFillMode: 'forwards' }}
    >
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-1/2 top-[90px] bottom-[-40px] w-1 -translate-x-1/2 z-0">
          <div 
            className="w-full h-full bg-gradient-to-b from-amber-300 via-purple-300 to-amber-300 opacity-30"
          ></div>
          <div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-amber-500 via-purple-500 to-amber-500 animate-draw-connector"
            style={{ animationDelay: `${index * 400 + 400}ms` }}
          ></div>
        </div>
      )}

      {/* Main Card */}
      <div 
        className={`
          relative z-10 w-full rounded-3xl overflow-hidden
          ${config.bgGradient} border-t-4 ${config.borderTop}
          shadow-xl ${config.shadow}
          group transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1
        `}
      >
        {/* Glass Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-white/20 transition-colors"></div>

        <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start relative z-10">
          
          {/* Icon Section (Timeline Marker) */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
             <div className={`
                w-20 h-20 md:w-24 md:h-24 rounded-full 
                ${config.iconGradient}
                flex items-center justify-center
                shadow-lg shadow-black/10
                ring-4 ring-white/50 backdrop-blur-sm
                animate-breathe-subtle
             `}>
                <Icon className="w-10 h-10 text-white" />
             </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center md:text-left">
            <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${config.titleColor} font-heading`}>
              {data.title}
            </h3>
            <div className={`inline-block px-3 py-1 rounded-full bg-white/50 border border-white/60 text-sm font-bold uppercase tracking-wide mb-6 ${config.subtitleColor}`}>
              {data.subtitle}
            </div>

            <div className="mb-6">
              <p className="text-lg leading-[1.8] text-slate-700 font-sans tracking-wide">
                {data.content}
              </p>
            </div>

            {/* Tags if available (Solution) */}
            {data.tags && (
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {data.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 bg-white/60 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600">
                     {tag}
                   </span>
                ))}
              </div>
            )}

            {/* Metrics (Impact Only) */}
            {metrics && metrics.length > 0 && (
              <div className="mt-8 pt-8 border-t border-amber-200/50">
                 <h4 className="text-xs font-bold text-amber-800/60 uppercase tracking-widest mb-6 font-heading">Key Outcomes Achieved</h4>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {metrics.slice(0, 3).map((metric, i) => {
                       const MetricIcon = getMetricIcon(metric.icon);
                       return (
                         <div 
                           key={i} 
                           className="bg-white/60 backdrop-blur-sm border border-amber-100 rounded-xl p-4 flex flex-col items-center text-center hover:bg-white hover:shadow-lg hover:shadow-amber-100 transition-all duration-300"
                         >
                            <div className={`mb-2 p-2 rounded-full ${metric.impact === 'cost' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                               <MetricIcon className="w-5 h-5" />
                            </div>
                            <div className={`text-2xl md:text-3xl font-extrabold mb-1 font-heading ${metric.impact === 'cost' ? 'text-green-700' : 'text-amber-700'}`}>
                               <MetricCounter value={metric.value} delay={i * 200 + 2000} />
                            </div>
                            <div className="text-xs font-bold text-slate-500 uppercase">{metric.label}</div>
                         </div>
                       );
                    })}
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Roadmap: React.FC<RoadmapProps> = ({ problem, action, solution, result, metrics }) => {
  
  const stations = [
    {
      id: 'challenge',
      data: { ...problem, title: "The Challenge" },
      icon: AlertCircle,
      config: {
        bgGradient: 'bg-gradient-to-br from-amber-50 via-white to-amber-100',
        borderTop: 'border-amber-500',
        iconGradient: 'bg-gradient-to-br from-amber-500 to-amber-600',
        titleColor: 'text-amber-800',
        subtitleColor: 'text-amber-700',
        shadow: 'shadow-amber-200/40'
      }
    },
    {
      id: 'approach',
      data: { ...action, title: "Strategic Approach" },
      icon: Lightbulb,
      config: {
        bgGradient: 'bg-gradient-to-br from-purple-50 via-white to-purple-100',
        borderTop: 'border-purple-500',
        iconGradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
        titleColor: 'text-purple-800',
        subtitleColor: 'text-purple-700',
        shadow: 'shadow-purple-200/40'
      }
    },
    {
      id: 'solution',
      data: { ...solution, title: "Technical Solution" },
      icon: CheckCircle,
      config: {
        bgGradient: 'bg-gradient-to-br from-teal-50 via-white to-teal-100',
        borderTop: 'border-teal-500',
        iconGradient: 'bg-gradient-to-br from-teal-500 to-teal-600',
        titleColor: 'text-teal-800',
        subtitleColor: 'text-teal-700',
        shadow: 'shadow-teal-200/40'
      }
    },
    {
      id: 'impact',
      data: { ...result, title: "Business Impact" },
      icon: Trophy,
      config: {
        bgGradient: 'bg-gradient-to-br from-indigo-50 via-white to-indigo-100',
        borderTop: 'border-indigo-600',
        iconGradient: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
        titleColor: 'text-indigo-800',
        subtitleColor: 'text-indigo-700',
        shadow: 'shadow-indigo-500/20'
      }
    }
  ];

  return (
    <>
      <style>{`
        @keyframes breathe-subtle {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        .animate-breathe-subtle {
          animation: breathe-subtle 4s ease-in-out infinite;
        }
        @keyframes draw-connector {
          from { height: 0%; }
          to { height: 100%; }
        }
        .animate-draw-connector {
          animation: draw-connector 1s ease-out forwards;
        }
        @keyframes roadmap-enter {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-roadmap-enter {
          animation: roadmap-enter 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      <div className="w-full py-8">
        {stations.map((station, idx) => (
          <RoadmapStation
            key={station.id}
            index={idx}
            {...station}
            metrics={station.id === 'impact' ? metrics : undefined}
            isLast={idx === stations.length - 1}
          />
        ))}
      </div>
    </>
  );
};