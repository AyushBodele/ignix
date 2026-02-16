import React, { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: { type: "spring", damping: 20, stiffness: 300 },
});

const CircularText = ({
  text = "",
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  radius: propRadius,
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  // Responsive radius calculation
  const [radius, setRadius] = React.useState(propRadius || 120);

  useEffect(() => {
    if (propRadius) {
      setRadius(propRadius);
      return;
    }

    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(80); // Mobile
      } else if (window.innerWidth < 768) {
        setRadius(100); // Tablet
      } else {
        setRadius(120); // Desktop
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, [propRadius]);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      transition: getTransition(spinDuration / 4, start),
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <motion.div
      className={`relative flex items-center justify-center rounded-full overflow-visible ${className}`}
      style={{ rotate: rotation }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const angle = (360 / letters.length) * i;
        const rad = (angle * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        return (
          <span
            key={i}
            className="absolute text-white font-extrabold text-lg sm:text-xl md:text-2xl whitespace-pre"
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`,
              transformOrigin: 'center',
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
