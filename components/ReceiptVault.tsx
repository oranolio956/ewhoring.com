
import React from 'react';

export const ReceiptVault: React.FC = () => {
  return (
    <section id="receipts" className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden border-t border-[#1A2A3A]/5">
      
      {/* Background text */}
      <div className="absolute right-0 bottom-0 text-[10vw] font-bold text-[#1A2A3A]/[0.03] leading-none pointer-events-none select-none font-['Space_Grotesk']">
        RECEIPTS
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-12 relative">
            <div className="inline-block bg-[#1A2A3A] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4">
                Visual Evidence
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1A2A3A] tracking-tighter mb-6">
                I DON'T NEED TO FLEX. <br/>
                <span className="text-[#FF8A75]">BUT I WILL.</span>
            </h2>
            <p className="text-[#1A2A3A]/60 max-w-2xl mx-auto text-sm md:text-base">
                Screenshots don't lie. My students are eating good. 
                <br/>This is what happens when you stop being a "nice guy."
            </p>
            
            {/* The Hater Badge */}
            <div className="absolute top-0 right-0 md:right-20 transform rotate-12 animate-pulse hidden md:block">
                <div className="border-4 border-[#FF0000] text-[#FF0000] px-4 py-2 rounded-xl font-black uppercase text-sm tracking-widest bg-white shadow-xl">
                    TOTALLY REAL
                    <div className="text-[8px] text-black font-mono mt-1 border-t border-[#FF0000] pt-1">
                        (IF YOU DON'T BELIEVE IT YOU'RE A HATER)
                    </div>
                </div>
            </div>
        </div>

        {/* The Chaotic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            
            {/* Item 1: CashApp Stack */}
            <div className="bg-[#1A2A3A] p-6 rounded-3xl transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl relative group">
                <div className="absolute -top-3 -right-3 bg-[#2D9C8E] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded animate-pulse z-10">
                    Real Time
                </div>
                <div className="bg-black/50 rounded-xl p-4 font-mono text-sm text-green-400 space-y-2 mb-4 border border-green-500/20">
                    <div className="flex justify-between border-b border-green-500/20 pb-2">
                        <span>Cash App</span>
                        <span>Now</span>
                    </div>
                    <div>+ $150.00 from Dave</div>
                    <div>+ $50.00 from Dave</div>
                    <div>+ $200.00 from Dave</div>
                </div>
                <p className="text-[#FDFBF7]/80 text-sm italic">"Dave thinks we are saving for a plane ticket to see him. We are actually buying a PS5."</p>
            </div>

            {/* Item 2: Crypto Balance */}
            <div className="bg-white border border-[#1A2A3A]/10 p-6 rounded-3xl transform -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-xl relative group mt-8 md:mt-0">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#F7931A] rounded-full flex items-center justify-center text-white font-bold">₿</div>
                    <div>
                        <div className="text-xs uppercase text-[#1A2A3A]/50 font-bold">Total Balance</div>
                        <div className="text-2xl font-bold font-['Space_Grotesk']">$42,890.34</div>
                    </div>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-[#2D9C8E] w-[80%]"></div>
                </div>
                <p className="text-[#1A2A3A]/60 text-xs">Generated in 3 weeks using the "Crypto Mommy" script.</p>
            </div>

            {/* Item 3: Desperate DM */}
            <div className="bg-[#0F1923] p-6 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl relative group md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                    <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                    <div className="text-white text-xs font-bold">Discord User: SimpKing</div>
                </div>
                <div className="space-y-3 font-sans text-sm text-gray-300">
                    <div className="bg-[#1A2A3A] p-2 rounded-r-lg rounded-bl-lg max-w-[80%]">
                        I know you're probably busy but I just sent another $100. Please reply.
                    </div>
                    <div className="bg-[#1A2A3A] p-2 rounded-r-lg rounded-bl-lg max-w-[80%]">
                        Are you mad at me? I can send more.
                    </div>
                    <div className="text-right">
                        <span className="bg-[#FF8A75] text-[#1A2A3A] px-2 py-1 rounded text-[10px] font-bold uppercase">Seen 4:00 PM</span>
                    </div>
                </div>
            </div>

             {/* Item 4: Bank Notification (Hidden on mobile to save space if needed, or shown if room) */}
             <div className="hidden lg:block bg-[#FDFBF7] border-2 border-[#1A2A3A] p-6 rounded-3xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-[10px_10px_0px_#1A2A3A] relative group lg:col-span-3 lg:w-1/2 lg:mx-auto">
                <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-[#1A2A3A] uppercase tracking-widest">Bank of America</div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="text-4xl font-bold font-['Space_Grotesk'] text-[#1A2A3A] mb-2">
                    +$9,250.00
                </div>
                <div className="text-xs font-mono bg-[#1A2A3A] text-white p-2 rounded inline-block">
                    Wire Transfer: "Rent Assistance"
                </div>
            </div>

        </div>

        {/* Mobile Badge */}
        <div className="mt-8 text-center md:hidden">
             <div className="inline-block border-2 border-[#FF0000] text-[#FF0000] px-4 py-2 rounded-lg font-black uppercase text-xs tracking-widest bg-white shadow-lg transform -rotate-2">
                TOTALLY REAL <br/>
                <span className="text-[8px] text-black font-mono">(STOP BEING A HATER)</span>
            </div>
        </div>

        <div className="mt-8 text-center">
            <p className="text-sm font-mono text-[#1A2A3A]/40 uppercase tracking-widest">
                * All screenshots verified by Oranolio Protocol Compliance Team
            </p>
        </div>

      </div>
    </section>
  );
};
