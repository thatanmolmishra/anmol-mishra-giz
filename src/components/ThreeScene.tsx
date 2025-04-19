
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const EarthModel = () => {
  return (
    <Sphere args={[1, 32, 32]}>
      <meshStandardMaterial 
        color="#4ade80"
        metalness={0.4}
        roughness={0.7}
        normalScale={new THREE.Vector2(0.15, 0.15)}
      />
    </Sphere>
  );
};

const ThreeScene = () => {
  return (
    <div className="h-[300px] w-full">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <EarthModel />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
