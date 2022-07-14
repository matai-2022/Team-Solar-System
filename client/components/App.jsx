import React, { Suspense } from 'react'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function SolarSystem() {
  const sunMap = useLoader(TextureLoader, '/images/sun.jpg')
  const earthMap = useLoader(TextureLoader, '/images/earth.jpg')
  return (
    <>
      <ambientLight intensity ={0.5}/>
      <pointLight intensity={1} position ={[0,0,0]}/>

      <mesh>
        <sphereGeometry args={[1]} />
        <meshStandardMaterial map={sunMap} />
      </mesh>

      <mesh position={[6, 0, 0]}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial map ={earthMap} />
      </mesh>
    </>
  )
}

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
    <Canvas  camera={{ position: [0, 20, 25], fov: 15 }}>
    <color attach="background" args={[0x000000]} />
      <Suspense fallback={null}>
        <SolarSystem />
      </Suspense>
      <OrbitControls/>
    </Canvas>
    </div>
  )

  //insert react router
}

export default App

