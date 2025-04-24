"use client";

import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, RefObject } from "react";

interface ScrollAnimationProps {
  inputRange?: number[];
  outputRange?: any[];
  clamp?: boolean;
  smooth?: boolean;
  smoothConfig?: {
    damping?: number;
    stiffness?: number;
    mass?: number;
  };
}

export function useScrollAnimation<T>({
  inputRange = [0, 1],
  outputRange = [0, 1],
  clamp = true,
  smooth = true,
  smoothConfig = {
    damping: 50,
    stiffness: 400,
    mass: 0.5,
  },
}: ScrollAnimationProps = {}): [RefObject<HTMLElement>, MotionValue<T>] {
  const ref = useRef<HTMLElement>(null);
  
  // Track scroll progress through the element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform the scroll progress to the output range
  const transformedValue = useTransform(
    scrollYProgress,
    inputRange,
    outputRange,
    { clamp }
  );

  // Apply spring physics if smooth is enabled
  const value = smooth
    ? useSpring(transformedValue, {
        damping: smoothConfig.damping,
        stiffness: smoothConfig.stiffness,
        mass: smoothConfig.mass,
      })
    : transformedValue;

  return [ref, value as MotionValue<T>];
}

// Useful preset for parallax effects
export function useParallax(
  factor: number = 0.3,
  clamp: boolean = true
): [RefObject<HTMLElement>, MotionValue<number>] {
  return useScrollAnimation<number>({
    inputRange: [0, 1],
    outputRange: [factor * 100, 0],
    clamp,
    smooth: true,
    smoothConfig: {
      damping: 60,
      stiffness: 500,
    },
  });
}

// Useful preset for opacity fade effects based on scroll
export function useFadeEffect(
  threshold: number = 0.5,
  fadeRange: number = 0.3
): [RefObject<HTMLElement>, MotionValue<number>] {
  return useScrollAnimation<number>({
    inputRange: [
      threshold - fadeRange, // Start fading in
      threshold, // Fully visible
      threshold, // Start fading out
      threshold + fadeRange, // Fully invisible
    ],
    outputRange: [0, 1, 1, 0],
    clamp: true,
    smooth: true,
  });
} 