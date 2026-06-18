import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, Clock, Database, Smartphone, GitBranch, X, 
  ChevronRight, Activity, TrendingUp, Layers, RefreshCw, 
  Server, CheckCircle2, MessageSquare, BookOpen, ArrowLeft, Share2
} from 'lucide-react';

// --- Editorial Visualizations ---

const CostViz = () => (
  <div className="w-full h-full bg-gradient-to-br from-amber-100/50 to-amber-50 relative overflow-hidden flex items-center justify-center group-hover:from-amber-200/50 transition-colors duration-500">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
    <div className="relative w-32 h-32">
        <div className="absolute inset-0 border-4 border-amber-200 rounded-full"></div>
        <div className="absolute inset-0 border-t-4 border-amber-500 rounded-full transform -rotate-45"></div>
        <div className="absolute bottom-6 left-6 w-4 h-12 bg-amber-300 rounded-t-sm"></div>
        <div className="absolute bottom-6 left-12 w-4 h-16 bg-amber-400 rounded-t-sm"></div>
        <div className="absolute bottom-6 left-18 w-4 h-8 bg-amber-200 rounded-t-sm"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-16 bg-slate-800 rounded-full origin-bottom transform rotate-45 shadow-lg"></div>
    </div>
  </div>
);

const MigrationViz = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#ad577b]/5 to-slate-50 relative overflow-hidden flex items-center justify-center group-hover:from-[#ad577b]/10 transition-colors duration-500">
     <div className="relative w-full max-w-[200px] flex justify-between items-center z-10">
        <div className="w-16 h-16 bg-slate-100 border-2 border-slate-200 rounded-lg transform rotate-12 flex items-center justify-center opacity-70">
            <Database className="w-8 h-8 text-slate-400" />
        </div>
        <div className="flex-1 h-1 bg-[#ad577b]/20 mx-2 relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-[#ad577b] w-1/2 animate-[shimmer_2s_infinite] translate-x-[-100%]"></div>
        </div>
        <div className="w-20 h-20 bg-white border-2 border-[#ad577b]/20 rounded-xl shadow-xl shadow-[#ad577b]/10 flex items-center justify-center transform -rotate-6 relative">
             <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ad577b] rounded-full border-2 border-white animate-pulse"></div>
             <Layers className="w-10 h-10 text-[#ad577b]" />
        </div>
     </div>
  </div>
);

const TechViz = () => (
  <div className="w-full h-full bg-gradient-to-br from-teal-50 to-teal-100/30 relative overflow-hidden flex items-center justify-center group-hover:from-teal-100/50 transition-colors duration-500">
     <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
            <pattern id="grid-insights" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2dd4bf" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-insights)" />
        </svg>
     </div>
     <div className="relative z-10">
        <div className="w-20 h-20 bg-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-600/30 relative">
            <Server className="w-10 h-10 text-white" />
        </div>
     </div>
  </div>
);

const UxViz = () => (
  <div className="w-full h-full bg-gradient-to-br from-pink-50 to-pink-100/30 relative overflow-hidden flex items-center justify-center group-hover:from-pink-100/50 transition-colors duration-500">
     <div className="relative w-24 h-40 bg-white border-4 border-slate-800 rounded-2xl shadow-xl transform rotate-12 z-10 flex flex-col overflow-hidden">
         <div className="h-4 bg-slate-100 border-b border-slate-100"></div>
         <div className="flex-1 p-2 space-y-2">
             <div className="flex items-center gap-2 bg-pink-50 p-1.5 rounded-lg">
                 <div className="w-6 h-6 bg-pink-200 rounded-full flex items-center justify-center">
                     <CheckCircle2 className="w-3 h-3 text-pink-600" />
                 </div>
             </div>
         </div>
     </div>
  </div>
);

// --- Main Component ---

interface Article {
  category: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  accent: string;
  bg: string;
  Viz: React.FC;
  fullContent: React.ReactNode;
}

