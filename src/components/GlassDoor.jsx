import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function GlassDoor({ open }) {
  const left = useRef()
  const right = useRef()

  useFrame(() => {
    if (!open || !left.current || !right.current) return
    left.current.rotation.y += 0.02
    right.current.rotation.y -= 0.02
  })

  return (
    <group position={[0, 1.5, 2]}>
      <mesh ref={left} position={[-1, 0, 0]}>
        <boxGeometry args={[1, 3, 0.05]} />
        <meshPhysicalMaterial transmission={1} transparent opacity={0.2} />
      </mesh>

      <mesh ref={right} position={[1, 0, 0]}>
        <boxGeometry args={[1, 3, 0.05]} />
        <meshPhysicalMaterial transmission={1} transparent opacity={0.2} />
      </mesh>
    </group>
  )
}
