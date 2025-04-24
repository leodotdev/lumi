"use client";

import { CursorEffect } from "./ui/CursorEffect";
import { useEffect, useState } from "react";

interface ClientCursorEffectProps {
  containerId: string;
  fadeThreshold?: number;
}

export default function ClientCursorEffect({
  containerId,
  fadeThreshold = 0.5,
}: ClientCursorEffectProps) {
  // Only render on client side after hydration is complete
  const [isMounted, setIsMounted] = useState(false);
  // Detect Safari browser for optimized settings
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Detect Safari browser
    const ua = navigator.userAgent.toLowerCase();
    const isSafariBrowser =
      ua.indexOf("safari") !== -1 &&
      ua.indexOf("chrome") === -1 &&
      ua.indexOf("android") === -1;

    setIsSafari(isSafariBrowser);
  }, []);

  // Don't render anything during SSR or before hydration is complete
  if (!isMounted) {
    return null;
  }

  return (
    <CursorEffect
      colors={["255, 255, 255", "200, 220, 255", "160, 200, 255"]}
      // Use fewer particles on Safari for better performance
      sizes={isSafari ? [350, 250] : [400, 300, 250]}
      blur={isSafari ? 45 : 60}
      opacity={0.15}
      // Reduce particle count on Safari
      particleCount={isSafari ? 4 : 7}
      zIndex={1}
      containerId={containerId}
      fadeThreshold={fadeThreshold}
    />
  );
}
