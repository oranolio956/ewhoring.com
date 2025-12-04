
import React from 'react';

export const AnimatedTherapist: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 300" className="w-full h-full">
        {/* Professional Therapist Character - Subtly Making Fun */}
        
        {/* Head */}
        <circle cx="100" cy="80" r="35" fill="#F4D35E" className="animate-pulse" style={{ animationDuration: '3s' }} />
        
        {/* Professional Glasses */}
        <rect x="70" y="75" width="25" height="18" rx="3" fill="#1A2A3A" opacity="0.8" />
        <rect x="105" y="75" width="25" height="18" rx="3" fill="#1A2A3A" opacity="0.8" />
        <line x1="95" y1="84" x2="105" y2="84" stroke="#1A2A3A" strokeWidth="2" />
        
        {/* Fake Concerned Expression */}
        <path d="M 85 100 Q 100 110 115 100" stroke="#1A2A3A" strokeWidth="2" fill="none" className="animate-bounce" style={{ animationDuration: '2s' }} />
        
        {/* Professional Suit */}
        <rect x="75" y="115" width="50" height="80" rx="5" fill="#1A2A3A" />
        <rect x="80" y="120" width="40" height="30" rx="3" fill="#2D9C8E" />
        
        {/* Clipboard with "$299" */}
        <rect x="120" y="130" width="25" height="35" rx="2" fill="#FDFBF7" />
        <line x1="125" y1="140" x2="140" y2="140" stroke="#1A2A3A" strokeWidth="1" />
        <text x="132" y="155" fontSize="8" fill="#FF8A75" fontWeight="bold" textAnchor="middle">$299</text>
        
        {/* Hand holding pen (writing fake notes) */}
        <ellipse cx="90" cy="180" rx="8" ry="12" fill="#F4D35E" />
        <line x1="95" y1="175" x2="110" y2="160" stroke="#1A2A3A" strokeWidth="2" />
        
        {/* Subtle money symbol floating */}
        <text x="50" y="200" fontSize="20" fill="#2D9C8E" opacity="0.3" className="animate-pulse" style={{ animationDuration: '4s' }}>$</text>
        
        {/* Professional badge (fake) */}
        <circle cx="100" cy="250" r="20" fill="#FF8A75" opacity="0.2" />
        <text x="100" y="255" fontSize="10" fill="#1A2A3A" fontWeight="bold" textAnchor="middle">CERT</text>
        
        {/* Subtle animation - slight head nod */}
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-2; 0,0"
          dur="3s"
          repeatCount="indefinite"
        />
      </svg>
    </div>
  );
};
