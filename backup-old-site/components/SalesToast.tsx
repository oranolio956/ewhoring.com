
import React, { useState, useEffect } from 'react';

const NAMES = ["Jake", "Mike", "Chris", "Brandon", "Ryan", "Alex", "David", "Kevin", "Tom"];
const LOCATIONS = ["Texas", "California", "New York", "Ohio", "Florida", "Illinois", "Washington", "Arizona", "Georgia"];
const ACTIONS = ["started recovery", "booked consultation", "paid $299 fee", "joined support group", "got emotional help"];
const REALITY_CHECKS = [
  "Money: Still gone",
  "Feelings: Recovered",
  "Wisdom: Gained",
  "Not a paid actor",
  "100% satisfied*",
  "Would recommend**",
  "Source: Trust us",
  "Recovery: Emotional",
  "Consultation: Worth it"
];

export const SalesToast: React.FC = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({ name: "", location: "", action: "", note: "" });

  useEffect(() => {
    // Random loop
    const trigger = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
      const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
      const note = REALITY_CHECKS[Math.floor(Math.random() * REALITY_CHECKS.length)];
      
      setData({ name, location, action, note });
      setShow(true);

      setTimeout(() => setShow(false), 4000); // Hide after 4s
    };

    const interval = setInterval(() => {
       // Trigger randomly between 10s and 30s for realism
       if (Math.random() > 0.5) trigger();
    }, 12000);

    // Initial trigger
    setTimeout(trigger, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed bottom-4 left-4 z-50 transition-all duration-500 transform ${show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="bg-[#1A2A3A]/90 backdrop-blur-md border border-[#2D9C8E]/30 p-4 rounded-xl shadow-2xl flex items-center gap-4 max-w-xs cursor-default hover:scale-105 transition-transform">
         <div className="w-10 h-10 rounded-full bg-[#2D9C8E] flex items-center justify-center text-[#FDFBF7] font-bold text-lg shadow-[0_0_15px_rgba(45,156,142,0.5)]">
           🆘
         </div>
         <div>
           <div className="text-xs text-[#FDFBF7] font-bold">
             {data.name} from {data.location}
           </div>
           <div className="text-[10px] text-[#FDFBF7]/80 tracking-wide mb-1">
             Just {data.action}
           </div>
           {/* The Funny Badge */}
           <div className="bg-[#FF8A75] text-[#1A2A3A] text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded w-fit transform -rotate-1">
             {data.note}
           </div>
         </div>
         <div className="text-[#2D9C8E] text-[10px] font-mono ml-auto opacity-80 self-start">
            Now
         </div>
      </div>
    </div>
  );
};
