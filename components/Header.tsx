import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Nos Pôles', href: '#poles' },
    { name: 'Contact', href: '#' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href === '#' ? 'root' : href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg shadow-gray-200/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => handleLinkClick(e, '#')} className="text-2xl font-extrabold text-brand-dark-blue">
              CMC <span className="text-brand-teal">Tanger</span>
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-10">
               {navLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className='text-md font-medium text-brand-gray hover:text-brand-dark-blue transition-colors duration-300'
                  >
                   <span className="text-brand-teal mr-1">0{index + 1}.</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu" className="text-brand-teal z-50 relative">
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`block w-full h-0.5 bg-brand-dark-blue transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-brand-dark-blue transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-full h-0.5 bg-brand-dark-blue transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <aside className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-2xl z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <nav className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-10 text-center">
                {navLinks.map((link, index) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className='text-xl font-medium text-brand-dark-blue hover:text-brand-teal transition-colors duration-300 flex flex-col'
                        >
                           <span className="text-brand-teal text-sm mb-1">0{index + 1}.</span>
                           {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
      </aside>
    </header>
  );
};

export default Header;