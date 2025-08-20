"use client";
import React, { useMemo } from "react";
import { motion, useTransform } from "framer-motion";
import { useSmoothedScroll } from "./smoothScrollProvider";
/**
 * StickyStack props:
 * - layers: React.ReactNode[] — each will be stacked and shown one-by-one
 * - heightPerLayer: number — how tall the scroll area per layer should be (px)
 */
type Props = {
  layers: React.ReactNode[];
  heightPerLayer?: number;
};

const StickyStack: React.FC<Props> = ({ layers, heightPerLayer = 800 }) => {
  const smoothY = useSmoothedScroll();
  // fallback: if no provider, use 0-based motionvalue (non-smooth)
  const y = smoothY ?? { get: () => 0, set: (_v: number) => {}, onChange: () => {} } as any;

  // total height used by this stack (makes room for pinning)
  const totalHeight = heightPerLayer * layers.length;

  // compute per-layer progress — one layer visible at a time.
  // For layer i: activeRange = [i*heightPerLayer, (i+1)*heightPerLayer)
  return (
    <section style={{ height: totalHeight + "px", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {layers.map((layer, i) => {
          // map scroll position to local progress for layer: 0 -> hidden / 0.5 -> fully shown / 1 -> hidden upwards
          // We'll use useTransform to create a progress value for CSS
          const start = i * heightPerLayer;
          const mid = start + heightPerLayer * 0.45;
          const end = start + heightPerLayer;

          // map smoothY to opacity-like progress for this layer
          const opacity = useTransform(y, [start, mid, end], [0, 1, 0], { clamp: true });
          // translateY subtle parallax (top disappears upward)
          const translateY = useTransform(y, [start, mid, end], [30, 0, -30], { clamp: true });
          // scale slightly
          const scale = useTransform(y, [start, mid, end], [0.98, 1, 0.98], { clamp: true });

          return (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "3rem",
                opacity,
                y: translateY,
                scale,
                zIndex: layers.length - i, // top layers are above
                pointerEvents: "none", // avoid blocking pointer events for sections below
              }}
            >
              <div style={{ width: "100%", pointerEvents: "auto" }}>{layer}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StickyStack;
