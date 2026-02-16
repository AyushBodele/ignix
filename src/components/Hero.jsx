import { useEffect, useState } from "react";
import HeroCarouselItem from "../carousel/HeroCarouselItem.jsx";
import { slides } from "../utils/Data.js";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <HeroCarouselItem
        slide={slides[currentSlide]}
        slideIndex={currentSlide}   // 
      />

      
    </div>
  );
};

export default Hero;
