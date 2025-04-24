"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useAnimation } from "@/providers/AnimationProvider";

interface StaggeredRevealProps {
  children: ReactNode;
  staggerAmount?: number;
  initialDelay?: number;
  triggerOnce?: boolean;
  threshold?: number;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
}

export default function StaggeredReveal({
  children,
  staggerAmount = 0.1,
  initialDelay = 0,
  triggerOnce = true,
  threshold = 0.1,
  className = "",
  direction = "up",
}: StaggeredRevealProps) {
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
    return <div className={className}>{children}</div>;
  }

  const getDirectionalOffset = () => {
    switch (direction) {
      case "left":
        return { x: -20, y: 0 };
      case "right":
        return { x: 20, y: 0 };
      case "down":
        return { x: 0, y: -20 };
      case "up":
      default:
        return { x: 0, y: 20 };
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerAmount / animationSpeed,
        delayChildren: initialDelay / animationSpeed,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      ...getDirectionalOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
      },
    },
  };

  // Wrap each direct child in a motion.div with the item variants
  const wrappedChildren = React.Children.map(children, (child) => {
    return <motion.div variants={item}>{child}</motion.div>;
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      className={className}
    >
      {wrappedChildren}
    </motion.div>
  );
}
