
import React, { useState, useEffect } from 'react';
import { Mascot } from './Mascot';

interface Transaction {
  id: number;
  user: string;
  amount: number;
  message: string;
  time: string;
}

const USERS = [
  "DesperateDan", "WalletCuck99", "LonelyITGuy", "WifeLeftMe", 
  "GoodBoyNeedsOwner", "SadDad4Real", "ATM_Human", "NoSelfRespect"
];

const MESSAGES = [
  "Just a small tribute goddess", "Sorry I looked at you", "For your roblox skins", "Pls degrade me", 
  "Here is my rent money", "I am literally pathetic", "Buying you lunch <3", "Mommy? Sorry. Mommy?"
];

export const MoneyPhone: React.FC = () => {
  const [balance, setBalance] = useState(142050.00);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [excitement, setExcitement] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Parallax Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simulation Loop
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const addTransaction = () => {
      const amount = Math.floor(Math.random() * 450) + 50;
      const user = USERS[Math.floor(Math.random() * USERS.length)];
      const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      
      const newTx: Transaction = {
        id: Date.now(),
        user,
        amount,
        message,
        time: 'NOW'
      };

      setTransactions(prev => [newTx, ...prev].slice(0, 5));
      setBalance(prev => prev + amount);
      
      // Increased excitement gain (was 0.1)
      setExcitement(prev => Math.min(prev + 0.25, 1.0));

      const nextDelay = Math.max(200, 2000 - (excitement * 1500));
      timeout = setTimeout(addTransaction, nextDelay);
    };

    timeout = setTimeout(addTransaction, 1000);
    return () => clearTimeout(timeout);
  }, [excitement]);

  // Decay excitement
  useEffect(() => {
    const decay = setInterval(() => {
      // Slower decay rate (was 0.05)
      setExcitement(prev => Math.max(0, prev - 0.02));
    }, 1000);
    return () => clearInterval(decay);
  }, []);

  return (
    <section id="money-printer" className="relative w-full py-12 md:py-24 px-4 overflow-hidden flex flex-col items-center max-w-[100vw]">
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32 max-w-7xl mx-auto w-full">
        
        {/* Left: Text & Mascot Reaction */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1 w-full lg:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1A2A3A] mb-6">
            TAX THE <br/>
            <span className="text-gradient-rich">F*CKING LOSERS</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1A2A3A]/60 mb-8 max-w-md mx-auto lg:mx-0">
            They think they are texting a 22-year-old student. <br/>
            They are actually texting <span className="font-bold text-[#1A2A3A]">YOU</span> (a 30-year-old man in sweatpants). <br/>
            <span className="italic text-[#FF8A75] font-bold block mt-2">It's literally free money.</span>
          </p>
          
          {/* Reaction Mascot */}
          <div className="w-32 h-32 md:w-48 md:h-48 relative mx-auto lg:mx-0">
            <Mascot excitementLevel={excitement} />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs font-mono uppercase tracking-widest text-[#1A2A3A]/40 whitespace-nowrap bg-[#FDFBF7] px-2 py-1 rounded-full border border-[#1A2A3A]/5">
              Simp Wallet Drainer v2.0
            </div>
          </div>
        </div>

        {/* Right: The Phone Graphic - Aspect Ratio Lock */}
        <div className="relative order-1 lg:order-2 perspective-1000 group w-full flex justify-center">
          
          {/* Constrain container size relative to screen width AND aspect ratio */}
          <div className="relative w-[75vw] max-w-[320px] lg:max-w-[360px] aspect-[9/19]">
            
            {/* Unified Rotation Wrapper */}
            <div className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform rotate-0 hover:lg:-rotate-12 origin-bottom-right">
              
              {/* Hand SVG - Positioned absolutely relative to the phone container */}
              <svg className="absolute -bottom-[15%] -right-[20%] w-[140%] h-[140%] z-0 pointer-events-none drop-shadow-2xl" viewBox="0 0 400 600">
                 <path d="M180 500 Q200 400 280 300 L300 320 Q240 450 180 550" fill="#E8E4D9" stroke="#1A2A3A" strokeWidth="3" /> 
                 <path d="M150 600 L200 450 Q230 400 350 350 L360 380 Q250 450 160 600 Z" fill="#E8E4D9" stroke="#1A2A3A" strokeWidth="3" />
                 <path d="M120 600 L160 500 L250 500 Q280 480 260 450 Q240 420 160 480 L100 600 Z" fill="#E8E4D9" stroke="#1A2A3A" strokeWidth="3" />
              </svg>

              {/* Phone Container */}
              <div className="absolute inset-0 bg-[#1A2A3A] rounded-[15%] border-[6px] md:border-[8px] border-[#1A2A3A] shadow-2xl z-10 overflow-hidden ring-1 ring-white/20">
                
                {/* Casing Highlights */}
                <div className="absolute inset-0 rounded-[14%] shadow-[inset_0_0_15px_rgba(255,255,255,0.15)] pointer-events-none z-50"></div>
                
                {/* Dynamic Glare */}
                <div 
                  className="absolute inset-[-50%] bg-gradient-to-tr from-transparent via-white/5 to-transparent z-40 pointer-events-none transition-transform duration-100 ease-out"
                  style={{ 
                      transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px) rotate(45deg)`,
                      opacity: 0.6
                  }}
                ></div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[4%] bg-[#1A2A3A] rounded-b-xl z-30 shadow-sm border-b border-white/5"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-[#FDFBF7] flex flex-col pt-[12%] relative">
                  
                  {/* Fingerprint Texture */}
                  <div className="absolute inset-0 opacity-[0.03] bg-repeat z-40 pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+")'}}></div>

                  {/* Status Bar */}
                  <div className="flex justify-between px-6 mb-4 text-[#1A2A3A]/40 text-[10px] md:text-xs font-bold relative z-10">
                     <span>3:00 AM</span>
                     <div className="flex gap-1">
                       <span>5G</span>
                       <span>69%</span>
                     </div>
                  </div>

                  {/* App Header */}
                  <div className="px-6 mb-4 relative z-10">
                    <div className="text-[#FF8A75] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1">Total Exploited</div>
                    <div className="text-3xl lg:text-4xl font-['Space_Grotesk'] font-bold text-[#1A2A3A] tabular-nums tracking-tight">
                      ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="text-[10px] md:text-xs text-[#1A2A3A]/40 mt-1 flex items-center gap-1">
                      <span className="w-2 h-2 bg-[#FF8A75] rounded-full animate-pulse"></span>
                      DRAINING 401Ks...
                    </div>
                  </div>

                  {/* Feed Area OR Detail View */}
                  <div className="flex-1 bg-white rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] p-4 overflow-hidden flex flex-col gap-3 relative z-10">
                     
                     {selectedTx ? (
                        <div className="flex flex-col h-full animate-in slide-in-from-right fade-in duration-300">
                           <button 
                             onClick={() => setSelectedTx(null)} 
                             className="flex items-center gap-1 text-[#1A2A3A]/40 text-xs font-bold uppercase tracking-widest mb-4 hover:text-[#FF8A75] transition-colors"
                           >
                             ← Back to Feed
                           </button>

                           <div className="flex flex-col items-center mb-6">
                             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF8A75] to-[#1A2A3A] flex items-center justify-center text-white font-bold text-2xl mb-3 shadow-lg">
                               :(
                             </div>
                             <h3 className="text-[#1A2A3A] font-bold text-lg font-['Space_Grotesk']">{selectedTx.user}</h3>
                             <p className="text-[#2D9C8E] font-bold font-mono text-xl">+${selectedTx.amount}.00</p>
                           </div>

                           <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-auto relative">
                              <div className="absolute top-0 left-4 -translate-y-1/2 w-3 h-3 bg-gray-50 border-t border-l border-gray-100 transform rotate-45"></div>
                              <p className="text-[#1A2A3A]/80 italic font-serif leading-relaxed">"{selectedTx.message}"</p>
                           </div>

                           <div className="grid grid-cols-2 gap-2 mt-4">
                              <button onClick={() => setSelectedTx(null)} className="bg-[#1A2A3A] text-white text-[10px] py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-[#FF8A75] transition-colors shadow-lg">
                                Ignore
                              </button>
                              <button onClick={() => setSelectedTx(null)} className="border border-[#1A2A3A] text-[#1A2A3A] text-[10px] py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-50 transition-colors">
                                Send 💋 ($5)
                              </button>
                           </div>
                        </div>
                     ) : (
                        <>
                           <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#1A2A3A]/30 mb-2 flex items-center justify-between">
                              <span>Simp Alerts</span>
                              <span className="text-[#2D9C8E] animate-pulse">● LIVE</span>
                           </div>
                           
                           {transactions.map((tx) => (
                              <div 
                                key={tx.id} 
                                onClick={() => setSelectedTx(tx)}
                                className="flex items-center gap-3 animate-in slide-in-from-bottom fade-in duration-300 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors"
                              >
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform">
                                  💸
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-[#1A2A3A] font-bold text-xs truncate group-hover:text-[#FF8A75] transition-colors">{tx.user}</div>
                                  <div className="text-[#1A2A3A]/60 text-[10px] truncate">"{tx.message}"</div>
                                </div>
                                <div className="text-[#2D9C8E] font-bold font-mono text-xs">
                                  +${tx.amount}
                                </div>
                              </div>
                           ))}
                        </>
                     )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
