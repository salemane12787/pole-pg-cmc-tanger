import React from 'react';

const Particle: React.FC<{ delay: number }> = ({ delay }) => (
    <div 
        className="absolute rounded-full bg-white/20 animate-particle-move"
        style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${Math.random() * 10 + 15}s`
        }}
    ></div>
);

const Hero: React.FC = () => {
  const particles = Array.from({ length: 50 });

  return (
    <section 
        className="relative h-[90vh] min-h-[600px] text-white flex flex-col justify-center items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://scontent.ftng3-1.fna.fbcdn.net/v/t39.30808-6/498248444_759318486610256_4382464077658604328_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3r-UcwBnpYEQ7kNvwGkc5hA&_nc_oc=AdlAYnZzByNo6D8FrkfAGAUH7R091LQGtNQUa7p2qVi2aWl6CvRXUrpXcy65hfsSzTY&_nc_zt=23&_nc_ht=scontent.ftng3-1.fna&_nc_gid=gX5Xaj0SHOeG0AaOetK1qA&oh=00_Afiai40hIrahePtrctvl9NUHMZbiPknd69p4aC-oiwuF0g&oe=6912C950')" }}
    >
      <div className="absolute inset-0 bg-brand-dark-blue/70 z-0" />
      
      <div className="absolute inset-0 z-10 opacity-30">
        {particles.map((_, i) => <Particle key={i} delay={i * 0.2} />)}
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center md:items-start md:text-left z-20">
        <div className="max-w-4xl">
            <p className="text-lg text-brand-teal font-mono mb-4 animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.1s' }}>
                Bienvenue à la
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-brand-white leading-tight animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.3s' }}>
              Cité des Métiers et des Compétences de Tanger.
            </h1>
            <p className="mt-8 text-xl text-brand-light-gray max-w-2xl animate-fade-in-up" style={{ opacity: 0, animationDelay: '0.5s' }}>
                Là où la passion rencontre l'innovation. Découvrez nos pôles d'excellence et formez-vous aux métiers d'avenir.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;