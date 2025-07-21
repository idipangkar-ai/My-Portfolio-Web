// TechStack.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaBolt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiNextdotjs,
  SiCplusplus,
  SiMongodb,
  SiSupabase,
  SiExpress,
} from "react-icons/si";

const techIcons = [
  { icon: <FaHtml5 />, top: "10%", left: "80%", delay: 0.2 },
  { icon: <FaCss3Alt />, top: "70%", left: "20%", delay: 0.3 },
  { icon: <SiTailwindcss />, top: "20%", left: "10%", delay: 0.4 },
  { icon: <SiFramer />, top: "60%", left: "90%", delay: 0.5 },
  { icon: <FaBolt />, top: "15%", left: "60%", delay: 0.6 }, // GSAP placeholder
  { icon: <FaJs />, top: "45%", left: "50%", delay: 0.7 },
  { icon: <FaReact />, top: "80%", left: "70%", delay: 0.8 },
  { icon: <SiNextdotjs />, top: "35%", left: "25%", delay: 0.9 },
  { icon: <FaPython />, top: "55%", left: "10%", delay: 1.0 },
  { icon: <SiCplusplus />, top: "25%", left: "75%", delay: 1.1 },
  { icon: <SiMongodb />, top: "65%", left: "35%", delay: 1.2 },
  { icon: <SiSupabase />, top: "30%", left: "60%", delay: 1.3 },
  { icon: <SiExpress />, top: "50%", left: "85%", delay: 1.4 },
];

const TechStack = () => {
  return (
    <section className="relative py-20 text-white bg-[var(--color-gray-1)] overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>

      {/* Animated glowing circle background */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[90vw] h-[90vw] max-w-[800px] max-h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full z-0 opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #5a5a5a, #1a1a1a)",
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle animated inner gradient light */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full z-0 opacity-20 blur-2xl"
        style={{
          background:
            "conic-gradient(from 180deg, #9333ea, #ec4899, #6366f1, #9333ea)",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Tech Icons */}
      <div className="relative w-full h-[60vh] max-w-7xl mx-auto z-10">
        {techIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl text-gray-400 hover:text-white transition-colors"
            style={{ top: item.top, left: item.left }}
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 6,
              delay: item.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.3 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
