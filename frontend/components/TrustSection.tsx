import React from 'react';
import { Layers, Database, Smartphone } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const systems = [
    { name: 'UKG Pro™', icon: <Database className="w-8 h-8" />, desc: 'HCM & Payroll' },
    { name: 'UKG Dimensions™', icon: <Layers className="w-8 h-8" />, desc: 'WFM & Scheduling' },
    { name: 'UKG Ready™', icon: <Smartphone className="w-8 h-8" />, desc: 'HR & Talent' },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#ad577b]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-12">
          Systems We Master
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {systems.map((sys, idx) => (
            <div 
              key={sys.name} 
              className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#ad577b]/40 hover:shadow-xl hover:shadow-[#ad577b]/10 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-[#ad577b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-amber-50 to-[#ad577b]/10 text-[#ad577b] group-hover:scale-110 group-hover:from-amber-100 group-hover:to-[#ad577b]/20 transition-all duration-300 shadow-sm border border-slate-100">
                  {sys.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-[#ad577b] transition-all font-heading">
                  {sys.name}
                </h3>
                <p className="text-sm text-slate-500 font-medium">
                  {sys.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
