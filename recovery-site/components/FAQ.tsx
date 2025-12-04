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
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-[#666]">
            Common questions from scam victims
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-2 rounded-2xl overflow-hidden transition-all ${
                openIndex === index
                  ? 'border-[#4ECDC4] shadow-elegant'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#0A2540] pr-8">{faq.question}</span>
                <span className={`text-2xl text-[#4ECDC4] transition-transform flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-[#666] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#0A2540] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-gray-300 mb-6">
            Our certified specialists are standing by to answer your questions (for $299).
          </p>
          <button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-elegant transition-all hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};
