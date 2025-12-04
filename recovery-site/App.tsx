import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { UrgencyBanner } from './components/UrgencyBanner';
import { FloatingMoney, QuestionMarkCloud } from './components/DecorativeElements';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Decorative Elements Throughout */}
      <FloatingMoney className="top-1/4 left-10 hidden lg:block" />
      <FloatingMoney className="top-1/2 right-20 hidden lg:block" />
      <QuestionMarkCloud className="top-1/3 right-10 hidden lg:block" />
      <QuestionMarkCloud className="bottom-1/4 left-20 hidden lg:block" />

      <UrgencyBanner />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Testimonials />
        <Process />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
