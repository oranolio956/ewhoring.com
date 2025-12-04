
import React from 'react';
import { usePayment } from '../contexts/PaymentContext';

const days = [
  { day: "01", title: "THE WIPE", desc: "Digital footprint erasure. If you exist, you fail." },
  { day: "02", title: "THE CONSTRUCT", desc: "Building the avatar. Photos, voice, backstory." },
  { day: "03", title: "INJECTION", desc: "First traffic source. 500+ eyes on your profile." },
  { day: "04", title: "THE HARVEST", desc: "First $100 day. Psychology testing." },
  { day: "05", title: "SCALING", desc: "Automating replies. Filtering the poor." },
  { day: "06", title: "LAUNDRY", desc: "Crypto rails. Hiding the money from banks." },
  { day: "07", title: "HANDOFF", desc: "I give you the keys. (Realistically takes 2 days, but I added a buffer because most of you are stupid as f*ck. It is literally copy-paste.)" },
];

export const TheSprint: React.FC = () => {
  const { openPayment } = usePayment();
  
  return (
    <section id="sprint" className="min-h-[100dvh] flex flex-col justify-center py-12 md:py-16 bg-[#1A2A3A] text-[#FDFBF7] relative overflow-hidden border-t border-[#FDFBF7]/5">
      
      {/* Background Tech Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FDFBF7" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Vertical Branding - Subliminal Reinforcement */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:block">
         <div className="text-[10px] font-mono font-bold text-[#FDFBF7]/20 -rotate-90 whitespace-nowrap tracking-[1em]">
            ORANOLIO PROTOCOL // 2025 // SYSTEM ACTIVE
         </div>
      </div>

      <div className="edge-container w-full">
      <div className="max-w-7xl mx-auto relative z-10 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Header / Rant */}
          <div className="lg:col-span-5 sticky top-24 h-fit">
            <div className="inline-block bg-[#FF8A75] text-[#1A2A3A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
              The 7-Day Protocol
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.95]">
              I AM NOT <br/>
              YOUR <span className="text-[#2D9C8E]">MENTOR.</span>
            </h2>
            
            <div className="prose text-[#FDFBF7]/70 text-lg leading-relaxed mb-8">
              <p className="mb-4">
                "Communities" are for losers who want to chat. I don't want to be your friend. I don't want to hear about your day.
              </p>
              <p className="mb-4">
                This is a <strong>Data Transfer</strong>. I take the information in my brain (worth $30k/mo) and I put it in your brain.
              </p>
              <p className="font-bold text-[#FDFBF7] border-l-4 border-[#FF8A75] pl-4">
                It takes exactly 7 days. After that, you are on your own. If you fail, it's because you didn't listen.
              </p>
              
              <div className="mt-6 text-[10px] font-mono opacity-50 bg-[#000]/20 p-2 rounded">
                ⚠ NOTICE: This timeline assumes you are not an idiot. If you have zero social skills, this will take you 7 years. Do not buy if you are "learning how to talk."
              </div>
            </div>

            <button onClick={openPayment} className="w-full py-4 bg-[#FDFBF7] text-[#1A2A3A] font-bold uppercase tracking-widest md:tracking-[0.2em] hover:bg-[#FF8A75] transition-colors rounded-lg shadow-[0_0_20px_rgba(255,138,117,0.3)] text-[3vw] md:text-base whitespace-nowrap cursor-pointer">
               START THE 7 DAYS
            </button>
          </div>

          {/* The Timeline */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {days.map((item, index) => (
                <div key={index} className="group relative flex items-stretch bg-[#FDFBF7]/5 border border-[#FDFBF7]/10 rounded-xl overflow-hidden">

                  {/* Day Number */}
                  <div className="bg-[#1A2A3A] w-20 flex items-center justify-center border-r border-[#FDFBF7]/10">
                    <span className="font-mono text-2xl font-bold text-[#FDFBF7]/60">
                      {item.day}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#FDFBF7] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#FDFBF7]/60 font-mono">
                      {item.desc}
                    </p>
                  </div>

                  {/* Connector Line (Visual only) */}
                  {index !== days.length - 1 && (
                     <div className="absolute left-[2.5rem] bottom-0 w-[clamp(0.5px,0.1vw,1px)] h-4 bg-[#FDFBF7]/10 -mb-4 z-0 flex items-center justify-center overflow-hidden">
                        <span className="text-[6px] text-[#FDFBF7]/20 -rotate-90 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">ORANOLIO TIMELINE</span>
                     </div>
                  )}
                </div>
              ))}

              {/* Day 8 - The Graduation */}
              <div className="mt-8 p-6 text-center border-2 border-dashed border-[#FDFBF7]/10 rounded-xl relative overflow-hidden hover:border-[#FF8A75]/50 transition-colors group">
                 <div className="absolute inset-0 flex items-center justify-center text-[3rem] font-bold text-[#FDFBF7]/5 -rotate-12 pointer-events-none">
                    ORANOLIO
                 </div>
                 <h3 className="font-mono text-sm uppercase tracking-widest mb-2 text-[#FF8A75]">Day 08</h3>
                 <p className="font-bold text-xl mb-4">GRADUATION.</p>
                 
                 <div className="bg-[#1A2A3A]/80 p-4 rounded-lg border border-[#2D9C8E]/30 inline-block max-w-lg shadow-lg backdrop-blur-sm">
                     <p className="text-xs md:text-sm text-[#FDFBF7]/90 leading-relaxed font-medium italic">
                        "(Relax. I'll still be here. If I thought you were actually retarded, I wouldn't have even sold this to you. I don't take money from losers. We eat together now.)"
                     </p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
};
