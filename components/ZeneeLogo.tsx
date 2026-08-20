'use client';

import React, { useState } from 'react';

interface ZeneeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'image' | 'svg';
}

export const ZeneeLogo: React.FC<ZeneeLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'image',
}) => {
  const [imgError, setImgError] = useState(false);

  const logoHeights = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
  }[size];

  const shieldHeights = {
    sm: 'h-7 w-7',
    md: 'h-9 w-9',
    lg: 'h-12 w-12',
  }[size];

  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }[size];

  // Render SVG Backup Logo
  const renderSvgBackup = () => (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Brand Icon Hub */}
      <div className={`relative ${iconDimensions} flex items-center justify-center`}>
        {/* Glowing aura */}
        <div className="absolute inset-0 bg-[#FF6B00] rounded-xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Outer glass ring */}
        <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-[#1A1E2E] to-[#0D0F17] border border-[#FF6B00]/40 flex items-center justify-center overflow-hidden shadow-lg group-hover:border-[#FF6B00] transition-colors duration-300">
          {/* Subtle background tech line */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />

          {/* Abstract 'Z' emblem in ZeneeAI Orange */}
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3/4 h-3/4 text-[#FF6B00] relative z-10 drop-shadow-[0_0_8px_rgba(255,107,0,0.6)]"
          >
            <path
              d="M10 12H30L16 28H30"
              stroke="url(#zenee-orange-grad-backup)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="12" r="2.5" fill="#FF8533" />
            <circle cx="30" cy="12" r="2.5" fill="#FF6B00" />
            <circle cx="16" cy="28" r="2.5" fill="#FF6B00" />
            <circle cx="30" cy="28" r="2.5" fill="#FF8533" />

            <defs>
              <linearGradient id="zenee-orange-grad-backup" x1="10" y1="12" x2="30" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9E43" />
                <stop offset="0.5" stopColor="#FF6B00" />
                <stop offset="1" stopColor="#E65100" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold tracking-wider ${textSizes} text-white font-sans flex items-center`}>
            ZENEE<span className="text-[#FF6B00]">AI</span>
          </span>
        </div>
      )}
    </div>
  );

  if (variant === 'svg' || imgError) {
    return renderSvgBackup();
  }

  return (
    <div className={`inline-flex items-center group cursor-pointer ${className}`}>
      {showText ? (
        <img
          src="/zenee-logo-transparent.png"
          alt="Zenee AI Logo"
          onError={() => setImgError(true)}
          className={`${logoHeights} w-auto object-contain filter drop-shadow-[0_0_12px_rgba(255,107,0,0.35)] group-hover:drop-shadow-[0_0_20px_rgba(255,107,0,0.65)] transition-all duration-300`}
        />
      ) : (
        <img
          src="/zenee-shield-transparent.png"
          alt="Zenee AI Shield"
          onError={() => setImgError(true)}
          className={`${shieldHeights} object-contain filter drop-shadow-[0_0_12px_rgba(255,107,0,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(255,107,0,0.7)] transition-all duration-300`}
        />
      )}
    </div>
  );
};
