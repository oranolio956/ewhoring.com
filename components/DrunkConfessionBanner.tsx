import React, { useState } from 'react';

export const DrunkConfessionBanner: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const cryptoAddresses = [
    { label: 'BTC', address: 'bc1qxv394xty8p380gq25qf70nm5r84zemgwzh3z06', color: '#F7931A' },
    { label: 'ETH', address: '0xde0F05DAB6c6c335161505B36268ccFc104E506f', color: '#627EEA' },
    { label: 'SOL', address: '3BPJBjiPSvHfmjp6isCAfi1HtxJsjFSV3GWuCFaQK1Te', color: '#14F195' },
    { label: 'LTC', address: 'LW1rr8n8u437YkHuBjKdhNkhAWqJy2tezG', color: '#345D9D' },
    { label: 'XRP', address: 'rJupEXhHevDrrEWPTouA1SzYBtDRqXdegZ', color: '#23292F' },
  ];

  const copyToClipboard = (address: string, label: string) => {
    navigator.clipboard.writeText(address);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="relative bg-gradient-to-r from-[#1A2A3A] via-[#2D4654] to-[#1A2A3A] border-b-2 border-[#FF8A75] shadow-lg z-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-5 space-y-4">
        {/* Top Section - The Confession */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="text-2xl">🍺</span>
            <h3 className="text-[#F4D35E] font-bold text-base md:text-lg uppercase tracking-wide">
              Drunk Domain Purchase Alert
            </h3>
          </div>
          <p className="text-[#FDFBF7] text-sm md:text-base leading-relaxed">
            <span className="font-bold text-[#FF8A75]">Full Transparency:</span> I dropped $3,000 on this domain while absolutely wasted. 
            It's <span className="italic font-semibold">100% satire</span>. If this made you laugh, toss a coin. 
            <span className="text-[#2D9C8E] font-medium"> Your grandkids will thank me.</span>
          </p>
        </div>

        {/* Crypto & Telegram Section */}
        <div className="border-t border-[#FDFBF7]/20 pt-4 space-y-4">
            
            {/* Crypto Addresses */}
            <div>
              <h4 className="text-[#F4D35E] font-bold text-xs uppercase tracking-widest mb-3 text-center">
                💸 If I Made You Laugh - Crypto Tips
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {cryptoAddresses.map((crypto) => (
                  <div 
                    key={crypto.label}
                    className="group relative bg-[#0F1923]/50 backdrop-blur-sm rounded-lg p-3 border border-[#FDFBF7]/10 hover:border-[#2D9C8E] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span 
                        className="font-bold text-sm uppercase tracking-wider"
                        style={{ color: crypto.color }}
                      >
                        {crypto.label}
                      </span>
                      <button
                        onClick={() => copyToClipboard(crypto.address, crypto.label)}
                        className="px-2 py-1 bg-[#2D9C8E]/20 hover:bg-[#2D9C8E] text-[#2D9C8E] hover:text-white rounded text-xs font-mono transition-all duration-200"
                      >
                        {copied === crypto.label ? '✓' : 'Copy'}
                      </button>
                    </div>
                    <div className="font-mono text-[10px] text-[#FDFBF7]/60 break-all group-hover:text-[#FDFBF7] transition-colors">
                      {crypto.address}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Telegram Section */}
            <div className="bg-gradient-to-r from-[#2D9C8E]/20 to-[#FF8A75]/20 rounded-lg p-4 border border-[#2D9C8E]/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="text-center md:text-left">
                  <h4 className="text-[#F4D35E] font-bold text-sm uppercase tracking-wider mb-1">
                    📱 Want Actual Resources?
                  </h4>
                  <p className="text-[#FDFBF7] text-xs leading-relaxed">
                    Real OnlyFans & ewhoring resources (no bullsh*t) - DM me on Telegram, I'll send them <span className="font-bold text-[#2D9C8E]">100% FREE</span>
                  </p>
                </div>
                <a
                  href="https://t.me/oranoliokay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-3 bg-[#0088cc] hover:bg-[#0077b3] text-white rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.362 5.001-.168.526-.498.701-.818.718-.696.03-1.224-.46-1.898-.901-1.056-.691-1.653-1.121-2.678-1.796-1.185-.781-.417-1.21.258-1.911.177-.183 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.122.099.155.232.171.326.016.094.036.308.02.475z"/>
                  </svg>
                  @oranoliokay
                </a>
              </div>
            </div>

          {/* Toast Notification for Copy */}
          {copied && (
            <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[99999] bg-[#2D9C8E] text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl animate-[slide-down_0.3s_ease-out]">
              ✓ {copied} Address Copied!
            </div>
          )}
        </div>
      </div>

      {/* Subtle Animation Styles */}
      <style>{`
        @keyframes slide-down {
          from { transform: translate(-50%, -100%); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
