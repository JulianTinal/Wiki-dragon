import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const DragonBallLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-10 w-10 fill-current text-orange-500">
    <path d="M50 10c-22 0-40 18-40 40s18 40 40 40 40-18 40-40-18-40-40-40zm0 75c-19.3 0-35-15.7-35-35s15.7-35 35-35 35 15.7 35 35-15.7 35-35 35z"/>
    <path d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 55c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25z"/>
    <circle cx="50" cy="50" r="15" fill="currentColor"/>
  </svg>
);

const DragonBallZLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-10 w-10 fill-current text-orange-500">
    <path d="M50 10c22 0 40 18 40 40s-18 40-40 40-40-18-40-40 18-40 40-40zm-25 40l25-25 25 25-25 25-25-25z" fill="currentColor"/>
    <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="black">Z</text>
  </svg>
);

const DragonBallSuperLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-10 w-10 fill-current text-orange-500">
    <path d="M50 10c22 0 40 18 40 40s-18 40-40 40-40-18-40-40 18-40 40-40z" fill="currentColor" opacity="0.7"/>
    <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="black">SUPER</text>
  </svg>
);

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { 
      name: 'Dragon Ball', 
      path: '/personajes/dragonball', 
      logo: DragonBallLogo
    },
    { 
      name: 'Dragon Ball Z', 
      path: '/personajes/dragonball-z', 
      logo: DragonBallZLogo
    },
    { 
      name: 'Dragon Ball Super', 
      path: '/personajes/dragonball-super', 
      logo: DragonBallSuperLogo
    }
  ];

  return (
    <nav className="bg-black text-orange-500 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Principal */}
          <Link to="/" className="flex-shrink-0 text-2xl font-bold tracking-wider">
            Dragon Ball
          </Link>

          {/* Menú de Escritorio */}
          <div className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className="flex items-center space-x-2 hover:text-orange-600 transition duration-300 group"
              >
                <link.logo />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Menú Móvil - Botón Hamburguesa */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-orange-500 hover:text-orange-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className="flex items-center space-x-4 text-orange-500 hover:bg-orange-900/20 px-3 py-2 rounded-lg transition duration-300"
                >
                  <link.logo />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;