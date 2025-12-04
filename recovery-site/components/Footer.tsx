import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0A1A2E] to-[#1A2A4E] text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF5757] to-[#00D9C0] rounded-xl flex items-center justify-center shadow-layered">
                  <span className="text-white font-bold text-xl">🛡️</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFD93D] rounded-full border-2 border-[#0A1A2E] animate-pulse-slow"></div>
              </div>
              <div>
                <div className="font-black text-lg">ScamVictimRecovery</div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">Certified Specialists</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed font-light">
              Professional recovery services for victims of online scams. 
              Helping you process trauma since 2024.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors text-sm font-medium relative group">
                Recovery Consultation
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors text-sm font-medium relative group">
                Emotional Support
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors text-sm font-medium relative group">
                Trauma Processing
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors text-sm font-medium relative group">
                VIP Recovery Program
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#testimonials" className="text-white/60 hover:text-white transition-colors text-sm font-medium relative group">
                Success Stories
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a></li>
              <li><a href="#faq" className="text-white/60 hover:text-white transition-colors text-sm font-medium relative group">
                FAQ
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a></li>
              <li><a href="#process" className="text-white/60 hover:text-white transition-colors text-sm font-medium relative group">
                Recovery Process
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a></li>
              <li><a href="#pricing" className="text-white/60 hover:text-white transition-colors text-sm font-medium relative group">
                Pricing
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium relative group">
                Disclaimer
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium relative group">
                Refund Policy
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <div className="text-sm text-white/70 font-medium">
                © 2024 ScamVictimRecovery.com. All rights reserved.
              </div>
              <div className="text-xs text-white/50 italic font-light">
                Money recovery services not provided. Terms apply.
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <span className="w-2 h-2 bg-[#00D9C0] rounded-full animate-pulse-slow"></span>
                <span className="text-sm text-white/70 font-medium">12,847+ Victims Helped*</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Disclaimer */}
        <div className="mt-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF5757] to-[#00D9C0] rounded-full"></div>
          <div className="ml-8 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-xs font-bold text-[#00D9C0] uppercase tracking-wider mb-4">Important Disclaimer</div>
            <p className="text-sm text-white/60 leading-relaxed font-light">
              ScamVictimRecovery.com provides emotional support, trauma processing, and educational services only. 
              We cannot and will not recover your money. All consultation fees ($299-$999) are non-refundable. 
              "Victims Helped" means they paid our consultation fee. "Money Recovered" is accurate - we have never recovered a single dollar. 
              Results may vary. Satisfaction not guaranteed (but we hope you're satisfied with the emotional support).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
