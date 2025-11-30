
import React from 'react';

export const RealityCheck: React.FC = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden border-t border-[#1A2A3A]/5">
      
      {/* Background aggression */}
      <div className="absolute -left-20 top-0 text-[20vw] font-bold text-[#1A2A3A]/[0.02] font-['Space_Grotesk'] leading-none select-none pointer-events-none">
        NO REFUNDS
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
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
                    <div className="p-4 bg-[#FF0000]/5 border-l-4 border-[#FF0000] text-sm md:text-base">
                        <strong className="block text-[#FF0000] uppercase text-xs tracking-widest mb-1">Skill Check:</strong>
                        <p className="italic">
                            "If you are new to the internet, or generally clueless about human psychology, DO NOT BUY THIS. 
                            This is for people who already know how to be deceptive but lack the traffic."
                        </p>
                    </div>
                </div>

                {/* VOCABULARY FILTER */}
                <div className="mt-8 pt-8 border-t border-[#1A2A3A]/10">
                    <h4 className="text-xl font-bold text-[#1A2A3A] mb-4 font-['Space_Grotesk'] uppercase flex items-center gap-2">
                        <span className="text-[#FF8A75]">🚫</span> Vocabulary Filter
                    </h4>
                    <p className="text-[#1A2A3A]/80 text-sm mb-4 font-bold">
                        Do NOT ever use these terms in my presence. If you speak like a "Discord Kid," you are banned immediately.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#1A2A3A] text-[#FDFBF7] px-3 py-2 rounded text-xs font-mono flex justify-between">
                            <span>"PMO" (Put Me On)</span>
                            <span className="text-[#FF8A75]">BANNED</span>
                        </div>
                        <div className="bg-[#1A2A3A] text-[#FDFBF7] px-3 py-2 rounded text-xs font-mono flex justify-between">
                            <span>"Motion"</span>
                            <span className="text-[#FF8A75]">BANNED</span>
                        </div>
                        <div className="bg-[#1A2A3A] text-[#FDFBF7] px-3 py-2 rounded text-xs font-mono flex justify-between">
                            <span>"Let's Cook"</span>
                            <span className="text-[#FF8A75]">BANNED</span>
                        </div>
                        <div className="bg-[#1A2A3A] text-[#FDFBF7] px-3 py-2 rounded text-xs font-mono flex justify-between">
                            <span>"Sauce"</span>
                            <span className="text-[#FF8A75]">BANNED</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Column 2: The Contract / Visual */}
            <div className="relative">
                <div className="absolute inset-0 bg-[#1A2A3A] transform rotate-3 rounded-3xl opacity-5"></div>
                <div className="relative bg-[#1A2A3A] text-[#FDFBF7] p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col gap-8 overflow-hidden">
                    
                    {/* Watermark branding */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-[0.03] pointer-events-none transform -rotate-45">
                        <div className="text-6xl font-bold whitespace-nowrap">ORANOLIO</div>
                        <div className="text-4xl font-mono">NON-DISCLOSURE</div>
                    </div>

                    <div className="border-b border-[#FDFBF7]/20 pb-6 flex justify-between items-end relative z-10">
                        <div>
                            <div className="text-[#FF8A75] text-xs font-bold uppercase tracking-widest mb-1">Agreement</div>
                            <div className="text-3xl font-['Space_Grotesk'] font-bold">THE DEAL</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] opacity-50 uppercase">Status</div>
                            <div className="text-[#2D9C8E] font-mono font-bold">NON-NEGOTIABLE</div>
                        </div>
                    </div>

                    <div className="space-y-4 font-mono text-sm md:text-base relative z-10">
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
                        
                        {/* Legal Insert */}
                        <div className="p-3 bg-red-900/30 border border-red-500/30 rounded mt-4 text-[10px] leading-tight">
                            <strong>LEGAL NOTICE:</strong> By accessing this information, you agree that you are solely responsible for your actions. This is educational material. We are not responsible if you get banned from Discord for being "too effective."
                        </div>
                    </div>

                    <div className="bg-[#FDFBF7]/10 p-4 rounded-xl text-center mt-auto relative z-10">
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
