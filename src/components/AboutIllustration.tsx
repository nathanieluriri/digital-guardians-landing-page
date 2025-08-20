"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiPenTool, FiBarChart2 } from "react-icons/fi"; // Using react-icons for cleaner icons

// Define the type for our orbiting items for better type safety
type OrbitingItem = {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  angle: number;
  radius: number;
};

const AboutIllustration = () => {
  const [isHovered, setIsHovered] = useState(false);
  const orbitRadius = 120; // Radius of the orbit in pixels

  const items: OrbitingItem[] = [
    { id: 1, icon: FiCode, angle: 30, radius: orbitRadius },      // Code
    { id: 2, icon: FiPenTool, angle: 150, radius: orbitRadius },   // Design
    { id: 3, icon: FiBarChart2, angle: 270, radius: orbitRadius }, // Strategy
  ];

  // Animation variants for the main container to orchestrate children animations
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Animate children one by one
      },
    },
  };

  // Variants for individual orbiting icons


  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="relative flex items-center justify-center w-[400px] h-[400px]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* 1. Subtle Background Grid */}
      <div className="absolute w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* 2. Central Glowing Orb */}
      <motion.div
        className="absolute flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-2xl"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="absolute w-full h-full  rounded-full blur-lg" />
        <span className="text-4xl">🛡️</span>
      </motion.div>

      {/* 3. Orbiting Icons and Connecting Lines */}
      <div className="absolute">
        {items.map((item) => {
          const x = item.radius * Math.cos((item.angle * Math.PI) / 180);
          const y = item.radius * Math.sin((item.angle * Math.PI) / 180);

          return (
            <React.Fragment key={item.id}>
              {/* Connecting Line (visible on hover) */}
              <AnimatePresence>
                {isHovered && (
                  <motion.svg
                    className="absolute w-full h-full"
                    style={{ originX: "0", originY: "0" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <line
                      x1="200" // Center of 400px container
                      y1="200" // Center of 400px container
                      x2={200 + x}
                      y2={200 + y}
                      stroke="#9ca3af" // gray-400
                      strokeWidth="1"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>

              {/* Orbiting Icon */}
              <motion.div
                // variants={itemVariants}
                className="absolute flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-lg"
                style={{
                  left: `calc(50% - 32px)`, // Center the icon
                  top: `calc(50% - 32px)`,  // Center the icon
                }}
                animate={{
                  x: x,
                  y: y,
                  rotate: [0, 10, -10, 0], // Gentle bobbing rotation
                }}
                transition={{
                  x: { type: "spring", stiffness: 100, damping: 15 },
                  y: { type: "spring", stiffness: 100, damping: 15 },
                  rotate: { repeat: Infinity, duration: 10, ease: "easeInOut" },
                }}
              >
                <item.icon className="text-2xl text-gray-700" />
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AboutIllustration;