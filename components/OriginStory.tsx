
import React from 'react';

export const OriginStory: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden border-b border-[#1A2A3A]/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: The Narrative */}
        <div className="relative z-10">
          <div className="inline-block bg-[#FF8A75] text-[#1A2A3A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6 transform -rotate-2">
            The Infinite Money Glitch
          </div>
          
          <h2 className="text-4xl md:text-7xl font-bold text-[#1A2A3A] tracking-tighter mb-8 leading-[0.9]">
            I REALIZED MEN <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D9C8E] to-[#1A2A3A]">
              WANT TO BE LIED TO.
            </span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-[#1A2A3A]/80 font-medium leading-relaxed">
            <p>
              It started with 8 pizzas in 2014. But then I realized something darker: <br/>
              <span className="bg-[#1A2A3A] text-[#FDFBF7] px-1">Men don't want supermodels. They want problems.</span>
            </p>
            
            <p>
              From 2019 to 2022, I made <strong>$30,000 a month</strong>. Not by being "sexy." 
              But by acting like a <span className="text-[#FF8A75] font-bold">"retarded autistic girl with daddy issues."</span>
            </p>
            
            <p className="border-l-4 border-[#2D9C8E] pl-6 italic text-[#1A2A3A]/60 text-base md:text-lg">
              "I would just spam them with nonsense. Typos. Emojis. Trauma dumps.
              It triggered their biological 'White Knight' instinct. They didn't want to date me; 
              they wanted to <em className="not-italic font-bold text-[#1A2A3A]">save</em> me."
            </p>
            
            <p>
              The funniest part? <strong className="text-[#2D9C8E]">They loved it.</strong> 
              I was the best relationship they ever had. They were sending thousands to 'fix' my life, 
              and in return, I (a grown man in a gaming chair) gave them a sense of purpose. 
              <br/><br/>
              I wasn't scamming them. I was providing <em>emotional support</em>. Expensive emotional support.
            </p>
          </div>

          <div className="mt-8 flex gap-8">
             <div className="flex flex-col">
                <span className="text-4xl font-['Space_Grotesk'] font-bold text-[#1A2A3A]">$30K</span>
                <span className="text-[10px] uppercase tracking-widest text-[#1A2A3A]/40">Monthly Avg (2019-22)</span>
             </div>
             <div className="w-px bg-[#1A2A3A]/10"></div>
             <div className="flex flex-col">
                <span className="text-4xl font-['Space_Grotesk'] font-bold text-[#2D9C8E]">∞</span>
                <span className="text-[10px] uppercase tracking-widest text-[#1A2A3A]/40">Dudes "Saving" Me</span>
             </div>
          </div>
        </div>

        {/* Right: Visual Proof / The "Save Her" Graph */}
        <div className="relative h-full min-h-[400px] flex items-center justify-center">
            
            <div className="relative w-full max-w-md aspect-square bg-white border-2 border-[#1A2A3A] p-6 shadow-[8px_8px_0px_#1A2A3A] rotate-1">
                {/* Fake Graph */}
                <div className="absolute -top-4 -left-4 bg-[#FF8A75] text-[#1A2A3A] px-4 py-2 text-xs font-bold uppercase tracking-widest border border-[#1A2A3A] shadow-sm transform -rotate-3">
                    The "White Knight" Curve
                </div>

                <div className="h-full flex flex-col justify-between pt-8">
                    <div className="flex items-end justify-between h-48 gap-2 relative border-b-2 border-[#1A2A3A] pb-0">
                        {/* Bars */}
                        <div className="w-1/4 bg-[#1A2A3A]/10 h-[20%] relative group">
                            <div className="absolute bottom-full left-0 w-full text-center text-[10px] mb-1 font-mono">Normal</div>
                        </div>
                        <div className="w-1/4 bg-[#1A2A3A]/30 h-[40%] relative group">
                            <div className="absolute bottom-full left-0 w-full text-center text-[10px] mb-1 font-mono">Hot</div>
                        </div>
                        <div className="w-1/4 bg-[#2D9C8E] h-[100%] relative group">
                            <div className="absolute top-2 left-0 w-full text-center text-white font-bold text-xs animate-pulse">$$$</div>
                            <div className="absolute bottom-full left-0 w-full text-center text-[10px] mb-1 font-mono font-bold text-[#2D9C8E]">"Broken"</div>
                        </div>
                    </div>
                    <div className="text-center text-xs font-mono uppercase text-[#1A2A3A]/60 mt-4">
                        How dumb they act vs. How many issues you have
                    </div>
                </div>

                {/* Sticker */}
                <div className="absolute -bottom-8 -right-8 bg-[#F4D35E] text-[#1A2A3A] w-32 h-32 rounded-full flex items-center justify-center text-center p-4 shadow-xl border-4 border-[#1A2A3A] animate-float">
                    <div className="leading-tight transform rotate-6">
                        <div className="font-['Space_Grotesk'] text-4xl font-bold">100%</div>
                        <div className="text-[10px] uppercase tracking-widest font-bold">Profit Margin</div>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};
