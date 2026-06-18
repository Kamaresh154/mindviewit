import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'premium' | 'premium-outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95";
  
  const variants = {
    // Standard Gradient - Updated to #ad577b
    primary: "bg-gradient-to-r from-[#ad577b] to-[#964264] hover:to-[#ad577b] text-white shadow-lg shadow-[#ad577b]/25 hover:shadow-[#ad577b]/40 border border-transparent",
    
    // Premium Amber-Maroon Gradient (New)
    premium: "bg-gradient-to-r from-amber-500 to-[#ad577b] hover:from-amber-400 hover:to-[#964264] text-white shadow-lg shadow-amber-500/30 hover:shadow-2xl hover:shadow-[#ad577b]/40 border border-transparent",
    
    // Premium Outline
    'premium-outline': "bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white/20 hover:border-white/60 shadow-lg shadow-black/5",

    // Dark Modern
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 border border-slate-700",
    
    // Clean Outline
    outline: "border-2 border-slate-200 bg-transparent text-slate-700 hover:border-[#ad577b] hover:text-[#ad577b]",
    
    // Minimal
    ghost: "bg-transparent text-slate-600 hover:text-[#ad577b] hover:bg-[#ad577b]/10",
    
    // Glassmorphism
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-xl shadow-black/5"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};