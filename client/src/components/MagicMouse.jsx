// src/components/LightMouseTrail.jsx
import { useEffect, useRef } from "react";

const MagicMouseTrail = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.current.forEach((point, i) => {
        const alpha = 1 - i / trail.current.length;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.15})`;
        ctx.shadowColor = `rgba(255, 255, 255, ${alpha * 0.05})`;
        ctx.shadowBlur = 4;
        ctx.fill();
      });
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      trail.current.push({ ...mouse.current });

      if (trail.current.length > 25) {
        trail.current.shift(); // Limit trail length
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[999]"
    />
  );
};

export default MagicMouseTrail;
