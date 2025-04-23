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
}

export function CursorEffect({
  colors = ["255, 255, 255"],
  sizes = [200],
  blur = 30,
  opacity = 0.15,
  className = "",
  particleCount = 5,
  zIndex = 0,
}: CursorEffectProps) {
  const [particles, setParticles] = useState<
    { x: number; y: number; delay: number }[]
  >([]);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize particles with different follow delays
    const initialParticles = Array.from({ length: particleCount }, (_, i) => ({
      x: 0,
      y: 0,
      delay: 0.02 + i * 0.03, // Different delay for each particle
    }));
    setParticles(initialParticles);

    // Set initial position to center of the screen
    if (typeof window !== "undefined") {
      const initialX = window.innerWidth / 2;
      const initialY = window.innerHeight / 2;
      setMousePosition({ x: initialX, y: initialY });
      setParticles(
        initialParticles.map((p) => ({ ...p, x: initialX, y: initialY }))
      );
    }
  }, [particleCount]);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
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

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, mousePosition]);

  if (typeof window === "undefined") {
    return null; // Don't render on server
  }

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
              opacity: isVisible ? opacity : 0,
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
