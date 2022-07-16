import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { DoubleSide } from 'three'

// createPlanet(
//'saturn',
// [18,0,0],
// [0.3],
// {x: 0, y: 0.01/0.44, z: 0}
// {x: 0.01 / 0.44, y: 0, z: 0 },
// {position:[0,0,0], angle: 0.15, args: [0.6, 1.03, 32], xRotation: 1.56, yRotation: 0, zRotation: 0})
export default function CreatePlanet({
  name,
  position,
  geometry,
  rotation,
  parentRotation,
  ring,
}) {
  console.log(name)
  const planetName = name.toLowerCase()
  const map = useLoader(TextureLoader, `images/${planetName}.png`)
  const ringMap =
    ring && useLoader(TextureLoader, `images/${planetName}-ring.png`)
  const parentMesh = useRef()
  const planetMesh = useRef()
  const ringMesh = useRef()

  useFrame(() => {
    parentRotation && (parentMesh.current.rotation.y += parentRotation.y)
    planetMesh.current.rotation.y += rotation.y
    ring && (ringMesh.current.rotation.x = ring.xRotation)
  })

  return (
    <>
      <mesh ref={parentMesh} position={[0, 0, 0]}>
        <mesh ref={planetMesh} position={position}>
          <sphereGeometry args={geometry} />
          <meshStandardMaterial map={map} />
          {ring && (
            <mesh ref={ringMesh} position={ring.position} angle={ring.angle}>
              <ringGeometry args={ring.args} angle={ring.angle} />
              <meshStandardMaterial map={ringMap} side={DoubleSide} />
            </mesh>
          )}
        </mesh>
      </mesh>
    </>
  )
}
