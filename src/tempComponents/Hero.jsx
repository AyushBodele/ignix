import { useEffect, useState } from "react";
import { useHeadingAnimation } from "../hooks/heroAnimation";
import HeroCarouselItem from "../carousel/HeroCarouselItem";
import { slides } from "../utils/Data";
import CyberHero from "../ui/CyberHero";
import ServicesCarousel from "../carousel/ServicesCarousel";
import AboutSection from "./AboutSection";

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

      <div>
        <CyberHero />
        <AboutSection />
        <ServicesCarousel />
      </div>
    </div>
  );
};

export default Hero;
