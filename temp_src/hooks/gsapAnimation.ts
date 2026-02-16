import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Type Definitions
export interface CardMovement {
  yStart?: string;
  yEnd?: string;
  scaleStart?: number;
  scaleEnd?: number;
  xStart?: string;
  xEnd?: string;
  rotationStart?: number;
  rotationEnd?: number;
}

export interface HeroCard {
  id: string;
  delay?: number;
  movement?: CardMovement;
}

export interface HeroCardAnimationConfig {
  trigger: HTMLElement | null;
  containerSelector?: string;
  cards: HeroCard[];
  start?: string;
  end?: string;
  scrub?: number | boolean;
}

export interface FlipCard {
  id: string;
  delay?: number;
  index?: number;
}

export interface FlipCardCallbacks {
  onLeave?: () => void;
  onEnterBack?: () => void;
}

export interface FlipCardAnimationConfig {
  trigger: HTMLElement | null;
  cardsContainer?: HTMLElement | null;
  cards: FlipCard[];
  headerSelector?: string;
  pinDuration?: number;
  callbacks?: FlipCardCallbacks;
}

export interface FadeSlideConfig {
  trigger: string | HTMLElement;
  target: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export interface StaggerConfig {
  cardsSelector: string;
  trigger: string | HTMLElement;
  stagger?: number;
  animation?: gsap.TweenVars;
  duration?: number;
  start?: string;
}

export interface ParallaxConfig {
  target: string;
  trigger: string | HTMLElement;
  speed?: number;
  start?: string;
  end?: string;
}

// Utility: Smooth step interpolation
export const smoothStep = (p: number): number => p * p * (3 - 2 * p);

/**
 * HERO CARD ANIMATION
 * Animates cards with scale, rotation, and position changes on scroll
 */
export const createHeroCardAnimation = (
  config: HeroCardAnimationConfig
): ScrollTrigger | null => {
  const {
    trigger,
    containerSelector,
    cards,
    start = 'top top',
    end = '75% top',
    scrub = 1,
  } = config;

  if (!trigger) {
    console.warn('createHeroCardAnimation: trigger element is null');
    return null;
  }

  gsap.registerPlugin(ScrollTrigger);

  return ScrollTrigger.create({
    trigger,
    start,
    end,
    scrub,
    onUpdate: (self) => {
      const progress = self.progress;

      // Fade container
      if (containerSelector) {
        gsap.set(containerSelector, {
          opacity: gsap.utils.interpolate(1, 0.5, smoothStep(progress)),
        });
      }

      // Animate each card
      cards.forEach((card) => {
        const { id, delay = 0, movement = {} } = card;
        const cardProgress = gsap.utils.clamp(
          0,
          1,
          (progress - delay * 0.1) / (1 - delay * 0.1)
        );

        const y = gsap.utils.interpolate(
          movement.yStart || '0%',
          movement.yEnd || '250%',
          smoothStep(cardProgress)
        );

        const scale = gsap.utils.interpolate(
          movement.scaleStart || 1,
          movement.scaleEnd || 0.75,
          smoothStep(cardProgress)
        );

        const x = movement.xEnd
          ? gsap.utils.interpolate(
              movement.xStart || '0%',
              movement.xEnd,
              smoothStep(cardProgress)
            )
          : '0%';

        const rotation = movement.rotationEnd
          ? gsap.utils.interpolate(
              movement.rotationStart || 0,
              movement.rotationEnd,
              smoothStep(cardProgress)
            )
          : 0;

        gsap.set(id, { x, y, rotation, scale });
      });
    },
  });
};

/**
 * FLIP CARD SCROLL ANIMATION
 * Animates cards entering from off-screen, scaling, and flipping
 */
export const createFlipCardScrollAnimation = (
  config: FlipCardAnimationConfig
): ScrollTrigger | null => {
  const {
    trigger,
    cardsContainer,
    cards,
    headerSelector,
    pinDuration = 4,
    callbacks = {},
  } = config;

  if (!trigger) {
    console.warn('createFlipCardScrollAnimation: trigger element is null');
    return null;
  }

  gsap.registerPlugin(ScrollTrigger);

  return ScrollTrigger.create({
    trigger,
    start: 'top top',
    end: `+=${window.innerHeight * pinDuration}`,
    pin: trigger,
    pinSpacing: true,

    onLeave: () => {
      if (callbacks.onLeave) {
        callbacks.onLeave();
      }
      if (cardsContainer) {
        const rect = trigger.getBoundingClientRect();
        gsap.set(cardsContainer, {
          position: 'absolute',
          top: window.pageYOffset + rect.top,
          left: 0,
          width: '100vw',
          height: '100vh',
        });
      }
    },

    onEnterBack: () => {
      if (callbacks.onEnterBack) {
        callbacks.onEnterBack();
      }
      if (cardsContainer) {
        gsap.set(cardsContainer, {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        });
      }
    },

    onUpdate: (self) => {
      const progress = self.progress;

      // Animate header if provided
      if (headerSelector) {
        gsap.set(headerSelector, {
          y: gsap.utils.interpolate(
            '400%',
            '0%',
            smoothStep(gsap.utils.clamp(0, 1, progress / 0.9))
          ),
        });
      }

      // Animate each card
      cards.forEach((card) => {
        const { id, delay = 0, index = 0 } = card;
        const cardProgress = gsap.utils.clamp(
          0,
          1,
          (progress - delay * 0.1) / (0.9 - delay * 0.1)
        );

        const innerCard = document.querySelector(
          `${id} .flip-card-inner`
        ) as HTMLElement;

        /* Y POSITION - Three phase animation */
        let y: string =
          cardProgress < 0.4
            ? gsap.utils.interpolate('-100%', '50%', smoothStep(cardProgress / 0.4))
            : cardProgress < 0.6
            ? gsap.utils.interpolate(
                '50%',
                '0%',
                smoothStep((cardProgress - 0.4) / 0.2)
              )
            : '0%';

        /* SCALE - Three phase animation */
        let scale: number =
          cardProgress < 0.4
            ? gsap.utils.interpolate(0.25, 0.75, smoothStep(cardProgress / 0.4))
            : cardProgress < 0.6
            ? gsap.utils.interpolate(
                0.75,
                1,
                smoothStep((cardProgress - 0.4) / 0.2)
              )
            : 1;

        /* OPACITY */
        const opacity = cardProgress < 0.2 ? smoothStep(cardProgress / 0.2) : 1;

        /* X POSITION & ROTATION - Based on card index */
        const startX = index === 0 ? '100%' : index === 1 ? '0%' : '-100%';
        const startRot = index === 0 ? -5 : index === 1 ? 0 : 5;

        let x: string = startX;
        let rotate: number = startRot;
        let rotationY: number = 0;

        // Final phase: move to center and flip
        if (cardProgress > 0.6) {
          const t = smoothStep((cardProgress - 0.6) / 0.4);
          x = gsap.utils.interpolate(startX, '0%', t);
          rotate = gsap.utils.interpolate(startRot, 0, t);
          rotationY = t * 180;
        }

        gsap.set(id, { x, y, scale, rotate, opacity });
        if (innerCard) {
          gsap.set(innerCard, { rotationY });
        }
      });
    },
  });
};

/**
 * SIMPLE FADE & SLIDE ANIMATION
 * Basic scroll-triggered fade and slide animation
 */
export const createFadeSlideAnimation = (
  config: FadeSlideConfig
): gsap.core.Tween => {
  const {
    trigger,
    target,
    from = { opacity: 0, y: 100 },
    to = { opacity: 1, y: 0 },
    start = 'top 80%',
    end = 'top 20%',
    scrub = true,
  } = config;

  gsap.registerPlugin(ScrollTrigger);

  return gsap.fromTo(target, from, {
    ...to,
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub,
    },
  });
};

