import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import ReactParallaxTilt from "react-parallax-tilt";
import bgFlip from "../../assets/images/bg-flip.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%", // Trigger animation when the element is 80% from the top of the viewport
          toggleActions: "play none none none", // Play animation once when triggered
        },
      }
    );

    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top 80%", // Trigger animation when the element is 80% from the top of the viewport
          toggleActions: "play none none none", // Play animation once when triggered
        },
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="flex my-8 flex-col-reverse items-center gap-8 max-w-[80%] h-[70vh] mx-auto md:flex-row md:justify-between md:gap-12 text-white"
    >
      <div className="text-center md:text-left space-y-3">
        <p className="text-[#aaa] text-lg">Hello, My Name is</p>
        <h1
          ref={headingRef}
          className="text-4xl font-bold text-[#FF7A01] tracking-wide"
        >
          Dipangkar Hajong
        </h1>
        <span ref={subheadingRef} className="text-lg text-[#87A4B6] block mt-2">
          Software Engineer @FISI Ltd. Since 2023
        </span>
      </div>

      {/* Image with Parallax Tilt and Hover Effect */}
      <ReactParallaxTilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        transitionSpeed={500}
        scale={1.1}
        className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg relative group"
      >
        <motion.img
          src={bgFlip}
          alt="Background Flip"
          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
        />
      </ReactParallaxTilt>
    </section>
  );
};

export default AboutHero;
