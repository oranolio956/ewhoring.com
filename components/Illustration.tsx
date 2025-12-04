import React from 'react';

export const ScamIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Background Circle */}
        <circle cx="200" cy="200" r="180" fill="url(#gradient1)" opacity="0.1" />
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF5757" />
            <stop offset="100%" stopColor="#00D9C0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A1A2E" />
            <stop offset="100%" stopColor="#1A2A4E" />
          </linearGradient>
        </defs>

        {/* Phone Device */}
        <rect x="120" y="80" width="160" height="240" rx="20" fill="url(#gradient2)" />
        <rect x="130" y="90" width="140" height="200" rx="10" fill="#0A1A2E" opacity="0.3" />
        
        {/* Fake Profile Picture on Screen */}
        <circle cx="200" cy="150" r="40" fill="url(#gradient1)" opacity="0.6" />
        <text x="200" y="160" fontSize="24" fill="#0A1A2E" textAnchor="middle" fontWeight="bold">AI</text>
        
        {/* Money Symbols Floating Away */}
        <g className="animate-float" style={{ animationDelay: '0s' }}>
          <text x="100" y="200" fontSize="32" fill="#FF5757" opacity="0.7">$</text>
        </g>
        <g className="animate-float" style={{ animationDelay: '1s' }}>
          <text x="300" y="180" fontSize="28" fill="#FF5757" opacity="0.6">$</text>
        </g>
        <g className="animate-float" style={{ animationDelay: '2s' }}>
          <text x="80" y="250" fontSize="24" fill="#FF5757" opacity="0.5">$</text>
        </g>
        
        {/* Question Marks (Confusion) */}
        <text x="200" y="280" fontSize="40" fill="#00D9C0" opacity="0.4" textAnchor="middle" className="animate-pulse-slow">?</text>
        <text x="150" y="300" fontSize="30" fill="#00D9C0" opacity="0.3" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }}>?</text>
        <text x="250" y="310" fontSize="28" fill="#00D9C0" opacity="0.3" className="animate-pulse-slow" style={{ animationDelay: '1s' }}>?</text>
        
        {/* Broken Heart */}
        <g transform="translate(200, 220)">
          <path d="M -20,0 Q -20,-20 0,-20 Q 20,-20 20,0 Q 20,20 0,40 Q -20,20 -20,0" 
                fill="none" stroke="#FF5757" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
          <line x1="-10" y1="0" x2="10" y2="0" stroke="#FF5757" strokeWidth="2" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};

export const RecoveryIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="recoveryGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9C0" />
            <stop offset="100%" stopColor="#00B8A3" />
          </linearGradient>
          <linearGradient id="recoveryGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD93D" />
            <stop offset="100%" stopColor="#FFC107" />
          </linearGradient>
        </defs>

        {/* Shield Background */}
        <path d="M 200 50 L 280 80 L 280 180 Q 280 280 200 350 Q 120 280 120 180 L 120 80 Z" 
              fill="url(#recoveryGrad1)" opacity="0.2" />
        
        {/* Shield */}
        <path d="M 200 80 L 260 105 L 260 190 Q 260 270 200 320 Q 140 270 140 190 L 140 105 Z" 
              fill="url(#recoveryGrad1)" />
        <path d="M 200 80 L 260 105 L 260 190 Q 260 270 200 320 Q 140 270 140 190 L 140 105 Z" 
              fill="none" stroke="#0A1A2E" strokeWidth="3" />
        
        {/* Checkmark */}
        <path d="M 160 200 L 190 230 L 240 160" 
              fill="none" stroke="#0A1A2E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Floating Support Elements */}
        <circle cx="100" cy="100" r="15" fill="url(#recoveryGrad2)" opacity="0.6" className="animate-float" />
        <circle cx="300" cy="120" r="12" fill="url(#recoveryGrad2)" opacity="0.5" className="animate-float" style={{ animationDelay: '1s' }} />
        <circle cx="320" cy="280" r="18" fill="url(#recoveryGrad2)" opacity="0.4" className="animate-float" style={{ animationDelay: '2s' }} />
      </svg>
    </div>
  );
};
