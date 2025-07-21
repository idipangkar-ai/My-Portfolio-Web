import React from "react";

const ProjectTags = ({ tags }) => {
  if (!tags || !tags.length) {
    return <div className="text-center text-xl">No tags available.</div>;
  }

  return (
    <div className="project-tags flex flex-wrap justify-center gap-4 mt-6">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="bg-blue-500 text-white px-4 py-2 rounded-full text-xl"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;
