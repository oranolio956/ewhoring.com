
import React, { useState, useEffect, useRef } from 'react';

const CONVERSATIONS = [
  {
    target: "u/TexanDad44",
    avatar_color: "#FF4500", // Reddit Orange
    status: "Active now",
    strategy: "THE ANTI-SELL",
    messages: [
      { sender: 'them', text: "Hey, saw your post. How much for a custom video?" },
      { sender: 'me', text: "Ew what? I don't sell videos lol. I'm just on here to vent." },
      { sender: 'them', text: "Oh wow. I'm so sorry. I'm just used to everyone being a bot or seller." },
      { sender: 'me', text: "It's fine I guess. Just kinda insulting. I'm literally just a nursing student trying to survive finals." },
      { sender: 'them', text: "You're the most normal girl I've met on here in years." },
      { sender: 'them', text: "Look, let me apologize. Can I buy you coffee or lunch? No strings attached." },
      { sender: 'me', text: "I mean... I won't say no to Chipotle 🌯" },
      { sender: 'system', text: "u/TexanDad44 sent $150.00" }
    ]
  },
  {
    target: "u/TechLead_SF",
    avatar_color: "#0079D3", // Reddit Blue
    status: "Online",
    strategy: "WEAPONIZED AUTISM",
    messages: [
      { sender: 'them', text: "hi gorgeous" },
      { sender: 'me', text: "did you know that penguins propose to each other with pebbles? I've been crying about it for 20 mins" },
      { sender: 'them', text: "haha that is random. you are cute." },
      { sender: 'me', text: "I want a pebble. No one ever gives me pebbles. I just get unsolicited dick pics." },
      { sender: 'them', text: "I can be your penguin lol." },
      { sender: 'them', text: "I can't send a pebble through the phone but check your notifications." },
      { sender: 'system', text: "u/TechLead_SF sent $500.00" },
      { sender: 'me', text: "OMG?? That's a very big pebble 😭" }
    ]
  },
  {
    target: "u/LonelyGuy_UK",
    avatar_color: "#46D160", // Reddit Green
    status: "Active now",
    strategy: "THE 'GHOST'",
    messages: [
      { sender: 'them', text: "Are you real? You haven't posted a link." },
      { sender: 'me', text: "Yeah I'm real. I'm just bad at this app. It confuses me." },
      { sender: 'them', text: "Do you have a menu?" },
      { sender: 'me', text: "A menu? Like for food? I'm not a restaurant sir." },
      { sender: 'them', text: "Haha you are adorable. I mean for content." },
      { sender: 'me', text: "Oh. No. I don't do that. My dad would kill me." },
      { sender: 'them', text: "Please let me take care of you. You are too innocent for this place." },
      { sender: 'system', text: "u/LonelyGuy_UK sent $250.00" }
    ]
  }
];

// Reddit Dark Mode Colors
const REDDIT_BG = "#1A1A1B";
const REDDIT_HEADER = "#1A1A1B";

