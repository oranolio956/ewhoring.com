
import React from 'react';

export const TechStack: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#1A2A3A] relative overflow-hidden border-b border-[#FDFBF7]/5">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#2D9C8E 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-[#2D9C8E] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4">
            The Toolkit
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#FDFBF7] tracking-tighter mb-6">
            WEAPONIZED <br/>
            <span className="text-[#FF8A75]">AUTISM SUITE</span>
          </h2>
          <p className="text-[#FDFBF7]/60 max-w-2xl mx-auto">
            You don't need "skills." You need unfair advantages. <br/>
            Access the <strong className="text-[#2D9C8E]">ORANOLIO TOOLS™</strong> that make this effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tool 1: Whale Radar */}
          <div className="bg-[#0F1923] border border-[#2D9C8E]/30 rounded-3xl p-8 relative overflow-hidden group">
            {/* Branding Stamp */}
            <div className="absolute top-4 right-4 text-[9px] font-mono text-[#2D9C8E]/40 uppercase tracking-widest">
              WHALE_HUNT v9.2
            </div>
            
            <div className="relative aspect-video bg-[#000] rounded-xl mb-6 overflow-hidden border border-[#2D9C8E]/20 shadow-[0_0_30px_rgba(45,156,142,0.1)]">
               {/* Radar Animation */}
               <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full border-[1px] border-[#2D9C8E] rounded-full animate-[ping_3s_linear_infinite]"></div>
                  <div className="w-full h-full border-[1px] border-[#2D9C8E] rounded-full animate-[ping_3s_linear_infinite_1s]"></div>
               </div>
               {/* Targets */}
               <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#FF8A75] rounded-full animate-pulse"></div>
               <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[#FF8A75] rounded-full animate-pulse delay-75"></div>
               
               {/* UI Overlay */}
               <div className="absolute bottom-2 left-2 font-mono text-[10px] text-[#2D9C8E]">
                  SCANNING FOR SIMPS...
               </div>
               <div className="absolute top-2 left-2 font-mono text-[10px] text-[#2D9C8E]/50">
                  SECTOR: DIVORCED DADS
               </div>
            </div>

            <h3 className="text-2xl font-bold text-[#FDFBF7] mb-2 font-['Space_Grotesk']">WHALE RADAR™</h3>
            <p className="text-[#FDFBF7]/60 text-sm mb-4">
              Our scraper identifies men over 50 who recently posted about "loneliness" or "divorce" on Facebook. 
              <span className="text-[#FF8A75]"> Targeted extraction.</span>
            </p>
            <div className="text-[10px] font-bold text-[#1A2A3A] bg-[#2D9C8E] w-fit px-2 py-1 uppercase tracking-widest rounded">
              Included
            </div>
          </div>

          {/* Tool 2: Voice Modulator */}
          <div className="bg-[#0F1923] border border-[#FF8A75]/30 rounded-3xl p-8 relative overflow-hidden group">
            {/* Branding Stamp */}
            <div className="absolute top-4 right-4 text-[9px] font-mono text-[#FF8A75]/40 uppercase tracking-widest">
              CATFISH_VOX
            </div>

            <div className="relative aspect-video bg-[#000] rounded-xl mb-6 overflow-hidden border border-[#FF8A75]/20 shadow-[0_0_30px_rgba(255,138,117,0.1)] flex items-center justify-center gap-1">
               {/* Waveform Animation */}
               {[...Array(12)].map((_,i) => (
                  <div key={i} className="w-2 bg-[#FF8A75] rounded-full animate-[pulse_1s_ease-in-out_infinite]" 
                       style={{ height: `${Math.random() * 60 + 20}%`, animationDelay: `${i * 0.1}s` }}></div>
               ))}
               
               <div className="absolute bottom-2 right-2 font-mono text-[10px] text-[#FF8A75]">
                  INPUT: DEEP MALE VOICE
               </div>
               <div className="absolute top-2 right-2 font-mono text-[10px] text-[#2D9C8E]">
                  OUTPUT: UWU_GIRL_V4
               </div>
            </div>

            <h3 className="text-2xl font-bold text-[#FDFBF7] mb-2 font-['Space_Grotesk']">VOICE ALCHEMY™</h3>
            <p className="text-[#FDFBF7]/60 text-sm mb-4">
              Real-time frequency shifting. Turn your normal speaking voice into a believable female register. 
              <span className="text-[#2D9C8E]"> Undetectable on Discord/Phone.</span>
            </p>
            <div className="text-[10px] font-bold text-[#1A2A3A] bg-[#FF8A75] w-fit px-2 py-1 uppercase tracking-widest rounded">
              Included
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
