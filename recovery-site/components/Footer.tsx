import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2540] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🛡️</span>
              </div>
              <div>
                <div className="font-bold">ScamVictimRecovery</div>
                <div className="text-xs text-gray-400">Certified Specialists</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Professional recovery services for victims of online scams. 
              Helping you process trauma since 2024.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Recovery Consultation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Emotional Support</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Trauma Processing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">VIP Recovery Program</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#testimonials" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Recovery Process</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 ScamVictimRecovery.com. All rights reserved.
              <br />
              <span className="text-xs italic">Money recovery services not provided. Terms apply.</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400">
                <span className="inline-flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse"></span>
                  <span>12,847+ Victims Helped*</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/5 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-white">Important Disclaimer:</strong> ScamVictimRecovery.com provides emotional support, 
            trauma processing, and educational services only. We cannot and will not recover your money. 
            All consultation fees ($299-$999) are non-refundable. "Victims Helped" means they paid our consultation fee. 
            "Money Recovered" is accurate - we have never recovered a single dollar. Results may vary. 
            Satisfaction not guaranteed (but we hope you're satisfied with the emotional support).
          </p>
        </div>
      </div>
    </footer>
  );
};
