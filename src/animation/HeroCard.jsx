// HeroCard.jsx
import React from 'react';
import './AnimatedCard.css';

const HeroCard = ({ id, title, icon, alt }) => {
  return (
    <div id={id} className={`hero-card ${id}`}>
      <div className="card-title">
        <span className="hero-card-title-span">{title[0]}</span>
        <span className="hero-card-title-span">↗</span>
      </div>
      <div className="icon-container">
        <img 
          src={icon}
          alt={alt}
          className="icon"
        />
      </div>
      <div className="card-title">
        <span className="hero-card-title-span">↗</span>
        <span className="hero-card-title-span">{title[1]}</span>
      </div>
    </div>
  );
};

export default HeroCard;