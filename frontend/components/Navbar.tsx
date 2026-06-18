import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className={`relative flex justify-between items-center rounded-2xl transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border border-slate-200 shadow-lg shadow-[#ad577b]/10 p-3 px-6' : 'bg-white/70 backdrop-blur-md border border-white/60 shadow-sm p-3 px-6'}`}>
        
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo className="h-14 md:h-16" lightText={false} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
             <Button 
                variant="premium" 
                size="sm" 
                onClick={() => handleNavClick('contact')}
             >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-[#ad577b]/10 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 z-50">
          <Button variant="premium" className="w-full mt-2" onClick={() => handleNavClick('contact')}>
            Book Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};
