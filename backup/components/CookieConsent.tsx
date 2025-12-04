
import React, { useState, useEffect } from 'react';

export const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[90] max-w-sm w-[calc(100%-2rem)] animate-[slide-up_0.5s_ease-out]">
      <div className="bg-[#1A2A3A]/95 backdrop-blur-md border border-[#FF8A75] p-6 rounded-2xl shadow-2xl relative overflow-hidden">
        
        {/* Background Decor */}
        <div className="absolute -top-4 -left-4 text-[4rem] opacity-5 select-none pointer-events-none">🍪</div>

        <div className="relative z-10">
            <h3 className="text-[#FDFBF7] font-bold uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF8A75] rounded-full animate-pulse"></span>
                Privacy Invasion Protocol
            </h3>
            <p className="text-[#FDFBF7]/70 text-sm mb-6 leading-relaxed">
                We use cookies to track your poverty levels and retarget you with ads until you buy. 
                We also send your IP to the "List of Future Millionaires."
            </p>
            
            <div className="flex gap-3">
                <button 
                    onClick={() => setShow(false)}
                    className="flex-1 bg-[#FF8A75] text-[#1A2A3A] text-xs font-bold uppercase tracking-widest py-3 rounded hover:bg-white transition-colors"
                >
                    Accept Wealth
                </button>
                <button 
                    onClick={() => setShow(false)}
                    className="flex-1 bg-transparent border border-[#FDFBF7]/20 text-[#FDFBF7]/40 text-xs font-bold uppercase tracking-widest py-3 rounded hover:bg-[#FDFBF7]/5 transition-colors"
                >
                    I Prefer Poverty
                </button>
            </div>
        </div>

      </div>
      <style>{`
        @keyframes slide-up {
            from { transform: translateY(100px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
