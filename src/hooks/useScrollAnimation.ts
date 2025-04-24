"use client";

import { useScroll, useTransform, useSpring, MotionValue, useAnimation, useMotionValue } from "framer-motion";
import { useRef, RefObject } from "react";

interface ScrollAnimationProps {
  inputRange?: number[];
  outputRange?: number[];
  clamp?: boolean;
  smooth?: boolean;
  smoothConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

interface AnimationState {
  enableAnimations: boolean;
  prefersReducedMotion: boolean;
}

export function useScrollAnimation({
  inputRange = [0, 1],
  outputRange = [0, 1],
  clamp = true,
  smooth = false,
  smoothConfig = { stiffness: 100, damping: 30 },
}: ScrollAnimationProps = {}): [RefObject<HTMLElement | null>, MotionValue<number>] {
  const ref = useRef<HTMLElement>(null);
  const animationState = useAnimation() as unknown as AnimationState;
  const staticValue = useMotionValue(outputRange[0]);

  // Always calculate scroll progress, even if we won't use it
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Always create the motion value, even if we won't use it
  const progress = useTransform(
    scrollYProgress,
    inputRange,
    outputRange,
    clamp ? { clamp: true } : undefined
  );

  // Create the spring value if needed
  const smoothedProgress = useSpring(progress, smoothConfig);

  // If animations are disabled or user prefers reduced motion,
  // return a static value
  if (!animationState.enableAnimations || animationState.prefersReducedMotion) {
    return [ref, staticValue];
  }

  // Apply smoothing if requested
  if (smooth) {
    return [ref, smoothedProgress];
  }

  return [ref, progress];
}

// Useful preset for parallax effects
export function useParallax(
  factor: number = 0.3,
  clamp: boolean = true
): [RefObject<HTMLElement | null>, MotionValue<number>] {
  return useScrollAnimation({
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
): [RefObject<HTMLElement | null>, MotionValue<number>] {
  return useScrollAnimation({
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