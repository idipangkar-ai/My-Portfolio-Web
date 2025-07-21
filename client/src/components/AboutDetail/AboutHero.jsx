import "./AboutHero";
import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import { SiMongodb, SiCplusplus, SiNextdotjs } from "react-icons/si";

const floatingIcons = [
  { icon: <FaReact />, top: "10%", left: "80%", delay: 0.2 },
  { icon: <FaHtml5 />, top: "80%", left: "20%", delay: 0.4 },
  { icon: <FaCss3Alt />, top: "20%", left: "10%", delay: 0.6 },
  { icon: <FaJs />, top: "70%", left: "90%", delay: 0.8 },
  { icon: <FaGithub />, top: "40%", left: "50%", delay: 1.0 },
  { icon: <FaNodeJs />, top: "60%", left: "70%", delay: 1.2 },
  { icon: <FaPython />, top: "15%", left: "60%", delay: 1.4 },
  { icon: <SiCplusplus />, top: "25%", left: "35%", delay: 1.6 },
  { icon: <SiNextdotjs />, top: "45%", left: "15%", delay: 1.8 },
  { icon: <SiMongodb />, top: "75%", left: "40%", delay: 2.0 },
];

const AboutHero = () => {
  return (
    <section className="relative min-h-screen bg-[var(--color-gray-2)] text-white overflow-hidden px-6 py-16 animate-gradientBG">
      {/* Floating Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-white text-3xl opacity-30"
          style={{ top: item.top, left: item.left }}
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 5,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Grid Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center z-10 relative w-[80vw] mx-auto">
        {/* Text Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Tagline */}
          <p className="text-sm uppercase tracking-widest text-purple-500 font-semibold">
            Code. Design. Deliver.
          </p>

          {/* Main Heading */}
          <h2 className="text-sm md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Frontend First. Full Stack When Needed.
          </h2>

          {/* Typed Text */}
          <div className="text-md text-gray-300 font-mono">
            <ReactTyped
              strings={[
                "I design. I develop.",
                "I optimize. I scale.",
                "I ship fast, pixel-perfect interfaces.",
              ]}
              typeSpeed={40}
              backSpeed={20}
              loop
            />
          </div>

          {/* Paragraph */}
          <p className="text-gray-400 text-lg hidden md:block">
            I specialize in crafting polished, high-performance user interfaces
            — with the depth to handle backend challenges when they matter. I
            move fast, design clean, and build products users remember.
          </p>

          {/* Mobile Paragraph */}
          <p className="text-gray-400 text-sm md:hidden">
            Fast, design-focused frontend dev with backend skills when needed.
          </p>

          {/* Button */}
          <motion.button
            className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-md font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get to Know Me →
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
              alt="About Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
