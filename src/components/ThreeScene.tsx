
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import LeafModel from './LeafModel';

const ThreeScene = () => {
  return (
    <div className="h-[300px] w-full">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <LeafModel position={[0, 0, 0]} scale={1.5} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
