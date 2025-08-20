"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const features = [
  {
    title: "Innovative Environment",
    description:
      "Work on groundbreaking projects that shape industries and create lasting change.",
    icon: "/brain.png",
  },
  {
    title: "Growth & Development",
    description:
      "Gain access to mentorship, training, and career advancement opportunities.",
    icon: "/growth.png",
  },
  {
    title: "Collaborative Culture",
    description:
      "Be part of a diverse, dynamic team that values new ideas and different perspectives.",
    icon: "/teamwork.png",
  },
  {
    title: "Cutting-edge Tools",
    description:
      "Access world-class technologies and resources that empower innovation.",
    icon: "/gear.png",
  },
];

// Variants for staggered animation
const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const iconVariants:Variants = {
  hidden: { scale: 0, rotate: -90, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 12 },
  },
};

const WhyJoin = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 relative">
      {/* Left Side: Intro Text */}
      <div className="m-auto">
        <div className="flex flex-col ">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center space-x-2 border border-gray-300 rounded-[11px] px-4 py-2 w-fit"
          >
            <span className="h-2 w-2 bg-black rounded-full"></span>
            <p className="text-sm font-medium">Careers at Digital Guardians</p>
          </motion.div>

          <div className="p-4"></div>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-light mb-4"
          >
            Shape the future with us.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-700 leading-relaxed font-light tracking-wider"
          >
            At Digital Guardians, we believe in the power of people to drive
            meaningful change. We are a team of thinkers, innovators, and
            problem-solvers committed to transforming businesses, industries,
            and communities. If you&#39;re passionate about making an impact, this
            is the place for you.
          </motion.p>
        </div>
      </div>

      {/* Right Side: Features */}
      <motion.div
        className="flex flex-col md:items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-light mb-6"
        >
          Why Join Digital Guardians?
        </motion.h3>

        <motion.div className="space-y-6" variants={containerVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              variants={itemVariants}
            >
              {/* Icon animation */}
              <motion.div
                className="p-2 rounded-lg bg-[#ffeaea] flex-shrink-0"
                variants={iconVariants}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                />
              </motion.div>

              {/* Text animation */}
              <div>
                <p className="text-[#A20000] font-light">{feature.title}</p>
                <div className="p-1"></div>
                <p className="text-gray-800 text-sm w-[200px] md:w-[250px] font-light leading-relaxed tracking-wider">
                  {feature.description}
                </p>
                <div className="p-3"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Background Texture */}
      <Image
        src="/paper-texture-two.svg"
        alt="Foreground texture"
        fill
        className="pointer-events-none z-50 object-center h-full object-cover opacity-10"
      />
    </section>
  );
};

export default WhyJoin;
