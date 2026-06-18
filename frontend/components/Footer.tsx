import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Logo className="h-14" lightText={false} />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              MindView IT Services Pvt Ltd is a boutique UKG consultancy delivering high-velocity implementations and optimization strategies for the modern enterprise.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4 font-heading">Services</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#ad577b] transition-colors">UKG Implementation</a></li>
              <li><a href="#" className="hover:text-[#ad577b] transition-colors">Optimization & BI</a></li>
              <li><a href="#" className="hover:text-[#ad577b] transition-colors">Managed Support</a></li>
              <li><a href="#" className="hover:text-[#ad577b] transition-colors">Change Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4 font-heading">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#ad577b] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#ad577b] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#ad577b] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#ad577b] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4 font-heading">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#ad577b] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#ad577b] transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-[#ad577b] transition-colors">Insight Blog</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MindView IT Services Pvt Ltd. Not affiliated with UKG Inc.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-slate-500 hover:text-slate-700 cursor-pointer">Boston</span>
            <span className="text-sm text-slate-500 hover:text-slate-700 cursor-pointer">London</span>
            <span className="text-sm text-slate-500 hover:text-slate-700 cursor-pointer">Bangalore</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
