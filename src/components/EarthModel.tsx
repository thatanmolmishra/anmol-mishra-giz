
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function EarthSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.1, 32, 32]} />
      <meshStandardMaterial
        color="#33C3F0"
        roughness={0.5}
        metalness={0.2}
        emissive="#18314F"
      />
    </mesh>
  );
}

function EarthClouds() {
  return (
    <mesh>
      <sphereGeometry args={[1.12, 32, 32]} />
      <meshStandardMaterial
        transparent
        opacity={0.35}
        color="#fff"
      />
    </mesh>
  );
}

function EarthAtmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.19, 32, 32]} />
      <meshBasicMaterial
        color="#81E6D9"
        transparent
        opacity={0.08}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

const EarthModel = () => (
  <div className="w-full h-72 bg-black rounded-lg overflow-hidden shadow-xl">
    <Canvas camera={{ position: [0, 0, 3.5], fov: 55 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 3, 5]} intensity={1.1} />
      <EarthSphere />
      <EarthClouds />
      <EarthAtmosphere />
      <Stars radius={8} depth={40} count={1150} factor={0.3} saturation={0.1} fade speed={2}/>
      <OrbitControls enablePan={false} autoRotate autoRotateSpeed={0.7} minDistance={2.2} maxDistance={5} />
    </Canvas>
  </div>
);

export default EarthModel;
