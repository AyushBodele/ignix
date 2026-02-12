import { useMemo } from "react";

// Hook for heading animations
export const useHeadingAnimation = () => {
  return useMemo(() => ({
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }), []);
};

// Hook for right-to-left animations (subheading/paragraph)
export const useRightToLeftAnimation = () => {
  return useMemo(() => ({
    hidden: { opacity: 0, x: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }), []);
};

// Hook for services section animations
export const useServicesAnimation = () => {
  return useMemo(() => ({
    hidden: { opacity: 0, y: -50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }), []);
};
