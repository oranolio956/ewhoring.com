
import React, { useState, useEffect } from 'react';

export const Mascot: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.2);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-full relative group cursor-pointer">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="eyeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D9C8E" />
            <stop offset="100%" stopColor="#1A2A3A" />
          </linearGradient>
        </defs>
        
        {/* Outer Ring - Rotates on Scroll */}
        <g transform={`rotate(${rotation} 100 100)`}>
          <path 
            d="M100 20 L180 100 L100 180 L20 100 Z" 
            fill="none" 
            stroke="#1A2A3A" 
            strokeWidth="1"
            className="opacity-20"
          />
           <circle cx="100" cy="100" r="70" stroke="#FF8A75" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        </g>

        {/* The Eye - Abstract */}
        <g className="transition-transform duration-500 group-hover:scale-110 origin-center">
            {/* Sclera */}
            <path 
                d="M20 100 Q100 40 180 100 Q100 160 20 100 Z" 
                fill="#FDFBF7" 
                stroke="#1A2A3A" 
                strokeWidth="2"
            />
            
            {/* Iris */}
            <circle cx="100" cy="100" r="30" fill="url(#eyeGradient)" />
            
            {/* Pupil */}
            <rect 
                x="95" y="70" width="10" height="60" 
                fill="#FDFBF7" 
                className="animate-pulse"
            />
        </g>
        
        {/* Glitch Elements */}
        <rect x="160" y="80" width="20" height="2" fill="#1A2A3A" className="animate-pulse" />
        <rect x="20" y="110" width="20" height="2" fill="#1A2A3A" className="animate-pulse delay-75" />
      </svg>
    </div>
  );
};
