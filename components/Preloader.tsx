
import React, { useEffect, useState } from 'react';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress bar simulation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        // Random increment for realism
        return prev + Math.random() * 10;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0F1923] flex flex-col items-center justify-center text-[#FDFBF7]">
      <div className="w-64 relative">
        {/* Logo Text */}
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-['Space_Grotesk'] tracking-[0.2em] mb-2 animate-pulse">
                ORANOLIO
            </h1>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#2D9C8E] opacity-80">
                Masterclass
            </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="h-[2px] w-full bg-[#1A2A3A] relative overflow-hidden">
            <div 
                className="absolute top-0 left-0 h-full bg-[#FF8A75] transition-all duration-200 ease-out"
                style={{ width: `${Math.min(100, progress)}%` }}
            ></div>
        </div>

        {/* Status Text */}
        <div className="flex justify-between mt-2 font-mono text-[9px] text-[#FDFBF7]/40 uppercase">
            <span>Secure Connection</span>
            <span>{Math.round(Math.min(100, progress))}%</span>
        </div>
      </div>

      <div className="absolute bottom-8 text-[9px] text-[#FDFBF7]/20 font-mono tracking-widest uppercase">
        © Oranolio Holdings Inc.
      </div>
    </div>
  );
};
