"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, RoundedBox, Html } from "@react-three/drei";
import * as THREE from "three";

function Laptop() {
  return (
    <group position={[0, -0.3, 0]}>
      <RoundedBox args={[2.2, 0.08, 1.4]} radius={0.02} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </RoundedBox>
      <group position={[0, 0.55, -0.65]} rotation={[-0.3, 0, 0]}>
        <RoundedBox args={[2.2, 1.4, 0.06]} radius={0.02}>
          <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.3} />
        </RoundedBox>
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[2, 1.2]} />
          <meshBasicMaterial color="#FF6B35" transparent opacity={0.15} />
        </mesh>
      </group>
    </group>
  );
}

function FloatingIcon({
  position,
  label,
  color,
  speed = 1,
}: {
  position: [number, number, number];
  label: string;
  color: string;
  speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <group position={position}>
        <mesh ref={ref}>
          <boxGeometry args={[0.35, 0.35, 0.05]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
        </mesh>
        <Html center distanceFactor={6} style={{ pointerEvents: "none" }}>
          <span className="text-[10px] font-bold text-white whitespace-nowrap drop-shadow-lg">
            {label}
          </span>
        </Html>
      </group>
    </Float>
  );
}

function CodeSnippet({ position, text }: { position: [number, number, number]; text: string }) {
  return (
    <Float speed={1.5} floatIntensity={0.5}>
      <group position={position}>
        <RoundedBox args={[0.8, 0.3, 0.02]} radius={0.02}>
          <meshStandardMaterial color="#1e293b" transparent opacity={0.8} />
        </RoundedBox>
        <Text
          position={[0, 0, 0.02]}
          fontSize={0.06}
          color="#1DD3B0"
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
}

function CoffeeMug() {
  return (
    <Float speed={2} floatIntensity={1}>
      <group position={[1.2, 0.5, 0.5]}>
        <mesh>
          <cylinderGeometry args={[0.12, 0.1, 0.25, 16]} />
          <meshStandardMaterial color="#78350f" />
        </mesh>
        <mesh position={[0.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.08, 0.02, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#78350f" />
        </mesh>
      </group>
    </Float>
  );
}

function Keyboard() {
  return (
    <mesh position={[0, 0.06, 0.3]}>
      <boxGeometry args={[1.8, 0.04, 0.6]} />
      <meshStandardMaterial color="#334155" />
    </mesh>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#FF6B35" />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#FFC857" />
      <spotLight position={[0, 5, 0]} intensity={0.8} angle={0.5} penumbra={1} color="#1DD3B0" />

      <group ref={groupRef}>
        <Laptop />
        <Keyboard />
        <CoffeeMug />

        <FloatingIcon position={[-1.5, 1.2, 0.5]} label="React" color="#61DAFB" />
        <FloatingIcon position={[1.5, 1.5, -0.3]} label="Node" color="#339933" />
        <FloatingIcon position={[-1.2, 0.8, -1]} label="AWS" color="#FF9900" />
        <FloatingIcon position={[1.8, 0.6, 0.8]} label="Docker" color="#2496ED" />
        <FloatingIcon position={[0.5, 1.8, 0.2]} label="Git" color="#F05032" />
        <FloatingIcon position={[-0.8, 1.6, -0.8]} label="VS Code" color="#007ACC" />

        <CodeSnippet position={[-1.8, 0.2, 0.8]} text="const app = () => {}" />
        <CodeSnippet position={[1.6, 1, 0.6]} text="npm run build" />
        <CodeSnippet position={[0, 2, -0.5]} text="export default App" />
      </group>
    </>
  );
}

export function DeveloperWorkspace() {
  return (
    <div className="relative h-[400px] w-full md:h-[500px] lg:h-[600px]">
      <div className="absolute inset-0 rounded-3xl glass overflow-hidden">
        <Canvas
          camera={{ position: [0, 1.5, 4], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-background/60 via-transparent to-transparent" />
    </div>
  );
}
