import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "Figma",
  "Node.js",
  "MongoDB",
  "Framer Motion",
  "Python",
  "AI/ML",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section id="about-me" className="py-12 glass-card m-4 rounded-3xl">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-10 relative">
        {/* Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[#aeaeb2] font-semibold leading-tight mb-8"
        >
          {/* Small text */}
          <motion.div
            className="text-sm sm:text-xl text-[#aeaeb2] font-medium"
            variants={fadeUp}
          >
            Short Info About
          </motion.div>

          {/* Big text */}
          <motion.div
            className="text-[36px] sm:text-[100px] font-bold text-[#aeaeb2] leading-none"
            variants={fadeUp}
          >
            ME
          </motion.div>
        </motion.div>

        {/* Flex Container */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0 lg:ml-36 mt-[-10px] lg:mt-[-25px] relative">
          {/* Glassmorphic + Tilt Image Section */}
          {isMobile ? (
            <div className="rounded-xl backdrop-blur-md bg-white/5 p-4 shadow-lg">
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-xl overflow-hidden">
                <div className="absolute rounded-lg bottom-0 w-[80%] h-[80%] bg-[#013747] z-[-3]" />
                <div className="absolute left-2 bottom-2 z-[-2] h-full rounded-lg">
                  <img
                    src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/black.jpg"
                    alt="Decorative background"
                    className="h-full object-cover rounded-lg"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute rounded-lg top-[5%] left-[25%] w-[70%] h-[70%] overflow-hidden shadow-[0_7px_50px_0_rgba(0,0,0,1)] origin-top"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/142708646?s=400&u=2a67c5784bf343e1f5a46057fb6393fc7048c60e&v=4"
                    alt="Dipangkar's Avatar"
                    className="transform scale-[2] hover:scale-100 transition-all duration-200 object-cover"
                  />
                </motion.div>
              </div>
            </div>
          ) : (
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.03}
              transitionSpeed={500}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="rounded-xl backdrop-blur-md bg-white/5 p-4 shadow-lg"
            >
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-xl overflow-hidden">
                <div className="absolute rounded-lg bottom-0 w-[80%] h-[80%] bg-[#013747] z-[-3]" />
                <div className="absolute left-2 bottom-2 z-[-2] h-full rounded-lg">
                  <img
                    src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/black.jpg"
                    alt="Decorative background"
                    className="h-full object-cover rounded-lg"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute rounded-lg top-[5%] left-[25%] w-[70%] h-[70%] overflow-hidden shadow-[0_7px_50px_0_rgba(0,0,0,1)] origin-top"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/142708646?s=400&u=2a67c5784bf343e1f5a46057fb6393fc7048c60e&v=4"
                    alt="Dipangkar's Avatar"
                    className="transform scale-[1.3] hover:scale-100 transition-all duration-200 object-cover"
                  />
                </motion.div>
              </div>
            </Tilt>
          )}

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start gap-12 max-w-md lg:max-w-none lg:flex-[0_0_40%] lg:flex-col-reverse"
          >
            <div className="max-w-[200px]">
              <img
                src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/logo.svg"
                alt="Personal logo"
                className="drop-shadow-[0_0_25px_black] lg:rotate-0 rotate-90"
              />
            </div>
            <div className="text-[#aeaeb2] text-[16px] sm:text-[18px] text-center lg:text-left">
              Hi, I'm a Software Development Engineer, Working at - Forrce
              Infotech solution India Pvt Ltd. Since November 2023.
              <br />
              <br />I specialize in frontend-heavy full stack development, using
              technologies like React, JavaScript, Python, and Frappe. My work
              blends strong UI/UX design principles with efficient backend logic
              to create seamless digital experiences.
              <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm text-[#636366] border border-[#87A4B6]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mail Button */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 w-[80px] h-[80px] bg-[#001925] border-[10px] border-[#001925] rounded-full p-3 flex items-center justify-center transition-all duration-200 hover:bg-[#FF7A01] hover:border-[#FF7A01]"
        >
          <a href="mailto:prajapatismit2906@gmail.com" aria-label="Send Email">
            <img
              src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/mail.svg"
              alt="Email icon"
              className="object-contain transition-transform duration-200 hover:scale-[1.5] hover:filter-none filter invert-[56%] sepia-[42%] saturate-[4795%] hue-rotate-[360deg] brightness-[103%] contrast-[105%]"
            />
          </a>
        </motion.div>
      </div>

      {/* Portfolio Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 flex flex-wrap justify-center text-white text-center gap-4"
      >
        <Link
          to="/aboutdetail"
          className="px-4 py-2 glass-card rounded-full hover:bg-[#1c1c1e] transition-transform transform hover:scale-105"
        >
          Go to Detail Page 🧑‍💻
        </Link>
        <Link
          to="/aboutdetail"
          className="px-4 py-2 glass-card rounded-full hover:bg-[#1c1c1e] transition-transform transform hover:scale-105"
        >
          Recent Projects
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
