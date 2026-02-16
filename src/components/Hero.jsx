import { useEffect, useState } from "react";
import { useHeadingAnimation } from "../hooks/heroAnimation";
import HeroCarouselItem from "../carousel/HeroCarouselItem.jsx";
import { slides } from "../utils/Data.js";
import CyberHero from "../ui/CyberHero.jsx";
import ServicesCarousel from "../carousel/ServicesCarousel.jsx";
import AboutSection from "./AboutSection.jsx";

const Hero = () => {
  const headingVariants = useHeadingAnimation();
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
