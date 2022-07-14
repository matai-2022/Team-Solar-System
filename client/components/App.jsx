import React, { Suspense } from 'react'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Scene() {
  const sunMap = useLoader(TextureLoader, '/images/sun.png')
  return (
    <>
      <ambientLight intensity={1} />
      <mesh>
        <sphereGeometry args={[2]} />
        <meshStandardMaterial map={sunMap} />
      </mesh>
    </>
  )
}

function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
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
