
import React from 'react';

export const AnimatedVictim: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 300" className="w-full h-full">
        {/* Victim Character - Looking Confused and Sad */}
        
        {/* Head */}
        <circle cx="100" cy="80" r="35" fill="#F4D35E" />
        
        {/* Confused/Sad Eyes */}
        <circle cx="88" cy="85" r="4" fill="#1A2A3A" />
        <circle cx="112" cy="85" r="4" fill="#1A2A3A" />
        <circle cx="90" cy="83" r="1.5" fill="#FDFBF7" />
        <circle cx="114" cy="83" r="1.5" fill="#FDFBF7" />
        
        {/* Sad Expression */}
        <path d="M 90 100 Q 100 95 110 100" stroke="#1A2A3A" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Phone in hand (showing Discord/Telegram) */}
        <rect x="60" y="120" width="30" height="50" rx="5" fill="#1A2A3A" />
        <rect x="65" y="125" width="20" height="15" rx="2" fill="#2D9C8E" />
        <circle cx="75" cy="145" r="3" fill="#FDFBF7" />
        
        {/* Money flying away */}
        <g className="animate-pulse" style={{ animationDuration: '2s' }}>
          <text x="110" y="140" fontSize="16" fill="#FF8A75" opacity="0.7">$</text>
          <text x="125" y="155" fontSize="12" fill="#FF8A75" opacity="0.5">$</text>
          <text x="100" y="170" fontSize="14" fill="#FF8A75" opacity="0.6">$</text>
        </g>
        
        {/* Casual clothes (victim outfit) */}
        <rect x="75" y="115" width="50" height="60" rx="5" fill="#2D9C8E" opacity="0.3" />
        <rect x="80" y="120" width="40" height="25" rx="3" fill="#1A2A3A" />
        
        {/* Question marks floating (confusion) */}
        <text x="140" y="180" fontSize="20" fill="#FF8A75" opacity="0.4" className="animate-bounce" style={{ animationDuration: '2.5s' }}>?</text>
        <text x="50" y="200" fontSize="18" fill="#FF8A75" opacity="0.3" className="animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>?</text>
        
        {/* Subtle tear */}
        <circle cx="95" cy="95" r="2" fill="#2D9C8E" opacity="0.5" className="animate-pulse" />
        
        {/* Wallet (empty) */}
        <rect x="85" y="190" width="30" height="20" rx="3" fill="#1A2A3A" opacity="0.5" />
        <line x1="90" y1="195" x2="110" y2="195" stroke="#FF8A75" strokeWidth="1" strokeDasharray="2,2" />
      </svg>
    </div>
  );
};