/**
 * STAGGER CARDS ANIMATION
 * Animates multiple cards with staggered timing
 */
export const createStaggerAnimation = (
  config: StaggerConfig
): gsap.core.Tween => {
  const {
    cardsSelector,
    trigger,
    stagger = 0.2,
    animation = { opacity: 0, y: 100 },
    duration = 1,
    start = 'top 80%',
  } = config;

  gsap.registerPlugin(ScrollTrigger);

  return gsap.from(cardsSelector, {
    ...animation,
    duration,
    stagger,
    scrollTrigger: {
      trigger,
      start,
    },
  });
};

/**
 * PARALLAX ANIMATION
 * Creates parallax effect on scroll
 */
export const createParallaxAnimation = (
  config: ParallaxConfig
): gsap.core.Tween => {
  const {
    target,
    trigger,
    speed = 0.5,
    start = 'top bottom',
    end = 'bottom top',
  } = config;

  gsap.registerPlugin(ScrollTrigger);

  return gsap.to(target, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub: true,
    },
  });
};

/**
 * CLEANUP UTILITY
 * Kills all ScrollTrigger instances
 */
export const killAllScrollTriggers = (): void => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

/**
 * REFRESH UTILITY
 * Refreshes all ScrollTrigger instances
 */
export const refreshScrollTriggers = (): void => {
  ScrollTrigger.refresh();
};