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
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

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

  /* 🔧 KEY FIX: radius reduced so it stays inside container */
  const radius = 120;

  return (
    <motion.div
      className={`relative flex items-center justify-center rounded-full overflow-hidden ${className}`}
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
            className="absolute text-white font-extrabold text-xl md:text-2xl"
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
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
