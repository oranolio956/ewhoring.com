
import React from 'react';

export const FloatingBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Layer */}
      <div className="absolute inset-0 bg-[#FDFBF7]"></div>

      {/* TACTICAL GRID - Replaces soft blobs with precision engineering look */}
      <div className="absolute inset-0 opacity-[0.015]" 
           style={{ 
             backgroundImage: 'linear-gradient(#1A2A3A 1px, transparent 1px), linear-gradient(90deg, #1A2A3A 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Floating Crosshairs - The "Sniper/Targeting" Aesthetic - Reduced on mobile for performance */}
      {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 3 : 6)].map((_, i) => (
        <div 
            key={i}
            className="absolute w-4 h-4 flex items-center justify-center opacity-20"
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: typeof window !== 'undefined' && window.innerWidth < 768 
                  ? 'none' 
                  : `float ${10 + Math.random() * 10}s linear infinite`
            }}
        >
            <div className="absolute w-full h-[1px] bg-[#1A2A3A]"></div>
            <div className="absolute h-full w-[1px] bg-[#1A2A3A]"></div>
        </div>
      ))}

      {/* Large Geometric Watermarks - Architectural, not organic */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] border-[1px] border-[#1A2A3A]/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden"></div>
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border-[1px] border-[#1A2A3A]/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none overflow-hidden"></div>
      
      {/* 
         PERFORMANCE FIX: Removed SVG Noise Filter. 
         This was causing massive GPU overhead on mobile devices ("loading/glitch" feel).
         We now rely on the lightweight .bg-noise class in index.html.
      */}
      
      <style>{`
        @keyframes float {
            0% { transform: translate(0, 0); }
            50% { transform: translate(10px, -10px); }
            100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
};
