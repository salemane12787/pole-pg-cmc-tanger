import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InteractiveMap from './components/InteractiveMap';
import Showcase from './components/Showcase';
import { POLES_DATA, BUILDING_MAP_DATA, CmcLogo, OfpptLogo } from './constants';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  const poles = Object.values(POLES_DATA);

  return (
    <div className="min-h-screen bg-brand-white font-sans flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-24 md:space-y-32">
          <AnimatedSection>
            <InteractiveMap mapData={BUILDING_MAP_DATA} />
          </AnimatedSection>

          {poles.map((pole) => (
            <AnimatedSection key={pole.id}>
              <Showcase pole={pole} />
            </AnimatedSection>
          ))}
        </div>
      </main>
      <footer className="bg-brand-white border-t border-brand-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-wrap justify-center md:justify-between items-center text-center gap-8">
                <div className="h-16 w-auto order-2 md:order-1">
                   <CmcLogo />
                </div>
                <p className="w-full md:w-auto order-1 md:order-2 text-sm text-brand-gray">&copy; 2024 Cité des Métiers et des Compétences de Tanger. Tous droits réservés.</p>
                <div className="h-12 w-auto order-3">
                    <OfpptLogo />
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;