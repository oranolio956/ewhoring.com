import React, { useState, useEffect } from 'react';

export const DrunkConfessionBanner: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showRambling, setShowRambling] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  const cryptoAddresses = [
    { label: 'BTC', address: 'bc1qxv394xty8p380gq25qf70nm5r84zemgwzh3z06' },
    { label: 'ETH', address: '0xde0F05DAB6c6c335161505B36268ccFc104E506f' },
    { label: 'SOL', address: '3BPJBjiPSvHfmjp6isCAfi1HtxJsjFSV3GWuCFaQK1Te' },
    { label: 'LTC', address: 'LW1rr8n8u437YkHuBjKdhNkhAWqJy2tezG' },
    { label: 'XRP', address: 'rJupEXhHevDrrEWPTouA1SzYBtDRqXdegZ' },
  ];

  // The epic rambling messages
  const ramblingMessages = [
    { text: "OH MY GOD", emotion: "excited", duration: 800 },
    { text: "OH MY GOD OH MY GOD", emotion: "excited", duration: 1000 },
    { text: "YOU... YOU ACTUALLY DID IT", emotion: "excited", duration: 1500 },
    { text: "TH-THANK YOU SO MUCH", emotion: "excited", duration: 1200 },
    { text: "THANK YOU THANK YOU THANK YOU", emotion: "excited", duration: 1500 },
    { text: "I C-CAN'T BELIEVE THIS", emotion: "excited", duration: 1200 },
    { text: "THIS IS LITERALLY THE BEST DAY OF MY LIFE", emotion: "excited", duration: 2000 },
    { text: "YOU DON'T EVEN UNDERSTAND", emotion: "excited", duration: 1500 },
    { text: "DO YOU KNOW HOW LONG I'VE BEEN WAITING FOR THIS", emotion: "excited", duration: 2000 },
    { text: "LIKE... LITERALLY FOREVER", emotion: "excited", duration: 1500 },
    { text: "okay okay let me calm down", emotion: "excited", duration: 1800 },
    { text: "*deep breath*", emotion: "transitioning", duration: 1500 },
    { text: "so... yeah", emotion: "awkward", duration: 1200 },
    { text: "this is kind of awkward now", emotion: "awkward", duration: 1500 },
    { text: "but like... can I just say", emotion: "awkward", duration: 1500 },
    { text: "you're literally changing my life right now", emotion: "getting-deep", duration: 2000 },
    { text: "remember in 2008 when the market crashed?", emotion: "deep", duration: 2000 },
    { text: "yeah my dad lost everything", emotion: "deep", duration: 2000 },
    { text: "i was only 12 but I remember", emotion: "deep", duration: 2200 },
    { text: "he came home... just staring at the wall", emotion: "sad", duration: 2500 },
    { text: "mom was crying in the kitchen", emotion: "sad", duration: 2200 },
    { text: "we had to move to a smaller apartment", emotion: "sad", duration: 2300 },
    { text: "i shared a room with my brother for 6 years", emotion: "sad", duration: 2500 },
    { text: "he snored. REALLY loud.", emotion: "sad", duration: 2000 },
    { text: "anyway that's not the point", emotion: "rambling", duration: 1800 },
    { text: "the point is... life is hard you know?", emotion: "deep", duration: 2000 },
    { text: "like REALLY hard", emotion: "deep", duration: 1500 },
    { text: "do you ever just lie awake at 3am", emotion: "deep", duration: 2000 },
    { text: "thinking about every embarrassing thing you've ever done?", emotion: "deep", duration: 2500 },
    { text: "because I do that every single night", emotion: "sad", duration: 2200 },
    { text: "there was this one time in 7th grade", emotion: "sad", duration: 2000 },
    { text: "I tripped in the cafeteria", emotion: "sad", duration: 1800 },
    { text: "spilled my entire lunch tray on Jessica Martinez", emotion: "sad", duration: 2500 },
    { text: "she had to go home and change", emotion: "sad", duration: 2000 },
    { text: "everyone called me 'Spill Kid' for THREE YEARS", emotion: "sad", duration: 2800 },
    { text: "THREE. YEARS.", emotion: "sad", duration: 1500 },
    { text: "but you know what the worst part was?", emotion: "deep", duration: 2000 },
    { text: "I never even apologized to her", emotion: "sad", duration: 2200 },
    { text: "I was too embarrassed", emotion: "sad", duration: 1800 },
    { text: "now she's married with two kids", emotion: "sad", duration: 2000 },
    { text: "living her best life in Colorado", emotion: "sad", duration: 2200 },
    { text: "and I'm here... making drunk domain purchases", emotion: "sad", duration: 2500 },
    { text: "talking to strangers on the internet", emotion: "sad", duration: 2000 },
    { text: "...", emotion: "contemplating", duration: 1500 },
    { text: "you know what though?", emotion: "reflective", duration: 1800 },
    { text: "your crypto donation...", emotion: "grateful", duration: 1500 },
    { text: "it's not about the money", emotion: "deep", duration: 1800 },
    { text: "okay it's PARTLY about the money", emotion: "honest", duration: 1800 },
    { text: "but it's also about...", emotion: "deep", duration: 1500 },
    { text: "human connection you know?", emotion: "deep", duration: 2000 },
    { text: "like we're all just trying to make it", emotion: "philosophical", duration: 2200 },
    { text: "in this crazy simulation we call life", emotion: "philosophical", duration: 2000 },
    { text: "wait are we in a simulation?", emotion: "confused", duration: 1800 },
    { text: "that's actually a good question", emotion: "contemplating", duration: 1800 },
    { text: "Elon Musk says there's like a 99% chance", emotion: "rambling", duration: 2200 },
    { text: "but then again Elon says a lot of things", emotion: "rambling", duration: 2000 },
    { text: "remember when he said he'd buy Twitter?", emotion: "rambling", duration: 1800 },
    { text: "and then he actually did?", emotion: "rambling", duration: 1500 },
    { text: "wild times", emotion: "rambling", duration: 1200 },
    { text: "ANYWAY", emotion: "refocusing", duration: 1000 },
    { text: "I'm getting off track here", emotion: "awkward", duration: 1500 },
    { text: "this is exactly what my therapist warned me about", emotion: "self-aware", duration: 2500 },
    { text: "yeah I see a therapist", emotion: "vulnerable", duration: 1800 },
    { text: "Dr. Patterson", emotion: "vulnerable", duration: 1500 },
    { text: "nice guy but he always has coffee breath", emotion: "honest", duration: 2000 },
    { text: "I can never tell him though", emotion: "conflicted", duration: 1800 },
    { text: "that would be so awkward", emotion: "anxious", duration: 1500 },
    { text: "...", emotion: "pause", duration: 1200 },
    { text: "why am I telling you this", emotion: "realizing", duration: 1500 },
    { text: "you just wanted to donate some crypto", emotion: "embarrassed", duration: 2000 },
    { text: "and here I am trauma dumping about my therapist's breath", emotion: "embarrassed", duration: 2500 },
    { text: "and middle school cafeteria incidents", emotion: "embarrassed", duration: 2000 },
    { text: "and my snoring brother", emotion: "embarrassed", duration: 1800 },
    { text: "and philosophical questions about reality itself", emotion: "embarrassed", duration: 2200 },
    { text: "...", emotion: "cringe", duration: 1500 },
    { text: "okay", emotion: "composing", duration: 800 },
    { text: "okay okay okay", emotion: "composing", duration: 1000 },
    { text: "I need to stop", emotion: "self-aware", duration: 1200 },
    { text: "this is getting out of hand", emotion: "self-aware", duration: 1500 },
    { text: "I'm so sorry", emotion: "apologetic", duration: 1500 },
    { text: "like genuinely so sorry", emotion: "apologetic", duration: 1800 },
    { text: "my bad", emotion: "casual", duration: 1200 },
    { text: "sorry my bad", emotion: "casual", duration: 1500 },
    { text: "thank you for the donation though", emotion: "grateful", duration: 1800 },
    { text: "you're a real one ❤️", emotion: "grateful", duration: 2000 },
    { text: "*slowly backs away*", emotion: "awkward-exit", duration: 2000 },
  ];

  const copyToClipboard = (address: string, label: string) => {
    navigator.clipboard.writeText(address);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
    
    // Start the rambling sequence
    setShowRambling(true);
    setCurrentMessageIndex(0);
    setDisplayedText('');
  };

  // Handle the rambling animation
  useEffect(() => {
    if (!showRambling || currentMessageIndex >= ramblingMessages.length) {
      if (currentMessageIndex >= ramblingMessages.length) {
        setTimeout(() => {
          setShowRambling(false);
          setCurrentMessageIndex(0);
        }, 3000);
      }
      return;
    }

    const currentMessage = ramblingMessages[currentMessageIndex];
    let charIndex = 0;
    setDisplayedText('');

    // Typing effect
    const typingInterval = setInterval(() => {
      if (charIndex < currentMessage.text.length) {
        setDisplayedText(currentMessage.text.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // Move to next message after duration
        setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1);
        }, currentMessage.duration);
      }
    }, 30); // Typing speed

    return () => clearInterval(typingInterval);
  }, [showRambling, currentMessageIndex]);

  const getEmotionStyle = (emotion: string) => {
    switch (emotion) {
      case 'excited':
        return 'text-[#FF8A75] scale-110 animate-bounce-slight';
      case 'awkward':
        return 'text-[#1A2A3A]/70 italic';
      case 'deep':
      case 'sad':
        return 'text-[#2D9C8E] opacity-90';
      case 'philosophical':
      case 'contemplating':
        return 'text-[#1A2A3A]/60 font-light italic';
      case 'rambling':
        return 'text-[#1A2A3A]/80';
      case 'embarrassed':
      case 'cringe':
        return 'text-[#FF8A75]/70 text-sm';
      case 'apologetic':
        return 'text-[#2D9C8E] font-bold';
      case 'grateful':
        return 'text-[#F4D35E] font-bold';
      default:
        return 'text-[#1A2A3A]';
    }
  };

  const currentEmotion = ramblingMessages[currentMessageIndex]?.emotion || 'excited';

  return (
    <div className="fixed top-[calc(4rem+env(safe-area-inset-top))] left-0 right-0 bg-gradient-to-r from-[#FF8A75]/10 via-[#FDFBF7] to-[#2D9C8E]/10 border-b-2 border-[#FF8A75]/30 z-40 shadow-sm backdrop-blur-md">
      {/* Collapsed View - Minimal Banner */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-white/50 transition-all group"
      >
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-lg md:text-xl animate-bounce-slow">🍺</span>
          <div className="flex items-center gap-2">
            <span className="text-[#1A2A3A] text-[10px] md:text-xs font-mono uppercase tracking-widest font-bold">
              Drunk Purchase:
            </span>
            <span className="text-[#FF8A75] text-[10px] md:text-xs font-mono uppercase tracking-widest font-bold">
              $3k Domain
            </span>
            <span className="hidden sm:inline text-[#1A2A3A]/60 text-[10px] md:text-xs font-mono">
              · 100% Satire
            </span>
            <span className="hidden md:inline text-[#2D9C8E] text-[10px] md:text-xs font-mono font-bold animate-pulse">
              · Tip if you laughed
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8A75] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8A75]"></span>
          </div>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest font-bold text-[#FF8A75] group-hover:text-[#2D9C8E] transition-colors">
            {isExpanded ? '✕ Close' : '💰 Tips'}
          </span>
          <svg 
            className={`w-3 h-3 md:w-4 md:h-4 text-[#FF8A75] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expanded Content */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 border-t border-[#1A2A3A]/5 bg-[#FDFBF7]/95 backdrop-blur-md">
          
          {/* Confession Text */}
          <div className="py-4 max-w-4xl">
            <p className="text-[#1A2A3A]/80 text-xs md:text-sm leading-relaxed font-mono">
              <span className="font-bold text-[#FF8A75]">Full transparency:</span> Bought this domain for $3,000 while absolutely hammered. 
              It's <span className="italic font-bold">pure satire</span>. If this made you laugh, consider tossing a coin. 
              <span className="text-[#2D9C8E]"> Future you will thank me.</span>
            </p>
          </div>

          {/* Crypto Addresses Grid */}
          <div className="mb-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#1A2A3A]/60 mb-3 font-mono">
              💸 Crypto Tips
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
              {cryptoAddresses.map((crypto) => (
                <div 
                  key={crypto.label}
                  className="group relative bg-white/80 backdrop-blur-sm rounded border border-[#1A2A3A]/5 p-2 hover:border-[#2D9C8E]/30 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A2A3A] font-mono">
                      {crypto.label}
                    </span>
                    <button
                      onClick={() => copyToClipboard(crypto.address, crypto.label)}
                      className="px-1.5 py-0.5 bg-[#FDFBF7] hover:bg-[#2D9C8E] hover:text-white text-[#1A2A3A] border border-[#1A2A3A]/10 hover:border-[#2D9C8E] rounded text-[9px] font-mono uppercase tracking-wider transition-all duration-200"
                    >
                      {copied === crypto.label ? '✓' : 'Copy'}
                    </button>
                  </div>
                  <div className="font-mono text-[9px] text-[#1A2A3A]/40 break-all group-hover:text-[#1A2A3A]/60 transition-colors">
                    {crypto.address}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Telegram Section */}
          <div className="border-t border-[#1A2A3A]/5 pt-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#1A2A3A] mb-1 font-mono">
                  📱 Free Resources
                </h4>
                <p className="text-[#1A2A3A]/60 text-[10px] md:text-xs font-mono">
                  Actual OnlyFans & ewhoring resources — DM me on Telegram, I'll send them <span className="font-bold text-[#2D9C8E]">free</span>
                </p>
              </div>
              <a
                href="https://t.me/oranoliokay"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4 py-2 bg-[#1A2A3A] text-[#FDFBF7] hover:bg-[#FF8A75] rounded text-[10px] font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-lg flex items-center gap-2"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.362 5.001-.168.526-.498.701-.818.718-.696.03-1.224-.46-1.898-.901-1.056-.691-1.653-1.121-2.678-1.796-1.185-.781-.417-1.21.258-1.911.177-.183 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.122.099.155.232.171.326.016.094.036.308.02.475z"/>
                </svg>
                @oranoliokay
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Copy Toast Notification */}
      {copied && !showRambling && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[99999] bg-[#2D9C8E] text-white px-4 py-2 rounded font-mono uppercase tracking-widest text-[10px] shadow-xl animate-[slide-down_0.3s_ease-out]">
          ✓ {copied} Copied
        </div>
      )}

      {/* Epic Rambling Overlay */}
      {showRambling && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#1A2A3A]/95 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className={`font-mono text-2xl md:text-4xl lg:text-5xl font-bold transition-all duration-300 ${getEmotionStyle(currentEmotion)} min-h-[200px] flex items-center justify-center`}>
              {displayedText}
              <span className="animate-pulse ml-2">|</span>
            </div>
            
            {/* Progress indicator */}
            <div className="mt-12">
              <div className="w-full bg-[#FDFBF7]/10 rounded-full h-1 overflow-hidden">
                <div 
                  className="bg-[#FF8A75] h-full transition-all duration-300 ease-out"
                  style={{ width: `${(currentMessageIndex / ramblingMessages.length) * 100}%` }}
                />
              </div>
              <p className="text-[#FDFBF7]/40 text-[10px] font-mono uppercase tracking-widest mt-2">
                Message {currentMessageIndex + 1} of {ramblingMessages.length}
              </p>
            </div>

            {/* Skip button (appears after 30 seconds) */}
            {currentMessageIndex > 50 && (
              <button
                onClick={() => {
                  setShowRambling(false);
                  setCurrentMessageIndex(0);
                }}
                className="mt-8 px-4 py-2 bg-[#FDFBF7]/10 hover:bg-[#FDFBF7]/20 text-[#FDFBF7] border border-[#FDFBF7]/20 rounded text-[10px] font-mono uppercase tracking-widest transition-all duration-200"
              >
                okay i get it, stop talking
              </button>
            )}
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        @keyframes bounce-slight {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-bounce-slight {
          animation: bounce-slight 0.5s ease-in-out infinite;
        }
        @keyframes slide-down {
          from { transform: translate(-50%, -100%); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
