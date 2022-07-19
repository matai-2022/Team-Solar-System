import { Billboard } from '@react-three/drei'
import React from 'react'

export default function PlanetMEsh() {
  return (
    <mesh ref={pin3} position={[0, 0, 0]} >
    <Billboard
      follow={false}
      lockX={false}
      lockY={false}
      lockZ={false} // Lock the rotation on the z axis (default=false)
      position={[4.7, 1, 0]}
    >
      <Text fontSize={hovering ? [0.2] : [0.001]} color={'white'}>
        Earth
      </Text>
    </Billboard>
    <mesh
      ref={earthMesh}
      position={[4.7, 0, 0]}
      onClick={() => {
        dispatch(setPause(planetMesh === earthMesh ? false : true))
        dispatch(setPlanet(planetMesh !== earthMesh ? 'earth' : ''))
      }}
      onPointerOver={() => setHovering(hovering === true ? false : true)}
    >
      <sphereGeometry args={[0.095]} />
      <meshStandardMaterial map={earthMap} />
      {/* moon */}
      <mesh position={[0.2, 0, 0]}>
        <sphereGeometry args={[0.02]} />
        <meshStandardMaterial map={moonMap} />
      </mesh>
    </mesh>
  </mesh>
  )
}