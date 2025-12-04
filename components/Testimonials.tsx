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
    <section id="testimonials" className="relative py-32 bg-gradient-to-b from-white via-[#FAFAFA] to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-[#00D9C0]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF5757]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-20 max-w-3xl">
          <div className="inline-block mb-6">
            <span className="text-xs font-bold text-[#00D9C0] uppercase tracking-[0.2em]">Testimonials</span>
          </div>
          <h2 className="text-headline font-black text-[#0A1A2E] mb-6 leading-none">
            Success Stories
          </h2>
          <p className="text-subheadline text-[#4A4A4A] font-light">
            Real victims, real recovery (emotional only)
          </p>
        </div>

        {/* Asymmetric Testimonial Layout */}
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative ${
                index % 2 === 0 
                  ? 'flex flex-col lg:flex-row' 
                  : 'flex flex-col lg:flex-row-reverse'
              } gap-8 items-start bg-white rounded-3xl p-8 lg:p-12 shadow-soft hover:shadow-layered transition-all border border-[#E8E8E8] hover-lift`}
            >
              {/* Quote Mark - Editorial Element */}
              <div className="absolute top-8 left-8 text-8xl text-[#00D9C0]/10 font-serif leading-none">"</div>

              {/* Content */}
              <div className="flex-1 space-y-6 relative z-10">
                {/* Quote */}
                <p className="text-xl text-[#4A4A4A] font-light leading-relaxed italic pl-8">
                  {testimonial.quote}
                </p>

                {/* Author Info - Editorial Style */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#E8E8E8]">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF5757]/20 to-[#00D9C0]/20 rounded-2xl flex items-center justify-center text-3xl">
                    😢
                  </div>
                  <div>
                    <div className="font-bold text-[#0A1A2E] text-lg">{testimonial.name}, {testimonial.age}</div>
                    <div className="text-sm text-[#8A8A8A] font-medium">{testimonial.location}</div>
                    <div className="text-sm font-bold text-[#FF5757] mt-1">Lost: {testimonial.loss}</div>
                  </div>
                </div>

                {/* Recovery Metrics - Editorial Cards */}
                <div className="flex gap-4 pt-4">
                  <div className="flex-1 bg-gradient-to-br from-[#00D9C0]/10 to-transparent rounded-xl p-4 border border-[#00D9C0]/20">
                    <div className="text-2xl font-black text-[#00D9C0] mb-1">{testimonial.recovery.emotional}</div>
                    <div className="text-xs text-[#4A4A4A] font-medium">Emotional</div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-[#FF5757]/10 to-transparent rounded-xl p-4 border border-[#FF5757]/20">
                    <div className="text-2xl font-black text-[#FF5757] mb-1">{testimonial.recovery.financial}</div>
                    <div className="text-xs text-[#4A4A4A] font-medium">Financial</div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-[#FFD93D]/10 to-transparent rounded-xl p-4 border border-[#FFD93D]/20">
                    <div className="text-2xl font-black text-[#FFD93D] mb-1">{testimonial.recovery.wisdom}</div>
                    <div className="text-xs text-[#4A4A4A] font-medium">Wisdom</div>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-shrink-0 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#FF5757]/10 to-[#00D9C0]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-5xl lg:text-6xl opacity-50">💔</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="group/btn relative bg-gradient-to-r from-[#FF5757] to-[#FF8A8A] text-white px-10 py-4 rounded-full font-semibold text-base hover:shadow-layered transition-all hover:scale-105 overflow-hidden">
            <span className="relative z-10">Read More Success Stories</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#FF5757] opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  );
};
