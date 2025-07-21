import React from "react";

const ProjectTechStack = ({ techs }) => {
  if (!techs || !techs.length) {
    return <div className="text-center text-xl">No tech stack available.</div>;
  }

  return (
    <div className="project-tech-stack mt-6">
      <h3 className="text-2xl font-semibold text-center mb-4">Tech Stack</h3>
      <div className="flex justify-center gap-6">
        {techs.map((tech, idx) => (
          <div key={idx} className="tech-item text-center">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-12 h-12 object-contain mb-2"
            />
            <span className="text-lg">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTechStack;
