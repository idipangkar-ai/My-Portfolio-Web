import React, { Suspense } from "react";
import "./Projects.css";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Import images (still bundled statically)
import chatbotImg from "../assets/images/chatbot.jpeg";
import dashImg from "../assets/images/dash.jpeg";
import saasImg from "../assets/images/saas.jpeg";

// Dynamic card component
const LazyProjectCard = React.lazy(() => import("./LazyProjectCard"));

const projects = [
  {
    image: chatbotImg,
    title: "01",
    subtitle: 'A Chat App Named "Kutha-Ko"',
    description:
      'MVP web version "1.0.0" released — We would love to hear your feedback ',
    link: "https://www.kuthako.io",
  },
  {
    image: dashImg,
    title: "02",
    subtitle: "Data insights in real-time",
    description: "A real-time data dashboard for tracking performance.",
    link: "https://link-to-dashboard.com",
  },
  {
    image: saasImg,
    title: "03",
    subtitle: "Cloud-based service",
    description: "A cloud-based solution for enterprise operations.",
    link: "https://link-to-saas.com",
  },
];

const Projects = () => {
  return (
    <div className="m-4 pb-40 relative z-10">
      <div className="mt-24 mb-24">
        <h1 className="text-[#d8d8dc] text-8xl text-center tracking-widest font-semibold">
          LIVE DEMO
        </h1>
        <p className="text-[#636366] text-center font-semibold">
          These <span className="text-[#aeaeb2] text-5xl">3</span> Project are
          Live!
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-4 md:grid md:grid-cols-12 md:grid-rows-12 md:gap-7">
        {/* Cards 1–3: lazy loaded + motion animated */}
        {projects.map((project, index) => {
          let gridClasses = "w-full md:col-span-6 md:row-span-6";
          if (index === 1) gridClasses += " md:col-start-7 md:row-start-3";
          if (index === 2) gridClasses += " md:row-start-7";

          return (
            <div key={index} className={gridClasses}>
              <Suspense fallback={<div className="text-white">Loading...</div>}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <LazyProjectCard project={project} index={index} />
                </motion.div>
              </Suspense>
            </div>
          );
        })}

        {/* Card 4: manual, non-image card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:col-span-6 md:row-span-2 md:col-start-7 md:row-start-9"
        >
          <div className="glow-box glow-4 rounded-lg p-[.5px]">
            <div className="bg-black w-full h-full text-white rounded-lg p-4 z-10 relative flex flex-col gap-3">
              <h2 className="text-xl font-bold">ALL PROJECTS</h2>
              <h3 className="text-lg font-semibold">UI & UI - Complete MERN</h3>
              <p className="text-sm text-gray-300">
                Want a portfolio like this? You can buy and use these projects
                as your own — ready to go.
              </p>
              <Link to="/project">
                <div className="group bg-[#242426] rounded-full px-4 py-2 hover:bg-[#2c2c2e] font-semibold transition-colors duration-300 cursor-pointer flex items-center gap-2">
                  <span className="gradient-text">Go to Project</span>
                  <span className="bg-[#d8d8dc] p-1 hover:bg-[#363638] rounded-full transition-all duration-300 transform group-hover:translate-x-1">
                    <FiArrowRight />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
