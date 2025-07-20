import React, { useRef, useEffect } from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";

import * as THREE from "three";
import { Tween, Easing, update as tweenUpdate } from "@tweenjs/tween.js";

const Hero = () => {
  const containerRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const stars = [];
    const starGroup = new THREE.Group();

    const geometry = new THREE.SphereGeometry(0.4, 8, 8);
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
      new THREE.MeshBasicMaterial({ color: 0xff00ff }),
      new THREE.MeshBasicMaterial({ color: 0x00ffff }),
      new THREE.MeshBasicMaterial({ color: 0xffcc00 }),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
    ];

    for (let i = 0; i < 250; i++) {
      const material = materials[Math.floor(Math.random() * materials.length)];
      const star = new THREE.Mesh(geometry, material);
      star.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );
      star.userData.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05
      );
      starGroup.add(star);
      stars.push(star);
    }

    scene.add(starGroup);

    const onMouseMove = (e) => {
      const bounds = container.getBoundingClientRect();
      const x = ((e.clientX - bounds.left) / bounds.width) * 2 - 1;
      const y = -((e.clientY - bounds.top) / bounds.height) * 2 + 1;
      mousePos.current.x = x;
      mousePos.current.y = y;
    };

    container.addEventListener("mousemove", onMouseMove);

    const createShootingStar = () => {
      const geo = new THREE.SphereGeometry(0.2, 8, 8);
      const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geo, mat);
      star.position.set(
        (Math.random() - 0.5) * 100,
        50,
        (Math.random() - 0.5) * 100
      );
      scene.add(star);

      new Tween(star.position)
        .to({ x: 0, y: -50, z: 0 }, 2000)
        .easing(Easing.Quadratic.Out)
        .onComplete(() => {
          scene.remove(star);
          geo.dispose();
          mat.dispose();
        })
        .start();
    };

    const shootingInterval = setInterval(createShootingStar, 5000);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      stars.forEach((star) => {
        star.position.add(star.userData.velocity);
        ["x", "y", "z"].forEach((axis) => {
          if (Math.abs(star.position[axis]) > 100) {
            star.userData.velocity[axis] *= -1;
          }
        });
      });

      starGroup.rotation.x +=
        (mousePos.current.y * 0.1 - starGroup.rotation.x) * 0.05;
      starGroup.rotation.y +=
        (mousePos.current.x * 0.1 - starGroup.rotation.y) * 0.05;

      tweenUpdate();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    new Tween(camera.position)
      .to({ x: 0, y: 50, z: 100 }, 3000)
      .easing(Easing.Quadratic.Out)
      .start();

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", onMouseMove);
      clearInterval(shootingInterval);
      cancelAnimationFrame(frameId);

      if (renderer.domElement.parentNode === container)
        container.removeChild(renderer.domElement);

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Galaxy BG Layer */}
      <div
        ref={containerRef}
        className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
      />

      {/* Text Overlay Layer */}
      <div className="absolute inset-0 flex items-center justify-center px-4 ml-4">
        <div className="flex items-center gap-8 text-white max-w-5xl w-full">
          {/* Vertical Line */}
          <div className="w-[2px] h-[300px] bg-gradient-to-b from-blue-400 via-green-400 via-pink-400 to-purple-500 rounded-full" />

          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text px-0 py-1">
              Hello & WelcomE
            </h1>
            <p className="text-md md:text-lg mt-2 text-gray-400">
              Software Development Engineer @FISI Ltd. Since 2023
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="/Dipangkar_CV.pdf"
                download
                className="group hidden md:inline-flex bg-[var(--color-gray-2)] rounded-full px-4 py-2 hover:bg-[var(--color-gray-5)] font-semibold transition-colors duration-300 cursor-pointer items-center gap-2 whitespace-nowrap"
              >
                <span className="gradient-text">Download CV</span>
                <span className="rounded-full transition-all duration-300 transform group-hover:translate-y-0.5">
                  <FiDownload className="text-base" />
                </span>
              </a>
              <a
                href="/Dipangkar_CV.pdf"
                download
                className="group hidden md:inline-flex bg-[var(--color-gray-2)] rounded-full px-4 py-2 hover:bg-[var(--color-gray-5)] font-semibold transition-colors duration-300 cursor-pointer items-center gap-2 whitespace-nowrap"
              >
                <span className="gradient-text">Recent Work!</span>
                <span className="rounded-full transition-all duration-300 transform group-hover:translate-y-0.5">
                  <FiArrowRight className="text-base" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
