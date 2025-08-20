"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const services = [
  "Threat Detection & Prevention",
  "Digital Risk Rating",
  "Brand Protection",
  "Cloud Security",
  "Security Awareness Training",
  "Network Security Architecture",
  "Security Audits & Compliance",
  "Incident Response & Recovery",
  "Penetration Testing & Vulnerability Assessment",
  "Identity and Access Management",
  "Data Loss Prevention",
  "Security Software Development",
  "Risk Assessment & Management",
];

// Container for stagger animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Each service item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Icon animation
const iconVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 250, damping: 12 },
  },
};

const ServiceSection: React.FC = () => {
  return (
    <section className="w-full relative bg-[#f8f9ff] text-black px-2 py-10 sm:px-10 sm:py-13 overflow-x-hidden">
      <div className="max-w-[1522px] bg-white p-5 sm:p-15 rounded-2xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Left: Video + Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex gap-5 sm:gap-20 lg:flex-col flex-row"
        >
          <div className="flex gap-5 flex-col">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 border border-gray-300 rounded-[11px] px-4 py-2 w-fit"
            >
              <span className="h-2 w-2 bg-black rounded-full"></span>
              <p className="text-sm font-medium">Services</p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg font-light"
            >
              What Digital Guardian Offers?
            </motion.p>
          </div>
          <div className="flex-1 flex justify-center">
            <motion.video
              src="/Digital_Guardians_Investigation.webm"
              autoPlay
              loop
              muted
              playsInline
              width={450}
              height={400}
              className="object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Right: Services */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Protect What Matters Most — Digital Guardian Secures Your Data,
            Defends Your Business.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-900 mb-8 font-light leading-relaxed tracking-wider"
          >
            From insider threats to advanced external attacks, Digital Guardian
            delivers enterprise-grade cybersecurity solutions that safeguard
            your sensitive data across endpoints, networks, and the cloud. With
            real-time threat detection, data loss prevention, and compliance
            support, we empower your business to operate securely in an
            increasingly complex digital world.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.p
                key={index}
                className="px-4 py-2 border rounded-[11px] text-sm font-light border-gray-700 text-black flex items-center gap-2"
                variants={itemVariants}
              >
                <motion.span
                  className="text-[#74b0ff] duration-300 text-xl hover:text-[#FF7474]"
                  variants={iconVariants}
                >
                  ●
                </motion.span>{" "}
                {service}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Texture */}
      <Image
        src="/paper-texture-one.svg"
        alt="Foreground texture"
        fill
        className="pointer-events-none z-50 object-center h-full object-cover opacity-20"
      />
    </section>
  );
};

export default ServiceSection;
