import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const ParallaxWrapper = ({ children, offset = 150, down = false }) => {
  const { scrollY } = useViewportScroll();

  // Transform the scrollY position to a vertical movement
  const y = useTransform(
    scrollY,
    [0, 1000],
    down ? [offset, -offset] : [-offset, offset]
  );

  return (
    <motion.div style={{ y }} className="will-change-transform">
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper;
