// src/components/LazyFeatureCard.jsx
import React, { Suspense } from "react";

const LazyFeatureCard = ({ card }) => {
  return (
    <div
      className={`${card.gradientClass} flex items-center justify-center rounded-lg`}
    >
      <div className="spectacledcoder-content-card w-[98%] h-[99%] rounded-lg bg-black backdrop-blur-sm p-4 flex flex-col justify-between transition-all duration-200">
        {/* Top: Icons */}
        <div className="flex justify-center sm:justify-between items-center gap-4 px-1 text-white flex-wrap">
          {card.icons.map((IconComponent, idx) => (
            <Suspense
              key={idx}
              fallback={<div className="text-[#636366]">...</div>}
            >
              <IconComponent
                className={`${
                  idx === 1 ? "text-9xl text-[#636366]" : "text-lg"
                }`}
              />
            </Suspense>
          ))}
        </div>

        {/* Bottom: Titles */}
        <div className="mt-auto text-center">
          {card.titles.map((title, idx) => (
            <h2
              key={idx}
              className="text-[#636366] font-lilita text-xl sm:text-2xl leading-snug"
            >
              {title}
            </h2>
          ))}
        </div>

        {/* Bottom: Descriptions */}
        <div className="text-center pt-6">
          {card.descriptions.map((desc, idx) => (
            <p
              key={idx}
              className="text-[#aeaeb2] text-sm sm:text-base font-light text-justify px-2 mb-2"
            >
              {desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LazyFeatureCard;
