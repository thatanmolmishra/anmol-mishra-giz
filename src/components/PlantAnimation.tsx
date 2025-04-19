
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

function PlantModel() {
  // Using a simple 3D model for the plant
  return (
    <group>
      {/* Plant stem */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 2, 16]} />
        <meshStandardMaterial color="#2e7d32" />
      </mesh>
      
      {/* Plant leaves */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
        <coneGeometry args={[0.5, 1, 8]} />
        <meshStandardMaterial color="#4caf50" />
      </mesh>
      
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, Math.PI / 6]}>
        <coneGeometry args={[0.5, 1, 8]} />
        <meshStandardMaterial color="#4caf50" />
      </mesh>
      
      {/* Person silhouette */}
      <group position={[0.8, -0.5, 0]}>
        {/* Head */}
        <mesh position={[0, 1.7, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#ffb74d" />
        </mesh>
        
        {/* Body */}
        <mesh position={[0, 1, 0]}>
          <capsuleGeometry args={[0.2, 1, 8, 8]} />
          <meshStandardMaterial color="#f06292" />
        </mesh>
        
        {/* Arms */}
        <mesh position={[0.3, 1.2, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <capsuleGeometry args={[0.05, 0.4, 8, 8]} />
          <meshStandardMaterial color="#f06292" />
        </mesh>
        
        {/* Legs */}
        <mesh position={[0.1, 0.3, 0]} rotation={[0, 0, Math.PI / 16]}>
          <capsuleGeometry args={[0.07, 0.5, 8, 8]} />
          <meshStandardMaterial color="#5c6bc0" />
        </mesh>
        
        <mesh position={[-0.1, 0.3, 0]} rotation={[0, 0, -Math.PI / 16]}>
          <capsuleGeometry args={[0.07, 0.5, 8, 8]} />
          <meshStandardMaterial color="#5c6bc0" />
        </mesh>
      </group>
    </group>
  );
}

const PlantAnimation = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[300px] w-full"
    >
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <PlantModel />
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <Environment preset="park" />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default PlantAnimation;
