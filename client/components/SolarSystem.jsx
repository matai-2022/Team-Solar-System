import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Billboard, Text } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { DoubleSide } from 'three'

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
  const uranusMap = useLoader(TextureLoader, '/server/public/images/uranus.jpg')
  const neptuneMap = useLoader(
    TextureLoader,
    '/server/public/images/neptune.jpg'
  )

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

  //const [clicked, click] = useState(false)
  const [hovered, hover] = useState(false)

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
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight intensity={1} position={[0, 0, 0]} />

      <mesh
        ref={sunMesh}
        //scale={clicked ? 1.5 : 1}
        //onClick={() => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <sphereGeometry args={[1]} />
        <meshStandardMaterial map={sunMap} />
        <Billboard
          follow={true}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[0, 2, 0]}
        >
          <Text fontSize={hovered ? [1.001] : [0.001]} color={'white'}>
            Sun
          </Text>
        </Billboard>
      </mesh>

      <mesh ref={pin1} position={[0, 0, 0]}>
        <mesh
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)}
          ref={mercuryMesh}
          position={[4, 0, 0]}
        >
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial map={mercuryMap} />
          <Billboard
            follow={true}
            lockX={false}
            lockY={false}
            lockZ={false} // Lock the rotation on the z axis (default=false)
            position={[0, 2, 0]}
          >
            <Text fontSize={hovered ? [1.001] : [0.001]} color={'white'}>
              Mercury
            </Text>
          </Billboard>
        </mesh>
      </mesh>

      <mesh ref={pin2} position={[0, 0, 0]}>
        <mesh ref={venusMesh} position={[6, 0, 0]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial map={venusMap} />
        </mesh>
      </mesh>

      <mesh ref={pin3} position={[0, 0, 0]}>
        <mesh ref={earthMesh} position={[10, 0, 0]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial map={earthMap} />
          {/* moon */}
          <mesh position={[1, 0, 0]}>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial color="#78D481" />
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

      <mesh ref={pin6} position={[0, 0, 0]}>
        <mesh ref={saturnMesh} position={[18, 0, 0]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial map={saturnMap} />
          <mesh ref={ringMesh} position={[0, 0, 0]} angle={0.15}>
            <ringGeometry args={[0.6, 1.03, 32]} angle={0.15} />
            <meshStandardMaterial color="#78D481" side={DoubleSide} />
          </mesh>
        </mesh>
      </mesh>

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
          <meshStandardMaterial colour="#78D481" />
        </mesh>
      </mesh>
    </>
  )
}
export default function SolarSystem() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 20, 25], fov: 15 }}>
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
