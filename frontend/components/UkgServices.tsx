import React from 'react';
import { 
  Rocket, GraduationCap, ShieldCheck, Wrench, BarChart3, 
  Activity, ArrowLeftRight, PlugZap, ClipboardCheck, LifeBuoy,
  CheckCircle2, ArrowRight, Download
} from 'lucide-react';
import { Button } from './Button';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  bullets: string[];
  bestFor: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, bullets, bestFor, index }) => (
  <div 
    className="group relative flex flex-col h-full bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:border-[#ad577b]/40 shadow-md shadow-slate-200/30 hover:shadow-2xl hover:shadow-[#ad577b]/15 transition-all duration-300 hover:-translate-y-1 motion-reduce:hover:transform-none"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Icon Container */}
    <div className="flex-shrink-0 mb-6">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-[#ad577b] flex items-center justify-center text-white shadow-lg shadow-[#ad577b]/30 group-hover:scale-110 transition-transform duration-300 motion-reduce:group-hover:scale-100">
        <Icon className="w-7 h-7" />
      </div>
    </div>

    {/* Content */}
    <div className="flex-grow">
      <h4 className="font-heading font-bold text-xl md:text-2xl text-slate-900 mb-4 leading-tight group-hover:text-[#ad577b] transition-colors">
        {title}
      </h4>
      <ul className="space-y-3 mb-6">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-600 text-sm md:text-base leading-relaxed">
            <CheckCircle2 className="w-4 h-4 mt-1 text-[#ad577b] shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Best For Footer */}
    <div className="pt-6 border-t border-slate-100">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Best for:</p>
      <p className="text-sm font-semibold text-amber-700 italic leading-snug">
        {bestFor}
      </p>
    </div>
  </div>
);

export const UkgServices: React.FC = () => {
  const expertiseChips = ['Timekeeping', 'Scheduling', 'Accruals', 'Analytics', 'Integrations'];

  const coreServices = [
    {
      icon: Rocket,
      title: "End-to-End Implementation",
      bullets: ["Requirements gathering & solution design", "Data migration and validation", "UAT, Cutover & Post-Live stabilization"],
      bestFor: "New implementations, phased rollouts, WFC→WFM migrations."
    },
    {
      icon: GraduationCap,
      title: "Training & Adoption",
      bullets: ["End-user & Administrator training", "Custom configuration documentation", "Remote or onsite delivery models"],
      bestFor: "Reducing support dependency and increasing user adoption."
    },
    {
      icon: ShieldCheck,
      title: "AMC Support Services",
      bullets: ["Functional issue troubleshooting", "SLA-based resolution management", "Release impact & regression testing"],
      bestFor: "Shared, dedicated, or on-demand support models."
    },
    {
      icon: Wrench,
      title: "Short Work Orders",
      bullets: ["Minor configuration enhancements", "Pay rule or schedule corrections", "One-time data uploads"],
      bestFor: "Urgent production issues or one-time fixes."
    },
    {
      icon: BarChart3,
      title: "Custom Reports & Analytics",
      bullets: ["Custom Analytics dashboards", "Labor cost & productivity analysis", "Actionable workforce insights"],
      bestFor: "Turning workforce data into actionable insights."
    }
  ];

  const valueAddedServices = [
    {
      icon: Activity,
      title: "Optimization & Health Checks",
      bullets: ["Configuration review & best-practice validation", "Gaps and inefficiencies identification", "Performance and compliance review"],
      bestFor: "Configuration review and process improvement."
    },
    {
      icon: ArrowLeftRight,
      title: "Migration Services",
      bullets: ["Assessment & migration planning (WFC → WFM)", "Data validation & reconciliation", "Parallel testing & risk mitigation"],
      bestFor: "Risk-mitigated transition from legacy platforms."
    },
    {
      icon: PlugZap,
      title: "Integration & Interface",
      bullets: ["Person, Pay, and Schedule imports", "Interface build and troubleshooting", "Vendor coordination"],
      bestFor: "Ongoing interface monitoring and third-party coordination."
    },
    {
      icon: ClipboardCheck,
      title: "UAT & Testing Support",
      bullets: ["Test script creation", "Defect tracking & coordination", "Upgrade regression testing"],
      bestFor: "Regression testing during upgrades and defect tracking."
    },
    {
      icon: LifeBuoy,
      title: "Post Go-Live Hypercare",
      bullets: ["Dedicated critical-phase support", "Rapid issue resolution", "Knowledge transfer to internal teams"],
      bestFor: "Dedicated support during the critical go-live phase."
    }
  ];

  return (
    <div className="w-full bg-slate-50 animate-in fade-in duration-700">
      
      {/* Header Strip */}
      <div className="bg-gradient-to-r from-amber-50/40 via-white to-[#ad577b]/5 border-b border-slate-200 py-12 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ad577b]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-200/30 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-slate-900 mb-6 leading-tight tracking-tight">
              Our UKG Pro Workforce Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-[#ad577b]">(WFM)</span> Services
            </h2>
            <p className="font-sans text-slate-600 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
              MindView IT Services specializes exclusively in UKG Pro WFM, helping organizations implement, optimize, and support their WFM ecosystem across the entire module lifecycle.
            </p>
            <div className="flex flex-wrap gap-3">
              {expertiseChips.map((chip) => (
                <span key={chip} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-bold tracking-wide hover:border-[#ad577b]/30 hover:text-[#ad577b] transition-all cursor-default shadow-sm">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        {/* Core Services Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-lg font-bold text-slate-500 uppercase tracking-[0.2em]">Core Offerings</h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreServices.map((service, i) => (
              <ServiceCard key={i} index={i} {...service} />
            ))}
          </div>
        </div>

        {/* Value-Added Services Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-lg font-bold text-slate-500 uppercase tracking-[0.2em]">Value-Added Services</h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {valueAddedServices.map((service, i) => (
              <ServiceCard key={i} index={i + 5} {...service} />
            ))}
          </div>
        </div>

        {/* Why Choose Panel */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden mb-16 shadow-xl shadow-[#ad577b]/10 border border-slate-200">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-[#ad577b]"></div>
          <div className="bg-gradient-to-r from-amber-50/40 via-white to-[#ad577b]/5 p-8 md:p-12">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-8 text-center">
              Why Choose MindView IT Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "UKG Pro WFM focused expertise",
                "Experienced functional consultants",
                "Flexible engagement models",
                "Fast response & high accountability",
                "Cost-effective & scalable solutions"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm md:text-base leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="premium" size="lg" className="w-full sm:w-auto h-14 px-10 text-lg">
            Talk to an Expert
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <button className="w-full sm:w-auto h-14 px-10 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-[#ad577b]/30 hover:text-[#ad577b] rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-sm">
            <Download className="w-5 h-5" />
            Download Services Overview
          </button>
        </div>
      </div>
    </div>
  );
};
