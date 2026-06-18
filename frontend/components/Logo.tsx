import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  lightText?: boolean;
}

/**
 * Official MindView IT Services logo.
 * The PNG already contains the icon + wordmark + tagline, so we render the
 * image as-is. `className` controls the height (e.g. h-12 / h-14 / h-16);
 * width is auto-scaled to preserve the original ~3.15:1 aspect ratio.
 */
export const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true, lightText = false }) => {
  return (
    <div className={`flex items-center ${className}`} aria-label="MindView IT Services">
      <img
        src="/assets/mindview-logo.png"
        alt="MindView IT Services — Your Goals Our Expertise"
        className="h-full w-auto select-none object-contain"
        draggable={false}
      />
      {/* Hidden text for screen readers when showText is true */}
      {showText && (
        <span className={`sr-only ${lightText ? 'text-white' : 'text-slate-900'}`}>
          MindView IT Services — Your Goals Our Expertise
        </span>
      )}
    </div>
  );
};
