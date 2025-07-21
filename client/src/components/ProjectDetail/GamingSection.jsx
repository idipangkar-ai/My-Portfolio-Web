import React from "react";
import Section from "./ProjectSection";

import img1 from "../../assets/images/chatbot.jpeg";
import img2 from "../../assets/images/dash.jpeg";
import img3 from "../../assets/images/saas.jpeg";

const gamingData = [
  {
    image: img1,
    title: "FPS Shooter",
    description: "High adrenaline action.",
    btn1Text: "Play Now",
    btn2Text: "Download",
  },
  {
    image: img2,
    title: "Strategy Quest",
    description: "Think your way through.",
    btn1Text: "Play Now",
    btn2Text: "Download",
  },
  {
    image: img3,
    title: "Racing Pro",
    description: "Speed thrills.",
    btn1Text: "Play Now",
    btn2Text: "Download",
  },
];

const GamingSection = () => (
  <Section
    title="Level Up Your Game"
    subtitle="Dive into immersive worlds, compete with friends, and enjoy the thrill of next-gen gameplay."
    cards={gamingData}
  />
);

export default GamingSection;
