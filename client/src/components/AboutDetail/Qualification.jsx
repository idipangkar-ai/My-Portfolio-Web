import React from "react";
import "./Qualification.css";
import { motion } from "framer-motion";

// Text fade/slide in animation
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const MotionCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: false, amount: 0.3 }}
    className="qualification-glow-box rounded-lg"
  >
    <div className="p-6 h-full rounded-lg bg-black">{children}</div>
  </motion.div>
);

const Qualification = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="max-w-5xl mx-auto space-y-10 px-4 my-8"
    >
      <div className="text-center">
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          custom={1}
          className="text-[#aaa] text-lg"
        >
          Experience and Education
        </motion.p>
        <motion.h2
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          custom={2}
          className="text-3xl font-bold"
        >
          Qualification
        </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Work Experience */}
        <MotionCard delay={0}>
          <motion.h3
            className="text-xl font-semibold mb-4"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={1}
          >
            <i className="bx bxs-briefcase-alt mr-2"></i>Work Experience
          </motion.h3>
          <div className="space-y-6">
            {[
              {
                title: "Frontend SDE Intern @Microsoft",
                time: "Microsoft | Sep 2022 - Feb 2023",
              },
              {
                title: "Software Development Engineer",
                time: "@FISI Ltd. | Since 2023 - Present",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
              >
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-[#aaa] text-sm">{item.time}</p>
              </motion.div>
            ))}
          </div>
        </MotionCard>

        {/* Education */}
        <MotionCard delay={0.2}>
          <motion.h3
            className="text-xl font-semibold mb-4"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={1}
          >
            <i className="bx bx-library mr-2"></i>Education
          </motion.h3>
          <div className="space-y-6">
            {[
              {
                title: "High School",
                time: "St. Claret Secondary School | May 2012",
              },
              {
                title: "Higher Secondary School",
                time: "St. Xavier's College | May 2015",
              },
              {
                title: "Bachelor of Technology - B.Tech",
                subtitle: "Mechanical Engineering",
                time: "Bharath Institute of Higher Education and Research | July 2018 - May 2022",
              },
              {
                title: "Frontend & Backend Development",
                time: "Meta | Sep 2021 - Feb 2022",
              },
              {
                title: "Data Science and AI",
                time: "IIT Guwahati | Aug 2022 - June 2023",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
              >
                <h4 className="text-gray-400 font-bold">{item.title}</h4>
                {item.subtitle && (
                  <h5 className="text-gray-400 font-bold">{item.subtitle}</h5>
                )}
                <p className="text-[#aaa] text-sm">{item.time}</p>
              </motion.div>
            ))}
          </div>
        </MotionCard>
      </div>
    </motion.section>
  );
};

export default Qualification;
