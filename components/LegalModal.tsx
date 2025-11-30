
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
                <h2 className="text-2xl md:text-3xl font-bold font-['Space_Grotesk'] uppercase tracking-widest text-[#FF0000] animate-pulse">
                    ⚠ LIABILITY WAIVER & TOS
                </h2>
                <p className="text-[10px] font-mono opacity-70 mt-1">
                    DOCUMENT_ID: ORANOLIO_INDEMNITY_V9.9 // BINDING CONTRACT
                </p>
            </div>
            <button onClick={onClose} className="text-4xl hover:text-[#FF8A75] transition-colors">&times;</button>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 font-serif text-[#1A2A3A] text-sm leading-relaxed space-y-8 bg-[url('https://www.transparenttextures.com/patterns/legal-paper.png')]">
          
          <div className="border-l-4 border-[#FF0000] pl-6 py-2 bg-[#FF0000]/5">
              <p className="font-bold uppercase text-xs tracking-widest text-[#FF0000] mb-2">Notice to Purchaser</p>
              <p className="font-bold">
                  BY ACCESSING THIS WEBSITE, PURCHASING THE "PROTOCOL," OR READING ANY MATERIAL PRODUCED BY "ORANOLIO," YOU AGREE TO THE FOLLOWING TERMS WITHOUT RESERVATION. IF YOU DO NOT AGREE, CLOSE THIS TAB IMMEDIATELY AND RETURN TO YOUR POVERTY.
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">1. The "Educational Purpose" & Satire Clause</h3>
              <p>
                  You acknowledge that "The Oranolio Protocol" and all associated content are sold strictly as <strong>informational, educational, and satirical material</strong>. The strategies, scripts, and personas described are works of fiction designed to illustrate the vulnerabilities of human psychology. 
              </p>
              <p className="mt-2">
                  Any implementation of these strategies in the real world is done solely at your own discretion and risk. Oranolio Holdings Inc. does not condone, encourage, or solicit fraud, identity theft, or financial crimes. We are selling a book. If you hit someone with the book, that is assault, and the book author is not liable.
              </p>
          </div>
          
          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">2. Zero Earnings Guarantee (The "Idiot Clause")</h3>
              <p>
                  Oranolio Holdings Inc. makes <strong>ZERO</strong> guarantees regarding your financial success. The revenue figures ($1k/day, $30k/mo) cited on this website are the personal results of the Author, who is significantly smarter and harder working than you.
              </p>
              <p className="mt-2">
                  <strong>YOUR RESULTS MAY VARY.</strong> Your results will likely be zero if you are lazy, inarticulate, or lack social intelligence. We are selling a roadmap, not a car. If you drive the car into a ditch, do not call the map maker.
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">3. Platform Terms of Service Violations</h3>
              <p>
                  You acknowledge that the techniques described may violate the Terms of Service (TOS) of third-party platforms including but not limited to: Discord, Tinder, Bumble, Hinge, CashApp, PayPal, Venmo, and Snapchat.
              </p>
              <p className="mt-2">
                  <strong>WE DO NOT CONTROL THESE PLATFORMS.</strong> If your account is banned, suspended, or deleted, Oranolio Holdings Inc. bears no responsibility. You are operating in a hostile environment. Getting banned is a skill issue. Do not cry to support if you get IP banned from Tinder. That is the cost of doing business.
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">4. The "Jail Cell" Provision (Criminal Liability)</h3>
              <p>
                  You agree that you are solely responsible for ensuring your actions comply with the laws of your jurisdiction. Oranolio Holdings Inc. is not a law firm and offers no legal advice.
              </p>
              <p className="mt-2">
                  If you choose to use the provided information to commit fraud, wire fraud, blackmail, extortion, or impersonation of a real person without consent, <strong>YOU DO SO ALONE.</strong> Oranolio Holdings Inc. will cooperate fully with law enforcement if you are found to be using our educational material for illegal acts. We are the teachers; you are the students. If a student brings a gun to school, the teacher is not arrested.
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">5. Indemnification in Perpetuity</h3>
              <p>
                  You agree to indemnify, defend, and hold harmless Oranolio Holdings Inc., its officers, directors, employees, and the mascot "Mascot.tsx" from any and all claims, liabilities, damages, losses, or expenses (including exhaustive legal fees) arising out of your use of the Protocol.
              </p>
              <p className="mt-2 text-[#FF0000] font-bold">
                  TRANSLATION: If you get sued because you scammed the wrong guy, you cannot sue us to recover your losses. In fact, if we get dragged into your court case, you are paying our legal bills.
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">6. Strict No-Refund Policy</h3>
              <p>
                  The Oranolio Protocol is a digital information product. Upon purchase, you receive immediate access to intellectual property that cannot be "returned."
              </p>
              <p className="mt-2">
                  <strong>ALL SALES ARE FINAL.</strong> Do not email us saying "it didn't work." It works; you didn't. Do not email us saying "I need the money back for rent." You should have thought about that before buying. Chargebacks will be fought with this signed affidavit and your IP address log, and we will win.
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">7. Psychological Impact Disclaimer</h3>
              <p>
                  The strategies contained herein utilize advanced psychological manipulation, "Dark Triad" personality traits, and emotional exploitation. Prolonged use of these techniques may result in:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Loss of empathy for the male gender.</li>
                  <li>Desensitization to emotional distress signals.</li>
                  <li>A permanent cynical worldview.</li>
                  <li>The inability to form genuine romantic connections.</li>
              </ul>
              <p className="mt-2">
                  Oranolio Holdings Inc. is not responsible for your resulting moral decay, loss of soul, or inability to feel love. You chose the money.
              </p>
          </div>

          <div>
              <h3 className="text-lg font-bold uppercase border-b border-[#1A2A3A] pb-2 mb-3">8. Final Acknowledgment</h3>
              <p>
                  By clicking the button below, you confirm that you are of legal age in your jurisdiction, you are of sound mind, and you possess the disposable income required to purchase this luxury information product. You confirm you are not a journalist, law enforcement officer, or a "hater."
              </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t-2 border-[#1A2A3A] bg-[#FDFBF7] flex flex-col gap-4">
            <div className="flex items-start gap-3">
                <input type="checkbox" id="legal-check" className="mt-1 w-5 h-5 accent-[#1A2A3A]" />
                <label htmlFor="legal-check" className="text-xs md:text-sm font-bold text-[#1A2A3A]">
                    I HAVE READ THE DEATH WARRANT ABOVE. I UNDERSTAND THAT IF I FAIL, IT IS MY FAULT. I RELEASE ORANOLIO FROM ALL LIABILITY.
                </label>
            </div>
            <button onClick={onClose} className="w-full py-4 bg-[#FF0000] text-white font-black text-xl uppercase tracking-widest hover:bg-[#1A2A3A] transition-colors shadow-[5px_5px_0px_#1A2A3A] active:translate-y-[2px] active:shadow-none border-2 border-[#1A2A3A]">
                I ACCEPT THE RISK. LET ME IN.
            </button>
        </div>
      </div>
    </div>
  );
};
