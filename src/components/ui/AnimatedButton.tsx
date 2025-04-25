"use client";

import { IconBrandAppleFilled, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

interface AnimatedButtonProps {
  href: string;
  className?: string;
}

export default function AnimatedButton({
  href,
  className = "",
}: AnimatedButtonProps) {
  const text = "Download on iOS";
  const letters = text.split("");

  return (
    <Link
      href={href}
      className={`btn-download ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Lumiinus on the App Store"
    >
      <div>
        <IconBrandAppleFilled size={24} style={{ color: "#000" }} />
        <div className="text-container">
          {letters.map((letter, index) => (
            <span
              key={index}
              style={{ transitionDelay: `${(index + 1) * 0.025}s` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
        <IconArrowRight size={24} style={{ color: "#000" }} />
      </div>
    </Link>
  );
}
