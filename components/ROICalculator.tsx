
import React, { useState, useEffect } from 'react';

export const ROICalculator: React.FC = () => {
  const [morals, setMorals] = useState(80); // 100 = Saint, 0 = Sociopath
  const [hours, setHours] = useState(2);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    // The Algorithm: Less Morals + More Hours = Exponential Cash
    // Base rate: $50/hr. 
    // Morality Multiplier: (100 - morals) * 5.
    const hourlyRate = 50 + ((100 - morals) * 8); 
    const weekly = hourlyRate * hours * 7;
    const yearly = weekly * 52;
    setEarnings(yearly);
  }, [morals, hours]);

  const getMoralLabel = (val: number) => {
    if (val > 80) return "Sunday School Teacher";
    if (val > 60) return "Average Citizen";
    if (val > 40) return "Used Car Salesman";
    if (val > 20) return "Wall Street Banker";
    return "Complete Sociopath (Optimum)";
  };

  return (
    <section className="py-24 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Side */}
          <div className="order-2 lg:order-1">
             <div className="inline-block bg-[#1A2A3A] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4">
               Financial Projections
             </div>
             <h2 className="text-4xl md:text-6xl font-bold text-[#1A2A3A] mb-6 leading-none">
               CALCULATE YOUR <br/>
               <span className="text-[#2D9C8E]">LACK OF DIGNITY</span>
             </h2>
             <p className="text-lg text-[#1A2A3A]/70 mb-8 max-w-md">
               Most jobs pay you for your time. We pay you for your soul. 
               Use the slider to see how much money you can make by simply not caring about others.
             </p>
             <div className="p-6 bg-[#FF8A75]/10 border border-[#FF8A75] rounded-xl">
               <h4 className="font-bold text-[#1A2A3A] uppercase tracking-widest text-xs mb-2">💡 Pro Tip</h4>
               <p className="text-sm text-[#1A2A3A]/80">
                 Notice how the number goes up when you stop being a "good person"? 
                 That is capitalism, baby.
               </p>
             </div>
          </div>

          {/* Interactive Calculator */}
          <div className="order-1 lg:order-2 glass-panel p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-[#1A2A3A]/10 relative group">
             {/* Background Graph Lines */}
             <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="none">
                   <path d="M0 300 C 100 280, 200 150, 400 50" stroke="#1A2A3A" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke"/>
                   <path d="M0 300 C 120 290, 250 200, 400 100" stroke="#2D9C8E" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke"/>
                </svg>
             </div>

             <div className="relative z-10 flex flex-col gap-8">
               
               {/* Display */}
               <div className="text-center mb-4">
                 <div className="text-sm font-bold uppercase tracking-widest text-[#1A2A3A]/40 mb-2">Projected Yearly Income</div>
                 <div className="text-5xl md:text-7xl font-['Space_Grotesk'] font-bold text-[#1A2A3A] tabular-nums tracking-tighter">
                   ${earnings.toLocaleString()}
                 </div>
               </div>

               {/* Slider 1: Morals */}
               <div className="space-y-3">
                 <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                   <label>Moral Compass</label>
                   <span className="text-[#FF8A75]">{getMoralLabel(morals)}</span>
                 </div>
                 <input 
                   type="range" 
                   min="0" 
                   max="100" 
                   value={morals} 
                   onChange={(e) => setMorals(parseInt(e.target.value))}
                   className="w-full h-3 bg-[#1A2A3A]/10 rounded-lg appearance-none cursor-ew-resize accent-[#1A2A3A] hover:accent-[#FF8A75] transition-all"
                 />
                 <div className="flex justify-between text-[10px] text-[#1A2A3A]/40 uppercase font-mono">
                   <span>Sociopath</span>
                   <span>Saint</span>
                 </div>
               </div>

               {/* Slider 2: Hours */}
               <div className="space-y-3">
                 <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                   <label>Hours Pretending</label>
                   <span className="text-[#2D9C8E]">{hours} Hours / Day</span>
                 </div>
                 <input 
                   type="range" 
                   min="1" 
                   max="16" 
                   value={hours} 
                   onChange={(e) => setHours(parseInt(e.target.value))}
                   className="w-full h-3 bg-[#1A2A3A]/10 rounded-lg appearance-none cursor-ew-resize accent-[#1A2A3A] hover:accent-[#2D9C8E] transition-all"
                 />
               </div>

               <button className="w-full py-4 bg-[#1A2A3A] text-[#FDFBF7] font-bold uppercase tracking-widest hover:bg-[#2D9C8E] transition-colors rounded-xl shadow-lg mt-4">
                 Lock In This Income
               </button>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
