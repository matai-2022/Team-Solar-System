import React, { Suspense, useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { DoubleSide } from 'three'

function SolarSystem() {
  const sunMap = useLoader(TextureLoader, '/images/sun.jpg')
  const earthMap = useLoader(TextureLoader, '/images/earth.jpg')
  const mercuryMap = useLoader(TextureLoader, '/images/mercury.jpg')
  const venusMap = useLoader(TextureLoader, '/images/venus.jpg')
  const marsMap = useLoader(TextureLoader, '/images/mars.jpg')
  const jupiterMap = useLoader(TextureLoader, '/images/jupiter.jpg')
  const saturnMap = useLoader(TextureLoader, '/images/saturn.jpg')
  const uranusMap = useLoader(TextureLoader, '/images/uranus.jpg')
  const neptuneMap = useLoader(TextureLoader, '/images/neptune.jpg')

  const sunMesh = useRef()
  const mercuryMesh = useRef()
  const venusMesh = useRef()
  const earthMesh = useRef()
  const marsMesh = useRef()
  const jupiterMesh = useRef()
  const saturnMesh = useRef()
  const ringMesh = useRef()
  const uranusMesh = useRef()
  const neptuneMesh = useRef()
  const plutoMesh = useRef()

  //const [earthMesh, saturnMesh] = useRef()

  useFrame(() => {
    sunMesh.current.rotation.y += 0.01 / 27
    mercuryMesh.current.rotation.y += 0.01 / 58.8
    venusMesh.current.rotation.y -= 0.01 / 244

    earthMesh.current.rotation.y += 0.01
    marsMesh.current.rotation.y += 0.01 / 1.03
    jupiterMesh.current.rotation.y += 0.01 / 0.41
    saturnMesh.current.rotation.y += 0.01 / 0.44
    ringMesh.current.rotation.x = 1.56
    uranusMesh.current.rotation.y -= 0.01 / 0.72
    neptuneMesh.current.rotation.y += 0.01 / 0.67
    plutoMesh.current.rotation.y += 0.01 / 6.41
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight intensity={1} position={[0, 0, 0]} />

      <mesh ref={sunMesh}>
        <sphereGeometry args={[1]} />
        <meshStandardMaterial map={sunMap} />
      </mesh>

      <mesh ref={mercuryMesh} position={[4, 0, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial map={mercuryMap} />
      </mesh>

      <mesh ref={venusMesh} position={[6, 0, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial map={venusMap} />
      </mesh>

      <mesh ref={earthMesh} position={[10, 0, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial map={earthMap} />
        {/* moon */}
        <mesh position={[1, 0, 0]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial color="#78D481" />
        </mesh>
      </mesh>

      <mesh ref={marsMesh} position={[13, 0, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial map={marsMap} />
      </mesh>

      <mesh ref={jupiterMesh} position={[15, 0, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial map={jupiterMap} />
      </mesh>

      <mesh ref={saturnMesh} position={[18, 0, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial map={saturnMap} />
        <mesh ref={ringMesh} position={[0, 0, 0]} angle={0.15}>
          <ringGeometry args={[0.6, 1.03, 32]} angle={0.15} />
          <meshStandardMaterial color="#78D481" side={DoubleSide} />
        </mesh>
      </mesh>

      <mesh ref={uranusMesh} position={[20, 0, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial map={uranusMap} />
      </mesh>

      <mesh ref={neptuneMesh} position={[22, 0, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial map={neptuneMap} />
      </mesh>
      <mesh ref={plutoMesh} position={[26, 0, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial colour="#78D481" />
      </mesh>
    </>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 20, 25], fov: 15 }}>
        <color attach="background" args={[0x000000]} />
        <Suspense fallback={null}>
          <SolarSystem />
        </Suspense>
        <OrbitControls />

        <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={90000} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade
          speed={1} // Faded dots (default=false)
        />
      </Canvas>
    </div>
  )

  //insert react router
}

export default App
