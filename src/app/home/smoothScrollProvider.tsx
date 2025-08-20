"use client";
import React, { useEffect } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";

type Props = { children: React.ReactNode };

/**
 * SmoothScrollProvider
 * - creates a native scroll listener and a smoothed motion value ("latched" to scrollY)
 * - export hook useSmoothedScroll() (below) reads that value from window.
 *
 * Usage: wrap your page in <SmoothScrollProvider>…</SmoothScrollProvider>
 */
export const SmoothScrollContext = React.createContext<{
  smoothY: MotionValue<number> | null;
}>({ smoothY: null });

export const SmoothScrollProvider: React.FC<Props> = ({ children }) => {
  // the raw scroll reader (we'll update it imperatively)
  const raw = useMotionValue(0);
  // spring-smoothed value (gives inertia/gravity feel)
  const smooth = useSpring(raw, {
    stiffness: 120,
    damping: 22,
    mass: 0.9,
  });

  useEffect(() => {
    const onScroll = () => {
      raw.set(window.scrollY || window.pageYOffset);
    };

    // initial set
    raw.set(window.scrollY || window.pageYOffset);
    window.addEventListener("scroll", onScroll, { passive: true });

    // also update on resize to keep things stable (optional)
    const onResize = () => raw.set(window.scrollY || window.pageYOffset);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [raw]);

  return (
    <SmoothScrollContext.Provider value={{ smoothY: smooth }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export function useSmoothedScroll() {
  const ctx = React.useContext(SmoothScrollContext);
  return ctx.smoothY;
}
