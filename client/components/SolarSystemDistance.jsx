import React, { Suspense, useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { DoubleSide } from 'three'
import Navbar from './Navbar'

function SolarSystemMaker() {
  const sunMap = useLoader(TextureLoader, '/server/public/images/sun.jpg')
  const earthMap = useLoader(TextureLoader, '/server/public/images/earth.jpg')
  const mercuryMap = useLoader(
    TextureLoader,
    '/server/public/images/mercury.jpg'
  )
  const venusMap = useLoader(TextureLoader, '/server/public/images/venus.jpg')
  const marsMap = useLoader(TextureLoader, '/server/public/images/mars.jpg')
  const jupiterMap = useLoader(
    TextureLoader,
    '/server/public/images/jupiter.jpg'
  )
  const saturnMap = useLoader(TextureLoader, '/server/public/images/saturn.jpg')
  const uranusMap = useLoader(
    TextureLoader,
    '/server/public/images/uranus2.jpg'
  )
  const neptuneMap = useLoader(
    TextureLoader,
    '/server/public/images/neptune.jpg'
  )
  const moonMap = useLoader(TextureLoader, '/server/public/images/moon.jpg')
  const ringMap = useLoader(TextureLoader, '/server/public/images/ring2.png')
  const plutoMap = useLoader(TextureLoader, '/server/public/images/pluto.jpg')

  const sunMesh = useRef()
  const mercuryMesh = useRef()
  const pin1 = useRef()
  const venusMesh = useRef()
  const pin2 = useRef()
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

  const ringmercuryMesh = useRef()
  const ringvenusMesh = useRef()
  const ringearthMesh = useRef()
  const ringmarsMesh = useRef()
  const ringjupiterMesh = useRef()
  const ringsaturnMesh = useRef()
  const ringuranusMesh = useRef()
  const ringneptuneMesh = useRef()
  const ringplutoMesh = useRef()

  useFrame(() => {
    sunMesh.current.rotation.y += 0.01 / 27
    mercuryMesh.current.rotation.y += 0.01 / 58.8
    pin1.current.rotation.y += 0.001 * 4.2
    venusMesh.current.rotation.y -= 0.01 / 244
    pin2.current.rotation.y += 0.001 * 1.6
    earthMesh.current.rotation.y += 0.01
    pin3.current.rotation.y += 0.001
    marsMesh.current.rotation.y += 0.01 / 1.03
    pin4.current.rotation.y += 0.001 * 0.53
    jupiterMesh.current.rotation.y += 0.01 / 0.41
    pin5.current.rotation.y += 0.001 * 0.08
    saturnMesh.current.rotation.y += 0.01 / 0.44
    pin6.current.rotation.y += 0.001 * 0.03
    ringMesh.current.rotation.x = 1.56

    uranusMesh.current.rotation.y -= 0.01 / 0.72
    pin7.current.rotation.y += 0.001 * 0.01
    neptuneMesh.current.rotation.y += 0.01 / 0.67
    pin8.current.rotation.y += 0.001 * 0.006
    plutoMesh.current.rotation.y += 0.01 / 6.41
    pin9.current.rotation.y += 0.001 / 248

    ringmercuryMesh.current.rotation.x = 1.569
    ringvenusMesh.current.rotation.x = 1.569
    ringearthMesh.current.rotation.x = 1.569
    ringmarsMesh.current.rotation.x = 1.569
    ringjupiterMesh.current.rotation.x = 1.569
    ringsaturnMesh.current.rotation.x = 1.569
    ringuranusMesh.current.rotation.x = 1.569
    ringneptuneMesh.current.rotation.x = 1.569
    ringplutoMesh.current.rotation.x = 1.569
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight intensity={10} position={[0, 0, 0]} />

      {/* Sun */}
      <mesh ref={sunMesh}>
        <sphereGeometry args={[11]} />
        <meshStandardMaterial map={sunMap} />

        <mesh ref={ringmercuryMesh} position={[0, 0, 0]}>
          <torusGeometry args={[419.95, 0.5, 30, 100]} />
          <meshStandardMaterial color={'white'} />
        </mesh>
        <mesh ref={ringvenusMesh} position={[0, 0, 0]}>
          <torusGeometry args={[803.91, 0.5, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={ringearthMesh} position={[0, 0, 0]}>
          <torusGeometry args={[1115.88, 0.5, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={ringmarsMesh} position={[0, 0, 0]}>
          <torusGeometry args={[1703, 0.5, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={ringjupiterMesh} position={[0, 0, 0]}>
          <torusGeometry args={[5807, 0.5, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={ringsaturnMesh} position={[0, 0, 0]}>
          <torusGeometry args={[10666, 0.5, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={ringuranusMesh} position={[0, 0, 0]}>
          <torusGeometry args={[21477, 0.5, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={ringneptuneMesh} position={[0, 0, 0]}>
          <torusGeometry args={[34556, 0.5, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={ringplutoMesh} position={[0, 0, 0]}>
          <torusGeometry args={[44035, 0.5, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </mesh>

      {/* Mercury */}
      <mesh ref={pin1} position={[0, 0, 0]}>
        <mesh ref={mercuryMesh} position={[419.95, 0, 0]}>
          <sphereGeometry args={[0.04]} />
          <meshStandardMaterial map={mercuryMap} />
        </mesh>
      </mesh>

      {/* Venus */}
      <mesh ref={pin2} position={[0, 0, 0]}>
        <mesh ref={venusMesh} position={[803.91, 0, 0]}>
          <sphereGeometry args={[0.09]} />
          <meshStandardMaterial map={venusMap} />
        </mesh>
      </mesh>

      {/* Earth */}
      <mesh ref={pin3} position={[0, 0, 0]}>
        <mesh ref={earthMesh} position={[1115.88, 0, 0]}>
          <sphereGeometry args={[0.095]} />
          <meshStandardMaterial map={earthMap} />
          {/* moon */}
          <mesh position={[0.2, 0, 0]}>
            <sphereGeometry args={[0.02]} />
            <meshStandardMaterial map={moonMap} />
          </mesh>
        </mesh>
      </mesh>

      {/* Mars */}
      <mesh ref={pin4} position={[0, 0, 0]}>
        <mesh ref={marsMesh} position={[1703, 0, 0]}>
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial map={marsMap} />
        </mesh>
      </mesh>

      {/* Jupiter */}
      <mesh ref={pin5} position={[0, 0, 0]}>
        <mesh ref={jupiterMesh} position={[5807, 0, 0]}>
          <sphereGeometry args={[1.0]} />
          <meshStandardMaterial map={jupiterMap} />
        </mesh>
      </mesh>

      {/* Saturn */}
      <mesh ref={pin6} position={[0, 0, 0]}>
        <mesh ref={saturnMesh} position={[10, 666, 0, 0]}>
          <sphereGeometry args={[0.85]} />
          <meshStandardMaterial map={saturnMap} />
          <mesh ref={ringMesh} position={[0, 0, 0]} angle={0.15}>
            <ringGeometry args={[1.5, 1.0, 32]} angle={0.15} />
            <meshStandardMaterial map={ringMap} side={DoubleSide} />
          </mesh>
        </mesh>
      </mesh>

      {/* Uranus */}
      <mesh ref={pin7} position={[0, 0, 0]}>
        <mesh ref={uranusMesh} position={[21477, 0, 0]}>
          <sphereGeometry args={[0.38]} />
          <meshStandardMaterial map={uranusMap} />
        </mesh>
      </mesh>

      {/* Neptune */}
      <mesh ref={pin8} position={[0, 0, 0]}>
        <mesh ref={neptuneMesh} position={[34556, 0, 0]}>
          <sphereGeometry args={[0.32]} />
          <meshStandardMaterial map={neptuneMap} />
        </mesh>
      </mesh>

      {/* Pluto */}
      <mesh ref={pin9} position={[0, 0, 0]}>
        <mesh ref={plutoMesh} position={[44035, 0, 0]}>
          <sphereGeometry args={[0.025]} />
          <meshStandardMaterial map={plutoMap} />
        </mesh>
      </mesh>
    </>
  )
}
export default function SolarSystem() {
  return (
    <div
      className="flex flex-row bg-black"
      // style={{ width: '100vw', height: '100vh' }}
    >
      <Navbar />
      <div
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <Canvas
          camera={{ position: [1000, 4, 25], fov: 23, near: 0.1, far: 50000 }}
        >
          <color attach="background" args={[0x000000]} />
          <Suspense fallback={null}>
            <SolarSystemMaker />
          </Suspense>
          <OrbitControls />

          <Stars
            radius={50000} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={500000} // Amount of stars (default=5000)
            factor={4} // Size factor (default=4)
            saturation={0} // Saturation 0-1 (default=0)
            fade
            speed={1} // Faded dots (default=false)
          />
        </Canvas>
      </div>
    </div>
  )
}
