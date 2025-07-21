// components/Common/QuickStats.jsx
import React from "react";
import StatCard from "./StatCard";

const QuickStats = () => {
  return (
    <section className="py-12 bg-[var(--color-gray-1)] text-white">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-4 text-center">
        <StatCard number="2+" label="Years Exp" accent="text-indigo-400" />
        <StatCard number="15+" label="Projects" accent="text-teal-400" />
        <StatCard number="3" label="Awards" accent="text-pink-400" />
      </div>
    </section>
  );
};

export default QuickStats;
