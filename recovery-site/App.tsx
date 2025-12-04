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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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
