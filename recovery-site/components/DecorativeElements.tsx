import React from 'react';

export const FloatingMoney: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute ${className} pointer-events-none`}>
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 animate-float" style={{ animationDelay: '0s' }}>
          <span className="text-4xl text-[#FF5757] opacity-30">$</span>
        </div>
        <div className="absolute inset-0 animate-float" style={{ animationDelay: '1s' }}>
          <span className="text-3xl text-[#FF5757] opacity-20">$</span>
        </div>
        <div className="absolute inset-0 animate-float" style={{ animationDelay: '2s' }}>
          <span className="text-2xl text-[#FF5757] opacity-15">$</span>
        </div>
      </div>
    </div>
  );
};

export const QuestionMarkCloud: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute ${className} pointer-events-none`}>
      <div className="relative">
        <span className="text-6xl text-[#00D9C0] opacity-20 animate-pulse-slow">?</span>
        <span className="absolute top-4 left-4 text-4xl text-[#00D9C0] opacity-15 animate-pulse-slow" style={{ animationDelay: '0.5s' }}>?</span>
        <span className="absolute top-8 left-8 text-3xl text-[#00D9C0] opacity-10 animate-pulse-slow" style={{ animationDelay: '1s' }}>?</span>
      </div>
    </div>
  );
};

export const GradientOrb: React.FC<{ 
  className?: string;
  color: 'teal' | 'red' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
}> = ({ className = "", color, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-64 h-64',
    md: 'w-96 h-96',
    lg: 'w-[500px] h-[500px]'
  };

  const colorClasses = {
    teal: 'bg-gradient-to-br from-[#00D9C0] to-[#00B8A3]',
    red: 'bg-gradient-to-br from-[#FF5757] to-[#FF8A8A]',
    yellow: 'bg-gradient-to-br from-[#FFD93D] to-[#FFC107]'
  };

  return (
    <div className={`absolute ${className} ${sizeClasses[size]} ${colorClasses[color]} rounded-full opacity-8 blur-3xl animate-float pointer-events-none`}></div>
  );
};
