import React, { useState } from 'react';
import type { BuildingMap } from '../types';

type Floor = 'premier' | 'deuxieme';

interface InteractiveMapProps {
  mapData: BuildingMap;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ mapData }) => {
  const [activeFloor, setActiveFloor] = useState<Floor>('premier');

  const Tab: React.FC<{ floor: Floor; label: string }> = ({ floor, label }) => (
    <button
      onClick={() => setActiveFloor(floor)}
      className={`relative px-6 py-3 text-md font-semibold transition-colors duration-300 focus:outline-none ${
        activeFloor === floor ? 'text-brand-teal' : 'text-brand-gray hover:text-brand-dark-blue'
      }`}
    >
      {label}
      {activeFloor === floor && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-teal rounded-full" />
      )}
    </button>
  );

  return (
    <section id="map" className="text-center">
      <h2 className="text-sm font-semibold text-brand-teal mb-4 tracking-widest uppercase">La Zone Commune</h2>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-blue mb-6">
        Un Hub d'Innovation et de Créativité
      </h3>
      <p className="text-lg text-brand-gray max-w-3xl mx-auto mb-12">
        Explorez nos installations modernes réparties sur deux étages, conçues pour catalyser la collaboration et l'excellence.
      </p>
      <div className="flex justify-center mb-4">
        <Tab floor="premier" label="Premier Étage" />
        <Tab floor="deuxieme" label="Deuxième Étage" />
      </div>
      <div className="bg-white rounded-lg shadow-xl border border-brand-border relative overflow-hidden aspect-[16/10] max-w-5xl mx-auto">
        <div className={`absolute inset-0 p-4 md:p-6 transition-opacity duration-500 ease-in-out ${activeFloor === 'premier' ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src={mapData.floor1} 
            alt="Plan du premier étage" 
            className="w-full h-full object-contain" 
          />
        </div>
        <div className={`absolute inset-0 p-4 md:p-6 transition-opacity duration-500 ease-in-out ${activeFloor === 'deuxieme' ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src={mapData.floor2} 
            alt="Plan du deuxième étage" 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
