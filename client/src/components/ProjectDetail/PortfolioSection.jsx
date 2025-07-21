import React from "react";
import Section from "./ProjectSection";

import img1 from "../../assets/images/chatbot.jpeg";
import img2 from "../../assets/images/dash.jpeg";
import img3 from "../../assets/images/saas.jpeg";

const portfolioData = [
  {
    image: img1,
    title: "Portfolio Site",
    description: "Built with React.",
    btn1Text: "View Project",
    btn2Text: "GitHub",
  },
  {
    image: img2,
    title: "UI Design",
    description: "Clean and modern.",
    btn1Text: "View Project",
    btn2Text: "GitHub",
  },
  {
    image: img3,
    title: "Fullstack App",
    description: "React + Node.js",
    btn1Text: "View Project",
    btn2Text: "GitHub",
  },
];

const PortfolioSection = () => (
  <Section
    title="Crafted Projects"
    subtitle="A showcase of design-first, performance-driven, full-stack web applications built with care."
    cards={portfolioData}
  />
);

export default PortfolioSection;
