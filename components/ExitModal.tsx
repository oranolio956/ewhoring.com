
import React, { useEffect, useState } from 'react';

export const ExitModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
      
      <div className="relative bg-[#1A2A3A] w-full max-w-lg rounded-3xl p-8 border border-[#FF8A75] shadow-2xl animate-[shake_0.5s_ease-in-out]">
        <style>{`
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
                20%, 40%, 60%, 80% { transform: translateX(4px); }
            }
        `}</style>
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-6xl">
            🏃‍♂️💨
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FDFBF7] font-['Space_Grotesk'] mb-4 leading-none mt-4">
            GOING BACK TO <br/>
            <span className="text-[#FF8A75] underline decoration-wavy">POVERTY?</span>
        </h2>
        
        <p className="text-center text-[#FDFBF7]/70 mb-8 font-medium">
            Your boss is waiting for you. The cubicle misses you. <br/>
            Are you really going to close this tab and go back to being broke?
        </p>
        
        <div className="flex flex-col gap-3">
            <button 
                onClick={() => setIsOpen(false)} 
                className="w-full py-4 bg-[#2D9C8E] text-white font-bold uppercase tracking-widest rounded-xl hover:bg-[#2D9C8E]/90 transition-colors shadow-lg"
            >
                NO, I WANT TO BE RICH
            </button>
            <button 
                onClick={() => setIsOpen(false)} 
                className="w-full py-4 bg-transparent border border-[#FDFBF7]/10 text-[#FDFBF7]/40 font-bold uppercase tracking-widest rounded-xl hover:bg-[#FDFBF7]/5 transition-colors text-xs"
            >
                Yes, I prefer my 9-5 job
            </button>
        </div>
      </div>
    </div>
  );
};
