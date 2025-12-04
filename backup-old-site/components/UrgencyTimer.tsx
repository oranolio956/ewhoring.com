
import React, { useState, useEffect } from 'react';

export const UrgencyTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: Math.floor(Math.random() * 24),
    minutes: Math.floor(Math.random() * 60),
    seconds: Math.floor(Math.random() * 60)
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to random time when it hits zero (fake urgency)
          hours = Math.floor(Math.random() * 24);
          minutes = Math.floor(Math.random() * 60);
          seconds = Math.floor(Math.random() * 60);
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-20 right-4 z-50 bg-[#FF8A75] text-[#1A2A3A] px-4 py-3 rounded-lg shadow-2xl border-2 border-[#1A2A3A] animate-pulse">
      <div className="text-[10px] font-bold uppercase tracking-widest mb-2 text-center">
        LIMITED TIME OFFER
      </div>
      <div className="flex items-center gap-2 justify-center">
        <div className="text-center">
          <div className="text-2xl font-black">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-[8px] uppercase">Hours</div>
        </div>
        <div className="text-xl font-bold">:</div>
        <div className="text-center">
          <div className="text-2xl font-black">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-[8px] uppercase">Mins</div>
        </div>
        <div className="text-xl font-bold">:</div>
        <div className="text-center">
          <div className="text-2xl font-black">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-[8px] uppercase">Secs</div>
        </div>
      </div>
      <div className="text-[9px] text-center mt-2 font-bold">
        Until Consultation Price Increases*
      </div>
      <div className="text-[7px] text-center mt-1 opacity-70 italic">
        *Price never actually increases
      </div>
    </div>
  );
};
