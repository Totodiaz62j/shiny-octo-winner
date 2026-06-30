import { Variants } from "framer-motion";

// Custom easing curves inspired by animations.dev
export const easings = {
  // More natural easing curves
  gentle: [0.33, 1, 0.68, 1],      // Soft ease-out
  normal: [0.25, 0.1, 0.25, 1],    // Classic ease-in-out
  sharp: [0.04, 0.42, 0.2, 1],     // Quick start, soft end
  bouncy: [0.68, -0.55, 0.265, 1.55], // Spring-like
  // Material-inspired
  material: [0.4, 0.0, 0.2, 1],
};

// Duration scales
export const durations = {
  fast: 0.15,      // For subtle feedback
  quick: 0.2,      // For small interactions
  moderate: 0.25,  // For standard transitions
  normal: 0.3,     // For most UI animations
  slow: 0.35,      // For larger elements
  leisurely: 0.4,  // For immersive effects
  deliberate: 0.5, // For important entrances
};

export const fadeInUp: Variants = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1, ease: easings.normal },
  exit: { y: 24, opacity: 0, ease: [0.9, 0.0, 0.2, 1] }, // Faster exit
};

export const fadeInLeft: Variants = {
  initial: { x: -24, opacity: 0 },
  animate: { x: 0, opacity: 1, ease: easings.normal },
  exit: { x: -24, opacity: 0, ease: [0.9, 0.0, 0.2, 1] },
};

export const fadeInRight: Variants = {
  initial: { x: 24, opacity: 0 },
  animate: { x: 0, opacity: 1, ease: easings.normal },
  exit: { x: 24, opacity: 0, ease: [0.9, 0.0, 0.2, 1] },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08, // Tighter stagger for more cohesive feel
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  initial: { scale: 0.96, opacity: 0 },
  animate: { scale: 1, opacity: 1, ease: easings.normal },
  exit: { scale: 0.96, opacity: 0, ease: [0.9, 0.0, 0.2, 1] },
};

// Enhanced pulse with more natural feel
export const pulse: Variants = {
  initial: { scale: 1 },
  animate: [
    { scale: 1 },
    { scale: 1.03, ease: "easeIn" },
    { scale: 1, ease: "easeOut" },
  ],
  transition: { duration: 2.5, repeat: Infinity },
};

// Improved float with varied motion for organic feel
export const float: Variants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-8, 4, -8, 4, 0], // More varied floating pattern
    rotate: [-2, 1, -2, 1, 0], // Subtle rotation for organic feel
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Spring configurations for interactive elements
export const buttonPress: Variants = {
  initial: { scale: 1 },
  whileTap: { scale: 0.97 },
};

// Hover lift with spring
export const hoverLift: Variants = {
  initial: { y: 0, scale: 1 },
  whileHover: {
    y: -4,
    scale: 1.02,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// For elements that should feel "connected" to cursor
export const hoverPointer: Variants = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.96 },
};

// Progress indicator for hover
export const hoverProgress: Variants = {
  initial: { width: "0%" },
  whileHover: { width: "100%" },
};

// Staggered reveal with better timing
export const staggeredReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.4,
      ease: easings.normal,
    },
  },
};

// For modal/dialog-like entrances
export const modalEnter: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easings.normal,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.94,
    transition: {
      duration: 0.2,
      ease: [0.9, 0.0, 0.2, 1],
    },
  },
};

// Spring-based drag (for future use)
export const draggable: Variants = {
  whileDrag: {
    rotate: 0,
    transition: { type: "spring", stiffness: 400, damping: 24 },
  },
};