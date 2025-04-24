"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, Variant } from "framer-motion";
import { useAnimation } from "@/providers/AnimationProvider";

type Direction = "up" | "down" | "left" | "right" | "none";
type AnimationVariant = "fade" | "slide" | "scale" | "flip" | "rotate";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  threshold?: number;
  className?: string;
  id?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  variant = "fade",
  delay = 0,
  duration = 0.5,
  triggerOnce = true,
  threshold = 0.1,
  className = "",
  id,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold,
  });

  // Get animation preferences from context
  const { enableAnimations, prefersReducedMotion, animationSpeed } =
    useAnimation();

  // If animations are disabled or user prefers reduced motion,
  // we'll still render the children without animation
  if (!enableAnimations || prefersReducedMotion) {
    return (
      <div className={className} id={id}>
        {children}
      </div>
    );
  }

  // Base variants for different animation types
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const flipVariants = {
    hidden: {
      opacity: 0,
      rotateX: direction === "up" || direction === "down" ? 90 : 0,
      rotateY: direction === "left" || direction === "right" ? 90 : 0,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
    },
  };

  const rotateVariants = {
    hidden: { opacity: 0, rotate: direction === "left" ? -10 : 10 },
    visible: { opacity: 1, rotate: 0 },
  };

  // Select the appropriate variant based on the animation type
  const getVariants = () => {
    switch (variant) {
      case "slide":
        return slideVariants;
      case "scale":
        return scaleVariants;
      case "flip":
        return flipVariants;
      case "rotate":
        return rotateVariants;
      case "fade":
      default:
        return fadeVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{
        duration: duration / animationSpeed,
        delay: delay / animationSpeed,
        ease: "easeOut",
      }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
}
