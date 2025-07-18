import React from "react";
import { motion } from "framer-motion";
import bgLady from "../../assets/images/bg-lady.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="my-8 w-[80%] min-h-[80vh] mx-auto flex flex-col justify-center space-y-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div variants={fadeInUp} custom={0} className="text-center">
        <p className="text-gray-500 text-lg">My History</p>
        <h2 className="text-3xl font-bold">About Me</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.div
          variants={fadeInUp}
          custom={1}
          className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={bgLady}
            alt="Dipangkar Hajong"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          custom={2}
          className="space-y-6 flex-1 text-center md:text-left"
        >
          <p className="text-[#87A4B6] leading-relaxed">
            Hi, I'm <strong>"Dipangkar Hajong"</strong>, Software Development
            Engineer, Working at - Forrce Infotech solution India Pvt Ltd. Since
            November 2023.
            <br />
            <br />I specialize in frontend-heavy full stack development, using
            technologies like React, JavaScript, Python, and Frappe. My work
            blends strong UI/UX design principles with efficient backend logic
            to create seamless digital experiences.
          </p>

          <motion.div
            variants={fadeInUp}
            custom={3}
            className="grid grid-cols-3 gap-6 text-center"
          >
            <div>
              <p className="text-2xl font-bold">2+</p>
              <span className="text-[#aaa] text-sm">Years Exp</span>
            </div>
            <div>
              <p className="text-2xl font-bold">15+</p>
              <span className="text-[#aaa] text-sm">Projects</span>
            </div>
            <div>
              <p className="text-2xl font-bold">3</p>
              <span className="text-[#aaa] text-sm">Awards</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
