"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimation } from "@/providers/AnimationProvider";

interface HoverRevealProps {
  children: React.ReactNode;
  hoverContent: React.ReactNode;
  className?: string;
  hoverClassName?: string;
  duration?: number;
  variant?: "fade" | "slide-up" | "scale" | "zoom";
}

export default function HoverReveal({
  children,
  hoverContent,
  className = "",
  hoverClassName = "",
  duration = 0.3,
  variant = "fade",
}: HoverRevealProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Get animation preferences from context
  const { enableAnimations, prefersReducedMotion, animationSpeed } =
    useAnimation();

  // If animations are disabled or user prefers reduced motion,
  // we'll still show the hover content without animations
  if (!enableAnimations || prefersReducedMotion) {
    return (
      <div
        className={`relative ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}

        {isHovered && (
          <div className={`absolute inset-0 ${hoverClassName}`}>
            {hoverContent}
          </div>
        )}
      </div>
    );
  }

  // Define animation variants
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    "slide-up": {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
    },
    zoom: {
      initial: { opacity: 0, scale: 1.1 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.1 },
    },
  };

  // Get the selected variant
  const selectedVariant = variants[variant];

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`absolute inset-0 ${hoverClassName}`}
            initial={selectedVariant.initial}
            animate={selectedVariant.animate}
            exit={selectedVariant.exit}
            transition={{ duration: duration / animationSpeed }}
          >
            {hoverContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
