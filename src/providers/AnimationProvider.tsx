"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AnimationContextType {
  prefersReducedMotion: boolean;
  enableAnimations: boolean;
  setEnableAnimations: (enable: boolean) => void;
  animationSpeed: number;
  setAnimationSpeed: (speed: number) => void;
}

const AnimationContext = createContext<AnimationContextType>({
  prefersReducedMotion: false,
  enableAnimations: true,
  setEnableAnimations: () => {},
  animationSpeed: 1,
  setAnimationSpeed: () => {},
});

export const useAnimation = () => useContext(AnimationContext);

interface AnimationProviderProps {
  children: ReactNode;
}

export default function AnimationProvider({
  children,
}: AnimationProviderProps) {
  // Check for user's motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // State for animation settings
  const [enableAnimations, setEnableAnimations] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  // Effect to check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Update if user preference changes
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);

      // If user prefers reduced motion, automatically adjust settings
      if (e.matches) {
        setEnableAnimations(false);
      }
    };

    // Add event listener for changes
    try {
      // Modern browsers
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } catch (err) {
      // Safari < 14
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Context value
  const value = {
    prefersReducedMotion,
    enableAnimations,
    setEnableAnimations,
    animationSpeed,
    setAnimationSpeed,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}
