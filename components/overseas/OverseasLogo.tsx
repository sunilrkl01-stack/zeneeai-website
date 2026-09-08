'use client';

import React from 'react';

interface OverseasLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const OverseasLogo: React.FC<OverseasLogoProps> = ({ size = 'lg', className = '' }) => {
  const logoHeights = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-16 sm:h-20 lg:h-24',
    xl: 'h-20 sm:h-24 lg:h-28',
  };

  return (
    <div className={`inline-flex items-center group cursor-pointer ${className}`}>
      <img
        src="/images/overseas/zeneeai_overseas_logo.png"
        alt="ZeneeAI Overseas Logo"
        className={`${logoHeights[size]} w-auto object-contain filter drop-shadow-[0_0_20px_rgba(255,107,0,0.45)] group-hover:drop-shadow-[0_0_30px_rgba(255,107,0,0.7)] group-hover:scale-105 transition-all duration-300`}
      />
    </div>
  );
};
