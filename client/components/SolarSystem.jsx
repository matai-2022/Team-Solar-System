import React, { Suspense, useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { DoubleSide } from 'three'
import CreatePlanet from './CreatePlanet'

function SolarSystemMaker() {
  const earthMap = useLoader(TextureLoader, '/images/earth.png')
  const marsMap = useLoader(TextureLoader, '/images/mars.png')
  const jupiterMap = useLoader(TextureLoader, '/images/jupiter.png')
  const saturnMap = useLoader(TextureLoader, '/images/saturn.png')
  const uranusMap = useLoader(TextureLoader, '/images/uranus2.png')
  const neptuneMap = useLoader(TextureLoader, '/images/neptune.png')
  const moonMap = useLoader(TextureLoader, '/images/moon.png')
  const ringMap = useLoader(TextureLoader, '/images/saturn-ring.png')
  const plutoMap = useLoader(TextureLoader, '/images/pluto.png')

  const earthMesh = useRef()
  const pin3 = useRef()
  const marsMesh = useRef()
  const pin4 = useRef()
  const jupiterMesh = useRef()
  const pin5 = useRef()
  const saturnMesh = useRef()
  const pin6 = useRef()
  const ringMesh = useRef()
  const uranusMesh = useRef()
  const pin7 = useRef()
  const neptuneMesh = useRef()
  const pin8 = useRef()
  const plutoMesh = useRef()
  const pin9 = useRef()

  useFrame(() => {
    // sunMesh.current.rotation.y += 0.01 / 27
    // mercuryMesh.current.rotation.y += 0.01 / 58.8
    // pin1.current.rotation.y += 0.001 * 4.2
    // venusMesh.current.rotation.y -= 0.01 / 244
    // pin2.current.rotation.y += 0.001 * 1.6
    earthMesh.current.rotation.y += 0.01
    pin3.current.rotation.y += 0.001
    marsMesh.current.rotation.y += 0.01 / 1.03
    pin4.current.rotation.y += 0.001 * 0.53
    jupiterMesh.current.rotation.y += 0.01 / 0.41
    pin5.current.rotation.y += 0.001 * 0.08
    // saturnMesh.current.rotation.y += 0.01 / 0.44
    pin6.current.rotation.y += 0.001 * 0.03
    ringMesh.current.rotation.x = 1.56

    uranusMesh.current.rotation.y -= 0.01 / 0.72
    pin7.current.rotation.y += 0.001 * 0.01
    neptuneMesh.current.rotation.y += 0.01 / 0.67
    pin8.current.rotation.y += 0.001 * 0.006
    plutoMesh.current.rotation.y += 0.01 / 6.41
    pin9.current.rotation.y += 0.001 / 248
  })

  const sun = (
    <CreatePlanet
      name={'sun'}
      position={[0, 0, 0]}
      geometry={[1]}
      rotation={{ y: 0.01 / 27 }}
    />
  )
  const mercury = (
    <CreatePlanet
      name={'mercury'}
      position={[4, 0, 0]}
      geometry={[0.3]}
      rotation={{ y: 0.01 / 58.8 }}
      parentRotation={{ y: 0.001 * 4.2 }}
    />
  )

  const venus = (
    <CreatePlanet
      name={'venus'}
      position={[6, 0, 0]}
      geometry={[0.3]}
      rotation={{ y: -0.01 / 244 }}
      parentRotation={{ y: 0.001 * 1.6 }}
    />
  )

  const saturn = (
    <CreatePlanet
      name={'saturn'}
      position={[18, 0, 0]}
      geometry={[0.3]}
      rotation={{ y: 0.01 / 0.44 }}
      parentRotation={{ x: 0.01 / 0.44 }}
      ring={{
        position: [0, 0, 0],
        angle: 0.15,
        args: [0.6, 1.03, 32],
        xRotation: 1.56,
      }}
    />
  )

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight intensity={1} position={[0, 0, 0]} />

      {sun}
      {mercury}
      {venus}

      <mesh ref={pin3} position={[0, 0, 0]}>
        <mesh ref={earthMesh} position={[10, 0, 0]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial map={earthMap} />
          {/* moon */}
          <mesh position={[1, 0, 0]}>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial map={moonMap} />
          </mesh>
        </mesh>
      </mesh>

      <mesh ref={pin4} position={[0, 0, 0]}>
        <mesh ref={marsMesh} position={[13, 0, 0]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial map={marsMap} />
        </mesh>
      </mesh>

      <mesh ref={pin5} position={[0, 0, 0]}>
        <mesh ref={jupiterMesh} position={[15, 0, 0]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial map={jupiterMap} />
        </mesh>
      </mesh>

      {saturn}
      {/* <mesh ref={pin6} position={[0, 0, 0]}>
        <mesh ref={saturnMesh} position={[18, 0, 0]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial map={saturnMap} />
          <mesh ref={ringMesh} position={[0, 0, 0]} angle={0.15}>
            <ringGeometry args={[0.6, 1.03, 32]} angle={0.15} />
            <meshStandardMaterial map={ringMap} side={DoubleSide} />
          </mesh>
        </mesh>
      </mesh> */}

      <mesh ref={pin7} position={[0, 0, 0]}>
        <mesh ref={uranusMesh} position={[20, 0, 0]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial map={uranusMap} />
        </mesh>
      </mesh>

      <mesh ref={pin8} position={[0, 0, 0]}>
        <mesh ref={neptuneMesh} position={[22, 0, 0]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial map={neptuneMap} />
        </mesh>
      </mesh>

      <mesh ref={pin9} position={[0, 0, 0]}>
        <mesh ref={plutoMesh} position={[26, 0, 0]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial map={plutoMap} />
        </mesh>
      </mesh>
    </>
  )
}
export default function SolarSystem() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [25, 5, 25], fov: 15 }}>
        <color attach="background" args={[0x000000]} />
        <Suspense fallback={null}>
          <SolarSystemMaker />
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
}
