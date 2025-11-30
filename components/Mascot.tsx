
import React, { useState, useEffect } from 'react';

interface MascotProps {
  excitementLevel?: number; // 0.0 to 1.0
}

export const Mascot: React.FC<MascotProps> = ({ excitementLevel = 0 }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        // Calculate normalized mouse position (-1 to 1)
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setMousePos({ x, y });
        frameId = 0;
      });
    };

    if (excitementLevel === 0) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (frameId) cancelAnimationFrame(frameId);
    };
  }, [excitementLevel]);

  // Dynamic Styles based on excitement
  const pupilSize = 30 + (excitementLevel * 20); // 30 to 50
  
  // Calculate eye look direction
  // If excited, it looks center/shakes. If idle, it tracks mouse.
  const lookX = excitementLevel > 0 ? 0 : mousePos.x * 30;
  const lookY = excitementLevel > 0 ? 0 : mousePos.y * 20;

  const irisColorStart = excitementLevel > 0.5 ? '#F4D35E' : '#2D9C8E'; // Teal to Gold
  const irisColorEnd = excitementLevel > 0.5 ? '#FF8A75' : '#1A2A3A'; // Navy to Coral
  const shakeClass = excitementLevel > 0.8 ? 'animate-vibrate' : '';

  return (
    <div className={`w-full h-full relative group cursor-pointer ${shakeClass} will-change-transform`} role="img" aria-label="Oranolio Interactive Eye Mascot">
      <style>{`
        @keyframes vibrate {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-vibrate {
          animation: vibrate 0.3s linear infinite;
        }
      `}</style>
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="eyeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={irisColorStart} className="transition-all duration-500" />
            <stop offset="100%" stopColor={irisColorEnd} className="transition-all duration-500" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer Ring - Rotates */}
        <g className={`origin-center ${excitementLevel > 0 ? 'animate-[spin_4s_linear_infinite]' : 'transition-transform duration-1000'}`} style={{ transform: excitementLevel === 0 ? `rotate(${mousePos.x * 10}deg)` : undefined }}>
          <path 
            d="M100 20 L180 100 L100 180 L20 100 Z" 
            fill="none" 
            stroke={excitementLevel > 0.5 ? '#F4D35E' : '#1A2A3A'}
            strokeWidth={1 + excitementLevel * 2}
            className="opacity-20 transition-colors duration-500"
          />
           <circle 
             cx="100" cy="100" r={70 + excitementLevel * 5} 
             stroke="#FF8A75" strokeWidth="1" fill="none" strokeDasharray="4 4" 
             className="transition-all duration-500"
           />
        </g>

        {/* The Eye - Tracks Mouse or Reacts */}
        <g 
          className="transition-transform duration-100 ease-out origin-center will-change-transform"
          style={{ transform: `translate(${lookX}px, ${lookY}px)` }}
        >
            {/* Sclera */}
            <path 
                d={`M20 100 Q100 ${40 - excitementLevel * 20} 180 100 Q100 ${160 + excitementLevel * 20} 20 100 Z`}
                fill="#FDFBF7" 
                stroke="#1A2A3A" 
                strokeWidth="2"
                className="transition-all duration-300"
            />
            
            {/* Iris */}
            <circle 
              cx="100" cy="100" r={pupilSize} 
              fill="url(#eyeGradient)" 
              className="transition-all duration-300"
            />
            
            {/* Pupil (Reacts to excitement) */}
            <rect 
                x={95 - (excitementLevel * 5)} 
                y={70 + (excitementLevel * 10)} 
                width={10 + (excitementLevel * 10)} 
                height={60 - (excitementLevel * 20)} 
                fill="#FDFBF7" 
                className={excitementLevel > 0.8 ? "animate-pulse" : ""}
            />
        </g>
        
        {/* Glitch Elements - Only show when excited */}
        {excitementLevel > 0.3 && (
          <>
            <rect x="160" y="80" width="20" height="2" fill="#F4D35E" className="animate-pulse" />
            <rect x="20" y="110" width="20" height="2" fill="#F4D35E" className="animate-pulse delay-75" />
          </>
        )}
      </svg>
    </div>
  );
};
