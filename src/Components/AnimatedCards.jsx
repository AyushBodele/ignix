import React, { useEffect, useRef } from 'react';
import {
  createHeroCardAnimation,
  createFlipCardScrollAnimation,
  killAllScrollTriggers,
} from '../hooks/gsapAnimation';
import { 
  heroCardsData, 
  flipCardsData, 
  heroAnimationConfig, 
  flipAnimationConfig 
} from '../utils/Data';
import HeroCard from '../animation/HeroCard';
import FlipCard from '../animation/FlipCard';
import AboutSection from './Aboutsection';
import ServicesSection from './Servicessection';
import OutroSection from './Outrosection';
import '../animation/AnimatedCard.css';

const AnimatedCards = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const heroConfig = {
      ...heroAnimationConfig,
      trigger: heroRef.current,
      cards: heroCardsData.map((card, index) => ({
        id: `#${card.id}`,
        delay: index * 0.9,
        movement: card.movement,
      })),
    };

    const flipConfig = {
      ...flipAnimationConfig,
      trigger: servicesRef.current,
      cardsContainer: cardsRef.current,
    };

    const heroAnimation = createHeroCardAnimation(heroConfig);
    const flipAnimation = createFlipCardScrollAnimation(flipConfig);

    return () => {
      killAllScrollTriggers();
      heroAnimation.kill();
      flipAnimation.kill();
    };
  }, []);

  return (
    <div className="animated-cards-container">

      {/* Hero Section */}
      <section ref={heroRef} className="animated-cards-section py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="hero-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {heroCardsData.map((card) => (
            <HeroCard
              key={card.id}
              id={card.id}
              title={card.title}
              icon={card.icon}
              alt={card.alt}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <AboutSection title="" />

      {/* Services Section */}
      <ServicesSection ref={servicesRef} 
      />

      {/* Cards Section */}
      <section ref={cardsRef} className="animated-cards-cards py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {flipCardsData.map((card) => (
            <FlipCard
              key={card.id}
              id={card.id}
              type={card.type}
              title={card.title}
              backTitle={card.backTitle}
              icon={card.icon}
              alt={card.alt}
              backContent={card.backContent}
            />
          ))}
        </div>
        
      </section>

      {/* Outro Section */}
      <OutroSection title="Thanks for scrolling!" />
    </div>
  );
};

export default AnimatedCards;
