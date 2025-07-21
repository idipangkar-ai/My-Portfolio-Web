import React from "react";
import NavBar from "../components/Header/Navbar";
import Footer from "../components/Common/Footer";

import ProjectGallery from "../components/ProjectDetail/ProjectGallery";

const ProjectDetails = () => {
  return (
    <>
      <NavBar />
      <ProjectGallery />
      <Footer />
    </>
  );
};

export default ProjectDetails;
