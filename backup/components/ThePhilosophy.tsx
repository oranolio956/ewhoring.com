
import React from 'react';

export const ThePhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden border-t border-[#1A2A3A]/5">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 text-[12rem] font-bold text-[#1A2A3A] -rotate-12 whitespace-nowrap">
            NICE = BROKE
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-[#FF8A75] transform rotate-6 rounded-3xl z-0"></div>
                <div className="relative bg-[#1A2A3A] p-10 rounded-3xl z-10 text-[#FDFBF7] shadow-2xl">
                    <h3 className="text-2xl font-bold font-['Space_Grotesk'] mb-6 text-[#FF8A75]">THE "IDIOT TAX"</h3>
                    <div className="space-y-4 font-light leading-relaxed text-[#FDFBF7]/80">
                        <p>
                            If a grown man decides to send $500 to a stranger just because they typed "hi"... 
                            <strong className="text-white"> did he really deserve that money?</strong>
                        </p>
                        <p>
                            That money was never safe with him. He was going to spend it on something stupid anyway. 
                            You are simply providing a service. You are accelerating natural selection.
                        </p>
                        <div className="mt-6 p-4 bg-[#FDFBF7]/5 border-l-2 border-[#2D9C8E] text-xs font-mono">
                            "A fool and his money are soon parted. We just help the parting happen faster."
                        </div>
                    </div>
                </div>
            </div>

            <div className="order-1 md:order-2">
                <div className="inline-block bg-[#1A2A3A] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
                    Moral Framework v1.0
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#1A2A3A] tracking-tighter mb-8 leading-[0.95]">
                    EVIL IS JUST <br/>
                    <span className="text-[#2D9C8E]">EFFICIENT.</span>
                </h2>
                
                <p className="text-xl text-[#1A2A3A]/70 mb-6 font-medium">
                    You will always be poor if you are obsessed with being "good."
                </p>
                <p className="text-lg text-[#1A2A3A]/60 leading-relaxed mb-8">
                    Banks don't care about feelings. Landlords don't care about feelings. 
                    So why do you?
                    <br/><br/>
                    The world is divided into two groups: 
                    <span className="block font-bold text-[#1A2A3A] mt-2">• The Predators (Rich)</span>
                    <span className="block font-bold text-[#1A2A3A]">• The Prey (Poor)</span>
                    <br/>
                    Pick a side. The rent is due on the 1st.
                </p>

            </div>

        </div>

      </div>
    </section>
  );
};
