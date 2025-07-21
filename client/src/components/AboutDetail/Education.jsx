// Education.jsx
import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Education = () => {
  return (
    <section className="py-16 bg-[var(--color-gray-1)] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        {/* Mobile View: Vertical Cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Card 1 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[var(--color-gray-2)] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-purple-500 mb-2">
              Data Science and AI
            </h3>
            <p className="text-gray-400 mb-2">
              Indian Institute of Technology - Guwahati
            </p>
            <p className="text-sm text-gray-300">July 2023 - June 2024</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[var(--color-gray-3)] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-indigo-500 mb-2">
              Frontend Professional Certificate
            </h3>
            <p className="text-gray-400 mb-2">Online Bootcamp: by Meta Team</p>
            <p className="text-sm text-gray-300">June 2021 - December 2021</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[var(--color-gray-3)] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-teal-500 mb-2">
              MERN Full Stack
            </h3>
            <p className="text-gray-400 mb-2">
              Udemy: JavaScript, React, Next, Node, by <i>Jonas Schmedtmann</i>
            </p>
            <p className="text-sm text-gray-300">Completion Year: 2021 June</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[var(--color-gray-4)] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-500 mb-2">
              Mechanical Engineering
            </h3>
            <p className="text-gray-400 mb-2">
              Bharath Institute of Higher Education & Research
            </p>
            <p className="text-sm text-gray-300">Graduation Year: 2022</p>
          </motion.div>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-8 grid-rows-8 gap-4">
          {/* Card 1 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="col-span-5 row-span-3 col-start-1 row-start-2 bg-[var(--color-gray-2)] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-purple-500 mb-4">
              Data Science and AI
            </h3>
            <p className="text-gray-400 mb-4">
              Indian Institute of Technology - Guwahati
            </p>
            <p className="text-sm text-gray-300">July 2023 - June 2024</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="col-span-2 row-span-4 col-start-6 row-start-1 bg-[var(--color-gray-3)] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
              Frontend Professional Certificate
            </h3>
            <p className="text-gray-400 mb-4">Online Bootcamp: by Meta Team</p>
            <p className="text-sm text-gray-300">June 2021 - December 2021</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="col-span-2 row-span-4 col-start-2 row-start-5 bg-[var(--color-gray-3)] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              MERN Full Stack
            </h3>
            <p className="text-gray-400 mb-4">
              Udemy: JavaScript, React, Next, Node, by <i>Jonas Schmedtmann</i>
            </p>
            <p className="text-sm text-gray-300">Completion Year: 2021 June</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="col-span-5 row-span-3 col-start-4 row-start-5 bg-[var(--color-gray-4)] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Mechanical Engineering
            </h3>
            <p className="text-gray-400 mb-4">
              Bharath Institute of Higher Education & Research
            </p>
            <p className="text-sm text-gray-300">Graduation Year: 2022</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
