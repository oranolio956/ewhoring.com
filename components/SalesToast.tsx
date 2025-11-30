
import React, { useState, useEffect } from 'react';

const NAMES = ["Kyle", "Brandon", "Jessica", "Mike", "Alex", "Sarah", "Anon", "David", "Chris"];
const LOCATIONS = ["Texas", "London", "Dubai", "New York", "California", "Ohio", "Toronto", "Sydney", "Miami"];
const ACTIONS = ["started the grift", "joined the harem", "secured a spot", "purchased the tools"];

export const SalesToast: React.FC = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({ name: "", location: "", action: "" });

  useEffect(() => {
    // Random loop
    const trigger = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
      const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
      
      setData({ name, location, action });
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
      <div className="bg-[#1A2A3A]/90 backdrop-blur-md border border-[#2D9C8E]/30 p-4 rounded-xl shadow-2xl flex items-center gap-4 max-w-xs cursor-default">
         <div className="w-10 h-10 rounded-full bg-[#2D9C8E] flex items-center justify-center text-[#FDFBF7] font-bold text-lg">
           ✓
         </div>
         <div>
           <div className="text-xs text-[#FDFBF7] font-bold">
             {data.name} from {data.location}
           </div>
           <div className="text-[10px] text-[#FDFBF7]/80 tracking-wide">
             Just {data.action}
           </div>
         </div>
         <div className="text-[#FF8A75] text-xs font-mono ml-auto opacity-80">
            Now
         </div>
      </div>
    </div>
  );
};
