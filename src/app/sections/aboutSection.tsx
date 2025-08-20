"use client";

import React from "react";
import Image from "next/image";
import AboutIllustration from "@/components/AboutIllustration";
import { motion, Variants } from "framer-motion";

// Container for stagger animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Generic fade/slide item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Dots animation
const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 250, damping: 12 },
  },
};

const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-black px-2 py-20 relative">
      <div className="max-w-[1428px] justify-center mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Left Side: Tag + Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-row lg:flex-col justify-between lg:items-end items-center lg:w-fit w-full lg:p-0 p-0.5"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 border border-gray-300 rounded-[11px] px-4 py-2 w-fit h-fit"
          >
            <span className="h-2 w-2 bg-black rounded-full"></span>
            <p className="text-sm font-medium">About</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-fit"
          >
            <AboutIllustration />
          </motion.div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          className="flex flex-col p-3.5 lg:p-0 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Digital Guardian Mission, Vision and Core Values
          </motion.h2>

          {/* Vision Statement */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-3 py-1 border rounded-[11px] text-sm mb-2 text-black border-gray-300">
              <motion.span
                variants={dotVariants}
                className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"
              />
              Vision Statement
            </span>
            <p className="text-gray-900 leading-relaxed font-light tracking-wider mt-2">
              To be the world&rsquo;s most trusted guardian of digital assets,
              empowering a safer, smarter, and more secure digital future for
              everyone.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-3 py-1 border rounded-[11px] text-sm mb-2 text-black border-gray-300">
              <motion.span
                variants={dotVariants}
                className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"
              />
              Mission Statement
            </span>
            <p className="text-gray-900 leading-relaxed font-light tracking-wider mt-2">
              To protect businesses and individuals from evolving cyber threats
              by delivering cutting-edge security solutions, relentless
              innovation, and expert guidance&nbsp;&ndash;&nbsp;24/7, globally.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 border rounded-[11px] text-sm mb-2 text-black border-gray-300">
              <motion.span
                variants={dotVariants}
                className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"
              />
              Core Values
            </span>
            <motion.ul
              className="list-disc pl-5 leading-relaxed tracking-wider font-light text-gray-900 space-y-2 mt-2"
              variants={containerVariants}
            >
              {[
                "Integrity First: uphold the highest standards of honesty and transparency in all we do.",
                "Relentless Protection: never rest in our pursuit to safeguard digital environments.",
                "Innovation-Driven: embrace technology and creativity to stay ahead of threats.",
                "Client-Centric: solution starts with a deep understanding of our clients’ unique needs.",
                "Global Responsibility: recognize our role in protecting the digital infrastructure of a connected world.",
              ].map((value, index) => (
                <motion.li key={index} variants={itemVariants}>
                  {value}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Texture */}
      <Image
        src="/paper-texture-one.svg"
        alt="Foreground texture"
        fill
        className="pointer-events-none z-50 object-center h-full object-cover opacity-12"
      />
    </section>
  );
};

export default AboutSection;
