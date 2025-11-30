
import React from 'react';

export const PricingTerminal: React.FC = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#1A2A3A] text-[#00FF00] font-mono relative overflow-hidden border-t border-[#00FF00]/20">
      
      {/* Matrix Rain Effect (Static CSS implementation for performance) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .3) 25%, rgba(0, 255, 0, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .3) 75%, rgba(0, 255, 0, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, .3) 25%, rgba(0, 255, 0, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .3) 75%, rgba(0, 255, 0, .3) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white font-['Space_Grotesk'] tracking-tighter mb-4">
                DEPLOY <span className="text-[#00FF00]">THE GRIFT</span>
            </h2>
            <p className="text-[#00FF00]/60 uppercase tracking-widest text-xs">
                Target: Global Male Population • Protocol: ACTIVE
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* TERMINAL UI */}
            <div className="lg:col-span-2 bg-[#0F1923] border border-[#00FF00]/30 rounded-xl p-6 md:p-8 shadow-[0_0_50px_rgba(0,255,0,0.1)] relative overflow-hidden">
                
                {/* Header Bar */}
                <div className="flex items-center gap-2 mb-6 border-b border-[#00FF00]/20 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-auto text-xs opacity-50">bash --login oranolio_protocol</div>
                </div>

                <div className="space-y-4 text-sm md:text-base leading-relaxed">
                    <p>&gt; <span className="text-white">Loading modules...</span></p>
                    <p>&gt; [OK] Simp_Farming_v2.exe</p>
                    <p>&gt; [OK] Voice_Changer_Pro.exe</p>
                    <p>&gt; [OK] Whale_Radar_Global.dat</p>
                    <p>&gt; <span className="text-white">Verifying User Competence...</span></p>
                    <p className="text-yellow-500 font-bold">&gt; WARNING: Social Engineering Skill Required.</p>
                    <p className="text-red-500 opacity-80 italic">&gt; [CHECK] If you are a retard, this transaction will fail.</p>
                    <p>&gt; <span className="text-white">Calculating market value...</span> $4,500.00</p>
                    <p>&gt; <span className="text-white">Applying "Broke Loser" discount...</span></p>
                    <p className="animate-pulse">&gt; FINAL PRICE: $150.00</p>
                    
                    <div className="mt-8 pt-8 border-t border-[#00FF00]/20">
                        <div className="flex justify-between items-end mb-4">
                            <span className="text-white font-bold text-xl">TOTAL ACCESS:</span>
                            <span className="text-4xl md:text-5xl font-bold text-[#00FF00]">$150</span>
                        </div>
                        <button className="w-full bg-[#00FF00] text-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors animate-pulse hover:animate-none">
                            [ EXECUTE TRANSACTION ]
                        </button>
                        <p className="text-[10px] mt-4 text-center opacity-50">
                            *By clicking execute, you certify that you know how to be a piece of shit. No refunds for incompetence.
                        </p>
                    </div>
                </div>

            </div>

            {/* SOLD OUT TIER (Price Anchoring) */}
            <div className="bg-[#0F1923] border border-red-500/30 rounded-xl p-6 relative opacity-70 hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="border-4 border-red-500 text-red-500 px-6 py-2 font-black text-2xl uppercase tracking-widest transform -rotate-12 bg-black">
                        SOLD OUT
                    </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">1-on-1 Mentorship</h3>
                <div className="text-3xl font-bold text-red-500 line-through mb-4">$5,000</div>
                
                <ul className="space-y-3 text-sm opacity-50 font-sans">
                    <li>❌ Private Telegram Access</li>
                    <li>❌ Profile Audit</li>
                    <li>❌ 24/7 Support</li>
                    <li>❌ "Done For You" Setup</li>
                </ul>

                <div className="mt-6 p-3 bg-red-900/20 border border-red-500/20 text-xs text-red-400">
                    ERROR: Capacity Reached. I do not have time to teach basics to new people.
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};
