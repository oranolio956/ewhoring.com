
import React from 'react';

export const SideEffects: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#1A2A3A] relative overflow-hidden border-t border-[#FDFBF7]/10">
      
      <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden border border-[#FDFBF7]/10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* LEFT SIDE: THE FLAWS (Medical Warning) */}
            <div className="bg-[#0F1923] p-8 md:p-16 relative overflow-hidden flex flex-col justify-between min-h-[600px]">
                
                {/* Background "Powder" Particles */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {[...Array(30)].map((_, i) => (
                        <div 
                           key={i} 
                           className="absolute bg-white rounded-full opacity-40 animate-[fall_3s_linear_infinite]"
                           style={{
                               width: Math.random() * 4 + 1 + 'px',
                               height: Math.random() * 4 + 1 + 'px',
                               left: Math.random() * 100 + '%',
                               top: -10 + 'px',
                               animationDelay: Math.random() * 5 + 's',
                               animationDuration: Math.random() * 2 + 2 + 's'
                           }}
                        ></div>
                    ))}
                    <style>{`
                        @keyframes fall {
                            to { transform: translateY(600px); opacity: 0; }
                        }
                    `}</style>
                </div>

                <div className="relative z-10">
                    <div className="inline-block border border-[#FF4500] text-[#FF4500] px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 bg-[#FF4500]/10 rounded">
                        ⚠ Medical Warning
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold text-[#FDFBF7] font-['Space_Grotesk'] mb-8">
                        POSSIBLE <br/>
                        SIDE EFFECTS
                    </h3>
                    <ul className="space-y-4 font-mono text-sm md:text-base text-[#FDFBF7]/60">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#FF4500] rounded-full"></span>
                            Severe Dopamine Desensitization
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#FF4500] rounded-full"></span>
                            Dissociation from Reality
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#FF4500] rounded-full"></span>
                            Existential Dread
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#FF4500] rounded-full"></span>
                            Substance Abuse Issues
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#FF4500] rounded-full"></span>
                            God Complex
                        </li>
                    </ul>
                </div>

                {/* The Character */}
                <div className="relative z-10 mt-12 flex justify-center">
                    <svg viewBox="0 0 300 300" className="w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl">
                        {/* Body */}
                        <path d="M150 280 Q100 280 80 350 L220 350 Q200 280 150 280" fill="#374151" />
                        
                        {/* Head */}
                        <circle cx="150" cy="180" r="70" fill="#E5E7EB" />
                        
                        {/* Messy Hair */}
                        <path d="M80 160 Q150 100 220 160 Q200 120 150 120 Q100 120 80 160" fill="#1F2937" />
                        <path d="M130 130 L120 110 M150 125 L155 105 M170 130 L180 110" stroke="#1F2937" strokeWidth="2" />

                        {/* Tired Eyes */}
                        <circle cx="125" cy="170" r="15" fill="#000" opacity="0.1" />
                        <circle cx="175" cy="170" r="15" fill="#000" opacity="0.1" />
                        <circle cx="125" cy="175" r="5" fill="#1F2937" />
                        <circle cx="175" cy="175" r="5" fill="#1F2937" />
                        
                        {/* Bags under eyes */}
                        <path d="M115 185 Q125 195 135 185" stroke="#EF4444" strokeWidth="1" opacity="0.5" fill="none" />
                        <path d="M165 185 Q175 195 185 185" stroke="#EF4444" strokeWidth="1" opacity="0.5" fill="none" />

                        {/* Nose / Table interaction */}
                        <path d="M150 180 L140 210 L160 210 Z" fill="#D1D5DB" />
                        
                        {/* Table Line */}
                        <rect x="50" y="240" width="200" height="10" fill="#9CA3AF" />
                        
                        {/* Powder Lines */}
                        <rect x="100" y="235" width="40" height="2" fill="white" transform="rotate(-5)" />
                        <rect x="160" y="238" width="30" height="2" fill="white" transform="rotate(10)" />

                        {/* Thumbs Up Hand */}
                        <g transform="translate(200, 200) rotate(-10)">
                             <rect x="0" y="0" width="40" height="50" rx="10" fill="#E5E7EB" stroke="#1F2937" strokeWidth="2" />
                             <rect x="30" y="10" width="20" height="15" rx="5" fill="#E5E7EB" stroke="#1F2937" strokeWidth="2" />
                             <rect x="0" y="-30" width="15" height="40" rx="5" fill="#E5E7EB" stroke="#1F2937" strokeWidth="2" />
                        </g>

                        {/* Dialogue */}
                        <text x="50" y="80" fontFamily="monospace" fontSize="12" fill="#FF4500" className="animate-pulse font-bold">"I can't feel my face"</text>
                    </svg>
                </div>

            </div>

            {/* RIGHT SIDE: THE BENEFITS */}
            <div className="bg-[#FDFBF7] p-8 md:p-16 flex flex-col items-center justify-center relative overflow-hidden group">
                
                {/* Radiant Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FFD700_0%,_transparent_70%)] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Floating Money */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="absolute text-4xl opacity-20 animate-[float_4s_ease-in-out_infinite]" style={{
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            animationDelay: i * 0.5 + 's'
                        }}>💸</div>
                    ))}
                </div>

                <div className="relative z-10 text-center">
                    <div className="text-[#1A2A3A] text-xs font-bold uppercase tracking-[0.5em] mb-4">
                        BUT YOU WILL BE
                    </div>
                    <h2 className="text-[15vw] md:text-[10rem] font-black text-[#1A2A3A] leading-none tracking-tighter drop-shadow-xl hover:scale-105 transition-transform duration-300 cursor-default">
                        RICH
                    </h2>
                    <div className="mt-8 bg-[#1A2A3A] text-[#FDFBF7] px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm inline-block shadow-lg">
                        Worth It.
                    </div>
                </div>

            </div>

        </div>
      </div>
    </section>
  );
};
