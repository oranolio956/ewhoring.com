
import React, { useState, useEffect, useRef } from 'react';
import { Mascot } from './Mascot';

interface Transaction {
  id: number;
  user: string;
  amount: number;
  message: string;
  time: string;
}

const USERS = [
  "john_doe_99", "simp_commander", "wallet_inspector", "paypig_01", 
  "atm_human", "good_boy_tax", "finance_slave", "tribute_king"
];

const MESSAGES = [
  "For the queen 👑", "Rent money", "Groceries for u", "Just because", 
  "Good morning tax", "Please notice me", "Sorry I'm late", "My paycheck"
];

export const MoneyPhone: React.FC = () => {
  const [balance, setBalance] = useState(142050.00);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [excitement, setExcitement] = useState(0);

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
        time: 'Now'
      };

      setTransactions(prev => [newTx, ...prev].slice(0, 5));
      setBalance(prev => prev + amount);
      setExcitement(prev => Math.min(prev + 0.1, 1.0));

      // Randomize speed - faster as excitement grows
      const nextDelay = Math.max(200, 2000 - (excitement * 1500));
      timeout = setTimeout(addTransaction, nextDelay);
    };

    timeout = setTimeout(addTransaction, 1000);
    return () => clearTimeout(timeout);
  }, [excitement]);

  // Decay excitement slowly if no transactions (though in this sim they are constant)
  useEffect(() => {
    const decay = setInterval(() => {
      setExcitement(prev => Math.max(0, prev - 0.05));
    }, 1000);
    return () => clearInterval(decay);
  }, []);

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden flex flex-col items-center">
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 max-w-6xl mx-auto w-full">
        
        {/* Left: Text & Mascot Reaction */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 order-2 md:order-1">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1A2A3A] mb-4">
            PASSIVE <br/>
            <span className="text-gradient-rich">EXTRACTION</span>
          </h2>
          <p className="text-lg text-[#1A2A3A]/60 mb-8 max-w-sm">
            Set up the architecture. <br/>
            Watch the tributaries flow into the main river.
          </p>
          
          {/* Reaction Mascot */}
          <div className="w-32 h-32 md:w-48 md:h-48 relative">
            <Mascot excitementLevel={excitement} />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs font-mono uppercase tracking-widest text-[#1A2A3A]/40 whitespace-nowrap">
              Dopamine Load: {Math.round(excitement * 100)}%
            </div>
          </div>
        </div>

        {/* Right: The Phone Graphic */}
        <div className="relative w-[300px] h-[600px] md:w-[350px] md:h-[700px] order-1 md:order-2 perspective-1000">
          
          {/* Animated Hand SVG Layer - Behind Phone */}
          <svg className="absolute -bottom-20 -right-20 w-[140%] h-[140%] z-0 pointer-events-none drop-shadow-xl" viewBox="0 0 400 600">
             {/* Stylized Hand Geometry */}
             <path d="M200 300 Q250 200 300 150 L320 160 Q280 220 230 320" fill="#E8E4D9" stroke="#1A2A3A" strokeWidth="2" /> {/* Thumb */}
             <path d="M220 350 Q350 350 380 280 L390 300 Q360 400 230 420" fill="#E8E4D9" stroke="#1A2A3A" strokeWidth="2" /> {/* Fingers Wrap */}
             <path d="M150 600 L200 400 Q220 350 180 350 Q140 350 120 450 L100 600 Z" fill="#E8E4D9" stroke="#1A2A3A" strokeWidth="2" /> {/* Wrist/Palm */}
          </svg>

          {/* Phone Container */}
          <div className="absolute inset-0 bg-[#1A2A3A] rounded-[3rem] border-8 border-[#1A2A3A] shadow-2xl z-10 overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1A2A3A] rounded-b-xl z-30"></div>
            
            {/* Screen Content */}
            <div className="w-full h-full bg-[#FDFBF7] flex flex-col pt-12 relative">
              
              {/* Status Bar */}
              <div className="flex justify-between px-6 mb-4 text-[#1A2A3A]/40 text-xs font-bold">
                 <span>9:41</span>
                 <div className="flex gap-1">
                   <span>5G</span>
                   <span>100%</span>
                 </div>
              </div>

              {/* App Header */}
              <div className="px-6 mb-6">
                <div className="text-[#2D9C8E] font-bold text-sm uppercase tracking-widest mb-1">Total Balance</div>
                <div className="text-4xl font-['Space_Grotesk'] font-bold text-[#1A2A3A]">
                  ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-xs text-[#1A2A3A]/40 mt-1 flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#2D9C8E] rounded-full animate-pulse"></span>
                  LIVE CONNECTION
                </div>
              </div>

              {/* Feed Area */}
              <div className="flex-1 bg-white rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] p-6 overflow-hidden flex flex-col gap-4">
                 <div className="text-xs font-bold uppercase text-[#1A2A3A]/30 mb-2">Incoming Tributes</div>
                 
                 {transactions.map((tx, i) => (
                   <div 
                     key={tx.id}
                     className={`flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 shadow-sm animate-in slide-in-from-bottom fade-in duration-300`}
                     style={{ animationDelay: `${i * 100}ms` }}
                   >
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D9C8E] to-[#1A2A3A] flex items-center justify-center text-white font-bold text-xs">
                       {tx.user[0].toUpperCase()}
                     </div>
                     <div className="flex-1 min-w-0">
                       <div className="flex justify-between items-baseline">
                         <span className="text-sm font-bold text-[#1A2A3A] truncate">{tx.user}</span>
                         <span className="text-xs text-gray-400">{tx.time}</span>
                       </div>
                       <div className="text-xs text-gray-500 truncate">{tx.message}</div>
                     </div>
                     <div className="text-[#2D9C8E] font-bold text-sm">
                       +${tx.amount}
                     </div>
                   </div>
                 ))}
                 
                 {/* Gradient Fade at bottom */}
                 <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
              </div>

              {/* Bottom Nav Mock */}
              <div className="h-16 bg-white border-t border-gray-100 flex justify-around items-center px-6">
                 <div className="w-6 h-6 bg-[#1A2A3A] rounded-full opacity-100"></div>
                 <div className="w-6 h-6 bg-[#1A2A3A] rounded-full opacity-20"></div>
                 <div className="w-6 h-6 bg-[#1A2A3A] rounded-full opacity-20"></div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
