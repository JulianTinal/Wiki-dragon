import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dragonballz from '/public/images/dragonballz.png'
import dragonballsuper from '/public/images/dragonballsuper.png'
import dragonball from '/public/images/dragonball.png'

const HomeComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false
    });
  }, []);

  // Predefined images array
  const images = [dragonball, dragonballz, dragonballsuper];

  return (
    <div className="bg-black min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      <div className="relative z-10 text-center w-full max-w-7xl">
        <h1 
          data-aos="fade-down" 
          data-aos-delay="100"
          className="font-black text-center mb-8 md:mb-16 
                     text-transparent bg-clip-text bg-gradient-to-r 
                     from-orange-500 to-red-600 
                     tracking-wider uppercase 
                     text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
        >
          WIKI
          <br />
          DRAGON
        </h1>
        <p 
          data-aos="fade-up" 
          data-aos-delay="300"
          className="text-sm sm:text-base md:text-xl text-orange-300 
                     mb-8 md:mb-12 tracking-widest"
        >
          Conoce todos los personajes de todas las sagas de Dragon Ball
        </p>
        
        <div 
          data-aos="zoom-in" 
          data-aos-delay="500"
          className="flex flex-col sm:flex-row justify-center 
                     items-center space-y-4 sm:space-y-0 sm:space-x-4 
                     lg:space-x-6"
        >
          {images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Dragon Ball series ${index + 1}`} 
              data-aos="flip-left"
              data-aos-delay={`${600 + (index * 200)}`}
              className="w-3/4 sm:w-1/2 md:w-1/3 max-w-[350px] h-auto 
                         rounded-2xl shadow-2xl 
                         hover:scale-110 transition-transform duration-300 
                         border-4 border-orange-500 
                         transform hover:rotate-6"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;