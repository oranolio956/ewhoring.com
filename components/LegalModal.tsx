
import React from 'react';

export const LegalModal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-[#0F1923]/90">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="bg-[#FDFBF7] w-full max-w-4xl rounded-xl shadow-2xl relative z-10 flex flex-col max-h-[90vh] border-2 border-[#1A2A3A]">
        
        {/* Header */}
        <div className="p-6 border-b-2 border-[#1A2A3A] bg-[#1A2A3A] text-[#FDFBF7] flex justify-between items-center">
            <div>
                <h2 className="text-xl md:text-2xl font-bold font-['Space_Grotesk'] uppercase tracking-widest text-[#FDFBF7]">
                    RECOVERY SERVICE TERMS & DISCLAIMERS
                </h2>
                <p className="text-[10px] font-mono opacity-70 mt-1">
                    LAST UPDATED: 2024 // LEGALLY BINDING (WE THINK)
                </p>
            </div>
            <button onClick={onClose} className="text-4xl hover:text-[#FF8A75] transition-colors">&times;</button>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 font-sans text-[#1A2A3A] text-sm leading-relaxed space-y-8 bg-white">
          
          <div className="border-l-4 border-[#1A2A3A] pl-6 py-2 bg-[#F3F4F6]">
              <p className="font-bold uppercase text-xs tracking-widest text-[#1A2A3A] mb-2">IMPORTANT NOTICE</p>
              <p className="font-medium text-xs md:text-sm">
                  PLEASE READ THESE TERMS CAREFULLY. BY ACCESSING THIS WEBSITE OR PURCHASING ANY PRODUCTS ("THE PROTOCOL"), YOU AGREE TO BE BOUND BY THE FOLLOWING TERMS AND CONDITIONS. IF YOU DO NOT AGREE, YOU MAY NOT ACCESS OR USE THIS SITE.
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">1. Money Recovery Disclaimer</h3>
              <p>
                  <strong>WE CANNOT AND WILL NOT RECOVER YOUR MONEY.</strong> Our recovery services provide emotional support, trauma processing, red flag education, and "what went wrong" analysis. We do not recover funds, contact scammers, file police reports, or perform any actual recovery actions.
              </p>
              <p className="mt-2">
                  Scam Recovery Pro ("The Company") is a support service, not a financial recovery service. By purchasing our consultation, you acknowledge that your money is likely gone forever and we cannot help you get it back. We can only help you feel better about losing it.
              </p>
          </div>
          
          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">2. Certification Disclaimer</h3>
              <p>
                  Our "certified recovery specialists" are certified by our own certification program. We created the certification, we administer the tests, and we issue the certificates. This certification is not recognized by any external authority, government agency, or professional organization.
              </p>
              <p className="mt-2">
                  When we say "certified," we mean we gave ourselves certificates. When we say "professional," we mean we charge money. When we say "specialists," we mean we read some articles about scams. Your results may vary.
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">3. Third-Party Platforms & Affiliation</h3>
              <p>
                  This website and the Product are not affiliated with, endorsed by, or sponsored by Discord, Tinder, Bumble, Hinge, Match Group, PayPal, Cash App, or any other third-party platform mentioned.
              </p>
              <p className="mt-2">
                  You are solely responsible for complying with the Terms of Service (TOS) of any platform you use. The Company is not liable for account suspensions, bans, or legal actions taken against you by third-party platforms resulting from your use of this information.
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">4. Limitation of Liability</h3>
              <p>
                  To the fullest extent permitted by law, Oranolio Holdings Inc. shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, resulting from the use or the inability to use the Product.
              </p>
              <p className="mt-2">
                  You assume full responsibility for your actions. The Company is an information provider only and does not offer legal, financial, or professional advice.
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">5. Indemnification</h3>
              <p>
                  You agree to indemnify, defend, and hold harmless The Company, its officers, directors, employees, agents, and licensors from and against all claims, losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms or any activity related to your use of the Product (including negligent or wrongful conduct).
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">6. No Refund Policy</h3>
              <p>
                  All consultation fees ($299 basic, $999 VIP) are <strong>NON-REFUNDABLE.</strong> This applies even if: 1) You realize we can't recover your money, 2) You're not satisfied with the emotional support, 3) You feel scammed again, 4) You change your mind.
              </p>
              <p className="mt-2">
                  By paying the consultation fee, you acknowledge that you're paying for services that cannot recover your money. If you're not satisfied, that's unfortunate, but we already spent your $299 on coffee and donuts. No refunds. No exceptions. No, really.
              </p>
          </div>
          
          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">7. Success Rate Disclaimer</h3>
              <p>
                  When we claim "12,847+ victims helped," we mean 12,847+ people paid our consultation fee. "Helped" does not mean we recovered their money (we didn't). It means they paid us and received emotional support.
              </p>
              <p className="mt-2">
                  Our "100% satisfaction rate" means 100% of people who paid didn't chargeback (yet). Our "$0 recovered" statistic is accurate - we have never recovered a single dollar for any client. This is not a bug, it's a feature.
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">8. Governing Law & Jurisdiction</h3>
              <p>
                  These Terms are governed by the laws of wherever we feel like claiming we're based. If you try to sue us, good luck finding us. We operate from the internet, which has no physical location. Our legal address is "The Cloud."
              </p>
              <p className="mt-2">
                  Any disputes will be resolved through binding arbitration conducted via email. The arbitrator will be chosen by us. The decision will be final. You will lose. This is not legal advice (we're not lawyers, we just play them on the internet).
              </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t-2 border-[#1A2A3A] bg-[#FDFBF7] flex flex-col gap-4">
            <div className="flex items-start gap-3">
                <input type="checkbox" id="legal-check" className="mt-1 w-5 h-5 accent-[#1A2A3A]" />
                <label htmlFor="legal-check" className="text-xs md:text-sm font-bold text-[#1A2A3A]">
                    I UNDERSTAND THAT THIS SERVICE CANNOT RECOVER MY MONEY. I AGREE TO PAY $299 FOR EMOTIONAL SUPPORT AND ACCEPT THAT ALL FEES ARE NON-REFUNDABLE. I ACKNOWLEDGE THAT "CERTIFIED" MEANS CERTIFIED BY THEMSELVES.
                </label>
            </div>
            <button onClick={onClose} className="w-full py-4 bg-[#1A2A3A] text-white font-bold text-lg uppercase tracking-widest hover:bg-[#2D9C8E] transition-colors shadow-lg">
                I AGREE & PROCEED
            </button>
        </div>
      </div>
    </div>
  );
};
