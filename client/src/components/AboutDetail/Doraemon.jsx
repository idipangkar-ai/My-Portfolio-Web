import React, { useRef, forwardRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars, Sparkles } from "@react-three/drei";
import { gsap } from "gsap";

const DoraemonModel = forwardRef(({ hovered }, ref) => {
  const { scene } = useGLTF("/assets/3d/ufo.glb");
  const wobble = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    if (!ref.current) return;
    wobble.current.to(ref.current.rotation, {
      z: 0.15,
      duration: 0.2,
      yoyo: true,
      repeat: 3,
      ease: "power1.inOut",
    });
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.004;
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15 - 0.15;
    }
  });

  const handleHover = () => wobble.current.restart();

  return (
    <primitive
      object={scene}
      ref={ref}
      scale={[1.8, 1.8, 1.8]}
      position={[0, -1.2, 0]}
      onPointerOver={handleHover}
    />
  );
});

const Doraemon = () => {
  const modelRef = useRef();
  return (
    <section
      id="3d-section"
      className="relative my-24 w-full h-[80vh] overflow-hidden"
    >
      <Canvas
        camera={{ position: [0, 1, 4.5], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Starfield + Sparkles */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <Sparkles count={200} size={1} scale={[50, 50, 50]} speed={0.2} />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />
        <pointLight position={[-2, 1, 2]} intensity={0.8} color="#00aaff" />
        <pointLight position={[2, 1, -2]} intensity={0.6} color="#ff4d6d" />

        {/* Doraemon */}
        <DoraemonModel ref={modelRef} />

        {/* Keep rotating */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>

      {/* Overlay */}
      <div className="absolute bottom-8 w-full text-center text-white px-4 z-10">
        <h2 className="text-3xl font-bold text-[var(--blue-default-dark)] drop-shadow">
          Doraemon in Space 🌌
        </h2>
        <p className="text-[var(--color-white-6)] mt-2 text-sm">
          Hover to make him wobble and float among stars!
        </p>
      </div>
    </section>
  );
};

export default Doraemon;
