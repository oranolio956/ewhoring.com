
import React from 'react';
import { usePayment } from '../contexts/PaymentContext';

export const PricingTerminal: React.FC = () => {
  const { openPayment } = usePayment();
  
  return (
    <section id="pricing" className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#1A2A3A] text-[#00FF00] font-mono relative overflow-hidden border-t border-[#00FF00]/20">
      
      {/* Matrix Rain Effect (Static CSS implementation for performance) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .3) 25%, rgba(0, 255, 0, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .3) 75%, rgba(0, 255, 0, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, .3) 25%, rgba(0, 255, 0, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .3) 75%, rgba(0, 255, 0, .3) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white font-['Space_Grotesk'] tracking-tighter mb-4 drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">
                RECOVERY <span className="text-[#00FF00]">SERVICE TIERS</span>
            </h2>
            <p className="text-[#00FF00]/60 uppercase tracking-widest text-xs">
                Professional Support • Certified Specialists • Money Recovery Not Guaranteed
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* TERMINAL UI */}
            <div className="lg:col-span-2 bg-[#0F1923] border border-[#00FF00]/30 rounded-xl p-6 md:p-8 shadow-[0_0_50px_rgba(0,255,0,0.1)] relative overflow-hidden w-full">
                
                {/* Header Bar */}
                <div className="flex items-center gap-2 mb-6 border-b border-[#00FF00]/20 pb-4">
                    <div className="text-[#00FF00] text-xs font-bold">RECOVERY@TERMINAL:~$</div>
                    <div className="ml-auto text-xs opacity-50 truncate">recovery_protocol.exe</div>
                </div>

                <div className="space-y-4 text-sm md:text-base leading-relaxed break-words drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">
                    <p>&gt; <span className="text-white">Initializing Recovery Protocol...</span></p>
                    <p>&gt; [OK] Emotional_Support_Module.exe</p>
                    <p>&gt; [OK] Trauma_Processing.dat</p>
                    <p>&gt; [OK] Red_Flag_Identification.sys</p>
                    <p className="text-[#00FF00]/50">&gt; Checking Recovery Capabilities...</p>
                    <p className="text-yellow-500">&gt; [WARNING] Money Recovery: NOT GUARANTEED</p>
                    <p className="text-[#00FF00]">&gt; [OK] Feelings Recovery: 100% GUARANTEED*</p>
                    <p>&gt; <span className="text-white">Verifying Victim Status...</span></p>
                    <p className="text-yellow-500 font-bold">&gt; WARNING: Consultation Fee Required.</p>
                    <p className="text-red-500 opacity-80 italic">&gt; [CHECK] If you want actual money back, this service will fail.</p>
                    <p>&gt; <span className="text-white">Calculating recovery value...</span> $0.00</p>
                    <p>&gt; <span className="text-white">Applying "Professional Support" fee...</span></p>
                    <p className="animate-pulse">&gt; CONSULTATION PRICE: $299.00</p>
                    
                    <div className="mt-8 pt-8 border-t border-[#00FF00]/20">
                        <div className="flex justify-between items-end mb-4">
                            <span className="text-white font-bold text-xl">BASIC RECOVERY:</span>
                            <span className="text-4xl md:text-5xl font-bold text-[#00FF00]">$299</span>
                        </div>
                        <div className="text-xs text-[#00FF00]/60 mb-4 space-y-1">
                            <p>✓ 30-minute consultation call</p>
                            <p>✓ Emotional support (via email)</p>
                            <p>✓ Red flag identification guide (PDF)</p>
                            <p>✓ "What Went Wrong" analysis</p>
                            <p className="text-red-500">✗ Money recovery: NOT INCLUDED</p>
                        </div>
                        <button
                            onClick={openPayment}
                            className="w-full bg-[#00FF00] text-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors animate-pulse hover:animate-none text-sm md:text-base shadow-[0_0_20px_#00FF00] cursor-pointer"
                        >
                            START RECOVERY (PAY $299)
                        </button>
                        <p className="text-[10px] mt-4 text-center opacity-50">
                            *By clicking, you understand we cannot recover your money. We can only help you feel better about losing it. No refunds.
                        </p>
                    </div>
                </div>
                
                {/* Subtle Branding */}
                <div className="absolute bottom-2 right-2 text-[8px] text-[#00FF00]/10 font-mono pointer-events-none">
                    ORANOLIO_SYSTEMS_LLC
                </div>

            </div>

            {/* PREMIUM TIER (Price Anchoring) */}
            <div className="bg-[#0F1923] border border-[#00FF00]/50 rounded-xl p-6 relative w-full">
                <div className="absolute -top-3 -right-3 bg-[#00FF00] text-black px-3 py-1 text-xs font-black uppercase tracking-widest transform rotate-12 z-10">
                    PREMIUM
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">VIP Recovery Package</h3>
                <div className="text-3xl font-bold text-[#00FF00] mb-4">$999</div>
                
                <ul className="space-y-3 text-sm font-sans text-white/80">
                    <li>✓ 2-hour consultation call</li>
                    <li>✓ Weekly check-ins (for 1 month)</li>
                    <li>✓ Advanced trauma processing</li>
                    <li>✓ Custom recovery plan (PDF)</li>
                    <li>✓ Priority email support</li>
                    <li className="text-red-500">✗ Still no money recovery</li>
                </ul>

                <button
                    onClick={openPayment}
                    className="w-full mt-6 bg-[#00FF00]/20 border-2 border-[#00FF00] text-[#00FF00] font-bold py-3 uppercase tracking-widest hover:bg-[#00FF00] hover:text-black transition-colors text-sm cursor-pointer"
                >
                    UPGRADE TO VIP
                </button>
                
                <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-500/20 text-xs text-yellow-400">
                    ⚠️ Premium tier includes more emotional support, but still cannot recover your money. Terms apply.
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};
