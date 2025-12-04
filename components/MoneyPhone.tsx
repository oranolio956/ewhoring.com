
import React, { useState, useEffect, useRef } from 'react';
import { Mascot } from './Mascot';
import { usePayment } from '../contexts/PaymentContext';
import { LongHoverEasterEgg } from './SectionEasterEggs';

interface Transaction {
  id: number;
  user: string;
  amount: number;
  message: string;
  time: string;
}

const USERS = [
  "DesperateDan", "WalletCuck99", "LonelyITGuy", "WifeLeftMe", 
  "GoodBoyNeedsOwner", "SadDad4Real", "ATM_Human", "NoSelfRespect",
  "PayPig_88", "SimpCommander", "GamerGurl_Fan", "CryptoLoser",
  "TechLead_Divorced", "NiceGuy_Tm", "FeetLover_TX", "RentPayer69"
];

const MESSAGES = [
  "Just a small tribute goddess", "Sorry I looked at you", "For your roblox skins", "Pls degrade me", 
  "Here is my rent money", "I am literally pathetic", "Buying you lunch <3", "Mommy? Sorry. Mommy?",
  "I don't deserve a reply", "Use this for your nails", "Im sorry im male", "Tax me harder"
];

export const MoneyPhone: React.FC = () => {
  const { openPayment } = usePayment();
  const [balance, setBalance] = useState(142050.00);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [excitement, setExcitement] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [blockedUsers, setBlockedUsers] = useState<Set<string>>(new Set());
  
  // Refs for Parallax
  const phoneRef = useRef<HTMLDivElement>(null);
  const textureRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Logic - Optimized with RAF and Mobile Check
  useEffect(() => {
    // Disable on mobile to save battery and prevent jitter
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        setMousePos({ x, y });
        frameId = 0;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  // Scroll Parallax Logic - DISABLED ON MOBILE for smooth scrolling
  useEffect(() => {
    // Strict mobile check - if screen is small, do not attach scroll listeners
    if (window.innerWidth < 768) return;

    let frameId: number;
    const handleScroll = () => {
        if (frameId) return;
        frameId = requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            if (textureRef.current) {
                const yPos = scrollY * 0.12;
                textureRef.current.style.backgroundPosition = `0px ${yPos}px`;
            }
            if (bgRef.current) {
                 const yPos = scrollY * 0.06;
                 bgRef.current.style.transform = `translateY(${yPos}px)`;
            }
            frameId = 0;
        });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  // Block User Handler
  const blockUser = (e: React.MouseEvent, user: string) => {
    e.stopPropagation();
    setBlockedUsers(prev => {
        const newSet = new Set(prev);
        newSet.add(user);
        return newSet;
    });
    setTransactions(prev => prev.filter(tx => tx.user !== user));
    if (selectedTx?.user === user) {
        setSelectedTx(null);
    }
  };

  // Simulation Loop
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const addTransaction = () => {
      const availableUsers = USERS.filter(u => !blockedUsers.has(u));
      const pool = availableUsers.length > 0 ? availableUsers : ["New_Victim_01"];

      const amount = Math.floor(Math.random() * 450) + 50;
      const user = pool[Math.floor(Math.random() * pool.length)];
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
      setExcitement(prev => Math.min(prev + 0.25, 1.0));

      const nextDelay = Math.max(200, 2000 - (excitement * 1500));
      timeout = setTimeout(addTransaction, nextDelay);
    };

    timeout = setTimeout(addTransaction, 1000);
    return () => clearTimeout(timeout);
  }, [excitement, blockedUsers]);

  // Decay excitement
  useEffect(() => {
    const decay = setInterval(() => {
      setExcitement(prev => Math.max(0, prev - 0.02));
    }, 1000);
    return () => clearInterval(decay);
  }, []);

  return (
    <section id="money-printer" className="min-h-[100dvh] flex flex-col justify-center relative w-full py-12 px-4 overflow-hidden items-center max-w-full">
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32 max-w-7xl mx-auto w-full h-full">
        
        {/* Left: Text & Mascot Reaction */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1 w-full lg:w-1/2 px-4">
          <LongHoverEasterEgg secret="These fake transactions are more realistic than most OnlyFans earnings screenshots">
            <h2 className="text-4xl md:text-6xl font-bold text-[#1A2A3A] mb-6">
              TARGET <br/>
              <span className="text-gradient-rich">SUGAR DADDIES</span>
            </h2>
          </LongHoverEasterEgg>
          <p className="text-lg md:text-xl text-[#1A2A3A]/60 mb-8 max-w-md mx-auto lg:mx-0">
            They think they are texting a 22-year-old model. <br/>
            They are actually texting <span className="font-bold text-[#1A2A3A]">YOU</span> (a 30-year-old man in sweatpants). <br/>
            <span className="italic text-[#FF8A75] font-bold block mt-2">We target wealthy men who pay $500+ per conversation.</span>
          </p>

          <button
            onClick={openPayment}
            className="mb-6 bg-[#FF8A75] text-[#1A2A3A] px-6 py-3 font-bold uppercase tracking-widest hover:bg-[#1A2A3A] hover:text-[#FDFBF7] transition-all shadow-xl hover:scale-105 transform duration-200 btn-glitch text-sm cursor-pointer mx-auto lg:mx-0"
          >
            DOWNLOAD THE BRAIN →
          </button>
          
          <div className="w-32 h-32 md:w-48 md:h-48 relative mx-auto lg:mx-0">
            <Mascot excitementLevel={excitement} />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs font-mono uppercase tracking-widest text-[#1A2A3A]/40 whitespace-nowrap bg-[#FDFBF7] px-2 py-1 rounded-full border border-[#1A2A3A]/5">
              Sugar Daddy Protocol
            </div>
          </div>
        </div>

        {/* Right: The Phone Graphic - Perfectly Responsive */}
        <div ref={phoneRef} className="relative order-1 lg:order-2 perspective-1000 group w-full flex justify-center py-8">
          
          {/* Constrain size using max-width and aspect ratio lock. This ensures it never breaks. */}
          <div className="relative w-[90vw] max-w-[clamp(280px,80vw,320px)] sm:max-w-[clamp(320px,85vw,340px)] lg:max-w-[clamp(340px,90vw,360px)] aspect-[9/19] touch-pan-y" style={{ touchAction: 'pan-y' }}>
            
            {/* Rotation Wrapper with Physics Easing */}
            <div className="w-full h-full relative transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] transform rotate-0 hover:lg:-rotate-12 origin-bottom-right will-change-transform">
              
              {/* Hand SVG */}
              <svg className="absolute -bottom-[15%] -right-[20%] w-[140%] h-[140%] z-0 pointer-events-none drop-shadow-2xl" viewBox="0 0 400 600">
                 <path d="M180 500 Q200 400 280 300 L300 320 Q240 450 180 550" fill="#E8E4D9" stroke="#1A2A3A" strokeWidth="3" /> 
                 <path d="M150 600 L200 450 Q230 400 350 350 L360 380 Q250 450 160 600 Z" fill="#E8E4D9" stroke="#1A2A3A" strokeWidth="3" />
                 <path d="M120 600 L160 500 L250 500 Q280 480 260 450 Q240 420 160 480 L100 600 Z" fill="#E8E4D9" stroke="#1A2A3A" strokeWidth="3" />
              </svg>

              {/* Phone Body */}
              <div className="absolute inset-0 bg-[#1A2A3A] rounded-[15%] border-[6px] md:border-[8px] border-[#1A2A3A] shadow-2xl z-10 overflow-hidden ring-1 ring-white/20">
                
                {/* Highlights */}
                <div className="absolute inset-0 rounded-[15%] shadow-[inset_4px_4px_15px_rgba(255,255,255,0.1),inset_-4px_-4px_15px_rgba(0,0,0,0.4)] pointer-events-none z-50"></div>
                <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-white/5 via-white/0 to-transparent skew-x-12 z-50 pointer-events-none mix-blend-overlay"></div>
                
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50 text-[6px] font-bold text-white/10 uppercase tracking-[0.2em] pointer-events-none font-['Space_Grotesk']">
                    Oranolio
                </div>
                
                {/* Dynamic Reflection (Desktop Only) */}
                <div 
                  className="absolute inset-[-50%] bg-gradient-to-tr from-transparent via-white/10 to-transparent z-40 pointer-events-none transition-transform duration-100 ease-out blur-md will-change-transform hidden md:block"
                  style={{ 
                      transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px) rotate(45deg)`,
                      opacity: 0.5
                  }}
                ></div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[4%] bg-[#1A2A3A] rounded-b-xl z-30 shadow-sm border-b border-white/5"></div>
                
                {/* Screen - Added inner rounded corners to fix white box overflow issue */}
                <div className="w-full h-full bg-[#FDFBF7] flex flex-col pt-[12%] relative rounded-[12%] overflow-hidden">
                  
                  <div ref={bgRef} className="absolute -top-[20%] -left-[20%] -right-[20%] -bottom-[20%] bg-gradient-to-br from-[#FDFBF7] via-[#FDFBF7] to-[#2D9C8E]/5 z-0 pointer-events-none will-change-transform"></div>
                  <div ref={textureRef} className="absolute inset-0 opacity-[0.05] bg-repeat z-0 pointer-events-none mix-blend-multiply will-change-transform" style={{backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+")'}}></div>

                  {/* Status Bar */}
                  <div className="flex justify-between px-6 mb-2 text-[#1A2A3A]/40 text-[9px] md:text-[10px] font-bold relative z-10">
                     <span>3<span className="animate-pulse">:</span>00 AM</span>
                     <div className="flex gap-1">
                       <span className="font-mono tracking-tight">LTE</span>
                       <span>69%</span>
                     </div>
                  </div>

                  {/* App Header */}
                  <div className="px-6 mb-4 relative z-10">
                    <div className="text-[#FF8A75] font-bold text-[9px] uppercase tracking-widest mb-1">Oranolio Wallet</div>
                    <div className="text-2xl lg:text-4xl font-['Space_Grotesk'] font-bold text-[#1A2A3A] tabular-nums tracking-tight">
                      ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </div>

                  {/* Interactive Feed - Pushed to bottom with auto margin */}
                  <div className="flex-1 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.05)] p-3 md:p-4 overflow-hidden flex flex-col gap-3 relative z-10 mt-auto">
                     {selectedTx ? (
                        <div className="flex flex-col h-full animate-in slide-in-from-right fade-in duration-300">
                           <button 
                             onClick={() => setSelectedTx(null)} 
                             className="flex items-center gap-1 text-[#1A2A3A]/40 text-[10px] font-bold uppercase tracking-widest mb-4 hover:text-[#FF8A75] transition-colors"
                           >
                             ← Back
                           </button>
                           <div className="flex flex-col items-center mb-6">
                             <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF8A75] to-[#1A2A3A] flex items-center justify-center text-white font-bold text-2xl mb-3 shadow-lg">:(</div>
                             <h3 className="text-[#1A2A3A] font-bold text-base font-['Space_Grotesk']">{selectedTx.user}</h3>
                             <p className="text-[#2D9C8E] font-bold font-mono text-xl">+${selectedTx.amount}.00</p>
                           </div>
                           <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 mb-auto relative">
                              <p className="text-[#1A2A3A]/80 italic font-serif leading-relaxed text-sm">"{selectedTx.message}"</p>
                           </div>
                           <div className="grid grid-cols-2 gap-2 mt-4">
                              <button onClick={(e) => blockUser(e, selectedTx.user)} className="bg-[#1A2A3A] text-white text-[10px] py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-red-600 transition-colors shadow-lg">Block 🚫</button>
                              <button onClick={() => setSelectedTx(null)} className="border border-[#1A2A3A] text-[#1A2A3A] text-[10px] py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-50 transition-colors">Ignore</button>
                           </div>
                        </div>
                     ) : (
                        <>
                           <div className="text-[9px] font-bold uppercase tracking-widest text-[#1A2A3A]/30 mb-2 flex items-center justify-between">
                              <span>Simp Alerts</span>
                              <div className="flex items-center gap-2">
                                <span className="text-[9px] text-red-400 font-mono tracking-tighter" title="Blocked Users">{blockedUsers.size} BLOCKED</span>
                              </div>
                           </div>
                           {transactions.map((tx) => (
                              <div key={tx.id} onClick={() => setSelectedTx(tx)} className="flex items-center gap-3 animate-in slide-in-from-bottom fade-in duration-300 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors relative">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm shadow-sm group-hover:scale-110 transition-transform">💸</div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-[#1A2A3A] font-bold text-[10px] truncate group-hover:text-[#FF8A75] transition-colors">{tx.user}</div>
                                  <div className="text-[#1A2A3A]/60 text-[9px] truncate">"{tx.message}"</div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <div className="text-[#2D9C8E] font-bold font-mono text-[10px]">+${tx.amount}</div>
                                    <button onClick={(e) => blockUser(e, tx.user)} className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-100 hover:bg-red-500 hover:text-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-[10px]" title="Block">🚫</button>
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
