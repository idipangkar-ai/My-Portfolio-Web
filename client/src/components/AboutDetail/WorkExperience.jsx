// WorkingExperience.jsx
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

const WorkingExperience = () => {
  return (
    <section className="py-16 bg-[var(--color-gray-1)] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>

        {/* Mobile View: Stack Cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Card 1 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[var(--color-gray-3)] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-purple-500 mb-2">
              Frontend Engineer Intern
            </h3>
            <p className="text-gray-400 mb-2">Microsoft Hyderabad</p>
            <p className="text-sm text-gray-300 mb-4">
              January 2023 - June 2023
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>Crafted performant UIs using React and Tailwind CSS.</li>
              <li>Improved load speed and SEO scores.</li>
              <li>Worked with designers to deliver responsive layouts.</li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[var(--color-gray-4)] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-teal-400 mb-2">
              Software Development Engineer
            </h3>
            <p className="text-gray-400 mb-2">Forrce Infotech Ltd</p>
            <p className="text-sm text-gray-300 mb-4">
              November 2023 - Present
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>
                Built web apps using Frappe, ERP-Next, Next.js, Node, and
                MongoDB.
              </li>
              <li>Deployed using Vercel and DigitalOcean.</li>
              <li>Integrated third-party APIs and Stripe payments.</li>
            </ul>
          </motion.div>
        </div>

        {/* Desktop View: Grid Layout */}
        <div className="hidden md:grid grid-cols-7 grid-rows-5 gap-4">
          {/* Card 1 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="col-span-4 row-span-3 col-start-4 bg-[var(--color-gray-3)] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-purple-500 mb-2">
              Frontend Engineer Intern
            </h3>
            <p className="text-gray-400 mb-2">Microsoft Hyderabad</p>
            <p className="text-sm text-gray-300 mb-4">
              January 2023 - June 2023
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>Crafted performant UIs using React and Tailwind CSS.</li>
              <li>Improved load speed and SEO scores.</li>
              <li>Worked with designers to deliver responsive layouts.</li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="col-span-4 row-span-2 row-start-4 bg-[var(--color-gray-4)] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-teal-400 mb-2">
              Software Development Engineer
            </h3>
            <p className="text-gray-400 mb-2">Forrce Infotech Ltd</p>
            <p className="text-sm text-gray-300 mb-4">
              November 2023 - Present
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>
                Built web apps using Frappe, ERP-Next, Next.js, Node, and
                MongoDB.
              </li>
              <li>Deployed using Vercel and DigitalOcean.</li>
              <li>Integrated third-party APIs and Stripe payments.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkingExperience;
