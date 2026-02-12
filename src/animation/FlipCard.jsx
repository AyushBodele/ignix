// FlipCard.jsx
import React from 'react';
import './AnimatedCard.css';

const FlipCard = ({ id, type, title, backTitle, icon, alt, backContent }) => {
  return (
    <div id={id} className={`animated-card ${id}`}>
      <div className="card-wrapper">
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className={`flip-card-front flip-card-front-${id.split('-')[1]}`}>
            <div className="card-title">
              <span className="card-title-span">{title[0]}</span>
              <span className="card-title-span">↗</span>
            </div>
            <div className="icon-container">
              <img 
                src={icon}
                alt={alt}
                className="icon"
              />
            </div>
            <div className="card-title">
              <span className="card-title-span">↗</span>
              <span className="card-title-span">{title[1]}</span>
            </div>
          </div>
          
          {/* Back Side */}
          <div className="flip-card-back">
            <div className="card-title">
              <span className="card-title-span">{backTitle[0]}</span>
              <span className="card-title-span">↗</span>
            </div>
            <div className="card-copy">
              {backContent.map((item, index) => (
                <p key={index} className="card-copy-p">{item}</p>
              ))}
            </div>
            <div className="card-title">
              <span className="card-title-span">↗</span>
              <span className="card-title-span">{backTitle[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;