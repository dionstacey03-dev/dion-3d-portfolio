import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface JarvisCore3DProps {
  theme: 'dark' | 'light';
}

function JarvisOrb({ theme }: { theme: 'dark' | 'light' }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.4;
      const s = 1 + Math.sin(t * 3) * 0.05;
      coreRef.current.scale.set(s, s, s);
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.8;
      ring1Ref.current.rotation.y = t * 0.5;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.6;
      ring2Ref.current.rotation.z = t * 0.7;
    }
  });

  const isDark = theme === 'dark';

  return (
    <group>
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshPhysicalMaterial
            roughness={0.1}
            transmission={0.9}
            thickness={0.8}
            color={isDark ? '#38bdf8' : '#2563eb'}
            emissive={isDark ? '#0284c7' : '#3b82f6'}
            emissiveIntensity={isDark ? 0.8 : 0.4}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Outer Cyan Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.7, 0.02, 16, 80]} />
        <meshStandardMaterial
          color={isDark ? '#38bdf8' : '#0284c7'}
          emissive={isDark ? '#38bdf8' : '#2563eb'}
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Violet Ring */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.0, 0.015, 16, 80]} />
        <meshStandardMaterial
          color={isDark ? '#a78bfa' : '#7c3aed'}
          emissive={isDark ? '#8b5cf6' : '#6d28d9'}
          emissiveIntensity={1.2}
        />
      </mesh>
    </group>
  );
}

export function JarvisCore3D({ theme }: JarvisCore3DProps) {
  const isDark = theme === 'dark';
  return (
    <div className="w-full h-full min-h-[220px] relative pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={isDark ? 0.8 : 1.2} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color={isDark ? '#38bdf8' : '#2563eb'} />
        <pointLight position={[-5, -5, -5]} intensity={1.2} color={isDark ? '#a78bfa' : '#7c3aed'} />
        <JarvisOrb theme={theme} />
      </Canvas>
    </div>
  );
}
