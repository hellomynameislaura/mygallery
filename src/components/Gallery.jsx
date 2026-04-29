import { Canvas } from '@react-three/fiber'
import { PointerLockControls, Reflector } from '@react-three/drei'
import { useState, useEffect } from 'react'
import Artwork from './Artwork'
import Tree from './Tree'
import GlassDoor from './GlassDoor'
import { projects } from '../data/projects'

export default function Gallery({ onOpen }) {
  const [doorOpen, setDoorOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDoorOpen(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Canvas camera={{ position: [0, 1.7, 5] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} />

      <Reflector args={[30, 30]} rotation={[-Math.PI / 2, 0, 0]} />

      {projects.map((p, i) => (
        <Artwork key={p.id} project={p} onFocus={() => {}} onOpen={() => onOpen(i)} />
      ))}

      <Tree />
      <GlassDoor open={doorOpen} />

      <PointerLockControls />
    </Canvas>
  )
}
