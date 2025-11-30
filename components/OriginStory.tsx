
import React from 'react';

export const OriginStory: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden border-b border-[#1A2A3A]/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
          <div className="inline-block bg-[#FF8A75] text-[#1A2A3A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6 transform -rotate-2">
            The Evolution of the Hustle
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-[#1A2A3A] tracking-tighter mb-8 leading-[0.9]">
            I AM A BETTER GIRL <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D9C8E] to-[#1A2A3A]">
              THAN REAL GIRLS.
            </span>
          </h2>
          <p className="text-xl text-[#1A2A3A]/60 max-w-2xl mx-auto">
            Real women are boring. They have "boundaries." I have a sales quota. <br/>
            <span className="text-[#1A2A3A] font-bold">Men love men's company.</span> They just want it packaged in a skirt.
          </p>
        </div>

        {/* The Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* The Old Way (Grind) */}
            <div className="bg-[#1A2A3A]/5 p-8 md:p-12 rounded-3xl relative overflow-hidden border border-[#1A2A3A]/10 group hover:bg-[#1A2A3A]/10 transition-colors">
                <div className="absolute top-0 right-0 bg-[#1A2A3A] text-[#FDFBF7] px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-bl-xl">
                    The Grind (2014-2018)
                </div>
                <h3 className="text-3xl font-['Space_Grotesk'] font-bold text-[#1A2A3A] mb-6 opacity-50">MANUAL LABOR</h3>
                
                <ul className="space-y-6 text-[#1A2A3A]/70 font-medium">
                    <li className="flex gap-4">
                        <span className="text-xl">📦</span>
                        <div>
                            <strong className="block text-[#1A2A3A]">The Dropbox Hustle</strong>
                            Selling content folders for $20. Begging for sales. working too hard for peanuts.
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-xl">🔄</span>
                        <div>
                            <strong className="block text-[#1A2A3A]">The "Fake Refund" Loop</strong>
                            "Oops, the payment didn't go through, send it again." Making them send $50 six times in a row before they caught on. High risk, high stress.
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-xl">⛽</span>
                        <div>
                            <strong className="block text-[#1A2A3A]">The Gas Waster</strong>
                            Making dudes drive 1 hour for a "meetup" for $200, then ghosting them when they arrived. Funny? Yes. Efficient? No.
                        </div>
                    </li>
                </ul>
            </div>

            {/* The New Way (2025) */}
            <div className="bg-[#1A2A3A] p-8 md:p-12 rounded-3xl relative overflow-hidden text-[#FDFBF7] shadow-2xl transform lg:-translate-y-4">
                <div className="absolute top-0 right-0 bg-[#FF8A75] text-[#1A2A3A] px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-bl-xl animate-pulse">
                    The Protocol (2025)
                </div>
                <h3 className="text-3xl font-['Space_Grotesk'] font-bold text-[#FDFBF7] mb-6 text-gradient-rich">PURE EFFICIENCY</h3>
                
                <ul className="space-y-6 text-[#FDFBF7]/80 font-medium">
                    <li className="flex gap-4 items-start">
                        <span className="text-xl mt-1">⚡</span>
                        <div>
                            <strong className="block text-[#FF8A75]">The 6-Message Payout</strong>
                            I don't drive anywhere. I send 6 specific text messages. I get $150. Instant. No refunds.
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="text-xl mt-1">🥛</span>
                        <div>
                            <strong className="block text-[#FF8A75]">Milking The Whale</strong>
                            Once they pay the $150, I own them. I can milk a single guy for $1,000 in 3 hours because I know exactly what he needs to hear.
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="text-xl mt-1">🧠</span>
                        <div>
                            <strong className="block text-[#FF8A75]">The "Bro" Advantage</strong>
                            Real girls are retarded. They don't know how to talk to men. I know what men like because I AM A MAN. I am the perfect girlfriend because I'm actually a dude.
                        </div>
                    </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-[#FDFBF7]/20 flex justify-between items-end">
                    <div>
                        <div className="text-[10px] uppercase tracking-widest opacity-50">Hourly Rate</div>
                        <div className="text-4xl font-bold font-['Space_Grotesk']">$330/hr</div>
                    </div>
                    <div className="text-right">
                         <div className="text-[10px] uppercase tracking-widest opacity-50">Effort</div>
                         <div className="text-xl font-bold text-[#2D9C8E]">Zero.</div>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};
