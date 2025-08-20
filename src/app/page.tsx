"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Hero from "./sections/heroSection";
import ServiceSection from "./sections/serviceSection";
import AboutSection from "./sections/aboutSection";
import FaqSection from "./sections/frequentlyAskedQuestionsSection";
import WhyJoin from "./sections/whyJoinSection";
import ContactSection from "./sections/contactSection";

import { SmoothScrollProvider } from "./home/smoothScrollProvider";

/**
 * Universal section wrapper with scroll-based fade/slide
 */
const ScrollFadeSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"], // tweak for when fade starts/ends
  });

  // Map scroll progress to opacity + slight Y translation
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);

  return (
    <motion.section
      ref={ref}
      style={{
        opacity,
        y,
        width: "100%",
      }}
      transition={{  duration: 5.6,ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <main>
        <ScrollFadeSection>
          <Hero
            title="Delivering Secure and Innovative Solutions across Information Technology."
            subtitle="Cyber Security, Media and Digital Transformation Cyberattacks make news for all the wrong reasons. Whether you're a startup or a global enterprise, Digital Guardian’s end-to-end protection, 24/7 monitoring, and real-time threat response keep your business out of trouble."
            ctaPrimary={{ label: "Start free risk assessment", href: "#" }}
          />
        </ScrollFadeSection>

        <ScrollFadeSection>
          <ServiceSection />
        </ScrollFadeSection>

        <ScrollFadeSection>
          <AboutSection />
        </ScrollFadeSection>

        <ScrollFadeSection>
          <WhyJoin />
        </ScrollFadeSection>

        <ScrollFadeSection>
          <FaqSection />
        </ScrollFadeSection>

        <ScrollFadeSection>
          <ContactSection />
        </ScrollFadeSection>
      </main>
    </SmoothScrollProvider>
  );
}
