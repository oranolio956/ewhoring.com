
import React from 'react';

export const LegalModal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-[#FDFBF7] w-full max-w-2xl rounded-3xl p-8 relative z-10 max-h-[80vh] overflow-y-auto border border-[#1A2A3A]/10 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold hover:text-[#FF8A75]">&times;</button>
        
        <h2 className="text-2xl font-bold font-['Space_Grotesk'] mb-6 text-[#1A2A3A] uppercase tracking-wide border-b border-[#1A2A3A]/10 pb-4">
            Terms of Enrollment
        </h2>
        
        <div className="prose text-[#1A2A3A]/80 font-sans text-sm leading-relaxed space-y-4">
          <p><strong>1. NATURE OF PRODUCT:</strong> You are purchasing an informational digital product ("The Protocol"). Access is immediate and digital. There are no physical goods.</p>
          
          <p><strong>2. EARNINGS DISCLAIMER:</strong> The revenue figures stated on this website (e.g., "$30k/mo") are personal results of the author and select students. Your results will vary based on your work ethic, ability to follow instructions, and market conditions.</p>
          
          <p><strong>3. NO REFUND POLICY:</strong> Due to the digital nature of the content (instant download of intellectual property), all sales are final. Once you have accessed the Protocol, you cannot "un-learn" it. Do not purchase if you are financially destitute.</p>
          
          <p><strong>4. LEGAL COMPLIANCE:</strong> The Protocol teaches social engineering and digital marketing. You agree to use these skills in compliance with the Terms of Service of any third-party platforms (Discord, Tinder, etc.). Oranolio Holdings Inc. accepts no liability for account bans resulting from misuse.</p>
        </div>

        <button onClick={onClose} className="w-full mt-8 py-4 bg-[#1A2A3A] text-white font-bold uppercase tracking-widest hover:bg-[#2D9C8E] transition-colors rounded-xl shadow-lg">
           I UNDERSTAND & AGREE
        </button>
      </div>
    </div>
  );
};
