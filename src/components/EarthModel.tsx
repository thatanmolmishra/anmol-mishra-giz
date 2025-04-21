
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState } from "react";

function EarthSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.3, 64, 64]} />
      <meshStandardMaterial
        color="#33C3F0"
        roughness={0.6}
        metalness={0.4}
        emissive="#18314F"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function EarthClouds() {
  return (
    <mesh>
      <sphereGeometry args={[1.32, 64, 64]} />
      <meshStandardMaterial
        transparent
        opacity={0.4}
        color="#ffffff"
      />
    </mesh>
  );
}

function EarthAtmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.4, 64, 64]} />
      <meshBasicMaterial
        color="#81E6D9"
        transparent
        opacity={0.1}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

const EarthModel = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-72 bg-gradient-to-b from-black to-blue-900 rounded-lg overflow-hidden shadow-xl flex items-center justify-center">
        <p className="text-white text-opacity-80">Loading Earth Model...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-72 bg-gradient-to-b from-black to-blue-900 rounded-lg overflow-hidden shadow-xl select-none">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
        <EarthSphere />
        <EarthClouds />
        <EarthAtmosphere />
        <Stars radius={10} depth={50} count={1500} factor={0.5} saturation={0.5} fade speed={2}/>
        <OrbitControls
          enablePan={false}
          minDistance={2.2}
          maxDistance={5}
          enableZoom={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          enableDamping={true}
          dampingFactor={0.12}
          rotateSpeed={1.2}
        />
      </Canvas>
    </div>
  );
};

export default EarthModel;
