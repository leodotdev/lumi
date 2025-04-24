"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useAnimation } from "@/providers/AnimationProvider";

interface TextRevealProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  splitBy?: "words" | "characters";
  staggerAmount?: number;
  triggerOnce?: boolean;
  threshold?: number;
  id?: string;
}

export default function TextReveal({
  text,
  as: Component = "p",
  className = "",
  delay = 0,
  splitBy = "words",
  staggerAmount = 0.03,
  triggerOnce = true,
  threshold = 0.1,
  id,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold,
  });

  // Get animation preferences from context
  const { enableAnimations, prefersReducedMotion, animationSpeed } =
    useAnimation();

  // If animations are disabled or user prefers reduced motion,
  // we'll still render the text without animation
  if (!enableAnimations || prefersReducedMotion) {
    return (
      <Component className={className} id={id}>
        {text}
      </Component>
    );
  }

  // Split the text into items (words or characters)
  const items =
    splitBy === "words"
      ? text.split(" ").map((word) => word + " ")
      : text.split("");

  // Container variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerAmount / animationSpeed,
        delayChildren: delay / animationSpeed,
      },
    },
  };

  // Item variants
  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4 / animationSpeed,
        ease: [0.2, 0.65, 0.3, 0.9], // Custom easing curve for a subtle, pleasant motion
      },
    },
  };

  return (
    <Component className={className} id={id}>
      <motion.span
        ref={ref}
        aria-label={text}
        className="inline-block"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={container}
      >
        {items.map((textItem, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={item}
            style={{
              display: splitBy === "words" ? "inline-block" : "inline",
              whiteSpace: splitBy === "characters" ? "pre" : "normal",
            }}
          >
            {textItem}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
