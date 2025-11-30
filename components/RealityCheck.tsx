
import React from 'react';

export const RealityCheck: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden border-t border-[#1A2A3A]/5">
      
      {/* Background aggression */}
      <div className="absolute -left-20 top-0 text-[20vw] font-bold text-[#1A2A3A]/[0.02] font-['Space_Grotesk'] leading-none select-none pointer-events-none">
        NO REFUNDS
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            
            {/* Column 1: The Call Out */}
            <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-1 bg-[#1A2A3A]"></div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A2A3A]">This Is Not A "Course"</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-[#1A2A3A] tracking-tighter mb-8 leading-[0.95]">
                    I PROVIDE THE TRAFFIC. <br/>
                    <span className="text-[#FF8A75]">YOU PROVIDE THE BRAIN.</span>
                </h2>

                <div className="space-y-6 text-[#1A2A3A]/80 text-lg leading-relaxed font-medium">
                    <p>
                        Let's get something straight. I am not here to hold your hand. 
                        I am not here to teach you how to type on a keyboard.
                    </p>
                    <p>
                        I can show you exactly where the traffic is (millions of thirsty men). 
                        I can give you the exact scripts that extracted $30k/month. 
                        But if you <strong>suck at talking</strong>, you will make $0.
                    </p>
                    <p className="p-4 bg-[#1A2A3A]/5 border-l-4 border-[#1A2A3A] text-sm md:text-base italic">
                        "If you are too stupid to follow step-by-step instructions, that is a biological failure on your part, not a flaw in my protocol."
                    </p>
                </div>

                <div className="mt-8 pt-8 border-t border-[#1A2A3A]/10">
                    <h4 className="text-xl font-bold text-[#1A2A3A] mb-2 font-['Space_Grotesk']">CHECK YOUR EGO</h4>
                    <p className="text-[#1A2A3A]/60 text-sm">
                        If your "current method" was working, you wouldn't be scrolling through my website right now. 
                        You are here because you are stuck. I am here because I have the map. 
                        <span className="text-[#2D9C8E] font-bold"> Know your place.</span>
                    </p>
                </div>
            </div>

            {/* Column 2: The Contract / Visual */}
            <div className="relative">
                <div className="absolute inset-0 bg-[#1A2A3A] transform rotate-3 rounded-3xl opacity-5"></div>
                <div className="relative bg-[#1A2A3A] text-[#FDFBF7] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col gap-8">
                    
                    <div className="border-b border-[#FDFBF7]/20 pb-6 flex justify-between items-end">
                        <div>
                            <div className="text-[#FF8A75] text-xs font-bold uppercase tracking-widest mb-1">Agreement</div>
                            <div className="text-3xl font-['Space_Grotesk'] font-bold">THE DEAL</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] opacity-50 uppercase">Status</div>
                            <div className="text-[#2D9C8E] font-mono font-bold">NON-NEGOTIABLE</div>
                        </div>
                    </div>

                    <div className="space-y-4 font-mono text-sm md:text-base">
                        <div className="flex gap-4 items-start opacity-50">
                            <div className="mt-1">❌</div>
                            <div>
                                <span className="block font-bold">I WILL NOT:</span>
                                Fix your spelling, teach you charisma, or listen to you complain.
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 text-[#2D9C8E]">✅</div>
                            <div>
                                <span className="block font-bold text-[#2D9C8E]">I WILL:</span>
                                Show you the exact traffic vectors.
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 text-[#2D9C8E]">✅</div>
                            <div>
                                <span className="block font-bold text-[#2D9C8E]">I WILL:</span>
                                Give you the exact copy/paste scripts.
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 text-[#2D9C8E]">✅</div>
                            <div>
                                <span className="block font-bold text-[#2D9C8E]">I WILL:</span>
                                Teach you how to cash out without getting banned.
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FDFBF7]/10 p-4 rounded-xl text-center mt-auto">
                        <p className="text-xs uppercase tracking-widest opacity-70 mb-2">Final Warning</p>
                        <p className="font-bold text-[#FF8A75]">
                            WEALTH REQUIRES SOCIAL IQ. <br/>
                            IF YOU DON'T HAVE IT, DON'T BUY THIS.
                        </p>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
