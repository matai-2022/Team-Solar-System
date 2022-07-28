import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useFrame } from '@react-three/fiber'
import { selectPlanet } from '../slices/planet'

export default function CreateOrbitLines(planetName, args) {
  const orbitLineMesh = useRef()
  const planet = useSelector(selectPlanet)

  useFrame(() => {
    orbitLineMesh.current.rotation.x = 1.569
  })

  return (
    <>
      <mesh ref={orbitLineMesh} position={[0, 0, 0]}>
        <torusGeometry args={args} />
        <meshStandardMaterial
          color={planet === planetName ? '#39FF14' : 'white'}
        />
      </mesh>
    </>
  )
}
