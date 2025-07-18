import React from "react";
import { motion } from "framer-motion";
import ParallaxWrapper from "../components/ParallaxWrapper";

const MotionParallax = ({
  children,
  className = "",
  offset = 40,
  down = false,
  ...props
}) => (
  <ParallaxWrapper offset={offset} down={down}>
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  </ParallaxWrapper>
);

export default MotionParallax;
