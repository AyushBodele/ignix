// ServicesSection.jsx
import React from 'react';

const ServicesSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="animated-cards-services-section"
      style={{ opacity: 0, pointerEvents: 'none' }}
    >
      {/* Add your services content here */}
      
    </section>
  );
});

export default ServicesSection;
