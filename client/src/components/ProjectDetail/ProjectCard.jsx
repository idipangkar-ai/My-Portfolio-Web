// ProjectCard.js
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
  image,
  title,
  description,
  btn1Text,
  btn2Text,
  onBtn1Click,
  onBtn2Click,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9, y: 50 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="bg-[var(--color-gray-1)] shadow-md rounded-lg p-4 flex flex-col items-center"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 text-center">{description}</p>
      <div className="flex gap-4">
        <button
          onClick={onBtn1Click}
          className="bg-[var(--color-gray-4)] text-[var(--color-white-4)] px-4 py-2 rounded-md hover:bg-[var(--color-white-8)] hover:text-[var(--color-gray-4)]"
        >
          {btn1Text}
        </button>
        <button
          onClick={onBtn2Click}
          className="bg-[var(--color-gray-4)] text-[var(--color-white-4)] px-4 py-2 rounded-md hover:bg-[var(--color-white-8)] hover:text-[var(--color-gray-4)]"
        >
          {btn2Text}
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
