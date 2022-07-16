import React, { Suspense, useRef, useState  } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls, Stars } from '@react-three/drei'

function Scene(props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame(() => (ref.current.rotation.y += 0.01))

  const sunMap = useLoader(TextureLoader, '/images/sun.png')
  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
        <sphereGeometry args={hovered ? [2, 15, 15] : [3, 15, 15]} />
        <meshStandardMaterial map={sunMap} />
      </mesh>
    </>
  )
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [30, 4, 25], fov: 23 }}>
        <color attach="background" args={[0x000000]} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
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
  )

  //insert react router
}

export default App

// const [fruits, setFruits] = useState([])
// useEffect(() => {
//   getFruits()
//   .then(fruits => {
//     setFruits(fruits)
//   })
// }, [])

// return (
//   <>
//     <div className='app'>
//       <h1>Fullstack Boilerplate - with Fruits!</h1>
//       <ul>
//         {fruits.map(fruit => (
//           <li key={fruit}>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   </>
// )
