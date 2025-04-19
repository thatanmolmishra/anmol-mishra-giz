
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// This is a simplified leaf model since we don't have an actual GLTF file
const LeafModel = (props: any) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  // Animate the leaf
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      position={props.position || [0, 0, 0]}
      scale={props.scale || 1}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#4ade80" roughness={0.5} metalness={0.2} />
    </mesh>
  );
};

export default LeafModel;
