"use client";

import React, { useEffect, useState } from "react";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isClient, setIsClient] = useState(false);

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

    // Set initial position to center of the screen
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    setMousePosition({ x: initialX, y: initialY });
    setParticles(
      initialParticles.map((p) => ({ ...p, x: initialX, y: initialY }))
    );
  }, [particleCount]);

  // Handle mouse and scroll events
  useEffect(() => {
    if (!isClient) return;

    let animationFrameId: number;

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

      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleScroll = () => {
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
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          return {
            ...particle,
            x: particle.x + (mousePosition.x - particle.x) * particle.delay,
            y: particle.y + (mousePosition.y - particle.y) * particle.delay,
          };
        })
      );

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animateParticles);

    // Add event listeners to window
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    // Initial scroll calculation
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, mousePosition, containerId, isClient]);

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
            className="absolute transform-gpu transition-opacity"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${sizes[sizeIndex]}px`,
              height: `${sizes[sizeIndex]}px`,
              opacity: isVisible ? finalOpacity : 0,
              transform: `translate(-50%, -50%)`,
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
