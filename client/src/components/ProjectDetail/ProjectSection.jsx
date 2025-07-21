import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = ({ title, subtitle, cards }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-sm md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="project-card">
            <ProjectCard
              image={card.image}
              title={card.title}
              description={card.description}
              btn1Text={card.btn1Text}
              btn2Text={card.btn2Text}
              onBtn1Click={() => alert(`${card.title} - ${card.btn1Text}`)}
              onBtn2Click={() => alert(`${card.title} - ${card.btn2Text}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
