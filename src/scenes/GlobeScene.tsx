import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'
import type { JSX } from 'react'

/** Slowly rotating gold-tinted sphere (wireframe) to evoke a military ops globe */
function GoldGlobe(): JSX.Element {
    const mesh = useRef<THREE.Mesh>(null)
    useFrame((_, delta) => {
        if (mesh.current) {
            mesh.current.rotation.y += delta * 0.12
            mesh.current.rotation.x += delta * 0.04
        }
    })
    return (
        <mesh ref={mesh}>
            <sphereGeometry args={[1.8, 48, 48]} />
            <meshStandardMaterial color="#c8a84b" wireframe opacity={0.18} transparent />
        </mesh>
    )
}

/** Inner solid sphere for depth */
function CoreSphere(): JSX.Element {
    return (
        <mesh>
            <sphereGeometry args={[1.75, 32, 32]} />
            <meshStandardMaterial color="#1e2218" />
        </mesh>
    )
}

export default function GlobeScene(): JSX.Element {
    return (
        <Canvas style={{ height: '100vh' }} camera={{ position: [0, 0, 4.5] }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[8, 8, 8]} intensity={1.2} color="#c8a84b" />
            <Stars radius={120} depth={60} count={6000} factor={4} saturation={0} fade />
            <CoreSphere />
            <GoldGlobe />
        </Canvas>
    )
}