export const Insights: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      const handleScroll = (e: any) => {
        const target = e.target;
        if (target.id === 'article-content-wrapper') {
          const progress = (target.scrollTop / (target.scrollHeight - target.clientHeight)) * 100;
          setReadingProgress(progress);
        }
      };
      const wrapper = document.getElementById('article-content-wrapper');
      wrapper?.addEventListener('scroll', handleScroll);
      return () => wrapper?.removeEventListener('scroll', handleScroll);
    } else {
      document.body.style.overflow = 'unset';
      setReadingProgress(0);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedArticle]);

  const articles: Article[] = [
    {
      category: "Cost Optimization",
      icon: <Clock className="h-4 w-4" />,
      title: "The Hidden Cost of Overtime: How UKG Dimensions AI Can Predict Labor Leakage",
      desc: "Explore how enabling AI-driven scheduling features in UKG Dimensions can predict overtime risks before they happen, saving mid-market companies an average of 4-7% in labor costs annually.",
      color: "text-amber-600",
      accent: "#d97706",
      bg: "bg-amber-50",
      Viz: CostViz,
      fullContent: (
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-2xl font-light text-slate-500 border-l-4 border-amber-500 pl-8 italic mb-12 leading-relaxed">
            Labor is typically the single largest operating expense for an organization, often accounting for 50-70% of total costs. Even a 1% improvement in efficiency can translate to millions in bottom-line savings.
          </p>
          
          <h2 className="text-3xl font-bold text-slate-900 font-heading tracking-tight mb-6">The Reactive Trap</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            In legacy environments, overtime is usually reactive. A shift manager realizes at 2:00 PM that the 3:00 PM shift is understaffed. They panic-call the most reliable employees—who are often already near their 40-hour limit. This results in premium labor costs that could have been avoided with better visibility.
          </p>
          
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 mb-10">
            <h4 className="text-amber-700 font-bold uppercase tracking-wider text-sm mb-4">Key Insight</h4>
            <p className="text-slate-800 font-medium">Overtime isn't just a payroll problem; it's a scheduling visibility problem. Without real-time data, your managers are making expensive decisions based on guesswork.</p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 font-heading tracking-tight mb-6">Enter Predictive Scheduling</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            UKG Dimensions introduces a paradigm shift by utilizing machine learning algorithms to forecast labor demand against employee availability and compliance rules. By identifying potential "labor leakage" days in advance, organizations can proactively adjust staffing levels, redistribute shifts, or authorize targeted overtime only where absolutely necessary.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Our experience shows that clients who successfully implement these features see a return on investment within the first two quarters of operation. The shift from reactive firefighting to proactive optimization is the hallmark of a mature WFM strategy.
          </p>
        </div>
      )
    },
    {
      category: "Migration Strategy",
      icon: <Database className="h-4 w-4" />,
      title: "Migrating from Workforce Central (WFC) to Dimensions: A 2025 Roadmap",
      desc: "With WFC end-of-life approaching, we break down the technical 'gotchas' of migration—specifically how to handle historical data access and re-mapping complex pay rules.",
      color: "text-[#ad577b]",
      accent: "#ad577b",
      bg: "bg-[#ad577b]/10",
      Viz: MigrationViz,
      fullContent: (
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-2xl font-light text-slate-500 border-l-4 border-[#ad577b] pl-8 italic mb-12 leading-relaxed">
            The transition from on-premise Workforce Central (WFC) to the cloud-native UKG Dimensions is a re-platforming, not just an upgrade. It requires a fundamental shift in how you think about data and configuration.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 font-heading tracking-tight mb-6">The Historical Data Dilemma</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Treating it like a version update is the primary cause of project failure. One of the first questions clients ask is, "Can we migrate 7 years of punch history?" The technical answer is yes, but the strategic answer is no. Moving messy data from a legacy database into a modern multi-tenant cloud environment creates technical debt on day one.
          </p>

          <div className="bg-[#ad577b]/5 border border-[#ad577b]/10 rounded-3xl p-8 mb-10">
             <h4 className="text-[#ad577b] font-bold uppercase tracking-wider text-sm mb-4">Implementation Strategy</h4>
             <ul className="space-y-3">
                <li className="flex gap-3 text-slate-800 font-medium"><CheckCircle2 className="w-5 h-5 text-[#ad577b] shrink-0" /> Audit existing pay rules before mapping.</li>
                <li className="flex gap-3 text-slate-800 font-medium"><CheckCircle2 className="w-5 h-5 text-[#ad577b] shrink-0" /> Rationalize pay codes to simplify the environment.</li>
                <li className="flex gap-3 text-slate-800 font-medium"><CheckCircle2 className="w-5 h-5 text-[#ad577b] shrink-0" /> Archival strategy for data older than 2 years.</li>
             </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 font-heading tracking-tight mb-6">The Clean Cut Approach</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            We recommend a "Clean Cut" migration: Migrate configuration and current employee status, but keep historical punch data in a searchable archival database. This ensures your new Dimensions environment remains fast, compliant, and easy to maintain while satisfying legal requirements for historical record keeping.
          </p>
        </div>
      )
    },
    {
        category: "Technical Deep Dive",
        icon: <GitBranch className="h-4 w-4" />,
        title: "Why Your Integrations Are Breaking: The Case for Middleware in WFM",
        desc: "A technical deep dive into why point-to-point integrations fail and how a modern API-led middleware strategy ensures your UKG data flows seamlessly.",
        color: "text-teal-600",
        accent: "#0d9488",
        bg: "bg-teal-50",
        Viz: TechViz,
        fullContent: (
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-2xl font-light text-slate-500 border-l-4 border-teal-500 pl-8 italic mb-12 leading-relaxed">
              In the modern enterprise ecosystem, your WFM system cannot exist on an island. It must talk to Payroll, ERP, POS, and Access Control.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 font-heading tracking-tight mb-6">The Death of Point-to-Point</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Historically, agencies built custom flat-file interfaces that ran on Windows Task Scheduler. These are fragile. If a field name changes in the HRIS, the script fails silently, resulting in incorrect paychecks on Friday. Point-to-point integrations create a "spaghetti" architecture that is impossible to monitor at scale.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 font-heading tracking-tight mb-6">Middleware as a Strategy</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Moving to a middleware layer (like Dell Boomi or MuleSoft) decouples your systems. UKG "publishes" an event (like a punch), and the middleware "subscribes" to it, transforming and delivering it to whoever needs it. 
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              This provides real-time error logging, easier maintenance, and the ability to swap out payroll providers without rebuilding every interface from scratch.
            </p>
          </div>
        )
      },
      {
        category: "User Experience",
        icon: <Smartphone className="h-4 w-4" />,
        title: "Frontline Friction: Improving Employee Retention with Mobile Self-Service",
        desc: "How configuring the UKG mobile app for 'shift swaps' and 'instant pay' access can directly impact retention rates in retail and manufacturing.",
        color: "text-pink-600",
        accent: "#db2777",
        bg: "bg-pink-50",
        Viz: UxViz,
        fullContent: (
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-2xl font-light text-slate-500 border-l-4 border-pink-500 pl-8 italic mb-12 leading-relaxed">
              The Gen Z workforce views flexibility not as a perk, but as a requirement for employment.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 font-heading tracking-tight mb-6">Autonomy is Retention</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Studies show that frontline employees who feel they have control over their schedule are 30% less likely to leave within the first six months. The UKG mobile app is the tool of empowerment. When configured correctly, it allows an employee to trade a shift on Saturday for a shift on Sunday directly from their couch, without having to call a manager who is probably also busy.
            </p>
            <h2 className="text-3xl font-bold text-slate-900 font-heading tracking-tight mb-6">The Feedback Loop</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Mobile self-service also provides immediate feedback on pay. Being able to see "Projected Pay" for the week encourages extra shifts and reduces the anxiety associated with payroll cycles. 
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              By reducing the "friction" between an employee and their work-life balance, organizations see significant drops in turnover and absenteeism.
            </p>
          </div>
        )
      }
  ];

  return (
    <>
      <section id="insights" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ad577b]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-bold text-xs uppercase tracking-wider mb-6 shadow-sm">
                <BookOpen className="w-3 h-3" /> Industry Knowledge
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-heading leading-tight">
              The Future of Work, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-[#ad577b]">Decoded.</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto font-sans">
              Strategic insights on WFM trends, technical architectures, and the evolving landscape of Human Capital Management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article, index) => (
              <div 
                key={index} 
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#ad577b]/30 shadow-md hover:shadow-2xl hover:shadow-[#ad577b]/10 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative h-48 bg-slate-50 flex items-center justify-center overflow-hidden border-b border-slate-100">
                   <article.Viz />
                   <div className={`absolute top-4 left-4 px-3 py-1 rounded-full ${article.bg} ${article.color} text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm border border-white/50 backdrop-blur-md`}>
                      {article.icon}
                      {article.category}
                    </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-[#ad577b] transition-colors leading-tight font-heading">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 font-sans">
                    {article.desc}
                  </p>
                  <div className="flex items-center text-sm font-bold text-[#ad577b] pt-4 border-t border-slate-50 mt-auto">
                    Read Insight <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMMERSIVE READING MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[9999] flex flex-col bg-slate-950 animate-in fade-in duration-500">
          
          {/* Top Bar - Floating Logic */}
          <div className="sticky top-0 w-full p-4 md:p-6 flex justify-between items-center z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-white font-bold transition-all group border border-white/10"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Close Insight</span>
              </button>
              
              <div className="hidden lg:flex items-center gap-3 border-l border-white/10 pl-6 h-10">
                 <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{selectedArticle.category}</span>
                 <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                 <span className="text-slate-500 text-xs font-medium">5 min read</span>
              </div>
            </div>

            {/* Reading Progress Indicator */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-[#ad577b] transition-all duration-150" style={{ width: `${readingProgress}%` }}></div>

            <div className="flex items-center gap-4">
               <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-slate-400 hover:text-white transition-all border border-white/10">
                 <Share2 className="w-5 h-5" />
               </button>
               <button 
                onClick={() => setSelectedArticle(null)}
                className="p-3 bg-[#ad577b] hover:bg-[#853856] rounded-xl text-white transition-all shadow-lg shadow-[#ad577b]/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main Reading Area - Centered Column */}
          <div 
            id="article-content-wrapper" 
            className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50"
          >
            {/* Featured Image Header */}
            <div className="relative w-full h-[30vh] md:h-[40vh] bg-slate-900 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 opacity-50">
                 <selectedArticle.Viz />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
               <div className="relative z-10 text-center container px-4">
                  <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full ${selectedArticle.bg} ${selectedArticle.color} text-xs font-bold uppercase tracking-widest mb-6 border border-white/20 shadow-2xl`}>
                    {selectedArticle.icon}
                    {selectedArticle.category}
                  </div>
                  <h1 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto font-heading drop-shadow-lg">
                    {selectedArticle.title}
                  </h1>
               </div>
            </div>

            {/* Article Body */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 bg-white shadow-2xl relative z-10 -mt-20 rounded-t-[3rem] md:rounded-t-[4rem]">
                
                {/* Author & Meta */}
                <div className="flex flex-wrap items-center justify-between gap-6 mb-16 pb-12 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-500 to-[#ad577b] flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-[#ad577b]/20">MV</div>
                    <div>
                      <div className="text-lg font-bold text-slate-900 font-heading">MindView Strategy Team</div>
                      <div className="text-sm text-slate-500 font-medium">Enterprise Solutions Architecture</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-400 text-sm font-semibold italic">
                     <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Updated Oct 2025</span>
                  </div>
                </div>

                {/* Main Content Injection */}
                <div className="article-content text-slate-800">
                  {selectedArticle.fullContent}
                </div>

                {/* Footer / CTA Inside Article */}
                <div className="mt-24 p-12 bg-slate-950 rounded-[2.5rem] relative overflow-hidden group shadow-2xl shadow-black/30">
                  {/* Decor */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ad577b]/20 rounded-full blur-[80px]"></div>
                  
                  <div className="relative z-10">
                    <h4 className="text-3xl font-bold text-white mb-6 font-heading">Ready to optimize?</h4>
                    <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-xl">
                      These insights aren't just theory—they are based on hundreds of hours of implementation data. Let's discuss how they apply to your specific environment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => {
                          setSelectedArticle(null);
                          const contact = document.getElementById('contact');
                          if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-[#ad577b] text-white font-bold rounded-2xl hover:scale-105 transition-all text-lg shadow-xl shadow-[#ad577b]/20 active:scale-95"
                      >
                        Book Strategy Session <ChevronRight className="h-5 w-5 ml-2" />
                      </button>
                      <button 
                        onClick={() => setSelectedArticle(null)}
                        className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-lg border border-white/10"
                      >
                        Back to Insights
                      </button>
                    </div>
                  </div>
                </div>

                {/* Navigation Finish */}
                <div className="mt-20 pt-10 border-t border-slate-100 flex justify-center">
                   <button 
                    onClick={() => {
                        setSelectedArticle(null);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-[#ad577b] text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                   >
                     End of Article <div className="w-1 h-1 rounded-full bg-slate-300"></div> Back to Top
                   </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};