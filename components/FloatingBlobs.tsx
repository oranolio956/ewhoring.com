
import React from 'react';

export const FloatingBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Base Layer - Not a solid color, but a deep mesh */}
      <div className="absolute inset-0 bg-[#FDFBF7]"></div>
      
      {/* Editorial Gradient Mesh - Static, Heavy, Expensive looking */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] opacity-40 blur-[120px]"
        style={{
          background: 'radial-gradient(circle at center, #FF8A75 0%, transparent 60%)'
        }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[90%] h-[90%] opacity-30 blur-[100px]"
        style={{
          background: 'radial-gradient(circle at center, #2D9C8E 0%, transparent 70%)'
        }}
      />
      
      {/* Sharp Geometric Accents - Anti-Blob */}
      <div className="absolute top-[15%] right-[10%] w-[1px] h-[200px] bg-[#1A2A3A] opacity-20"></div>
      <div className="absolute top-[15%] right-[10%] w-[200px] h-[1px] bg-[#1A2A3A] opacity-20"></div>
      
      {/* Grain Overlay for Texture (removes digital sheen) */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
      }}></div>
    </div>
  );
};
