import React from "react";
import ToursSection from "./ToursSection";
import GamingSection from "./GamingSection";
import PortfolioSection from "./PortfolioSection";

const ProjectGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <ToursSection />
      <GamingSection />
      <PortfolioSection />
    </div>
  );
};

export default ProjectGallery;
