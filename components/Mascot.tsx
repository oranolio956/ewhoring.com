
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
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
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
        
        {/* HUD Elements - Technical Overlay */}
        <g className="opacity-30 pointer-events-none">
            {/* Outer Rotating Ring */}
            <circle cx="100" cy="100" r="90" stroke="#1A2A3A" strokeWidth="1" fill="none" strokeDasharray="10 20" className="animate-[spin-slow_20s_linear_infinite] origin-center" />
            
            {/* Inner Counter-Rotating Ring */}
            <circle cx="100" cy="100" r="85" stroke="#2D9C8E" strokeWidth="0.5" fill="none" strokeDasharray="50 50" className="animate-[spin-reverse_15s_linear_infinite] origin-center" />
            
            {/* Crosshair markers */}
            <line x1="100" y1="10" x2="100" y2="20" stroke="#1A2A3A" strokeWidth="1" />
            <line x1="100" y1="180" x2="100" y2="190" stroke="#1A2A3A" strokeWidth="1" />
            <line x1="10" y1="100" x2="20" y2="100" stroke="#1A2A3A" strokeWidth="1" />
            <line x1="180" y1="100" x2="190" y2="100" stroke="#1A2A3A" strokeWidth="1" />
        </g>

        {/* Main Eye Structure */}
        <g 
          className="transition-transform duration-100 ease-out origin-center will-change-transform"
          style={{ transform: `translate(${lookX}px, ${lookY}px)` }}
        >
            {/* Sclera - Sharp Edges */}
            <path 
                d={`M20 100 Q100 ${40 - excitementLevel * 20} 180 100 Q100 ${160 + excitementLevel * 20} 20 100 Z`}
                fill="#FDFBF7" 
                stroke="#1A2A3A" 
                strokeWidth="2"
                className="transition-all duration-300 drop-shadow-lg"
            />
            
            {/* Iris */}
            <circle 
              cx="100" cy="100" r={pupilSize} 
              fill="url(#eyeGradient)" 
              className="transition-all duration-300"
            />
            
            {/* Pupil (Reacts to excitement) - Rectangular/Digital shape instead of round */}
            <rect 
                x={95 - (excitementLevel * 5)} 
                y={70 + (excitementLevel * 10)} 
                width={10 + (excitementLevel * 10)} 
                height={60 - (excitementLevel * 20)} 
                fill="#FDFBF7" 
                className={excitementLevel > 0.8 ? "animate-pulse" : ""}
            />
            
            {/* Digital Glint */}
            <rect x="110" y="85" width="8" height="8" fill="white" opacity="0.8" />
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
