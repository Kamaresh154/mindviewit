import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Handshake, GraduationCap, Scale, Megaphone,
  Layers, Landmark, Gauge, ArrowLeftRight, Cable, Map,
  TestTube, LineChart, Gavel, Stethoscope,
  X, Sparkles, TrendingUp, ShieldCheck, Zap, Star,
  Users, Activity
} from 'lucide-react';

// --- Types & Data ---

interface Usp {
  icon: React.ReactElement<any>;
  title: string;
  description: string;
  salesLine: string;
  fullContent: string;
  benefitIcon?: React.ReactElement<any>; // Added for the benefit badge
}

interface UspCategory {
  name: string;
  color: 'indigo' | 'teal' | 'amber';
  usps: Usp[];
}

// --- COLOR PALETTE STRATEGY (Premium Dual-Tone Amber-Maroon Gradients - LIGHT MODE) ---
const colorStyles = {
  indigo: { // Partnership Model
    buttonActive: 'bg-gradient-to-r from-amber-500 to-[#ad577b] text-white shadow-lg shadow-[#ad577b]/30 ring-2 ring-[#ad577b] ring-offset-2 ring-offset-slate-50 border-transparent',
    
    // Light Card
    cardBg: 'bg-white',
    cardBorder: 'border-slate-200 hover:border-[#ad577b]/40',
    cardShadow: 'shadow-md shadow-slate-200/40 hover:shadow-2xl hover:shadow-[#ad577b]/15',
    
    // Text
    titleText: 'text-slate-900',
    bodyText: 'text-slate-600',
    benefitText: 'text-amber-700',
    
    // Icon
    iconBg: 'bg-gradient-to-br from-amber-500 to-[#ad577b]',
    iconShadow: 'shadow-lg shadow-[#ad577b]/30',
    
    // Benefit Badge
    benefitBorder: 'border-amber-200',
    benefitBg: 'bg-amber-50',
    
    blobColor: 'bg-[#ad577b]/10'
  },
  teal: { // Delivery Engine
    buttonActive: 'bg-gradient-to-r from-[#ad577b] to-amber-500 text-white shadow-lg shadow-amber-500/30 ring-2 ring-amber-500 ring-offset-2 ring-offset-slate-50 border-transparent',
    
    cardBg: 'bg-white',
    cardBorder: 'border-slate-200 hover:border-amber-500/40',
    cardShadow: 'shadow-md shadow-slate-200/40 hover:shadow-2xl hover:shadow-amber-500/15',
    
    titleText: 'text-slate-900',
    bodyText: 'text-slate-600',
    benefitText: 'text-teal-700',
    
    iconBg: 'bg-gradient-to-br from-[#ad577b] to-amber-500',
    iconShadow: 'shadow-lg shadow-amber-500/30',
    
    benefitBorder: 'border-teal-200',
    benefitBg: 'bg-teal-50',
    
    blobColor: 'bg-amber-200/30'
  },
  amber: { // Business Outcomes
    buttonActive: 'bg-gradient-to-r from-amber-600 to-[#ad577b] text-white shadow-lg shadow-amber-600/30 ring-2 ring-[#ad577b] ring-offset-2 ring-offset-slate-50 border-transparent',
    
    cardBg: 'bg-white',
    cardBorder: 'border-slate-200 hover:border-[#ad577b]/40',
    cardShadow: 'shadow-md shadow-slate-200/40 hover:shadow-2xl hover:shadow-[#ad577b]/15',
    
    titleText: 'text-slate-900',
    bodyText: 'text-slate-600',
    benefitText: 'text-[#ad577b]',
    
    iconBg: 'bg-gradient-to-br from-amber-500 to-[#ad577b]',
    iconShadow: 'shadow-lg shadow-[#ad577b]/30',
    
    benefitBorder: 'border-[#ad577b]/20',
    benefitBg: 'bg-[#ad577b]/5',
    
    blobColor: 'bg-amber-200/30'
  }
};


