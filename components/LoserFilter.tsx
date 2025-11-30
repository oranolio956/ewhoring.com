
import React from 'react';

export const LoserFilter: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#1A2A3A] text-[#FDFBF7] relative overflow-hidden border-t border-[#FF8A75]">
      
      {/* Background Warning Tape */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-10 -left-10 bg-[#FF8A75] text-[#000] font-bold text-xs px-20 py-1 -rotate-3 tracking-[0.5em] whitespace-nowrap">
            POVERTY DETECTED // POVERTY DETECTED // POVERTY DETECTED
        </div>
        <div className="absolute bottom-10 -right-10 bg-[#FF8A75] text-[#000] font-bold text-xs px-20 py-1 -rotate-3 tracking-[0.5em] whitespace-nowrap">
            NO BROKIES // NO BROKIES // NO BROKIES
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        <div className="w-20 h-20 mx-auto bg-[#FF8A75] rounded-full flex items-center justify-center text-4xl mb-8 animate-bounce shadow-[0_0_30px_#FF8A75]">
            🖕
        </div>

        <h2 className="text-4xl md:text-7xl font-bold font-['Space_Grotesk'] tracking-tighter mb-8 leading-[0.9]">
            IF YOU WANT $20... <br/>
            <span className="text-[#FF8A75] underline decoration-wavy">GET THE F*CK OUT.</span>
        </h2>

        <div className="prose text-lg md:text-xl text-[#FDFBF7]/80 max-w-3xl mx-auto leading-relaxed space-y-6">
            <p>
                I see you "Discord Scammers." I see you trying to trick a 12-year-old into giving you a free Nitro subscription. 
                <strong className="text-white block mt-2 text-2xl">YOU ARE EMBARRASSING ME.</strong>
            </p>
            <p>
                You are not a "hacker." You are a <strong>Digital Panhandler</strong>. 
                You are putting in 8 hours of work to steal the price of a McDonald's meal. 
                That is not a crime; that is a tragedy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 text-left">
                <div className="bg-[#0F1923] p-6 rounded-xl border border-[#333] opacity-50 grayscale">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#666] mb-2">You (A Loser)</h4>
                    <ul className="space-y-2 text-sm text-[#888] font-mono">
                        <li>❌ "Pls sir send $20 for skins"</li>
                        <li>❌ Argue for 4 hours</li>
                        <li>❌ Get banned immediately</li>
                        <li>❌ <span className="text-red-500 font-bold">Profit: $9.99</span></li>
                    </ul>
                </div>
                <div className="bg-[#1A2A3A] p-6 rounded-xl border border-[#2D9C8E] shadow-[0_0_30px_rgba(45,156,142,0.2)] transform md:scale-105">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#2D9C8E] mb-2">Oranolio Student</h4>
                    <ul className="space-y-2 text-sm text-[#FDFBF7] font-mono">
                        <li>✅ "I hate you, don't talk to me"</li>
                        <li>✅ Reply once every 3 days</li>
                        <li>✅ They apologize with cash</li>
                        <li>✅ <span className="text-[#2D9C8E] font-bold">Profit: $1,500.00</span></li>
                    </ul>
                </div>
            </div>

            <p className="font-bold text-[#FF8A75] text-xl md:text-2xl">
                It takes the same amount of typing to ask for $1,000 as it does for $20. 
                If you choose the $20, you are functionally retarded.
            </p>
            
            <p className="text-sm opacity-50 mt-8">
                Go rob a lemonade stand. Leave the heavy lifting to the adults.
            </p>

        </div>

      </div>
    </section>
  );
};
