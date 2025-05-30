"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useAnimation } from "@/providers/AnimationProvider";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  intensity?: number;
  direction?: "up" | "down";
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  className = "",
  intensity = 0.2,
  direction = "up",
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { enableAnimations, prefersReducedMotion } = useAnimation();

  // Always calculate scroll progress, even if we won't use it
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const multiplier = direction === "down" ? -1 : 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, multiplier * intensity * 100]
  );

  // If animations are disabled or user prefers reduced motion,
  // render the image without parallax effect
  if (!enableAnimations || prefersReducedMotion) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, height: `calc(100% + ${intensity * 100}px)` }}
        className="absolute inset-0 w-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
