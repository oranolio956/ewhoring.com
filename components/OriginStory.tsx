
import React from 'react';

export const OriginStory: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden border-b border-[#1A2A3A]/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
          <div className="inline-block bg-[#FF8A75] text-[#1A2A3A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6 transform -rotate-2">
            Evolution of the Glitch
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-[#1A2A3A] tracking-tighter mb-8 leading-[0.9]">
            IT WAS NEVER HARD. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D9C8E] to-[#1A2A3A]">
              IT JUST GOT FASTER.
            </span>
          </h2>
          <p className="text-xl text-[#1A2A3A]/60 max-w-2xl mx-auto">
            Let's get one thing straight: <span className="text-[#1A2A3A] font-bold">I have never worked hard a day in my life.</span> <br/>
            Making $1k/day back then was easy. Making $30k/mo now is effortless. It's just a software update.
          </p>
        </div>

        {/* The Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* The Old Way */}
            <div className="bg-[#1A2A3A]/5 p-8 md:p-12 rounded-3xl relative overflow-hidden border border-[#1A2A3A]/10 group hover:bg-[#1A2A3A]/10 transition-colors">
                <div className="absolute top-0 right-0 bg-[#1A2A3A] text-[#FDFBF7] px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-bl-xl">
                    Method v1.0 (2014-2019)
                </div>
                <h3 className="text-3xl font-['Space_Grotesk'] font-bold text-[#1A2A3A] mb-6 opacity-50">THE VOLUME GAME</h3>
                
                <ul className="space-y-6 text-[#1A2A3A]/70 font-medium">
                    <li className="flex gap-4">
                        <span className="text-xl">📦</span>
                        <div>
                            <strong className="block text-[#1A2A3A]">Selling Dropboxes</strong>
                            It was literally free money. I'd sell a folder of pics for $20 to 50 guys a day. $1,000 daily for copying and pasting a link. A monkey could do it.
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-xl">↩️</span>
                        <div>
                            <strong className="block text-[#1A2A3A]">Fake Refunds</strong>
                            "Oops, the link didn't work? Send another $20." They fell for it every time. It wasn't hard work, it was just... repetitive.
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="text-xl">📍</span>
                        <div>
                            <strong className="block text-[#1A2A3A]">The Meetup Bait</strong>
                            "Meet me at Starbucks for $200." They drive an hour. I block them. Easy cash, but too many moving parts. I got bored of the notifications.
                        </div>
                    </li>
                </ul>
            </div>

            {/* The New Way (2025) */}
            <div className="bg-[#1A2A3A] p-8 md:p-12 rounded-3xl relative overflow-hidden text-[#FDFBF7] shadow-2xl transform lg:-translate-y-4">
                <div className="absolute top-0 right-0 bg-[#FF8A75] text-[#1A2A3A] px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-bl-xl animate-pulse">
                    Method v2.0 (Present Day)
                </div>
                <h3 className="text-3xl font-['Space_Grotesk'] font-bold text-[#FDFBF7] mb-6 text-gradient-rich">THE WHALE HUNT</h3>
                
                <ul className="space-y-6 text-[#FDFBF7]/80 font-medium">
                    <li className="flex gap-4 items-start">
                        <span className="text-xl mt-1">🎯</span>
                        <div>
                            <strong className="block text-[#FF8A75]">Quality Over Quantity</strong>
                            Why talk to 50 broke losers for $20 when I can talk to ONE rich loser for $1,500? Same amount of typing, 100x the profit.
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="text-xl mt-1">⏳</span>
                        <div>
                            <strong className="block text-[#FF8A75]">The 2-Hour Milk</strong>
                            I send 6 messages. He sends $150. I ignore him for 3 days. He sends another $200 to get my attention. It's passive income with a pulse.
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="text-xl mt-1">🧠</span>
                        <div>
                            <strong className="block text-[#FF8A75]">Men Prefer Men</strong>
                            I stopped trying to act "real." I realized being a demanding, bratty e-girl works better. And nobody does that better than a dude who knows exactly what men want.
                        </div>
                    </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-[#FDFBF7]/20 flex justify-between items-end">
                    <div>
                        <div className="text-[10px] uppercase tracking-widest opacity-50">Effort Level</div>
                        <div className="text-4xl font-bold font-['Space_Grotesk']">Zero.</div>
                    </div>
                    <div className="text-right">
                         <div className="text-[10px] uppercase tracking-widest opacity-50">Bank Account</div>
                         <div className="text-xl font-bold text-[#2D9C8E]">Full.</div>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};
