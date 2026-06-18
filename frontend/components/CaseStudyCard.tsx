import React from 'react';
import { 
  ArrowRight, AlertCircle, ChevronRight, 
  Clock, Calendar, PieChart, BarChart3, Smartphone, Zap, Key, Shield, Database, UserCheck, CheckCircle2,
  TrendingDown, TrendingUp, DollarSign, Target, Eye, Minimize2, Minimize, CheckCircle, Trash2,
  Lock, Settings, FileWarning, GitMerge, Shuffle, Map, Clipboard, List, Truck, Briefcase, EyeOff, Link, BarChart, UserX, BookOpen, FileText, Scale, FileMinus, GitBranch, Copy, Layers, MessageSquare, Flag, Bell, Gift, HelpCircle, Activity, ServerCrash, RefreshCw, Cloud, Rocket, Gavel, Search, LayoutDashboard, ClipboardX, Radio, File, MapPin, Minimize as MinimizeIcon
} from 'lucide-react';
import { CaseStudy, CaseStudyMetric } from '../types';

interface CaseStudyCardProps {
  study: CaseStudy;
  onClick: () => void;
  index: number;
}

// --- 1. Icon Mapping ---
const getIcon = (iconName: string, className: string = "w-6 h-6") => {
  const icons: Record<string, any> = {
    Clock, Calendar, PieChart, BarChart3, Smartphone, Zap, Key, Shield, Database, UserCheck, CheckCircle2,
    TrendingDown, TrendingUp, DollarSign, Target, Eye, Minimize2, CheckCircle, Trash2,
    Lock, Settings, FileWarning, GitMerge, Shuffle, Map, Clipboard, List, Truck, Briefcase, EyeOff, Link, BarChart, UserX, BookOpen, FileText, Scale, FileMinus, GitBranch, Copy, Layers, MessageSquare, Flag, Bell, Gift, HelpCircle, Activity, ServerCrash, RefreshCw, Cloud, Rocket, Gavel, Search, LayoutDashboard, ClipboardX, Radio, File, MapPin,
    Minimize: MinimizeIcon, 
    AlertCircle // Default
  };
  const Icon = icons[iconName] || icons.AlertCircle;
  return <Icon className={className} />;
};

