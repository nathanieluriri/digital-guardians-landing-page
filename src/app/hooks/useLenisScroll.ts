// hooks/useLenisScroll.ts
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * A React hook to implement smooth scrolling using the Lenis library.
 * This hook initializes a Lenis instance on component mount and cleans it up on unmount.
 */
export function useLenisScroll(): void {
  useEffect(() => {
    // Initialize a new Lenis instance with custom settings for a smooth scroll effect.
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function for a specific feel
      smoothWheel: true,
    });

    /**
     * The animation frame loop function.
     * On each frame, it tells the Lenis instance to update the scroll position.
     * @param {number} time - The current time provided by requestAnimationFrame.
     */
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    // Start the animation loop.
    requestAnimationFrame(raf);

    // Cleanup function that runs when the component unmounts.
    return () => {
      // Destroy the Lenis instance to stop the scroll effect and remove event listeners.
      lenis.destroy();
    };
  }, []); // The empty dependency array ensures this effect runs only once.
}
