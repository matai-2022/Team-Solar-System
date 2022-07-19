import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Text, Billboard } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { DoubleSide, Vector3 } from 'three'
import Navbar from './Navbar'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { selectPause, setPause } from '../slices/pause'
import { selectPlanet, setPlanet } from '../slices/planet'
import store from '../store'

function SolarSystemMaker() {
  const vec = new Vector3()
  const pause = useSelector(selectPause)
  const planet = useSelector(selectPlanet)
  const [hovering, setHovering] = useState(false)
  const dispatch = useDispatch()

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
  const telescopeMesh = useRef()


  const planetsMeshes = new Map()
  planetsMeshes.set('sun', sunMesh)
  planetsMeshes.set('mercury', mercuryMesh)
  planetsMeshes.set('venus', venusMesh)
  planetsMeshes.set('earth', earthMesh)
  planetsMeshes.set('mars', marsMesh)
  planetsMeshes.set('jupiter', jupiterMesh)
  planetsMeshes.set('saturn', saturnMesh)
  planetsMeshes.set('uranus', uranusMesh)
  planetsMeshes.set('neptune', neptuneMesh)
  planetsMeshes.set('pluto', plutoMesh)
  const planetMesh = planetsMeshes.get(planet)

  const ringmercuryMesh = useRef()
  const ringvenusMesh = useRef()
  const ringearthMesh = useRef()
  const ringmarsMesh = useRef()
  const ringjupiterMesh = useRef()
  const ringsaturnMesh = useRef()
  const ringuranusMesh = useRef()
  const ringneptuneMesh = useRef()
  // const ringplutoMesh = useRef()

  const arrayOfMeshes = [
    ringmercuryMesh,
    ringvenusMesh,
    ringearthMesh,
    ringmarsMesh,
    ringjupiterMesh,
    ringsaturnMesh,
    ringuranusMesh,
    ringneptuneMesh,
    // ringplutoMesh,
  ]

  useFrame(({ camera }) => {
    arrayOfMeshes.forEach((m) => {
      m.current.rotation.x = 1.569
    })

    if (pause === false) {
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
      telescopeMesh.current.rotation.x = .5
      // plutoMesh.current.rotation.y += 0.01 / 6.41
      // pin9.current.rotation.y += 0.001 / 248
    }
    if (planet !== '') {
      //   console.log(planet.mesh.current.position)
      //   camera.position.set(planet.mesh.current.position)
      camera.lookAt(planetMesh.current.position)
      camera.position.lerp(vec.set(20, 10, 15), 0.1)
      camera.updateProjectionMatrix()
    }
  })

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight intensity={1} position={[0, 0, 0]} />

      {/* Sun */}
      <mesh
        ref={sunMesh}
        onClick={() => {
          dispatch(setPause(planetMesh === sunMesh ? false : true))
          dispatch(setPlanet(planetMesh !== sunMesh ? 'sun' : ''))
        }}
        onPointerOver={() => setHovering(hovering === true ? false : true)}
      >
        <sphereGeometry args={[2.5]} />
        <meshStandardMaterial map={sunMap} />
        <Billboard
          follow={false}
          lockX={false}
          lockY={true}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[0, 3, 0]}
        >
          <Text fontSize={hovering ? [1.001] : [0.001]} color={'white'}>
            Sun
          </Text>
        </Billboard>
        <mesh ref={ringmercuryMesh} position={[0, 0, 0]}>
          <torusGeometry args={[3.7, 0.005, 30, 100]} />
          <meshStandardMaterial color={'white'} />
        </mesh>
        <mesh ref={ringvenusMesh} position={[0, 0, 0]}>
          <torusGeometry args={[3.9, 0.005, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={ringearthMesh} position={[0, 0, 0]}>
          <torusGeometry args={[4.7, 0.005, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={ringmarsMesh} position={[0, 0, 0]}>
          <torusGeometry args={[5.6, 0.005, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={ringjupiterMesh} position={[0, 0, 0]}>
          <torusGeometry args={[7.5, 0.005, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={ringsaturnMesh} position={[0, 0, 0]}>
          <torusGeometry args={[12, 0.005, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={ringuranusMesh} position={[0, 0, 0]}>
          <torusGeometry args={[15.8, 0.005, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={ringneptuneMesh} position={[0, 0, 0]}>
          <torusGeometry args={[18, 0.005, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>
        {/* <mesh ref={ringplutoMesh} position={[0, 0, 0]}>
          <torusGeometry args={[19.3, 0.005, 30, 100]} />
          <meshStandardMaterial color="white" />
        </mesh> */}
      </mesh>

      {/* Mercury */}
      <mesh ref={pin1} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[4, 1, 0]}
        >
          <Text fontSize={hovering ? [0.2] : [0.001]} color={'white'}>
            Mercury
          </Text>
        </Billboard>
        <mesh
          ref={mercuryMesh}
          position={[3.7, 0, 0]}
          onClick={() => {
            dispatch(setPause(planetMesh === mercuryMesh ? false : true))
            dispatch(setPlanet(planetMesh !== mercuryMesh ? 'mercury' : ''))
          }}
          onPointerOver={() => setHovering(hovering === true ? false : true)}
        >
          <sphereGeometry args={[0.04]} />
          <meshStandardMaterial map={mercuryMap} />
        </mesh>
      </mesh>

      {/* Venus */}
      <mesh ref={pin2} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[3.9, 1, 0]}
        >
          <Text fontSize={hovering ? [0.2] : [0.001]} color={'white'}>
            Venus
          </Text>
        </Billboard>
        <mesh
          ref={venusMesh}
          position={[3.9, 0, 0]}
          onClick={() => {
            dispatch(setPause(planetMesh === venusMesh ? false : true))
            dispatch(setPlanet(planetMesh !== venusMesh ? 'venus' : ''))
          }}
          onPointerOver={() => setHovering(hovering === true ? false : true)}
        >
          <sphereGeometry args={[0.09]} />
          <meshStandardMaterial map={venusMap} />
        </mesh>
      </mesh>

      {/* Earth */}
      {/* <PlanetMesh name={'Earth'}   meshposition={[4.7, 0, 0]} Billboardposition={[4.7, 1, 0]} /> */}
      <mesh ref={pin3} position={[0, 0, 0]}>
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
          <mesh ref={telescopeMesh} position={[5.4,0,0]} >
            <coneBufferGeometry args={[0.02, 0.02, 8, 3, "yes", 0, 6.283185307179586]} />
            <meshBasicMaterial wireframe={true} color="grey" linewidth="1" />
            
          </mesh>
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
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[5.6, 1, 0]}
        >
          <Text fontSize={hovering ? [0.2] : [0.001]} color={'white'}>
            Mars
          </Text>
        </Billboard>
        <mesh
          ref={marsMesh}
          position={[5.6, 0, 0]}
          onClick={() => {
            dispatch(setPause(planetMesh === marsMesh ? false : true))
            dispatch(setPlanet(planetMesh !== marsMesh ? 'mars' : ''))
          }}
          onPointerOver={() => setHovering(hovering === true ? false : true)}
        >
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial map={marsMap} />
        </mesh>
      </mesh>

      {/* Jupiter */}
      <mesh ref={pin5} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[7.5, 1.5, 0]}
        >
          <Text fontSize={hovering ? [0.3] : [0.001]} color={'white'}>
            Jupiter
          </Text>
        </Billboard>
        <mesh
          ref={jupiterMesh}
          position={[7.5, 0, 0]}
          onClick={() => {
            dispatch(setPause(planetMesh === jupiterMesh ? false : true))
            dispatch(setPlanet(planetMesh !== jupiterMesh ? 'jupiter' : ''))
          }}
          onPointerOver={() => setHovering(hovering === true ? false : true)}
        >
          <sphereGeometry args={[1.0]} />
          <meshStandardMaterial map={jupiterMap} />
        </mesh>
      </mesh>

      {/* Saturn */}
      <mesh ref={pin6} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[12, 1.3, 0]}
        >
          <Text fontSize={hovering ? [0.2] : [0.001]} color={'white'}>
            Saturn
          </Text>
        </Billboard>
        <mesh
          ref={saturnMesh}
          position={[12.0, 0, 0]}
          onClick={() => {
            dispatch(setPause(planetMesh === saturnMesh ? false : true))
            dispatch(setPlanet(planetMesh !== saturnMesh ? 'saturn' : ''))
          }}
          onPointerOver={() => setHovering(hovering === true ? false : true)}
        >
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
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[15.8, 1, 0]}
        >
          <Text fontSize={hovering ? [0.2] : [0.001]} color={'white'}>
            Uranus
          </Text>
        </Billboard>
        <mesh
          ref={uranusMesh}
          position={[15.8, 0, 0]}
          onClick={() => {
            dispatch(setPause(planetMesh === uranusMesh ? false : true))
            dispatch(setPlanet(planetMesh !== uranusMesh ? 'uranus' : ''))
          }}
          onPointerOver={() => setHovering(hovering === true ? false : true)}
        >
          <sphereGeometry args={[0.38]} />
          <meshStandardMaterial map={uranusMap} />
        </mesh>
      </mesh>

      {/* Neptune */}
      <mesh ref={pin8} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[18, 1, 0]}
        >
          <Text fontSize={hovering ? [0.2] : [0.001]} color={'white'}>
            Neptune
          </Text>
        </Billboard>
        <mesh
          ref={neptuneMesh}
          position={[18, 0, 0]}
          onClick={() => {
            dispatch(setPause(planetMesh === neptuneMesh ? false : true))
            dispatch(setPlanet(planetMesh !== neptuneMesh ? 'neptune' : ''))
          }}
          onPointerOver={() => setHovering(hovering === true ? false : true)}
        >
          <sphereGeometry args={[0.32]} />
          <meshStandardMaterial map={neptuneMap} />
        </mesh>
      </mesh>

      {/* Pluto */}
      {/* <mesh ref={pin9} position={[0, 0, 0]}>
        <Billboard
          follow={false}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
          position={[19.3, 1, 0]}
        >
          <Text fontSize={hovering ? [0.2] : [0.001]} color={'white'}>
            Pluto
          </Text>
        </Billboard>
        <mesh
          ref={plutoMesh}
          position={[19.3, 0, 0]}
          onClick={() => {
            dispatch(setPause(planetMesh === plutoMesh ? false : true))
            dispatch(setPlanet(planetMesh !== plutoMesh ? 'pluto' : ''))
          }}
          onPointerOver={() => setHovering(hovering === true ? false : true)}
        >
          <sphereGeometry args={[0.025]} />
          <meshStandardMaterial map={plutoMap} />
        </mesh>
      </mesh> */}
    </>
  )}
    
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
        <Canvas camera={{ position: [30, 4, 25], fov: 23 }}>
          <color attach="background" args={[0x000000]} />
          <Provider store={store}>
            <Suspense fallback={null}>
              <SolarSystemMaker />
            </Suspense>
          </Provider>
          <OrbitControls />

          <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={50000} // Amount of stars (default=5000)
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
