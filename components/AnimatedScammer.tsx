
import React from 'react';

export const AnimatedScammer: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 300" className="w-full h-full">
        {/* Scammer Character - Behind Computer, Looking Shady */}
        
        {/* Computer Screen */}
        <rect x="40" y="60" width="120" height="80" rx="5" fill="#1A2A3A" />
        <rect x="45" y="65" width="110" height="70" rx="2" fill="#2D9C8E" opacity="0.2" />
        
        {/* Fake Profile Picture on Screen */}
        <circle cx="100" cy="100" r="20" fill="#FF8A75" opacity="0.5" />
        <text x="100" y="105" fontSize="12" fill="#1A2A3A" textAnchor="middle" fontWeight="bold">AI</text>
        
        {/* Head (behind screen, partially hidden) */}
        <circle cx="100" cy="50" r="25" fill="#F4D35E" opacity="0.7" />
        
        {/* Shady eyes (looking around) */}
        <circle cx="92" cy="48" r="3" fill="#1A2A3A" className="animate-pulse" />
        <circle cx="108" cy="48" r="3" fill="#1A2A3A" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
        
        {/* Evil grin */}
        <path d="M 90 55 Q 100 60 110 55" stroke="#1A2A3A" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Money symbols on screen */}
        <text x="80" y="130" fontSize="14" fill="#2D9C8E" opacity="0.6">$</text>
        <text x="120" y="125" fontSize="12" fill="#2D9C8E" opacity="0.5">$</text>
        <text x="100" y="140" fontSize="16" fill="#2D9C8E" opacity="0.7">$</text>
        
        {/* Keyboard */}
        <rect x="50" y="145" width="100" height="25" rx="3" fill="#1A2A3A" />
        <rect x="55" y="150" width="8" height="8" rx="1" fill="#2D9C8E" opacity="0.3" />
        <rect x="70" y="150" width="8" height="8" rx="1" fill="#2D9C8E" opacity="0.3" />
        <rect x="85" y="150" width="8" height="8" rx="1" fill="#2D9C8E" opacity="0.3" />
        
        {/* Hands typing */}
        <ellipse cx="70" cy="175" rx="6" ry="10" fill="#F4D35E" />
        <ellipse cx="130" cy="175" rx="6" ry="10" fill="#F4D35E" />
        
        {/* Multiple fake profiles floating */}
        <circle cx="30" cy="200" r="15" fill="#FF8A75" opacity="0.3" />
        <circle cx="170" cy="210" r="12" fill="#2D9C8E" opacity="0.3" />
        <circle cx="20" cy="230" r="10" fill="#FF8A75" opacity="0.2" />
        
        {/* Subtle "scam" text (very small) */}
        <text x="100" y="250" fontSize="8" fill="#FF8A75" opacity="0.2" textAnchor="middle">SCAM</text>
      </svg>
    </div>
  );
};