const uspCategories: UspCategory[] = [
  {
    name: 'Partnership Model',
    color: 'indigo',
    usps: [
      {
        icon: <Handshake />,
        title: 'Boutique Attention',
        description: 'A dedicated, concierge implementation with focused attention from senior consultants.',
        salesLine: '1 Senior Consultant = Total Ownership',
        benefitIcon: <Star className="w-4 h-4" />,
        fullContent: 'We provide a highly personalized and dedicated implementation experience, ensuring every client receives focused attention from senior consultants. Rather than rotating teams or assigning junior resources, our approach guarantees continuity, depth of understanding, and faster decision-making. Clients work directly with experts who learn their business intimately and proactively guide the project from discovery through stabilization. This boutique delivery model leads to better communication, fewer escalations, and smoother execution. Our goal is to create a partnership where the client always knows exactly who is responsible and accountable for outcomes.'
      },
      {
        icon: <GraduationCap />,
        title: 'SME-Led Delivery',
        description: 'Implementations are driven by senior subject-matter experts to ensure strategic alignment.',
        salesLine: 'Senior Minds, Zero Rework',
        benefitIcon: <Zap className="w-4 h-4" />,
        fullContent: 'Our implementations are led by senior subject-matter experts who drive solution design, ensuring strategic alignment and reducing rework. Junior consultants handle standardized tasks but all critical configuration decisions remain with experienced specialists. This model avoids the common pitfalls of inexperienced delivery teams and ensures high-quality outcomes. Clients benefit from faster issue resolution, more accurate configurations, and better long-term sustainability. With lower team turnover and stable ownership, we deliver continuity throughout the project lifecycle.'
      },
      {
        icon: <Scale />,
        title: 'Flexible Commercials',
        description: 'Outcome-oriented pricing designed to align with your goals, not just hours billed.',
        salesLine: 'Paid for Outcomes, Not Hours',
        benefitIcon: <TrendingUp className="w-4 h-4" />,
        fullContent: 'We offer pricing structures designed to align with client goals, not just hours billed. This includes fixed-fee pilots, milestone-based payments, and even outcome-linked pricing tied to specific KPIs or payroll accuracy targets. By moving beyond traditional time-and-materials models, we share delivery risk and demonstrate confidence in our ability to produce results. Flexible contracts also make budgeting easier and remove barriers for organizations with incremental funding. This commercial agility helps clients start faster and invest with greater confidence.'
      },
      {
        icon: <Megaphone />,
        title: 'Change Management',
        description: 'Our program includes communication planning and adoption scorecards to ensure user buy-in.',
        salesLine: 'We Deliver Adoption, Not Just Code',
        benefitIcon: <Users className="w-4 h-4" />,
        fullContent: 'We recognize that WFM success depends on user adoption, not just technical configuration. Our change management program includes communication planning, manager readiness sessions, role-based training, and adoption scorecards. This ensures employees understand not only how to use the system but why the change matters. We provide tools and playbooks that help managers support their teams during the transition. As adoption increases, clients see fewer support tickets and faster realization of business value.'
      },
    ],
  },
  {
    name: 'Delivery Engine',
    color: 'teal',
    usps: [
      {
        icon: <Layers />,
        title: 'Deep Module Mastery',
        description: 'Niche expertise in complex UKG modules like Activities, Absence, and Scheduling.',
        salesLine: 'Specialists in High-Complexity Modules',
        benefitIcon: <ShieldCheck className="w-4 h-4" />,
        fullContent: 'Our team includes certified UKG consultants who specialize in advanced and high-impact WFM modules such as Activities, Absence, Advanced Scheduling, and Forecasting. This niche mastery allows us to solve complex challenges that generalist firms often struggle with. Clients benefit from proven experience, domain expertise, and pre-built patterns for complicated rule configurations. By investing heavily in module-specific training and certification, we ensure our consultants remain current with UKG product updates and best practices. This specialization shortens delivery cycles and significantly reduces configuration rework.'
      },
      {
        icon: <Landmark />,
        title: 'India-Specific Mastery',
        description: "Deep expertise in navigating India's complex statutory and cultural nuances for 100% compliance.",
        salesLine: 'Global Templates Fail. Ours Work.',
        benefitIcon: <Map className="w-4 h-4" />,
        fullContent: `Global WFM templates consistently fail when applied to the Indian market. We have built our practice on mastering the unique statutory and cultural nuances that define the Indian workforce.\n\nOur pre-configured accelerators for UKG are designed to handle:\n\n- **Multi-State Compliance:** Automatically manage interstate variations in labor laws, overtime limits, and break rules without manual oversight.\n\n- **Complex Shift Patterns:** Natively handle complex rotational shifts common in manufacturing and BPO sectors, with auto-calculated shift premiums and allowances.\n\n- **Statutory Logic (PF/Gratuity):** Bake statutory logic directly into time and pay rules to prevent the reconciliation nightmares that plague multi-state payroll.\n\n- **Dynamic Holiday Calendars:** Manage festive calendars that adjust for regional variances across all your India locations, ensuring accuracy and fairness.\n\n- **High Attrition Workflows:** Implement automated offboarding and final settlement workflows tailored for sectors with high turnover like BPO and retail.`
      },
      {
        icon: <Gauge />,
        title: 'Pre-Built Accelerators',
        description: 'Leverage our library of proven templates to significantly reduce project timelines.',
        salesLine: 'Start at 80% Completion',
        benefitIcon: <Zap className="w-4 h-4" />,
        fullContent: 'We leverage a library of proven accelerators—including configuration templates, analytics dashboards, test scripts, and migration Templates—to speed up delivery. These assets are built from lessons learned across multiple UKG WFM implementations and help reduce project timelines significantly. By standardizing repeatable tasks, we improve accuracy and ensure high-quality results from the beginning. Clients benefit from predictable outcomes and reduced implementation effort. This accelerator-driven approach ultimately lowers project costs and enhances ROI.'
      },
      {
        icon: <ArrowLeftRight />,
        title: 'End-to-End Migration',
        description: 'Specialized expertise in complex data migrations including historical timecards.',
        salesLine: 'Zero Data Loss Guarantee',
        benefitIcon: <Cable className="w-4 h-4" />,
        fullContent: 'We specialize in complex data migrations, including historical timecards, employee profiles, pay rule logic, and payroll-sensitive data. Our structured approach covers mapping, cleansing, reconciliation, and multiple rounds of parallel payroll testing. This reduces the risk of errors that could impact compliance or employee trust. We use proven templates and automation tools to ensure accuracy and completeness. Clients gain peace of mind knowing their critical workforce data transitions safely into UKG Pro WFM.'
      },
      {
        icon: <Cable />,
        title: 'Integration-First',
        description: 'We design UKG solutions with seamless data flow across your entire tech stack.',
        salesLine: 'No Data Silos Allowed',
        benefitIcon: <Layers className="w-4 h-4" />,
        fullContent: 'We design UKG solutions with integration in mind from day one, ensuring smooth data flow across HRIS, payroll, ERP, and scheduling platforms. Our expertise includes API-based connections, flat-file exchanges, and middleware solutions. This reduces manual processes, eliminates data discrepancies, and improves overall governance. By creating a unified workforce data ecosystem, clients unlock better reporting and streamlined operations. Strong integration planning also minimizes future technical debt and maintenance overhead.'
      },
       {
        icon: <Map />,
        title: 'Transparent Methods',
        description: 'A structured process with clear deliverables and checkpoints providing full visibility.',
        salesLine: 'No Smoke, Just Deliverables',
        benefitIcon: <Map className="w-4 h-4" />,
        fullContent: 'Our proven methodology follows a structured, repeatable process—Discovery → Configure → Validate → Migrate → Train → Go-Live → Optimize. Each phase includes clear deliverables, acceptance criteria, and stakeholder checkpoints. This reduces ambiguity and ensures every decision is documented and understood. Clients gain full visibility into timelines, risks, and expectations at every stage. This predictable framework minimizes surprises and promotes strong governance throughout the project lifecycle.'
      },
    ],
  },
  {
    name: 'Business Outcomes',
    color: 'amber',
    usps: [
       {
        icon: <TestTube />,
        title: 'Fit-to-Value Pilot',
        description: 'A focused 2-4 week pilot to demonstrate measurable value and build internal confidence.',
        salesLine: 'Measurable Results in 30 Days',
        benefitIcon: <Zap className="w-4 h-4" />,
        fullContent: 'We offer a short, focused pilot—typically 2 to 4 weeks—to demonstrate measurable value before a full rollout. This approach allows clients to validate assumptions early, reduce uncertainty, and build internal confidence with quick wins. The pilot showcases core functionality aligned to your highest-value use cases, making it easier to secure stakeholder buy-in. By minimizing upfront investment, we lower risk while accelerating the decision process. Clients gain clear visibility into potential ROI within the first month of engagement.'
      },
      {
        icon: <LineChart />,
        title: 'Value Packs',
        description: 'Pre-built dashboards highlighting critical metrics like overtime trends and labor costs.',
        salesLine: 'Decision-Ready Data Day 1',
        benefitIcon: <LineChart className="w-4 h-4" />,
        fullContent: 'We deliver pre-built analytics dashboards that highlight critical metrics such as overtime trends, labor costs, attendance patterns, and accrual liabilities. These dashboards are designed for executives, operational leaders, and payroll teams to make informed decisions quickly. By providing insights from day one, clients achieve faster ROI and greater visibility into workforce performance. We customize KPIs to align with business goals, ensuring relevance and actionability. This analytics-first approach transforms WFM from a transactional tool into a strategic decision engine.'
      },
      {
        icon: <Gavel />,
        title: 'Audit-Ready',
        description: 'Configurations follow strict compliance frameworks incorporating labor laws and audit trails.',
        salesLine: 'Documented & Defensible',
        benefitIcon: <ShieldCheck className="w-4 h-4" />,
        fullContent: 'Our configurations follow strict compliance frameworks, incorporating region-specific labor laws, union agreements, attestation requirements, and break/meal rules. We ensure all processes include audit trails, exception logs, and documented rule interpretations. This reduces the risk of legal exposure and improves preparedness for external audits. Clients benefit from clearly documented compliance logic, making both HR and legal teams more confident. Our audit-ready approach ensures long-term sustainability and reduces the burden of manual checks.'
      },
      {
        icon: <Stethoscope />,
        title: 'Post-Go-Live Hypercare',
        description: 'Structured hypercare with defined SLAs, proactive monitoring, and continuous optimization.',
        salesLine: 'Optimization Until Stability',
        benefitIcon: <Activity className="w-4 h-4" />,
        fullContent: 'We provide structured hypercare with defined SLAs, proactive monitoring, and rapid issue resolution to stabilize operations post-go-live. Our team continuously tunes configurations, validates pay rules, and monitors adoption to ensure everything runs smoothly. Clients transition into a managed-services model where we oversee enhancements, troubleshooting, and optimization. This ongoing support ensures long-term success and continuous alignment with evolving business needs. The result is a smooth transition from implementation to steady-state operations with minimal disruption.'
      },
    ],
  },
];


