import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Artwork({ project, onFocus, onOpen }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      const target = hovered ? 1.1 : 1
      ref.current.scale.lerp({ x: target, y: target, z: target }, 0.1)
    }
  })

  return (
    <mesh
      ref={ref}
      position={project.position}
      onClick={() => {
        if (onFocus) {
          onFocus([project.position[0], project.position[1], project.position[2] + 2])
        }
        setTimeout(() => onOpen(), 600)
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeGeometry args={[2, 2.5]} />
      <meshStandardMaterial color={hovered ? '#ff2b2b' : '#000'} />
    </mesh>
  )
}
