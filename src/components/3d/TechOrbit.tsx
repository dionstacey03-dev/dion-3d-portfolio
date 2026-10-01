import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

interface TechOrbitProps {
  theme: 'dark' | 'light';
}

const TECH_ITEMS = [
  'Python', 'React', 'FastAPI', 'Ollama', 
  'Llama 3', 'MySQL', 'JavaScript', 'Git', 
  'Java', 'Vite', 'Tailwind', 'LLaVA'
];

function OrbitingCapsules({ theme }: { theme: 'dark' | 'light' }) {
  const groupRef = useRef<THREE.Group>(null);
  const isDark = theme === 'dark';

  const capsules = useMemo(() => {
    return TECH_ITEMS.map((tech, index) => {
      const angle = (index / TECH_ITEMS.length) * Math.PI * 2;
      const radius = 3.2 + (index % 2) * 0.6;
      const y = Math.sin(angle * 2) * 0.8;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return { tech, position: [x, y, z] as [number, number, number] };
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {capsules.map((item, idx) => (
        <Float key={idx} speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
          <group position={item.position}>
            <mesh>
              <capsuleGeometry args={[0.3, 0.9, 12, 24]} />
              <meshPhysicalMaterial
                roughness={0.15}
                transmission={0.85}
                thickness={0.5}
                color={isDark ? '#0284c7' : '#ffffff'}
                emissive={isDark ? '#38bdf8' : '#3b82f6'}
                emissiveIntensity={isDark ? 0.3 : 0.1}
                transparent
                opacity={0.8}
              />
            </mesh>
            <Text
              position={[0, 0, 0.35]}
              fontSize={0.22}
              color={isDark ? '#ffffff' : '#0f172a'}
              anchorX="center"
              anchorY="middle"
              font="https://fonts.gstatic.com/s/plusjakartasans/v8/L0x5DF4xlVBS-33EZeH_5l3-C0o._H--009N3zZtC_M.woff"
            >
              {item.tech}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
}

export function TechOrbit({ theme }: TechOrbitProps) {
  const isDark = theme === 'dark';
  return (
    <div className="w-full h-[360px] relative rounded-2xl overflow-hidden glass-panel border border-[var(--glass-border)]">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={isDark ? 0.8 : 1.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color={isDark ? '#38bdf8' : '#2563eb'} />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color={isDark ? '#a78bfa' : '#7c3aed'} />
        <OrbitingCapsules theme={theme} />
      </Canvas>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-none text-xs font-mono text-[var(--text-muted)] tracking-wider">
        INTERACTIVE 3D SKILL CONSTELLATION
      </div>
    </div>
  );
}
