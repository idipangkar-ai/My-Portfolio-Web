// components/Common/StatCard.jsx
import React from "react";

const StatCard = ({ number, label, accent }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-[var(--color-gray-2)] rounded-lg shadow-md">
      <h3 className={`text-4xl font-bold ${accent ?? "text-purple-400"}`}>
        {number}
      </h3>
      <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
