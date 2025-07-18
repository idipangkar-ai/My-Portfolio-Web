import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const skills = [
  {
    id: 1,
    icon: <FaReact size={50} className="text-cyan-400" />,
    title: "React",
  },
  {
    id: 2,
    icon: <FaJs size={50} className="text-yellow-400" />,
    title: "JavaScript",
  },
  {
    id: 3,
    icon: <FaPython size={50} className="text-blue-500" />,
    title: "Python",
  },
  {
    id: 4,
    icon: <SiCplusplus size={50} className="text-blue-700" />,
    title: "C++",
  },
];

const TopSkills = () => {
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center bg-white shadow-md border rounded-lg w-full min-h-[200px] md:min-h-[250px] md:min-w-[250px] p-6 transition hover:shadow-lg"
          >
            {skill.icon}
            <p className="mt-4 text-base font-medium text-gray-700">
              {skill.title}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TopSkills;
