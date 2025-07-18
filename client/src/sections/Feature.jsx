import "./Feature.css";
import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load icons
const FaPaintBrush = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaPaintBrush }))
);
const CiGrid42 = lazy(() =>
  import("react-icons/ci").then((m) => ({ default: m.CiGrid42 }))
);
const FaPencilRuler = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaPencilRuler }))
);

const FaUserAlt = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaUserAlt }))
);
const SiFlux = lazy(() =>
  import("react-icons/si").then((m) => ({ default: m.SiFlux }))
);
const FaSearch = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaSearch }))
);

const FaCogs = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaCogs }))
);
const TbRobot = lazy(() =>
  import("react-icons/tb").then((m) => ({ default: m.TbRobot }))
);
const FaMicrochip = lazy(() =>
  import("react-icons/fa").then((m) => ({ default: m.FaMicrochip }))
);

// Lazy load card component
const LazyFeatureCard = lazy(() => import("./LazyFeatureCard"));

const cardData = [
  {
    gradientClass: "spectacledcoder-gradient-card1",
    icons: [FaPaintBrush, CiGrid42, FaPencilRuler],
    titles: ["UI Design"],
    descriptions: [
      "UI Design, Mobile-First, Modern Interfaces",
      "Color Theory, Design Systems, Responsive Design, Visual Hierarchy.",
    ],
  },
  {
    gradientClass: "spectacledcoder-gradient-card2",
    icons: [FaUserAlt, SiFlux, FaSearch],
    titles: ["UX Research"],
    descriptions: [
      "User-Centric Design, Behavioral Testing, User Insights.",
      "Usability Testing, A/B Testing, Persona Development, Journey Mapping.",
    ],
  },
  {
    gradientClass: "spectacledcoder-gradient-card3",
    icons: [FaCogs, TbRobot, FaMicrochip],
    titles: ["AI Integration"],
    descriptions: [
      "AI Integration, Automation, ML-driven Logic",
      "Smart User Interaction, Intelligent Systems, Predictive Analytics, Adaptive Interfaces.",
    ],
  },
];

const Feature = () => {
  return (
    <div className="my-16">
      <div className="text-white text-center mt-8 mb-12">
        <h1 className="text-[#aeaeb2] text-4xl sm:text-5xl font-semibold">
          Feature
        </h1>
        <p className="text-[#636366] mt-2">What I do?</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 p-4">
        {cardData.map((card, index) => (
          <div key={index} className="w-full sm:w-[30%]">
            <Suspense fallback={<div className="text-white">Loading...</div>}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                <LazyFeatureCard card={card} />
              </motion.div>
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
