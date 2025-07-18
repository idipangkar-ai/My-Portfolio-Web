import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars, Sparkles } from "@react-three/drei";
import { Vector3 } from "three";

const UFOModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF("/assets/3d/ufo.glb");
  return (
    <primitive
      object={scene}
      ref={ref}
      scale={[0.5, 0.5, 0.5]}
      position={[0, -0.6, 0]}
      {...props}
    />
  );
});

const Comet = () => {
  const cometRef = useRef();
  const trailRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (cometRef.current) {
      // Comet moves in a circular path
      cometRef.current.position.set(
        Math.cos(t * 0.2) * 20,
        Math.sin(t * 0.3) * 8 + 10,
        Math.sin(t * 0.2) * 20
      );
      // Tiny wobble
      cometRef.current.rotation.set(0, t * 0.5, 0);
    }
    if (trailRef.current) {
      // Make trail position follow comet
      trailRef.current.position.copy(cometRef.current.position);
    }
  });

  return (
    <group>
      <mesh ref={cometRef}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#f00" />
      </mesh>
      <Sparkles
        ref={trailRef}
        count={50}
        size={0.5}
        color="white"
        scale={[2, 2, 2]}
        speed={0.5}
      />
    </group>
  );
};

const UFOSection = () => {
  const modelRef = useRef();

  return (
    <section className="relative my-24 w-full h-[80vh] overflow-hidden">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Stars radius={100} depth={50} count={2000} factor={4} fade speed={1} />

        <Sparkles
          count={400}
          size={1.2}
          color="#ffffff"
          scale={50}
          speed={0.2}
        />
        <Sparkles
          count={200}
          size={2.0}
          color="#ff80ff"
          scale={70}
          speed={0.1}
        />
        <Sparkles
          count={100}
          size={0.7}
          color="#00ffff"
          scale={30}
          speed={0.4}
        />

        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 3, 5]} intensity={1} />

        <UFOModel ref={modelRef} />

        <Comet />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </section>
  );
};

export default UFOSection;
