import React from "react";

const Section = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Build Fast. Deploy Faster.
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          This section is built using React and styled with Tailwind CSS. Easily
          customizable and ready for production.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section;
