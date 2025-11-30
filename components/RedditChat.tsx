
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
const REDDIT_BORDER = "#343536";
const REDDIT_MSG_THEM = "#343536";
const REDDIT_MSG_ME = "#0079D3"; // Reddit Blue for sent messages
const REDDIT_TEXT = "#D7DADC";
const REDDIT_TEXT_SEC = "#818384";

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
    <section className="py-24 px-4 md:px-12 bg-[#0F1923] relative overflow-hidden border-b border-[#FDFBF7]/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#FF8A75 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
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

        {/* Reddit Chat UI Container */}
        <div className="max-w-[450px] mx-auto rounded-t-xl overflow-hidden shadow-2xl font-sans text-sm relative border border-[#343536]">
            
            {/* Reddit Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#343536]" style={{ backgroundColor: REDDIT_HEADER }}>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden relative">
                         <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: currentChat.avatar_color }}>
                             u/
                         </div>
                         <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#46D160] rounded-full border-2 border-[#1A2A3A]"></div>
                    </div>
                    <div>
                        <div className="text-[#D7DADC] font-semibold text-xs leading-tight hover:underline cursor-pointer">
                            {currentChat.target}
                        </div>
                        <div className="text-[#818384] text-[10px] font-medium">
                            {currentChat.status}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 pr-2">
                    <button className="text-[#818384] hover:bg-[#343536] p-1.5 rounded-full transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    </button>
                    <button className="text-[#818384] hover:bg-[#343536] p-1.5 rounded-full transition-colors">
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.41 7.41L18 6l-6 6-6-6L4.59 7.41 10.59 13.41 12 14.83l1.41-1.42L19.41 7.41z"/></svg>
                    </button>
                    <button className="text-[#818384] hover:bg-[#343536] p-1.5 rounded-full transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                    </button>
                </div>
            </div>

            {/* Chat Body */}
            <div 
                ref={scrollRef} 
                className="h-[400px] overflow-y-auto px-4 py-4 space-y-2 relative" 
                style={{ backgroundColor: REDDIT_BG }}
            >
                {/* Timestamp */}
                <div className="text-center text-[#818384] text-[10px] font-bold uppercase tracking-wider mb-4 mt-2">
                    TODAY
                </div>

                {visibleMessages.map((msg, i) => (
                    <div key={i} className={`flex w-full ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} mb-1`}>
                        {msg.sender === 'system' ? (
                            <div className="w-full flex justify-center my-4">
                                <span className="text-[#2D9C8E] text-xs font-bold px-3 py-1 bg-[#2D9C8E]/10 rounded-full border border-[#2D9C8E]/30 flex items-center gap-1">
                                    💰 {msg.text}
                                </span>
                            </div>
                        ) : (
                            <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-[13px] leading-relaxed break-words ${
                                msg.sender === 'me' 
                                ? 'text-white' 
                                : 'text-[#D7DADC]'
                            }`}
                            style={{ 
                                backgroundColor: msg.sender === 'me' ? REDDIT_MSG_ME : REDDIT_MSG_THEM,
                                borderBottomRightRadius: msg.sender === 'me' ? '4px' : '16px',
                                borderBottomLeftRadius: msg.sender === 'me' ? '16px' : '4px'
                            }}>
                                {msg.text}
                            </div>
                        )}
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-end mt-2">
                        <div className="px-4 py-2 rounded-2xl rounded-br-sm" style={{ backgroundColor: REDDIT_MSG_ME }}>
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
                    <button className="text-[#818384] hover:bg-[#343536] p-2 rounded-full">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                    </button>
                    <div className="flex-1 bg-[#272729] rounded-full h-9 flex items-center px-4 border border-[#343536] text-[#818384] text-sm cursor-not-allowed">
                        Message {currentChat.target}
                    </div>
                    <button className="text-[#818384] hover:bg-[#343536] p-2 rounded-full">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM5 19V5h14v14H5zm7-9c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/></svg>
                    </button>
                </div>
            </div>

            {/* Strategy Badge Overlay */}
            <div className="absolute top-14 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]">
                 <div className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 shadow-lg">
                    Strategy: {currentChat.strategy}
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
