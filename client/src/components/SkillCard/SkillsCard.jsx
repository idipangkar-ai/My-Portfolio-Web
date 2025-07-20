import React, { useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostman,
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si";

// Base skills
const baseSkills = [
  {
    id: 1,
    icon: <FaHtml5 size={40} style={{ color: "#E34F26" }} />,
    name: "HTML",
  },
  {
    id: 2,
    icon: <FaCss3Alt size={40} style={{ color: "#1572B6" }} />,
    name: "CSS",
  },
  {
    id: 3,
    icon: <FaJs size={40} style={{ color: "#F7DF1E" }} />,
    name: "JavaScript",
  },
  {
    id: 4,
    icon: <FaReact size={40} style={{ color: "#61DAFB" }} />,
    name: "React",
  },
  {
    id: 5,
    icon: <FaNodeJs size={40} style={{ color: "#339933" }} />,
    name: "Node",
  },
  {
    id: 6,
    icon: <SiMongodb size={40} style={{ color: "#47A248" }} />,
    name: "MongoDB",
  },
  {
    id: 7,
    icon: <FaGithub size={40} style={{ color: "#181717" }} />,
    name: "GitHub",
  },
  {
    id: 8,
    icon: <SiPostman size={40} style={{ color: "#FF6C37" }} />,
    name: "Postman",
  },
  {
    id: 9,
    icon: <SiTailwindcss size={40} style={{ color: "#06B6D4" }} />,
    name: "Tailwind",
  },
  {
    id: 10,
    icon: <FaPython size={40} style={{ color: "#3776AB" }} />,
    name: "Python",
  },
  {
    id: 11,
    icon: <SiCplusplus size={40} style={{ color: "#00599C" }} />,
    name: "C++",
  },
];

const SkillsCard = () => {
  // Shuffle and assign random delays once
  const skills = useMemo(() => {
    const shuffled = [...baseSkills].sort(() => Math.random() - 0.5);
    return shuffled.map((skill) => ({
      ...skill,
      delay: Math.random() * 1.8,
    }));
  }, []);

  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="p-6 bg-[var(--color-gray-1)] w-[60%] md:w-[80%] lg:w-[70%] mx-auto rounded-xl shadow-lg"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 items-center">
          {skills.map((skill, index) => {
            const [ref, inView] = useInView({ triggerOnce: true });
            const tiltX = Math.floor(Math.random() * 20 - 10);
            const tiltY = Math.floor(Math.random() * 20 - 10);
            const shouldWobble = index % 2 === 0;

            return (
              <motion.div
                ref={ref}
                key={skill.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  inView
                    ? shouldWobble
                      ? {
                          opacity: 1,
                          y: [0, -3, 3, 0],
                          rotate: [0, 1.5, -1.5, 0],
                        }
                      : { opacity: 1, y: 0 }
                    : {}
                }
                transition={
                  shouldWobble
                    ? {
                        delay: skill.delay,
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : {
                        delay: skill.delay,
                        duration: 0.4,
                        ease: "easeOut",
                      }
                }
              >
                <Tilt
                  glareEnable={false}
                  scale={1.05}
                  transitionSpeed={250}
                  tiltAngleXInitial={tiltX}
                  tiltAngleYInitial={tiltY}
                  className="w-full aspect-square"
                >
                  <div
                    className="w-full h-full flex items-center justify-center bg-[var(--color-gray-2)] border border-[var(--color-gray-6)] shadow-xl rounded-xl transform hover:scale-105 transition duration-300"
                    title={skill.name}
                  >
                    {skill.icon}
                  </div>
                </Tilt>
              </motion.div>
            );
          })}

          {/* Final card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-4 lg:col-span-5 flex flex-col justify-center items-center bg-[var(--color-gray-11)] border border-gray-300 shadow-md p-4 rounded-xl"
          >
            <h2 className="text-lg font-semibold mb-2 text-center">
              Explore Around
            </h2>
            <div className="flex gap-4">
              <a
                href="/Dipangkar_CV.pdf"
                download
                className="group hidden md:inline-flex bg-[var(--color-gray-2)] rounded-full px-4 py-2 hover:bg-[var(--color-gray-5)] font-semibold transition-colors duration-300 cursor-pointer items-center gap-2 whitespace-nowrap"
              >
                <span className="gradient-text">Check-out my recent work!</span>
                <span className="rounded-full transition-all duration-300 transform group-hover:translate-y-0.5">
                  <FiArrowRight className="text-base" />
                </span>
              </a>
              <a
                href="/Dipangkar_CV.pdf"
                download
                className="group hidden md:inline-flex bg-[var(--color-gray-2)] rounded-full px-4 py-2 hover:bg-[var(--color-gray-5)] font-semibold transition-colors duration-300 cursor-pointer items-center gap-2 whitespace-nowrap"
              >
                <span className="gradient-text">Let's Connect</span>
                <span className="rounded-full transition-all duration-300 transform group-hover:translate-y-0.5">
                  <FiArrowRight className="text-base" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsCard;
