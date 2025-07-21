import React from "react";
import Section from "./ProjectSection";

import img1 from "../../assets/images/chatbot.jpeg";
import img2 from "../../assets/images/dash.jpeg";
import img3 from "../../assets/images/saas.jpeg";

const toursData = [
  {
    image: img1,
    title: "City Tour",
    description: "Explore the city.",
    btn1Text: "Learn More",
    btn2Text: "Book Now",
  },
  {
    image: img2,
    title: "Nature Trail",
    description: "Adventure in nature.",
    btn1Text: "Learn More",
    btn2Text: "Book Now",
  },
  {
    image: img3,
    title: "Beach Escape",
    description: "Relax by the sea.",
    btn1Text: "Learn More",
    btn2Text: "Book Now",
  },
];

const ToursSection = () => (
  <Section
    title="Explore the World"
    subtitle="Discover breathtaking destinations and guided experiences curated for adventurers and explorers."
    cards={toursData}
  />
);

export default ToursSection;
