import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const LazyProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`w-full md:col-span-6 md:row-span-6 transition-opacity duration-500 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      style={{
        minHeight: "550px", // 🚀 prevents layout collapse on scroll
        willChange: "transform, opacity", // smooth animations
      }}
    >
      {/* Render card structure no matter what — image loads lazily */}
      <div
        className={`glow-box glow-${
          index + 1
        } w-full h-full rounded-lg p-[.5px]`}
      >
        <div className="bg-[#1c1c1e] w-full h-full text-white rounded-lg p-4 z-10 relative flex flex-col gap-3">
          <h2 className="text-[#636366] text-9xl font-bold">{project.title}</h2>

          {/* ✅ Add height or aspect ratio to prevent reflow */}
          <div
            style={{
              aspectRatio: "16 / 9", // or use fixed height
              overflow: "hidden",
              borderRadius: "0.5rem",
            }}
          >
            {inView && (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="object-cover w-full h-full"
              />
            )}
          </div>

          <h3 className="text-lg font-semibold">{project.subtitle}</h3>
          <p className="text-sm text-gray-300">{project.description}</p>

          <Link to="/project">
            <div className="group bg-[#242426] rounded-full px-4 py-2 hover:bg-[#2c2c2e] font-semibold transition-colors duration-300 cursor-pointer flex items-center gap-2">
              <span className="gradient-text">Go to App</span>
              <span className="bg-[#d8d8dc] p-1 hover:bg-[#363638] rounded-full transition-all duration-300 transform group-hover:translate-x-1">
                <FiArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LazyProjectCard;
