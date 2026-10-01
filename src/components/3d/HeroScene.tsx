import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { NeuralParticles } from './NeuralParticles';

interface HeroSceneProps {
  theme: 'dark' | 'light';
  isMobile?: boolean;
}

function WorkstationCore({ theme }: { theme: 'dark' | 'light' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouseX = state.pointer.x * 0.5;
    const mouseY = state.pointer.y * 0.5;

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2 + mouseX * 0.5;
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.2 - mouseY * 0.5;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.3;
      ringRef.current.rotation.z = t * 0.2;
    }

    if (coreRef.current) {
      const scale = 1 + Math.sin(t * 2) * 0.08;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  const isDark = theme === 'dark';

  return (
    <group position={[0, 0, 0]}>
      {/* Central Floating Glass Octahedron */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1.8, 0]} />
          <meshPhysicalMaterial
            roughness={0.1}
            transmission={0.9}
            thickness={1.2}
            ior={1.5}
            reflectivity={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
            color={isDark ? '#38bdf8' : '#ffffff'}
            emissive={isDark ? '#0284c7' : '#e0f2fe'}
            emissiveIntensity={isDark ? 0.2 : 0.1}
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      {/* Internal Glowing AI Nucleus */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color={isDark ? '#38bdf8' : '#2563eb'}
          emissive={isDark ? '#8b5cf6' : '#3b82f6'}
          emissiveIntensity={isDark ? 2.5 : 1.2}
          roughness={0.2}
        />
      </mesh>

      {/* Outer Orbiting Cyber Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.7, 0.03, 16, 100]} />
        <meshStandardMaterial
          color={isDark ? '#a78bfa' : '#3b82f6'}
          emissive={isDark ? '#8b5cf6' : '#60a5fa'}
          emissiveIntensity={isDark ? 1.5 : 0.6}
          wireframe
        />
      </mesh>

      {/* Floating Glass Code Panels */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1}>
        <mesh position={[-2.4, 1.2, -0.8]} rotation={[0.2, 0.4, -0.1]}>
          <planeGeometry args={[1.6, 1.0]} />
          <meshPhysicalMaterial
            transmission={0.85}
            roughness={0.2}
            thickness={0.5}
            color={isDark ? '#06b6d4' : '#ffffff'}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[2.5, -1.0, 0.5]} rotation={[-0.2, -0.3, 0.1]}>
          <boxGeometry args={[1.2, 0.8, 0.1]} />
          <meshPhysicalMaterial
            transmission={0.8}
            roughness={0.15}
            thickness={0.8}
            color={isDark ? '#8b5cf6' : '#dbeafe'}
            transparent
            opacity={0.75}
          />
        </mesh>
      </Float>
    </group>
  );
}

export function HeroScene({ theme, isMobile = false }: HeroSceneProps) {
  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Dynamic Studio Lighting based on theme */}
        <ambientLight intensity={isDark ? 0.6 : 1.2} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={isDark ? 1.5 : 2.5}
          color={isDark ? '#e0f2fe' : '#ffffff'}
        />
        <pointLight
          position={[-10, -10, -5]}
          intensity={isDark ? 2.0 : 1.0}
          color={isDark ? '#a78bfa' : '#3b82f6'}
        />
        <pointLight
          position={[0, 0, 5]}
          intensity={isDark ? 1.8 : 0.8}
          color={isDark ? '#38bdf8' : '#60a5fa'}
        />

        {/* 3D Neural Particles Cloud */}
        {!isMobile && <NeuralParticles theme={theme} count={isMobile ? 100 : 250} />}

        {/* Central Workstation Object */}
        <WorkstationCore theme={theme} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
