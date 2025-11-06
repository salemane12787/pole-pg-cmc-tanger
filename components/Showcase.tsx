import React from 'react';
import type { Formation, Pole } from '../types';

const FormationCard: React.FC<{ formation: Formation }> = ({ formation }) => {
  return (
    <div className="group relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center justify-center text-center border border-brand-border hover:border-brand-teal">
        <div className="relative z-10 flex flex-col items-center h-full justify-center">
            <h4 className="text-xl font-bold text-brand-dark-blue mb-4">{formation.title}</h4>
            <p className="bg-brand-teal/10 text-brand-teal font-semibold px-4 py-1 rounded-full text-sm">
                {formation.level}
            </p>
        </div>
    </div>
  );
};

const InstructorProfile: React.FC<{ instructor: Pole['instructors'][0] }> = ({ instructor }) => (
  <div className="group relative bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center border border-brand-border">
    <img
      src={instructor.imageUrl}
      alt={instructor.name}
      className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white group-hover:border-brand-teal transition-colors duration-300 grayscale group-hover:grayscale-0"
    />
    <h4 className="text-xl font-bold text-brand-dark-blue">{instructor.name}</h4>
    <p className="text-brand-teal text-sm">{instructor.expertise}</p>
  </div>
);

interface ShowcaseProps {
    pole: Pole;
}

const Showcase: React.FC<ShowcaseProps> = ({ pole }) => {
  const gridColsClass = pole.formations.length <= 2 ? 'lg:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-3';

  return (
    <section id={pole.id === 'graphique' ? 'poles' : undefined}>
        <div className="relative text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-blue mb-4">
            {pole.name}
            </h2>
            <p className="text-lg text-brand-gray max-w-3xl mx-auto">
            Découvrez les formations pointues et les experts passionnés qui animent ce pôle d'excellence.
            </p>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark-blue mb-10 text-center">Nos Formations</h3>
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 ${gridColsClass}`}>
          {pole.formations.map((formation, index) => (
            <div key={formation.id} className="opacity-0" style={{ animation: `fade-in-up 0.5s ease-out ${index * 0.1}s forwards` }}>
              <FormationCard formation={formation} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark-blue mb-10 text-center">Rencontrez nos Formateurs Experts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {pole.instructors.map((instructor, index) => (
             <div key={instructor.id} className="opacity-0" style={{ animation: `fade-in-up 0.5s ease-out ${0.3 + index * 0.1}s forwards` }}>
                <InstructorProfile instructor={instructor} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;