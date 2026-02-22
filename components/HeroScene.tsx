'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleField({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
    const pointsRef = useRef<THREE.Points>(null!);

    const { geometry, material } = useMemo(() => {
        const count = 3500;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const r = 2 + Math.random() * 3.5;

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

            const brightness = 0.4 + Math.random() * 0.6;
            colors[i * 3] = 0;
            colors[i * 3 + 1] = brightness * 0.83;
            colors[i * 3 + 2] = brightness;
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
            size: 0.018,
            vertexColors: true,
            transparent: true,
            opacity: 0.65,
            sizeAttenuation: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        });

        return { geometry: geo, material: mat };
    }, []);

    useFrame((state, delta) => {
        const pts = pointsRef.current;
        if (!pts) return;
        const t = state.clock.getElapsedTime();

        pts.rotation.y += delta * 0.04;
        pts.rotation.x = Math.sin(t * 0.05) * 0.08;

        state.camera.position.x += (mouse.current.x * 0.9 - state.camera.position.x) * 0.035;
        state.camera.position.y += (-mouse.current.y * 0.55 - state.camera.position.y) * 0.035;
        state.camera.lookAt(0, 0, 0);
    });

    return <points ref={pointsRef} geometry={geometry} material={material} />;
}

function WireMesh() {
    const meshRef = useRef<THREE.Mesh>(null!);

    const material = useMemo(
        () =>
            new THREE.MeshBasicMaterial({
                color: '#00d4ff',
                wireframe: true,
                transparent: true,
                opacity: 0.07,
            }),
        []
    );

    useFrame((_state, delta) => {
        const m = meshRef.current;
        if (!m) return;
        m.rotation.y += delta * 0.06;
        m.rotation.z += delta * 0.025;
    });

    return (
        <mesh ref={meshRef} material={material}>
            <icosahedronGeometry args={[1.4, 1]} />
        </mesh>
    );
}

export default function HeroScene() {
    const mouseNorm = useRef({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        mouseNorm.current = {
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: (e.clientY / window.innerHeight) * 2 - 1,
        };
    };

    return (
        <div className="hero-canvas-container" onMouseMove={handleMouseMove}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
                dpr={[1, 1.5]}
            >
                <ParticleField mouse={mouseNorm} />
                <WireMesh />
            </Canvas>
        </div>
    );
}
