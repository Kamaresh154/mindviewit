import React from 'react';
import { ShieldCheck, Zap, Users, Globe, Briefcase, Calendar, Calculator, TrendingUp } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const differentiators = [
    {
      title: "Boutique Agility",
      desc: "We don't have B-teams. You get senior architects from Day 1, not fresh grads learning on your dime.",
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      metric: "2x Faster Decisions"
    },
    {
      title: "India-Specific Mastery",
      desc: "We understand the chaos of Indian payroll—gratuity, PF, dual-employment, and complex shift logic.",
      icon: <Globe className="w-6 h-6 text-teal-500" />,
      metric: "100% Compliance"
    },
    {
      title: "Technical Depth",
      desc: "We are engineers, not just configurators. We build the integrations that others say are 'impossible'.",
      icon: <Briefcase className="w-6 h-6 text-indigo-500" />,
      metric: "Zero Data Loss"
    }
  ];

  const indiaChallenges = [
    {
      title: "Multi-State Compliance",
      desc: "Handling interstate variations in overtime limits and break rules automatically.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Complex Shift Patterns",
      desc: "Managing rotational shifts in manufacturing with auto-calculated shift premiums.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Festive Calendar",
      desc: "Dynamic holiday calendars that adjust for regional variances across India locations.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      title: "Gratuity & PF",
      desc: "Statutory logic baked into the time rules to prevent payroll reconciliation nightmares.",
      icon: <Calculator className="w-5 h-5" />
    },
    {
      title: "High Attrition Mgmt",
      desc: "Automated offboarding workflows for sectors with high turnover (BPO/Retail).",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        {/* Positioning Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Why Leading Enterprises Choose <span className="text-indigo-600">Boutique</span>
          </h2>
          <p className="text-lg text-slate-600">
            Big consulting firms sell you "scale." We sell you <span className="font-semibold text-slate-900">speed, precision, and local expertise.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {differentiators.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  {item.icon}
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-slate-900 text-white rounded-full">
                  {item.metric}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* India Expertise Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-xl">
                <span className="text-teal-400 font-bold tracking-wider text-sm uppercase mb-2 block">Local Expertise</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">WFM Complexity: The India Angle</h3>
                <p className="text-slate-400">
                  Global templates fail in India. We pre-configure your UKG environment to handle the unique statutory and cultural nuances of the Indian workforce.
                </p>
              </div>
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white rounded-xl transition-all font-semibold">
                Download India Compliance Guide
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {indiaChallenges.map((card, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors group">
                  <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform origin-left">
                    {card.icon}
                  </div>
                  <h4 className="text-white font-bold mb-2 text-sm">{card.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
