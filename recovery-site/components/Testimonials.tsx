import React from 'react';

const testimonials = [
  {
    name: 'Jake M.',
    age: 24,
    location: 'California',
    loss: '$3,200',
    quote: 'I sent money to "Jessica" on Discord for 6 months. Turned out to be Kevin, a 47-year-old man from Ohio. The recovery specialist helped me understand I should have asked for a video call. Worth every penny of the $299!',
    recovery: { emotional: '100%', financial: '$0', wisdom: 'Significant' }
  },
  {
    name: 'Mike T.',
    age: 31,
    location: 'Texas',
    loss: '$8,500',
    quote: 'Lost $8,500 in Bitcoin to an AI-generated "Isabella" on Telegram. The consultation helped me process this. At least I understand what went wrong now!',
    recovery: { emotional: '95%', financial: '$0', wisdom: 'Extreme' }
  },
  {
    name: 'Chris L.',
    age: 27,
    location: 'New York',
    loss: '$2,100',
    quote: 'Matched with "Victoria" on Tinder. She needed Steam gift cards because her "dad was controlling." Sent $2,100 over 4 months. The red flag guide was very informative!',
    recovery: { emotional: '90%', financial: '$0', wisdom: 'Moderate' }
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">Success Stories</h2>
          <p className="text-xl text-[#666]">
            Real victims, real recovery (emotional only)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all border border-gray-100"
            >
              {/* Avatar */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center text-2xl">
                  😢
                </div>
                <div>
                  <div className="font-bold text-[#0A2540]">{testimonial.name}, {testimonial.age}</div>
                  <div className="text-sm text-[#666]">{testimonial.location}</div>
                  <div className="text-sm font-semibold text-[#FF6B6B]">Lost: {testimonial.loss}</div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#666] mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Recovery Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#4ECDC4]">{testimonial.recovery.emotional}</div>
                  <div className="text-xs text-[#666]">Emotional</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[#FF6B6B]">{testimonial.recovery.financial}</div>
                  <div className="text-xs text-[#666]">Financial</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[#FFE66D]">{testimonial.recovery.wisdom}</div>
                  <div className="text-xs text-[#666]">Wisdom</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-elegant transition-all hover:scale-105">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};