// --- 2. Module Theme Mapping (Kept functional colors, but will be wrapped in brand theme container) ---
const getModuleTheme = (module: string) => {
  const themes: Record<string, { from: string; to: string; text: string; bg: string; border: string; icon: string }> = {
    Timekeeping: { from: 'from-indigo-600', to: 'to-indigo-400', text: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'Clock' },
    Scheduling: { from: 'from-emerald-600', to: 'to-emerald-400', text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'Calendar' },
    Accruals: { from: 'from-purple-600', to: 'to-purple-400', text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200', icon: 'PieChart' },
    Analytics: { from: 'from-orange-600', to: 'to-orange-400', text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', icon: 'BarChart3' },
    Mobile: { from: 'from-pink-600', to: 'to-pink-400', text: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-200', icon: 'Smartphone' },
    Activities: { from: 'from-teal-600', to: 'to-teal-400', text: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200', icon: 'Zap' },
    Access: { from: 'from-cyan-600', to: 'to-cyan-400', text: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200', icon: 'Key' },
    Attestation: { from: 'from-violet-600', to: 'to-violet-400', text: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200', icon: 'Shield' },
    Attendance: { from: 'from-rose-600', to: 'to-rose-400', text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200', icon: 'UserCheck' },
    Migration: { from: 'from-slate-600', to: 'to-slate-400', text: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200', icon: 'Database' },
  };
  return themes[module] || themes.Migration;
};

// --- 3. Country Flag Helper ---
const getFlag = (country: string) => {
  const flags: Record<string, string> = {
    'El Salvador': '🇸🇻', 'India': '🇮🇳', 'UK': '🇬🇧', 'USA': '🇺🇸', 'Singapore': '🇸🇬', 
    'Canada': '🇨🇦', 'Germany': '🇩🇪', 'France': '🇫🇷', 'Australia': '🇦🇺', 'Brazil': '🇧🇷', 
    'Japan': '🇯🇵', 'UAE': '🇦🇪', 'Costa Rica': '🇨🇷', 'Mexico': '🇲🇽', 'Columbia': '🇨🇴'
  };
  return flags[country] || '🌐';
};

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, onClick, index }) => {
  const theme = getModuleTheme(study.moduleName);
  const metrics = study.metrics.slice(0, 3); // Take top 3 metrics

  return (
    <>
      <style>{`
        /* Removed transform from breathe animation to avoid conflict with hover scale */
        @keyframes breathe {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
      `}</style>

      <div 
        onClick={onClick}
        className={`
          group relative flex flex-col h-full
          bg-gradient-to-br from-amber-50 via-white to-[#ad577b]/5
          rounded-2xl p-6 md:p-8
          border border-amber-100/50 hover:border-[#ad577b]/30
          shadow-lg hover:shadow-2xl hover:shadow-[#ad577b]/10
          transition-all duration-300 ease-out
          hover:scale-[1.02] hover:z-10 cursor-pointer
          animate-in fade-in slide-in-from-bottom-8
          overflow-hidden
        `}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* --- Header Section --- */}
        <div className="flex justify-between items-start mb-6 z-10">
          <div className={`
            px-3 py-1.5 rounded-full 
            bg-gradient-to-r ${theme.from} ${theme.to}
            text-white text-xs font-bold uppercase tracking-wider
            shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all
          `}>
             {study.moduleName}
          </div>
          <div className="px-2 py-1 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg text-lg shadow-sm" title={study.country}>
            {getFlag(study.country)} <span className="text-xs font-bold text-slate-500 ml-1 hidden md:inline">{study.country}</span>
          </div>
        </div>

        {/* --- Icon & Title Section --- */}
        <div className="flex flex-col items-center text-center mb-6 z-10">
          <div className={`
            w-20 h-20 rounded-full mb-4
            bg-gradient-to-br ${theme.from} ${theme.to}
            flex items-center justify-center
            text-white shadow-lg shadow-black/5
            animate-breathe
            group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl
            transition-all duration-500
          `}>
             {getIcon(study.roadmap.solution.icon || theme.icon, "w-10 h-10")}
          </div>
          
          <h3 className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.15em] mb-2 leading-tight px-4 min-h-[2.5rem] flex items-center justify-center">
            {study.companyName}
          </h3>
          <h4 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-[#ad577b] transition-colors">
            {study.caseStudyTitle}
          </h4>
        </div>

        {/* --- Challenge Preview --- */}
        <div className={`
          relative p-4 rounded-xl mb-6 text-left
          bg-white/60 border-l-4 ${theme.border.replace('200', '500')}
          group-hover:bg-white/80 transition-colors
        `}>
           <div className="flex items-start gap-2 mb-1">
              <AlertCircle className={`w-4 h-4 mt-0.5 ${theme.text}`} />
              <span className={`text-xs font-bold uppercase ${theme.text}`}>The Challenge</span>
           </div>
           <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
             {study.roadmap.problem.short}
           </p>
        </div>

        {/* --- Metrics Section --- */}
        <div className="mt-auto mb-8 z-10">
          <div className="grid grid-cols-3 gap-2">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col items-center text-center p-2 rounded-lg hover:bg-white/50 transition-colors">
                 <div className={`mb-1 ${
                   m.impact === 'accuracy' ? 'text-green-600' : 
                   m.impact === 'cost' ? 'text-amber-600' : 
                   m.impact === 'time' ? 'text-blue-600' : 'text-purple-600'
                 }`}>
                   {getIcon(m.icon, "w-5 h-5")}
                 </div>
                 <span className="text-lg font-bold text-slate-900 leading-none mb-1">{m.value}</span>
                 <span className="text-[10px] font-bold text-slate-500 uppercase leading-tight truncate w-full">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- CTA Button (Brand Themed) --- */}
        <div className="relative z-10">
          <button className={`
            w-full py-3 px-4 rounded-xl
            bg-gradient-to-r from-amber-500 to-[#ad577b]
            hover:from-amber-600 hover:to-[#853856]
            text-white font-bold text-sm
            flex items-center justify-center gap-2
            shadow-md hover:shadow-lg hover:shadow-[#ad577b]/20
            active:scale-[0.98]
            transition-all duration-300
            group/btn
          `}>
            View Roadmap 
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* --- Glassmorphic Decor --- */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#ad577b]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-[#ad577b]/20 transition-colors"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-200/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none group-hover:bg-amber-300/30 transition-colors"></div>

      </div>
    </>
  );
};