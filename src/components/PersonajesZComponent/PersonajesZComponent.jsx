import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Star, Shield, Zap, Bolt, ArrowUpRight, X } from 'lucide-react';

const PersonajesZComponent = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    axios.get('https://www.dragonballapi.com/dragonballz')
      .then(response => {
        setCharacters(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Axios error:', error);
        setLoading(false);
      });
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 120
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="animate-spin w-20 h-20 border-[6px] border-t-orange-500 border-r-orange-500 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-10">
      <motion.h1 
        className="text-3xl md:text-7xl font-black text-center mb-8 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 tracking-wider uppercase"
      >
        Dragon Ball Z
      </motion.h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {characters.map((character) => (
          <motion.div 
            key={character.id}
            variants={cardVariants}
            whileHover="hover"
            onClick={() => setSelectedCharacter(character)}
            className="hidden md:block relative group cursor-pointer"
          >
            <div className="relative bg-[#0a0a0a] border border-orange-900/50 rounded-3xl overflow-hidden shadow-2xl transform transition-all">
              <div className="relative">
                <img 
                  src={character.image} 
                  alt={character.name} 
                  className="w-full h-[500px] object-cover filter brightness-75 group-hover:brightness-90 transition-all duration-300" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-orange-400 uppercase tracking-wide flex items-center">
                    <Bolt className="mr-2 text-orange-500" size={30} />
                    {character.name}
                  </h2>
                  <ArrowUpRight className="text-orange-500 opacity-0 group-hover:opacity-100 transition-all" size={24} />
                </div>
              </div>
              
              <div className="p-6 text-gray-200 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <Shield className="mr-2 text-orange-500" size={20} />
                    <span className="text-orange-500 font-semibold">Género:</span>
                  </div>
                  <span>{character.genre}</span>
                  
                  <div className="flex items-center">
                    <Star className="mr-2 text-orange-500" size={20} />
                    <span className="text-orange-500 font-semibold">Raza:</span>
                  </div>
                  <span>{character.race}</span>
                  
                  <div className="flex items-center">
                    <Zap className="mr-2 text-orange-500" size={20} />
                    <span className="text-orange-500 font-semibold">Planeta:</span>
                  </div>
                  <span>{character.planet}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Vista móvil simplificada */}
        {characters.map((character) => (
          <motion.div 
            key={character.id}
            onClick={() => setSelectedCharacter(character)}
            whileHover={{ scale: 1.05 }}
            className="md:hidden cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={character.image} 
                alt={character.name} 
                className="w-full h-full object-cover transition-all duration-300 hover:brightness-90" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 md:p-4">
                <h2 className="text-sm md:text-3xl font-bold text-orange-400 uppercase tracking-wide truncate">
                  {character.name}
                </h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de Personaje Seleccionado */}
      {selectedCharacter && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCharacter(null)}
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-[#0a0a0a] border border-orange-900 rounded-3xl max-w-6xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCharacter(null)}
              className="absolute top-4 right-4 bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600 transition"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <img 
                  src={selectedCharacter.image} 
                  alt={selectedCharacter.name} 
                  className="w-full h-auto md:h-full object-cover md:rounded-l-3xl"
                />
              </div>
              <div className="w-full md:w-1/2 p-4 md:p-8 text-white overflow-y-auto max-h-[500px]">
                <h2 className="text-2xl md:text-4xl font-bold text-orange-400 mb-4 md:mb-6 uppercase">
                  {selectedCharacter.name}
                </h2>
                <div className="space-y-2 md:space-y-4">
                  <p><strong className="text-orange-500">Género:</strong> {selectedCharacter.genre}</p>
                  <p><strong className="text-orange-500">Raza:</strong> {selectedCharacter.race}</p>
                  <p><strong className="text-orange-500">Planeta:</strong> {selectedCharacter.planet}</p>
                  <div className="mt-2 md:mt-4">
                    <strong className="text-orange-500 block mb-2">Descripción:</strong>
                    <p className="text-sm md:text-base text-gray-300">{selectedCharacter.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PersonajesZComponent;