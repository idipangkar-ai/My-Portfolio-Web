import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const PlanetsThree = () => {
  const mountRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    const sunGeo = new THREE.SphereGeometry(4, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    scene.add(sun);

    const earthOrbit = new THREE.Object3D();
    scene.add(earthOrbit);

    const earthGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const earthMat = new THREE.MeshStandardMaterial({ color: 0x2277ff });
    const earth = new THREE.Mesh(earthGeo, earthMat);
    earth.position.x = 10;
    earthOrbit.add(earth);

    const light = new THREE.PointLight(0xffffff, 1.5);
    scene.add(light);

    function animate() {
      requestAnimationFrame(animate);
      sun.rotation.y += 0.002;
      earth.rotation.y += 0.01;
      earthOrbit.rotation.y += 0.004;
      renderer.render(scene, camera);
    }
    animate();

    const onResize = () => {
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default PlanetsThree;
