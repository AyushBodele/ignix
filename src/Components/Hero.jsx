import { useEffect, useState } from "react";
import SecurityCards from "../ui/SecurityCards";
import AnimatedCards from "./AnimatedCards";
import { useHeadingAnimation } from "../hooks/heroAnimation";
import HeroCarouselItem from "../carousel/HeroCarouselItem";
import {slides} from "../utils/Data";

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

      {/* ANIMATED CARDS (UNCHANGED) */}
      <div>
        <AnimatedCards />
      </div>
    </div>
  );
};

export default Hero;
