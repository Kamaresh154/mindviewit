import React, { useState, useEffect } from 'react';
import { 
  Layers, Hexagon, MoreHorizontal, 
  Sparkles, Briefcase, BookOpen, 
  ArrowRight, Trophy
} from 'lucide-react';
import { WhyMindview } from './WhyMindview';
import { Technical } from './Technical';
import { Services } from './Services';
import { SMEAcademy } from './SMEAcademy';
import { DiagnosticTool } from './DiagnosticTool';
import { CaseStudies } from './CaseStudies';
import { Insights } from './Insights';
import { Hero } from './Hero';
import { TrustSection } from './TrustSection';
import { UkgServices } from './UkgServices';

export type ParentTabId = 'ukg' | 'sap' | 'other';
export type SubTabId = 'why-mindview' | 'services' | 'case-studies' | 'insights';

interface ServiceTabsProps {
  activeParent: ParentTabId;
  setActiveParent: (id: ParentTabId) => void;
  activeSubTab: SubTabId;
  setActiveSubTab: (id: SubTabId) => void;
  onNavigate: (tab: string) => void;
}

export const ServiceTabs: React.FC<ServiceTabsProps> = ({
  activeParent,
  setActiveParent,
  activeSubTab,
  setActiveSubTab,
  onNavigate
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle Parent Tab Change with Auto-Reset
  const handleParentChange = (id: ParentTabId) => {
    if (id === activeParent) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveParent(id);
      setActiveSubTab('why-mindview'); // Auto-reset to first sub-tab
      setIsAnimating(false);
    }, 200);
  };

  // Handle Sub Tab Change
  const handleSubTabChange = (id: SubTabId) => {
    if (id === activeSubTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSubTab(id);
      setIsAnimating(false);
    }, 200);
  };

  const parentTabs = [
    { id: 'ukg' as const, label: 'Our UKG Services', icon: Layers },
    { id: 'sap' as const, label: 'Our SAP Services', icon: Hexagon },
    { id: 'other' as const, label: 'Other Services', icon: MoreHorizontal },
  ];

  const subTabs = [
    { id: 'why-mindview' as const, label: 'Why MindView', icon: Sparkles },
    { id: 'services' as const, label: 'Services', icon: Briefcase },
    { id: 'case-studies' as const, label: 'Success Stories', icon: Trophy },
    { id: 'insights' as const, label: 'Insights', icon: BookOpen },
  ];

  return (
    <div id="tabs-container" className="w-full bg-slate-50 min-h-[800px]">
      
      {/* PARENT TABS - Sticky Top */}
      <div className="bg-white/90 border-b border-slate-200 sticky top-0 z-50 shadow-sm shadow-[#ad577b]/5 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar gap-1 md:gap-4 pt-2">
            {parentTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeParent === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => handleParentChange(tab.id)}
                  className={`
                    relative flex items-center gap-2 px-5 py-4 font-bold text-sm md:text-base whitespace-nowrap transition-all duration-300 outline-none
                    ${isActive 
                      ? 'text-[#ad577b]' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-t-lg'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-amber-600' : 'text-slate-400'}`} />
                  {tab.label}
                  
                  {/* Active Indicator Line */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-[#ad577b] rounded-t-full shadow-[0_0_10px_rgba(173,87,123,0.3)]"></div>
                  )}
                  {/* Active Background Gradient */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ad577b]/5 to-transparent pointer-events-none"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SUB TABS - Sticky Below Parent */}
      <div className="bg-slate-50/90 border-b border-slate-200 sticky top-[64px] z-40 backdrop-blur-md transition-all">
        <div className="container mx-auto px-4">
           <div className="flex justify-center md:justify-start gap-2 md:gap-8 py-3 overflow-x-auto no-scrollbar">
              {subTabs.map((tab) => {
                const isActive = activeSubTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleSubTabChange(tab.id)}
                    className={`
                      px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 outline-none
                      ${isActive
                        ? 'bg-[#ad577b] text-white shadow-lg shadow-[#ad577b]/30 ring-1 ring-[#ad577b]/30'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                      }
                    `}
                  >
                    {isActive && <tab.icon className="w-3.5 h-3.5 text-amber-200" />}
                    {tab.label}
                  </button>
                );
              })}
           </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className={`transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        
        {/* UKG CONTENT */}
        {activeParent === 'ukg' && (
          <>
            {activeSubTab === 'why-mindview' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Hero onNavigate={onNavigate} />
                <TrustSection />
                <WhyMindview />
              </div>
            )}

            {activeSubTab === 'services' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <UkgServices />
              </div>
            )}

            {activeSubTab === 'case-studies' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CaseStudies />
              </div>
            )}

            {activeSubTab === 'insights' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Insights />
              </div>
            )}
          </>
        )}

        {/* SAP CONTENT (Placeholder) */}
        {activeParent === 'sap' && (
          <div className="py-32 container mx-auto px-4 text-center">
             <div className="w-24 h-24 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hexagon className="w-10 h-10 text-slate-400" />
             </div>
             <h3 className="text-3xl font-bold text-slate-900 mb-4 font-heading">SAP SuccessFactors Practice</h3>
             <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
               Our dedicated SAP HCM and SuccessFactors practice is launching in Q3 2025. 
               We are currently building a team of certified architects to bring the same "MindView Velocity" 
               to the SAP ecosystem.
             </p>
             <button className="px-6 py-3 bg-slate-100 text-slate-500 font-bold rounded-xl cursor-not-allowed border border-slate-200">
                Coming Soon
             </button>
          </div>
        )}

        {/* OTHER CONTENT (Placeholder) */}
        {activeParent === 'other' && (
           <div className="py-32 container mx-auto px-4 text-center">
             <div className="w-24 h-24 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <MoreHorizontal className="w-10 h-10 text-slate-400" />
             </div>
             <h3 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Expanded Service Portfolio</h3>
             <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
               From Workday integrations to custom middleware development, explore our broader technical capabilities.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
                {['Workday WFM Integration', 'Dell Boomi Middleware', 'Custom BI Reporting'].map((item) => (
                  <div key={item} className="p-6 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 hover:border-[#ad577b]/30 hover:shadow-lg hover:shadow-[#ad577b]/10 transition-all">
                     <h4 className="font-bold text-slate-900 font-heading">{item}</h4>
                     <p className="text-sm text-slate-600 mt-2">Enterprise-grade solutions available on request.</p>
                  </div>
                ))}
             </div>
          </div>
        )}

      </div>
    </div>
  );
};