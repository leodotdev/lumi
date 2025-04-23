"use client";

import { CursorEffect } from "./ui/CursorEffect";
import { useEffect, useState } from "react";

interface ClientCursorEffectProps {
  containerId: string;
}

export default function ClientCursorEffect({
  containerId,
}: ClientCursorEffectProps) {
  // Only render on client side after hydration is complete
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything during SSR or before hydration is complete
  if (!isMounted) {
    return null;
  }

  return (
    <CursorEffect
      colors={["255, 255, 255", "200, 220, 255", "160, 200, 255"]}
      sizes={[400, 300, 250]}
      blur={60}
      opacity={0.15}
      particleCount={7}
      zIndex={1}
      containerId={containerId}
    />
  );
}