export const WhyMindview: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(uspCategories[0].name);
  const [selectedUsp, setSelectedUsp] = React.useState<Usp | null>(null);
  
  // State for managing tab transition animations
  const [displayedCategory, setDisplayedCategory] = React.useState(() => uspCategories.find(cat => cat.name === activeTab));
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const handleTabChange = (tabName: string) => {
    if (tabName === activeTab || isTransitioning) return;

    setActiveTab(tabName);
    setIsTransitioning(true);
    
    const exitAnimationDuration = 200;
    const exitStaggerDelay = 30;
    const cardCount = displayedCategory?.usps.length || 0;
    const totalExitTime = (cardCount > 0 ? (cardCount - 1) * exitStaggerDelay : 0) + exitAnimationDuration + 50; 

    setTimeout(() => {
      requestAnimationFrame(() => {
        setDisplayedCategory(uspCategories.find(cat => cat.name === tabName));
        setIsTransitioning(false);
      });
    }, totalExitTime);
  };
  
  React.useEffect(() => {
    document.body.style.overflow = selectedUsp ? 'hidden' : 'unset';
    
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedUsp(null);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedUsp]);

  const selectedUspCategory = selectedUsp ? uspCategories.find(cat => cat.usps.some(u => u.title === selectedUsp.title)) : null;

  // Determine current active color for headline
  const activeColorStyle = uspCategories.find(c => c.name === activeTab)?.color || 'indigo';
  const headlineColors = {
    indigo: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-[#ad577b]',
    teal: 'text-transparent bg-clip-text bg-gradient-to-r from-[#ad577b] to-amber-600',
    amber: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-[#ad577b]'
  };

  return (
    <>
      <section id="why-mindview" className="py-24 bg-slate-50 relative overflow-hidden transition-colors duration-700">
        {/* Background Blobs for Atmosphere */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ad577b]/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-100/60 rounded-full blur-[100px] translate-y-1/3 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.15] transition-colors duration-500 font-heading">
              Why Global Enterprises Choose <span className={headlineColors[activeColorStyle]}>MindView</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto font-sans">
              Big consulting firms sell you scale. We deliver velocity, precision, and a partner-invested approach that guarantees outcomes.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-md flex flex-col md:flex-row gap-2 transition-all duration-300">
              {uspCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleTabChange(category.name)}
                  className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 outline-none ${
                    activeTab === category.name
                      ? colorStyles[category.color].buttonActive
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
            {displayedCategory?.usps.map((usp, index) => {
              if (!displayedCategory) return null;
              const categoryStyles = colorStyles[displayedCategory.color];
              
              // Icons are white inside the colored gradient containers
              const iconElement = React.cloneElement(usp.icon, { 
                className: `w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6` 
              });

              return (
                <div
                  key={usp.title} 
                  onClick={() => setSelectedUsp(usp)}
                  // 1. OUTER WRAPPER: Card container
                  className={`
                    group relative rounded-3xl p-8 overflow-hidden
                    hover:-translate-y-2 hover:scale-[1.01] active:scale-[0.99]
                    transition-all duration-300 cursor-pointer
                    flex flex-col
                    ${categoryStyles.cardBg}
                    ${categoryStyles.cardBorder} border-2
                    ${categoryStyles.cardShadow}
                    ${isTransitioning ? 'animate-card-exit' : 'animate-card-enter'}
                  `}
                  style={{ animationDelay: `${index * (isTransitioning ? 30 : 100)}ms` }}
                >
                  
                    {/* Decorative Blob Behind Icon */}
                    <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700 -mr-16 -mt-16 ${categoryStyles.blobColor}`}></div>

                    {/* Top Row: Icon & Title */}
                    <div className="flex flex-col items-center text-center mb-6 relative z-10">
                        <div className={`
                            w-20 h-20 rounded-full mb-6
                            flex items-center justify-center
                            text-white
                            animate-breathe
                            ${categoryStyles.iconBg}
                            ${categoryStyles.iconShadow}
                        `}>
                            {iconElement}
                        </div>
                        
                        <h3 className={`text-2xl md:text-3xl font-bold mb-3 tracking-tight leading-tight font-heading ${categoryStyles.titleText}`}>
                            {usp.title}
                        </h3>
                    </div>

                    {/* Middle: Description */}
                    <div className="mb-8 relative z-10 text-center">
                         <p className={`text-base leading-relaxed font-medium ${categoryStyles.bodyText}`}>
                             {usp.description}
                         </p>
                    </div>
                    
                    {/* Bottom: Highlighted Benefit/Stat Badge */}
                    <div className="mt-auto pt-6 border-t border-slate-100 relative z-10 flex justify-center w-full">
                        <div className={`
                            inline-flex items-center gap-2 px-4 py-2 rounded-full border
                            transition-all duration-300
                            ${categoryStyles.benefitBg}
                            ${categoryStyles.benefitBorder}
                        `}>
                            {usp.benefitIcon && React.cloneElement(usp.benefitIcon, { className: `w-4 h-4 ${categoryStyles.benefitText}` })}
                            <span className={`text-sm font-bold tracking-wide ${categoryStyles.benefitText}`}>
                                {usp.salesLine}
                            </span>
                        </div>
                    </div>
                    
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal - Rendered via Portal */}
      {selectedUsp && selectedUspCategory && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setSelectedUsp(null)}
          ></div>
          <div 
            className="relative w-full max-w-2xl rounded-3xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-hidden bg-white border border-slate-200"
          >
             {/* Light Background Layers */}
             <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-white to-[#ad577b]/5 z-0"></div>
             
             {/* Decorative Blobs */}
             <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-[#ad577b]/15 rounded-full mix-blend-multiply filter blur-[100px] animate-blob z-0 pointer-events-none"></div>
             <div className="absolute bottom-[-20%] left-[-20%] w-[500px] h-[500px] bg-amber-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000 z-0 pointer-events-none"></div>

            <div className="p-8 border-b border-slate-200 flex justify-between items-start gap-4 relative z-10 bg-white/80 backdrop-blur-md">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Modal Icon */}
                <div className={`w-16 h-16 rounded-2xl shrink-0 flex items-center justify-center ${colorStyles[selectedUspCategory.color].iconBg} shadow-lg shadow-[#ad577b]/30`}>
                  {React.cloneElement(selectedUsp.icon, { className: `w-8 h-8 text-white` })}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight font-heading text-slate-900">{selectedUsp.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                       {selectedUsp.benefitIcon && React.cloneElement(selectedUsp.benefitIcon, { className: "w-4 h-4 text-amber-600" })}
                       <p className="text-sm font-bold text-amber-700 tracking-wide uppercase">{selectedUsp.salesLine}</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedUsp(null)}
                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 hover:text-slate-900 transition-colors shrink-0 shadow-sm border border-slate-200"
                title="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Body Content */}
            <div className="p-8 md:p-10 overflow-y-auto relative z-10 custom-scrollbar">
              <p className="leading-loose whitespace-pre-line text-lg font-medium font-sans text-slate-700">
                {selectedUsp.fullContent}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};