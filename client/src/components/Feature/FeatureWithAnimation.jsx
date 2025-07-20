import React from "react";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaPencilRuler,
  FaUserAlt,
  FaSearch,
  FaCogs,
  FaMicrochip,
} from "react-icons/fa";
import { CiGrid42 } from "react-icons/ci";
import { SiFlux } from "react-icons/si";
import { TbRobot } from "react-icons/tb";
import "./FeatureWithAnimation.css";

const cardData2 = [
  {
    icons: [FaPaintBrush, CiGrid42, FaPencilRuler],
    titles: ["UI Design"],
    descriptions: [
      "UI Design, Mobile-First, Modern Interfaces",
      "Color Theory, Design Systems, Responsive Design, Visual Hierarchy.",
    ],
  },
];

const cardData3 = [
  {
    icons: [FaUserAlt, SiFlux, FaSearch],
    titles: ["UX Research"],
    descriptions: [
      "User-Centric Design, Behavioral Testing, User Insights.",
      "Usability Testing, A/B Testing, Persona Development, Journey Mapping.",
    ],
  },
];

const cardData4 = [
  {
    icons: [FaCogs, TbRobot, FaMicrochip],
    titles: ["AI Integration"],
    descriptions: [
      "AI Integration, Automation, ML-driven Logic",
      "Smart User Interaction, Intelligent Systems, Predictive Analytics, Adaptive Interfaces.",
    ],
  },
];

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FeatureWithAnimation = () => {
  return (
    <div className="my-24">
      <div className="text-white text-center mt-8 mb-6">
        <h1 className="text-[#aeaeb2] text-4xl sm:text-5xl font-semibold">
          Feature
        </h1>
        <p className="text-[#636366] mt-2">What I do?</p>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-11 lg:grid-rows-8">
          {/* Card 1 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="gradient-bg-bw-lr h-48 lg:h-full rounded-md lg:col-span-6 lg:col-start-6 lg:row-start-2 card-inner h-full w-full"
          >
            <p className="text-[var(--color-gray-1)]"> Frontend Heavy FS-SDE</p>
          </motion.div>

          {/* Card 2 with dynamic content */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="glow-box glow-2 h-48 lg:h-full lg:col-span-3 lg:row-span-4 lg:col-start-2 lg:row-start-1"
          >
            <div className="card-inner h-full w-full bg-[rgb(36,36,38)] text-white p-4">
              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {cardData2[0].titles[0]}
              </h3>

              {/* Icons */}
              <div className="flex space-x-4 mb-4">
                {cardData2[0].icons.map((Icon, index) => (
                  <div key={index} className="text-2xl">
                    <Icon />
                  </div>
                ))}
              </div>

              {/* Descriptions */}
              <ul className="space-y-2">
                {cardData2[0].descriptions.map((description, index) => (
                  <li key={index} className="text-sm">
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 3 with dynamic content */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="glow-box glow-1 h-48 lg:h-full lg:col-span-3 lg:row-span-4 lg:col-start-5 lg:row-start-3"
          >
            <div className="card-inner h-full w-full bg-[rgb(44,44,46)] text-white p-4">
              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {cardData3[0].titles[0]}
              </h3>

              {/* Icons */}
              <div className="flex space-x-4 mb-4">
                {cardData3[0].icons.map((Icon, index) => (
                  <div key={index} className="text-2xl">
                    <Icon />
                  </div>
                ))}
              </div>

              {/* Descriptions */}
              <ul className="space-y-2">
                {cardData3[0].descriptions.map((description, index) => (
                  <li key={index} className="text-sm">
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 4 with dynamic content */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="glow-box glow-3 h-48 lg:h-full lg:col-span-3 lg:row-span-4 lg:col-start-8 lg:row-start-5 p-4 text-white bg-gray-800 rounded-md"
          >
            <div className="card-inner h-full w-full bg-[rgb(44,44,46)] text-white p-4">
              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {cardData4[0].titles[0]}
              </h3>

              {/* Icons */}
              <div className="flex space-x-4 mb-4">
                {cardData4[0].icons.map((Icon, index) => (
                  <div key={index} className="text-2xl">
                    <Icon />
                  </div>
                ))}
              </div>

              {/* Descriptions */}
              <ul className="space-y-2">
                {cardData4[0].descriptions.map((description, index) => (
                  <li key={index} className="text-sm">
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="gradient-bg-bw-rl h-48 lg:h-full p-4 card-inner h-full w-full text-white bg-gray-800 rounded-md lg:col-span-6 lg:row-start-7"
          >
            {/* <div className="card-inner h-full w-full bg-[rgb(44,44,46)] text-white p-4"></div> */}
            <p className="text-[var(--color-white-1)]">
              I have a research-oriented mindset.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeatureWithAnimation;

// -------------------------------------- //

// import React from "react";
// import { motion } from "framer-motion";
// import "./FeatureWithAnimation.css";

// const cardVariant = {
//   hidden: { opacity: 0, scale: 0.9, y: 50 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const FeatureWithAnimation = () => {
//   return (
//     <div className="my-24">
//       <div className="text-white text-center mt-8 mb-6">
//         <h1 className="text-[#aeaeb2] text-4xl sm:text-5xl font-semibold">
//           Feature
//         </h1>
//         <p className="text-[#636366] mt-2">What I do?</p>
//       </div>

//       <div>
//         <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-11 lg:grid-rows-8">
//           {/* Card 1 */}
//           <motion.div
//             variants={cardVariant}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             className="gradient-bg-bw-lr h-48 lg:h-full rounded-md lg:col-span-6 lg:col-start-6 lg:row-start-2"
//           >
//             1
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div
//             variants={cardVariant}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             className="glow-box glow-2 h-48 lg:h-full lg:col-span-3 lg:row-span-4 lg:col-start-2 lg:row-start-1"
//           >
//             <div className="card-inner h-full w-full bg-[rgb(36,36,38)] text-white">
//               2
//             </div>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div
//             variants={cardVariant}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             className="glow-box glow-1 h-48 lg:h-full lg:col-span-3 lg:row-span-4 lg:col-start-5 lg:row-start-3"
//           >
//             <div className="card-inner h-full w-full bg-[rgb(44,44,46)] text-white">
//               3
//             </div>
//           </motion.div>

//           {/* Card 4 */}
//           <motion.div
//             variants={cardVariant}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             className="glow-box glow-3 h-48 lg:h-full lg:col-span-3 lg:row-span-4 lg:col-start-8 lg:row-start-5 p-4 text-white bg-gray-800 rounded-md"
//           >
//             <div className="card-inner h-full w-full bg-[rgb(44,44,46)] text-white">
//               4
//             </div>
//           </motion.div>

//           {/* Card 5 */}
//           <motion.div
//             variants={cardVariant}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             className="gradient-bg-bw-rl h-48 lg:h-full p-4 text-white bg-gray-800 rounded-md lg:col-span-6 lg:row-start-7"
//           >
//             5
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureWithAnimation;
