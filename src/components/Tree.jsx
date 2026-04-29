import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Tree() {
  const petals = useRef()

  useFrame(() => {
    if (!petals.current) return
    petals.current.children.forEach((p) => {
      p.position.y -= 0.01
      if (p.position.y < 0) p.position.y = 3
    })
  })

  return (
    <group>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 2]} />
        <meshStandardMaterial color="#4b2e2e" />
      </mesh>

      <mesh position={[0, 3, 0]}>
        <sphereGeometry args={[1.5]} />
        <meshStandardMaterial color="#ffc0cb" />
      </mesh>

      <group ref={petals}>
        {Array.from({ length: 20 }).map((_, i) => (
          <mesh key={i} position={[Math.random(), 2, Math.random()]}> 
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial color="#ff6b81" />
          </mesh>
        ))}
      </group>
    </group>
  )
}
