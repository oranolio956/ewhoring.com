
import React, { useState, useEffect } from 'react';
import { AnimatedTherapist } from './AnimatedTherapist';
import { AnimatedVictim } from './AnimatedVictim';

export const RecoveryStats: React.FC = () => {
  const [stats, setStats] = useState({
    victimsHelped: 0,
    moneyRecovered: 0,
    consultations: 0,
    satisfaction: 0
  });

  useEffect(() => {
    // Animate numbers counting up (absurdly)
    const duration = 3000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStats({
        victimsHelped: Math.floor(12847 * progress),
        moneyRecovered: 0, // Always stays at 0
        consultations: Math.floor(12847 * progress),
        satisfaction: Math.floor(100 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats({
          victimsHelped: 12847,
          moneyRecovered: 0,
          consultations: 12847,
          satisfaction: 100
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-gradient-to-b from-[#FDFBF7] to-[#1A2A3A] relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(45,156,142,0.1) 10px, rgba(45,156,142,0.1) 20px)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-8xl font-bold text-[#1A2A3A] mb-4 tracking-tighter">
            RECOVERY <span className="text-[#FF8A75]">METRICS</span>
          </h2>
          <p className="text-lg text-[#1A2A3A]/60 max-w-2xl mx-auto">
            Professional statistics from our certified recovery specialists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          
          {/* Stat 1 - Victims Helped */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-[#2D9C8E]/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#2D9C8E]/10 rounded-bl-full"></div>
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl font-black text-[#2D9C8E] mb-2">
                {stats.victimsHelped.toLocaleString()}+
              </div>
              <div className="text-sm uppercase tracking-widest text-[#1A2A3A]/60 font-bold mb-1">
                Victims Helped*
              </div>
              <div className="text-xs text-[#1A2A3A]/40 italic">
                *Helped = charged consultation fee
              </div>
            </div>
          </div>

          {/* Stat 2 - Money Recovered (Always 0) */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-[#FF8A75]/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF8A75]/10 rounded-bl-full"></div>
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl font-black text-[#FF8A75] mb-2">
                ${stats.moneyRecovered.toLocaleString()}
              </div>
              <div className="text-sm uppercase tracking-widest text-[#1A2A3A]/60 font-bold mb-1">
                Money Recovered
              </div>
              <div className="text-xs text-[#1A2A3A]/40 italic">
                This is not a typo
              </div>
            </div>
          </div>

          {/* Stat 3 - Consultations */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-[#2D9C8E]/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#2D9C8E]/10 rounded-bl-full"></div>
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl font-black text-[#2D9C8E] mb-2">
                {stats.consultations.toLocaleString()}
              </div>
              <div className="text-sm uppercase tracking-widest text-[#1A2A3A]/60 font-bold mb-1">
                Consultations Sold
              </div>
              <div className="text-xs text-[#1A2A3A]/40 italic">
                At $299 each = ${(stats.consultations * 299).toLocaleString()}
              </div>
            </div>
          </div>

          {/* Stat 4 - Satisfaction */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border-2 border-[#2D9C8E]/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#2D9C8E]/10 rounded-bl-full"></div>
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl font-black text-[#2D9C8E] mb-2">
                {stats.satisfaction}%
              </div>
              <div className="text-sm uppercase tracking-widest text-[#1A2A3A]/60 font-bold mb-1">
                Satisfaction Rate**
              </div>
              <div className="text-xs text-[#1A2A3A]/40 italic">
                **No chargebacks yet
              </div>
            </div>
          </div>

        </div>

        {/* Character Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#2D9C8E]/20 text-center">
            <div className="h-48 mb-4 flex items-center justify-center">
              <AnimatedTherapist className="w-32 h-48" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#1A2A3A]">Certified Specialist</h3>
            <p className="text-sm text-[#1A2A3A]/60">
              Our therapists are certified by our own certification program. Trust us, we're professionals.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#FF8A75]/20 text-center">
            <div className="h-48 mb-4 flex items-center justify-center">
              <AnimatedVictim className="w-32 h-48" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#1A2A3A]">Typical Victim</h3>
            <p className="text-sm text-[#1A2A3A]/60">
              Average loss: $2,400. Average recovery: $0. But hey, at least they learned something!
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#1A2A3A]/20 text-center">
            <div className="h-48 mb-4 flex items-center justify-center">
              <div className="text-6xl opacity-50">🎭</div>
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#1A2A3A]">The Scammer</h3>
            <p className="text-sm text-[#1A2A3A]/60">
              Using AI-generated photos and fake personas. We can't catch them, but we can help you feel better!
            </p>
          </div>

        </div>

        {/* Absurd Disclaimer */}
        <div className="mt-12 bg-[#FF8A75]/10 border-2 border-dashed border-[#FF8A75]/30 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-sm md:text-base text-[#1A2A3A]/70 leading-relaxed max-w-3xl mx-auto">
            <strong className="text-[#1A2A3A]">Important:</strong> These statistics are based on our internal metrics. 
            "Victims Helped" means they paid our consultation fee. "Money Recovered" is accurate - we have never recovered a single dollar. 
            "Satisfaction Rate" means no chargebacks (yet). All numbers are real, but the interpretation is up to you. 
            <span className="block mt-2 text-xs italic">
              *Consultation fee: $299 (non-refundable). Money recovery: NOT INCLUDED. Terms apply.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
