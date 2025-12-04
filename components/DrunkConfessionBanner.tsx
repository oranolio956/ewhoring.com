import React, { useState } from 'react';

export const DrunkConfessionBanner: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const cryptoAddresses = [
    { label: 'BTC', address: 'bc1qxv394xty8p380gq25qf70nm5r84zemgwzh3z06' },
    { label: 'ETH', address: '0xde0F05DAB6c6c335161505B36268ccFc104E506f' },
    { label: 'SOL', address: '3BPJBjiPSvHfmjp6isCAfi1HtxJsjFSV3GWuCFaQK1Te' },
    { label: 'LTC', address: 'LW1rr8n8u437YkHuBjKdhNkhAWqJy2tezG' },
    { label: 'XRP', address: 'rJupEXhHevDrrEWPTouA1SzYBtDRqXdegZ' },
  ];

  const copyToClipboard = (address: string, label: string) => {
    navigator.clipboard.writeText(address);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="relative bg-gradient-to-r from-[#FF8A75]/10 via-[#FDFBF7] to-[#2D9C8E]/10 border-b-2 border-[#FF8A75]/30 z-50 shadow-sm">
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
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Expanded Content */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 border-t border-[#1A2A3A]/5">
          
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
                  className="group relative bg-white/50 backdrop-blur-sm rounded border border-[#1A2A3A]/5 p-2 hover:border-[#2D9C8E]/30 transition-all duration-200"
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
      {copied && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[99999] bg-[#2D9C8E] text-white px-4 py-2 rounded font-mono uppercase tracking-widest text-[10px] shadow-xl animate-[slide-down_0.3s_ease-out]">
          ✓ {copied} Copied
        </div>
      )}

      <style>{`
        @keyframes slide-down {
          from { transform: translate(-50%, -100%); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
