
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
                    TERMS OF SERVICE & LEGAL DISCLAIMER
                </h2>
                <p className="text-[10px] font-mono opacity-70 mt-1">
                    LAST UPDATED: OCTOBER 2025 // BINDING AGREEMENT
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
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">1. Educational and Entertainment Purpose Only</h3>
              <p>
                  The content provided on this website and within "The Oranolio Protocol" (the "Product") is strictly for <strong>educational, informational, and entertainment purposes only</strong>. The Product is a theoretical analysis of social engineering, digital marketing strategies, and human psychology.
              </p>
              <p className="mt-2">
                  Oranolio Holdings Inc. ("The Company") does not condone, encourage, or advocate for the commission of any illegal acts, including but not limited to fraud, identity theft, wire fraud, blackmail, or extortion. Any anecdotes or examples used are hypothetical or satirical in nature.
              </p>
          </div>
          
          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">2. Earnings Disclaimer</h3>
              <p>
                  In accordance with FTC guidelines, we make no guarantees regarding your ability to generate income using the strategies provided. The revenue figures ($30,000/mo, $1,000/day) referenced on this website are exceptional results and are not intended to serve as a guarantee, warranty, or prediction of your future earnings.
              </p>
              <p className="mt-2">
                  Your success depends on various factors including your background, dedication, social intelligence, and market conditions. All business entails risk. By purchasing this Product, you acknowledge that you may earn nothing.
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
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">6. Refund Policy for Digital Goods</h3>
              <p>
                  The Product is a digital information good delivered via internet download. Upon purchase, you receive immediate access to the intellectual property.
              </p>
              <p className="mt-2">
                  <strong>ALL SALES ARE FINAL.</strong> Due to the nature of digital goods, we do not offer refunds or exchanges. By completing your purchase, you waive your right to a refund and acknowledge that any chargeback attempts will be contested with this agreement as proof of purchase and delivery.
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">7. Governing Law</h3>
              <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which The Company is established, without regard to its conflict of law provisions.
              </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t-2 border-[#1A2A3A] bg-[#FDFBF7] flex flex-col gap-4">
            <div className="flex items-start gap-3">
                <input type="checkbox" id="legal-check" className="mt-1 w-5 h-5 accent-[#1A2A3A]" />
                <label htmlFor="legal-check" className="text-xs md:text-sm font-bold text-[#1A2A3A]">
                    I HAVE READ AND AGREE TO THE TERMS OF SERVICE, EARNINGS DISCLAIMER, AND PRIVACY POLICY. I UNDERSTAND THIS IS FOR EDUCATIONAL PURPOSES.
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
