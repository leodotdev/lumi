"use client";

import React, { useEffect, useState, useRef } from "react";

interface CursorEffectProps {
  colors?: string[];
  sizes?: number[];
  blur?: number;
  opacity?: number;
  className?: string;
  particleCount?: number;
  zIndex?: number;
  containerId?: string;
}

export function CursorEffect({
  colors = ["255, 255, 255"],
  sizes = [200],
  blur = 30,
  opacity = 0.15,
  className = "",
  particleCount = 5,
  zIndex = 0,
  containerId,
}: CursorEffectProps) {
  // Initialize with empty arrays and default values to avoid hydration mismatches
  const [particles, setParticles] = useState<
    { x: number; y: number; delay: number }[]
  >([]);
  const [isVisible, setIsVisible] = useState(false);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isClient, setIsClient] = useState(false);

  // Use refs to avoid excessive re-renders
  const particlesRef = useRef<{ x: number; y: number; delay: number }[]>([]);
  const rafRef = useRef<number | null>(null);
  const throttleRef = useRef<number>(0);

  // Handle initialization after component mounts on client
  useEffect(() => {
    setIsClient(true);

    // Initialize particles with different follow delays
    const initialParticles = Array.from({ length: particleCount }, (_, i) => ({
      x: 0,
      y: 0,
      delay: 0.02 + i * 0.03, // Different delay for each particle
    }));
    setParticles(initialParticles);
    particlesRef.current = initialParticles;

    // Set initial position to center of the screen
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    mousePositionRef.current = { x: initialX, y: initialY };
    particlesRef.current = initialParticles.map((p) => ({
      ...p,
      x: initialX,
      y: initialY,
    }));
    setParticles([...particlesRef.current]);
  }, [particleCount]);

  // Handle mouse and scroll events
  useEffect(() => {
    if (!isClient) return;

    let lastScrollTime = 0;
    const SCROLL_THROTTLE = 100; // Throttle scroll events to once per 100ms

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      if (containerId) {
        const container = document.getElementById(containerId);
        if (container) {
          const rect = container.getBoundingClientRect();
          const isInside =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;

          if (!isInside) {
            return;
          }
        }
      }

      // Update ref directly instead of state to avoid re-renders
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleScroll = () => {
      // Throttle scroll events for better performance
      const now = Date.now();
      if (now - lastScrollTime < SCROLL_THROTTLE) return;
      lastScrollTime = now;

      if (containerId) {
        const container = document.getElementById(containerId);
        if (container) {
          const rect = container.getBoundingClientRect();
          const viewportBottom = window.innerHeight;

          const heroVisiblePercent = Math.max(
            0,
            Math.min(1, rect.bottom / viewportBottom)
          );

          setScrollOpacity(heroVisiblePercent);
        }
      }
    };

    const animateParticles = () => {
      // Use timestamp to throttle updates for Safari
      const now = performance.now();
      if (now - throttleRef.current < 16.67) {
        // Aim for 60fps (1000ms / 60 ≈ 16.67ms)
        rafRef.current = requestAnimationFrame(animateParticles);
        return;
      }
      throttleRef.current = now;

      // Update particle positions using ref for better performance
      particlesRef.current = particlesRef.current.map((particle) => {
        return {
          ...particle,
          x:
            particle.x +
            (mousePositionRef.current.x - particle.x) * particle.delay,
          y:
            particle.y +
            (mousePositionRef.current.y - particle.y) * particle.delay,
        };
      });

      // Only update state if visible to reduce render cycles
      if (isVisible) {
        setParticles([...particlesRef.current]);
      }

      rafRef.current = requestAnimationFrame(animateParticles);
    };

    // Start animation
    rafRef.current = requestAnimationFrame(animateParticles);

    // Add event listeners to window
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial scroll calculation
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isClient, isVisible, containerId]);

  // Don't render anything on the server or before client-side hydration
  if (!isClient) {
    return null;
  }

  const finalOpacity = opacity * scrollOpacity;

  return (
    <div
      className={`pointer-events-none fixed inset-0 overflow-hidden ${className}`}
      style={{ zIndex }}
      aria-hidden="true"
    >
      {particles.map((particle, index) => {
        const colorIndex = index % colors.length;
        const sizeIndex = index % sizes.length;

        return (
          <div
            key={index}
            className="absolute transform-gpu transition-opacity will-change-transform"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${sizes[sizeIndex]}px`,
              height: `${sizes[sizeIndex]}px`,
              opacity: isVisible ? finalOpacity : 0,
              transform: `translate3d(-50%, -50%, 0)`,
              background: `radial-gradient(circle, rgba(${colors[colorIndex]}, 0.7) 0%, rgba(${colors[colorIndex]}, 0) 70%)`,
              filter: `blur(${blur}px)`,
              transition: "opacity 0.3s ease",
            }}
          />
        );
      })}
    </div>
  );
}
