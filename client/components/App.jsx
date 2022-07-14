import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
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
      
      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={99000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade speed={2} // Faded dots (default=false)
      />

    </Canvas>
    </div>
  )

  //insert react router
}

export default App

