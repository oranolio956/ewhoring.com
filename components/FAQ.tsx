import React, { useState } from 'react';

const faqs = [
  {
    question: 'Can you actually recover my money?',
    answer: 'No. We cannot and will not recover your money. Our services provide emotional support, trauma processing, red flag education, and "what went wrong" analysis. We charge $299 for these services. Money recovery is not included and will not be provided.'
  },
  {
    question: 'Why does your service cost $299 if you can\'t recover money?',
    answer: 'Great question! Our certified specialists (certified by us) provide valuable services: emotional support, trauma processing, red flag education, and "what went wrong" analysis. Think of it as therapy, but for people who got scammed. Therapy costs money, and so does this!'
  },
  {
    question: 'Are your recovery specialists actually certified?',
    answer: 'Yes! Our specialists are certified by our own certification program. We created the certification, we administer the tests, and we issue the certificates. It\'s a completely legitimate process (by our standards). Trust us, we\'re professionals!'
  },
  {
    question: 'I sent money via gift cards. Can you trace those?',
    answer: 'No. Gift cards are untraceable once redeemed. That\'s why scammers love them. Our consultation will help you understand why gift cards are a red flag. For $299, you\'ll learn that legitimate people don\'t ask for Steam gift cards as payment.'
  },
  {
    question: 'Do you offer refunds if I\'m not satisfied?',
    answer: 'No. All consultation fees are non-refundable. This is clearly stated in our terms. If you\'re not satisfied with the emotional support we provided, we\'re sorry, but that\'s the risk you take when paying for services that can\'t actually recover your money.'
  },
  {
    question: 'I\'ve been scammed 3 times. Will your service prevent future scams?',
    answer: 'Our $299 consultation includes a comprehensive red flag guide (PDF format). If you read it and apply it, you might avoid future scams. However, we cannot guarantee you won\'t fall for another one. Some people are just... special. We offer a $999 VIP package with monthly check-ins if you\'re a repeat victim.'
  },
  {
    question: 'The person I sent money to blocked me. What should I do?',
    answer: 'First, accept that your money is gone. Second, book our $299 consultation to process this trauma. Third, understand that blocking you after taking your money is a clear sign you were scammed. Our specialists will help you work through the 5 stages of grief (denial, anger, bargaining, depression, acceptance).'
  },
  {
    question: 'I sent $5,000 to someone who said they were a Nigerian princess. Can you help?',
    answer: 'Yes! Our $299 consultation includes a comprehensive analysis of why you fell for a 20-year-old scam. We\'ll help you understand that Nigerian princes don\'t use Discord. Money recovery: still not possible, but you\'ll feel smarter!'
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#00D9C0]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FF5757]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-20">
          <div className="inline-block mb-6">
            <span className="text-xs font-bold text-[#00D9C0] uppercase tracking-[0.2em]">FAQ</span>
          </div>
          <h2 className="text-headline font-black text-[#0A1A2E] mb-6 leading-none">
            Frequently Asked Questions
          </h2>
          <p className="text-subheadline text-[#4A4A4A] font-light">
            Common questions from scam victims
          </p>
        </div>

        {/* Editorial FAQ Layout */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden transition-all border-2 ${
                openIndex === index
                  ? 'border-[#00D9C0] shadow-layered bg-white'
                  : 'border-[#E8E8E8] hover:border-[#00D9C0]/50 bg-white'
              }`}
            >
              {/* Left Border Accent */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all ${
                openIndex === index 
                  ? 'bg-gradient-to-b from-[#00D9C0] to-[#FF5757]' 
                  : 'bg-[#E8E8E8] group-hover:bg-[#00D9C0]'
              }`}></div>

              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#FAFAFA] transition-colors group/btn"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-2xl font-black text-[#0A1A2E]/20 group-hover/btn:text-[#00D9C0] transition-colors flex-shrink-0 mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-lg text-[#0A1A2E] pr-8 leading-relaxed">
                    {faq.question}
                  </span>
                </div>
                <span className={`text-2xl text-[#00D9C0] transition-all flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : 'group-hover/btn:translate-x-1'
                }`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-8 pt-0 ml-12">
                  <div className="pl-6 border-l-2 border-[#00D9C0]/30">
                    <p className="text-base text-[#4A4A4A] leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-br from-[#0A1A2E] to-[#1A2A4E] rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px',
              }}></div>
            </div>
            <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-black mb-4">Still Have Questions?</h3>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Our certified specialists are standing by to answer your questions (for $299).
              </p>
              <button className="group/btn relative bg-gradient-to-r from-[#FF5757] to-[#FF8A8A] text-white px-10 py-4 rounded-full font-semibold text-base hover:shadow-layered transition-all hover:scale-105 overflow-hidden mt-6">
                <span className="relative z-10">Contact Support</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#FF5757] opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
