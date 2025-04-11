'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface PackagingEnvironmentProps {
  className?: string;
}

const PackagingEnvironment: React.FC<PackagingEnvironmentProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const boxesRef = useRef<THREE.Mesh[]>([]);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create multiple boxes
    const boxCount = 15;
    const boxes: THREE.Mesh[] = [];
    
    for (let i = 0; i < boxCount; i++) {
      const size = Math.random() * 2 + 1;
      const geometry = new THREE.BoxGeometry(size, size, size);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(
          Math.random() * 0.5 + 0.5,
          Math.random() * 0.5 + 0.5,
          Math.random() * 0.5 + 0.5
        ),
        transparent: true,
        opacity: 0.7,
        shininess: 100,
        specular: 0x444444,
      });
      
      const box = new THREE.Mesh(geometry, material);
      
      // Random position
      box.position.x = (Math.random() - 0.5) * 20;
      box.position.y = (Math.random() - 0.5) * 20;
      box.position.z = (Math.random() - 0.5) * 20;
      
      // Random rotation
      box.rotation.x = Math.random() * Math.PI;
      box.rotation.y = Math.random() * Math.PI;
      
      scene.add(box);
      boxes.push(box);
    }
    boxesRef.current = boxes;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.8);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controlsRef.current = controls;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate boxes
      boxesRef.current.forEach((box, index) => {
        box.rotation.x += 0.005 * (index % 3 === 0 ? 1 : -1);
        box.rotation.y += 0.005 * (index % 2 === 0 ? 1 : -1);
        
        // Floating motion
        box.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
      });

      if (controlsRef.current) {
        controlsRef.current.update();
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      boxesRef.current.forEach(box => {
        box.geometry.dispose();
        if (Array.isArray(box.material)) {
          box.material.forEach(material => material.dispose());
        } else {
          box.material.dispose();
        }
      });
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className={className} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />;
};

export default PackagingEnvironment; 