export const RedditChat: React.FC = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleMessages([]);
    setStep(0);
  }, [activeChat]);

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  useEffect(() => {
    const currentChat = CONVERSATIONS[activeChat];
    
    if (step >= currentChat.messages.length) {
      const timeout = setTimeout(() => {
        setActiveChat((prev) => (prev + 1) % CONVERSATIONS.length);
      }, 4000);
      return () => clearTimeout(timeout);
    }

    const msg = currentChat.messages[step];
    const typingDuration = msg.sender === 'system' ? 500 : 800 + Math.random() * 800;
    
    if (msg.sender !== 'me' && msg.sender !== 'system') {
         const delay = step === 0 ? 500 : 1500;
         setTimeout(() => {
             setVisibleMessages(prev => [...prev, msg]);
             setStep(prev => prev + 1);
         }, delay);
    } else {
        setIsTyping(true);
        const timeout = setTimeout(() => {
            setIsTyping(false);
            setVisibleMessages(prev => [...prev, msg]);
            setStep(prev => prev + 1);
        }, typingDuration);
        return () => clearTimeout(timeout);
    }
  }, [step, activeChat]);

  const currentChat = CONVERSATIONS[activeChat];

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#0F1923] relative overflow-hidden border-b border-[#FDFBF7]/5 w-full">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#FF8A75 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block bg-[#FF4500] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4 rounded-full">
            Reddit Method v4
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#FDFBF7] tracking-tighter mb-4 font-['Space_Grotesk']">
            THE <span className="text-[#FF4500]">REDDIT</span> EXPLOIT
          </h2>
          <p className="text-[#FDFBF7]/60 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Don't ask for money. Just be "normal."<br/>
            <strong className="text-white">They aren't used to it.</strong>
          </p>
        </div>

        {/* Reddit Chat UI Container - Responsive Width Locked */}
        <div className="w-full sm:max-w-[450px] mx-auto rounded-t-xl overflow-hidden shadow-2xl font-sans text-sm relative border border-[#343536]">
            
            {/* Reddit Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#343536]" style={{ backgroundColor: REDDIT_HEADER }}>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden relative shadow-lg flex-shrink-0">
                         <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: currentChat.avatar_color }}>
                             u/
                         </div>
                         <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#46D160] rounded-full border-2 border-[#1A2A3A]"></div>
                    </div>
                    <div className="min-w-0">
                        <div className="text-[#D7DADC] font-semibold text-xs leading-tight hover:underline cursor-pointer truncate">
                            {currentChat.target}
                        </div>
                        <div className="text-[#818384] text-[10px] font-medium flex items-center gap-1">
                            {currentChat.status} <span className="text-[8px] opacity-50 hidden sm:inline">• Oranolio Secure</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 pr-2">
                    <button className="text-[#818384] hover:bg-[#343536] p-1.5 rounded-full transition-colors hidden sm:block">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    </button>
                </div>
            </div>

            {/* Chat Body */}
            <div 
                ref={scrollRef} 
                className="h-[350px] md:h-[400px] overflow-y-auto px-4 py-4 space-y-3 relative custom-inner-scrollbar" 
                style={{ backgroundColor: REDDIT_BG }}
            >
                {/* Timestamp */}
                <div className="text-center text-[#818384] text-[10px] font-bold uppercase tracking-wider mb-6 mt-2 opacity-50">
                    TODAY
                </div>

                {visibleMessages.map((msg, i) => (
                    <div key={i} className={`flex w-full ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} mb-1`}>
                        {msg.sender === 'system' ? (
                            <div className="w-full flex justify-center my-4 animate-pulse">
                                <span className="text-[#2D9C8E] text-xs font-bold px-4 py-1.5 bg-[#2D9C8E]/10 rounded-full border border-[#2D9C8E]/30 flex items-center gap-2 shadow-[0_0_15px_rgba(45,156,142,0.2)]">
                                    💰 {msg.text}
                                </span>
                            </div>
                        ) : (
                            <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed break-words shadow-md transition-all duration-300 ${
                                msg.sender === 'me' 
                                ? 'text-white bg-gradient-to-br from-[#0079D3] to-[#005fa3]' 
                                : 'text-[#D7DADC] bg-[#343536] border border-white/5'
                            }`}
                            style={{ 
                                borderBottomRightRadius: msg.sender === 'me' ? '4px' : '20px',
                                borderBottomLeftRadius: msg.sender === 'me' ? '20px' : '4px'
                            }}>
                                {msg.text}
                            </div>
                        )}
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-end mt-2">
                        <div className="px-4 py-2.5 rounded-2xl rounded-br-sm bg-gradient-to-br from-[#0079D3] to-[#005fa3] opacity-80">
                           <div className="flex gap-1 items-center h-4">
                                <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce delay-75"></div>
                                <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce delay-150"></div>
                           </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Chat Footer (Input) */}
            <div className="p-3 border-t border-[#343536]" style={{ backgroundColor: REDDIT_BG }}>
                <div className="flex items-center gap-2">
                    <button className="text-[#818384] hover:bg-[#343536] p-2 rounded-full transition-colors hidden sm:block">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                    </button>
                    <div className="flex-1 bg-[#272729] rounded-full h-10 flex items-center px-4 border border-[#343536] text-[#818384] text-sm cursor-not-allowed hover:border-[#4a4a4c] transition-colors relative overflow-hidden">
                        <span className="relative z-10 truncate">Message {currentChat.target}</span>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[8px] font-mono opacity-20 uppercase tracking-widest hidden sm:block">Oranolio Chat</span>
                    </div>
                    <button className="text-[#818384] hover:bg-[#343536] p-2 rounded-full transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </button>
                </div>
            </div>

            {/* Strategy Badge Overlay */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards] w-max max-w-full px-2">
                 <div className="bg-[#1A2A3A]/80 backdrop-blur-md text-[#FDFBF7] text-[10px] font-bold px-4 py-1.5 rounded-full border border-[#FF8A75]/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF8A75] rounded-full animate-pulse flex-shrink-0"></span>
                    <span className="truncate">Oranolio Strategy: {currentChat.strategy}</span>
                 </div>
            </div>
            <style>{`
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
            `}</style>
        </div>
      </div>
    </section>
  );
};
