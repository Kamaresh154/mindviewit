import React, { useState, useMemo } from 'react';
import { 
  Trophy, Search, Filter
} from 'lucide-react';
import { ALL_CASE_STUDIES } from '../data/caseStudies';
import { CaseStudyDetail } from './CaseStudyDetail';
import { CaseStudyCard } from './CaseStudyCard';

export const CaseStudies: React.FC = () => {
  const [selectedStudyId, setSelectedStudyId] = useState<string | null>(null);
  const [filterModule, setFilterModule] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique modules from data for the filter list
  const modules = ['All', ...Array.from(new Set(ALL_CASE_STUDIES.map(s => s.moduleName))).sort()];

  const filteredStudies = useMemo(() => {
    return ALL_CASE_STUDIES.filter(s => {
      const matchesModule = filterModule === 'All' || s.moduleName === filterModule;
      const matchesSearch = s.companyName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            s.caseStudyTitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesModule && matchesSearch;
    });
  }, [filterModule, searchQuery]);

  const selectedStudy = useMemo(() => 
    ALL_CASE_STUDIES.find(s => s.id === selectedStudyId), 
  [selectedStudyId]);

  const handleNavigate = (id: string) => {
    setSelectedStudyId(id);
  };

  return (
    <section id="case-studies" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor - Updated to Maroon/Amber */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ad577b]/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-100/60 rounded-full blur-[100px] translate-y-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Landing Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-bold text-xs uppercase tracking-wider mb-6 shadow-sm">
            <Trophy className="w-3 h-3" /> Real Results
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Real Challenges. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-[#ad577b]">Engineered Outcomes.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-8 font-medium max-w-2xl mx-auto">
            Browse our library of enterprise success stories. See exactly how we transform broken processes into optimized value engines.
          </p>

          {/* Social Proof Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-bold text-slate-500">
             <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100"><div className="w-2 h-2 rounded-full bg-green-500"></div> 20+ Implementations</div>
             <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100"><div className="w-2 h-2 rounded-full bg-[#ad577b]"></div> 50% Avg Improvement</div>
             <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100"><div className="w-2 h-2 rounded-full bg-amber-500"></div> 100% Client Retention</div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-white/80 backdrop-blur-xl p-2 rounded-2xl border border-white/20 shadow-xl shadow-slate-200/40">
           
           <div className="flex flex-wrap gap-2 justify-center lg:justify-start w-full lg:w-auto p-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-400 text-xs font-bold uppercase tracking-wide">
                  <Filter className="w-3 h-3" /> Filter:
              </div>
              {modules.slice(0, 6).map((mod) => (
                <button
                  key={mod}
                  onClick={() => setFilterModule(mod)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300
                    ${filterModule === mod 
                      ? 'bg-[#ad577b] text-white shadow-lg shadow-[#ad577b]/20 scale-105' 
                      : 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-[#ad577b]'}
                  `}
                >
                  {mod}
                </button>
              ))}
           </div>

           <div className="relative w-full lg:w-72 p-2">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by company or title..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#ad577b] focus:bg-white transition-all"
              />
           </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 px-2 text-sm text-slate-400 font-medium flex justify-between items-center">
            <span>Showing {filteredStudies.length} success stories</span>
            {filterModule !== 'All' && (
               <button onClick={() => setFilterModule('All')} className="text-[#ad577b] hover:underline">Reset Filters</button>
            )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredStudies.map((study, index) => (
             <CaseStudyCard 
               key={study.id} 
               study={study} 
               index={index}
               onClick={() => handleNavigate(study.id)} 
             />
           ))}
        </div>

        {/* Empty State */}
        {filteredStudies.length === 0 && (
          <div className="text-center py-24 text-slate-400 bg-white rounded-3xl border border-slate-100 shadow-sm">
             <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 opacity-30" />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-2">No results found</h3>
             <p className="mb-6">Try adjusting your filters or search query.</p>
             <button 
                onClick={() => { setFilterModule('All'); setSearchQuery(''); }}
                className="px-6 py-3 bg-[#ad577b] text-white rounded-xl font-bold shadow-lg shadow-[#ad577b]/30 hover:bg-[#853856] transition-all"
             >
                Clear All Filters
             </button>
          </div>
        )}

      </div>

      {/* Detail Page Overlay */}
      {selectedStudy && (
        <CaseStudyDetail 
          study={selectedStudy} 
          onClose={() => setSelectedStudyId(null)}
          onNavigate={handleNavigate}
        />
      )}
    </section>
  );
};