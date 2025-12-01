
import React from 'react';
import { usePayment } from '../contexts/PaymentContext';

export const FalseIdols: React.FC = () => {
  const { openPayment } = usePayment();
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden border-t border-[#1A2A3A]/5">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#FF8A75] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: The Roast */}
            <div>
                <div className="inline-block bg-[#1A2A3A] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
                    De-Programming
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#1A2A3A] tracking-tighter mb-6 leading-[0.95]">
                    FORGET THE <br/>
                    <span className="text-[#FF8A75]">BALD MAN.</span>
                </h2>
                
                <div className="prose text-[#1A2A3A]/70 text-lg leading-relaxed mb-8">
                    <p>
                        He wants you to do pushups, smoke cigars, and shout at women. 
                        <strong className="text-[#1A2A3A]"> That sounds like a lot of work.</strong>
                    </p>
                    <p>
                        Why escape the Matrix when you can just hack it? 
                        He asks "What color is your Bugatti?" 
                        I ask "Why are you working so hard?"
                    </p>
                </div>

                {/* Real Talk Bullets */}
                <div className="bg-white border border-[#1A2A3A]/10 rounded-2xl p-8 shadow-lg">
                    <div className="space-y-4 text-[#1A2A3A]">
                        <div className="flex items-start gap-3">
                            <span className="text-[#FF8A75] font-bold text-lg">💀</span>
                            <div>
                                <div className="font-bold text-sm uppercase tracking-widest mb-1">THEM:</div>
                                <p className="text-sm opacity-70">"Grind 18 hours a day, post shirtless gym selfies, yell about discipline"</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-[#2D9C8E] font-bold text-lg">💰</span>
                            <div>
                                <div className="font-bold text-sm uppercase tracking-widest mb-1">ME:</div>
                                <p className="text-sm">"Put on cheap wig, say 'good morning daddy', get $200 for coffee money"</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-[#FF8A75] font-bold text-lg">💀</span>
                            <div>
                                <div className="font-bold text-sm uppercase tracking-widest mb-1">THEM:</div>
                                <p className="text-sm opacity-70">"Get canceled for saying the wrong thing, beg for forgiveness"</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-[#2D9C8E] font-bold text-lg">💰</span>
                            <div>
                                <div className="font-bold text-sm uppercase tracking-widest mb-1">ME:</div>
                                <p className="text-sm">"Stay completely anonymous, collect payments, never get doxxed"</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-[#FF8A75] font-bold text-lg">💀</span>
                            <div>
                                <div className="font-bold text-sm uppercase tracking-widest mb-1">THEM:</div>
                                <p className="text-sm opacity-70">"Fight with haters online, lose followers, spiral into depression"</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-[#2D9C8E] font-bold text-lg">💰</span>
                            <div>
                                <div className="font-bold text-sm uppercase tracking-widest mb-1">ME:</div>
                                <p className="text-sm">"Ignore drama, focus on whales, buy Lambos with their money"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: The Caricature */}
            <div className="relative flex justify-center w-full">
                
                {/* Speech Bubble */}
                <div className="absolute top-0 right-0 md:right-10 bg-[#1A2A3A] text-white p-4 rounded-xl rounded-bl-none transform -rotate-6 z-20 shadow-xl max-w-[clamp(120px,30vw,140px)] sm:max-w-[clamp(140px,35vw,160px)] md:max-w-[clamp(160px,40vw,200px)]">
                    <p className="text-[10px] md:text-xs font-mono font-bold uppercase">
                        "BREATHE AIR! YOU DON'T NEED MONEY YOU NEED SPARKLING WATER!"
                    </p>
                </div>

                {/* The Character SVG - Constrained Width */}
                <svg viewBox="0 0 400 400" className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300">
                    <defs>
                        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#E0AC69" />
                            <stop offset="100%" stopColor="#C68E56" />
                        </linearGradient>
                    </defs>

                    {/* Bald Head */}
                    <path d="M100 350 L100 200 Q100 50 200 50 Q300 50 300 200 L300 350 Z" fill="url(#skin)" stroke="#1A2A3A" strokeWidth="4" />

                    {/* Ears */}
                    <path d="M90 200 Q70 200 70 230 Q70 260 100 260" fill="url(#skin)" stroke="#1A2A3A" strokeWidth="4" />
                    <path d="M310 200 Q330 200 330 230 Q330 260 300 260" fill="url(#skin)" stroke="#1A2A3A" strokeWidth="4" />

                    {/* Sunglasses */}
                    <g transform="translate(0, 10)">
                        <rect x="130" y="180" width="60" height="30" rx="5" fill="#1A2A3A" />
                        <rect x="210" y="180" width="60" height="30" rx="5" fill="#1A2A3A" />
                        <line x1="190" y1="195" x2="210" y2="195" stroke="#1A2A3A" strokeWidth="4" />
                        <line x1="100" y1="190" x2="130" y2="190" stroke="#1A2A3A" strokeWidth="4" />
                        <line x1="270" y1="190" x2="300" y2="190" stroke="#1A2A3A" strokeWidth="4" />

                        {/* Reflection */}
                        <path d="M135 185 L150 205" stroke="white" strokeWidth="2" opacity="0.3" />
                        <path d="M215 185 L230 205" stroke="white" strokeWidth="2" opacity="0.3" />
                    </g>

                    {/* Mouth / Chin */}
                    <path d="M180 280 Q200 290 220 280" fill="none" stroke="#1A2A3A" strokeWidth="3" />

                    {/* Beard Stubble */}
                    <path d="M150 280 Q200 330 250 280" fill="#1A2A3A" fillOpacity="0.1" />

                    {/* Cigar */}
                    <rect x="220" y="275" width="80" height="15" fill="#5D4037" rx="2" transform="rotate(10 220 275)" stroke="#1A2A3A" strokeWidth="2" />
                    <rect x="290" y="287" width="5" height="15" fill="#9E9E9E" transform="rotate(10 220 275)" />

                    {/* Smoke */}
                    <circle cx="320" cy="270" r="10" fill="#E0E0E0" opacity="0.5" className="animate-ping" />
                    <circle cx="340" cy="250" r="15" fill="#E0E0E0" opacity="0.3" className="animate-ping" style={{animationDelay: '0.5s'}} />

                    {/* Name Tag */}
                    <rect x="150" y="350" width="100" height="40" fill="#FF8A75" rx="5" stroke="#1A2A3A" strokeWidth="3" />
                    <text x="200" y="375" textAnchor="middle" fontSize="16" fontWeight="bold" fontFamily="monospace" fill="#1A2A3A">BOTTOM G</text>
                </svg>

            </div>

        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <button
            onClick={openPayment}
            className="bg-[#FF8A75] text-[#1A2A3A] px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#1A2A3A] hover:text-[#FDFBF7] transition-all shadow-xl hover:scale-105 transform duration-200 btn-glitch text-sm md:text-base cursor-pointer"
          >
            DOWNLOAD THE BRAIN →
          </button>
          <p className="text-xs text-[#FDFBF7]/60 mt-2 font-mono">
            The sauce that turns losers into winners
          </p>
        </div>
      </div>
    </section>
  );
};
