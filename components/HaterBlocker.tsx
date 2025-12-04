
import React, { useEffect, useState } from 'react';

export const HaterBlocker: React.FC = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerWarning();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.shiftKey && e.key === 'I') || // Inspect
        (e.ctrlKey && e.shiftKey && e.key === 'J') || // Console
        (e.ctrlKey && e.key === 'U') || // View Source
        (e.key === 'F12')
      ) {
        e.preventDefault();
        triggerWarning();
      }
    };

    const triggerWarning = () => {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div 
        className={`fixed inset-0 z-[10000] pointer-events-none flex items-center justify-center transition-opacity duration-200 ${showWarning ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="bg-[#FF0000] text-white px-8 py-4 rounded-xl shadow-[0_0_50px_rgba(255,0,0,0.5)] transform scale-110 font-bold font-mono text-center border-4 border-white">
          <div className="text-2xl mb-2">🚫 ACCESS DENIED 🚫</div>
          <div className="text-sm">SOURCE CODE IS FOR BUYERS ONLY.</div>
          <div className="text-[10px] mt-2 opacity-80 uppercase tracking-widest">Quit trying to steal the sauce, brokie.</div>
        </div>
      </div>
    </>
  );
};
