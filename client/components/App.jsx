import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { PerspectiveCamera, TextureLoader } from 'three'

// /import { getPlanets } from '../apis/planets'

function App() {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    //near attribute (wont render object that is closer than this)
    0.1,
    //far attribute
    1000
  )
  const renderer = new THREE.WebGL1Renderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  const sunTexture = new THREE.TextureLoader().load('/images/sun.jpeg')
  const sunGeometry = new THREE.SphereGeometry(1)
  const sunMaterial = new THREE.MeshBasicMaterial({
    map: sunTexture,
  })
  const sun = new THREE.Mesh(sunGeometry, sunMaterial)
  scene.add(sun)

  camera.position.z = 5
  camera.position.x = 0
  camera.position.y = 0

  function animate() {
    requestAnimationFrame(animate)
    sun.rotation.x += 0.0
    sun.rotation.y += 0.01
    sun.rotation.z += 0.0
    renderer.render(scene, camera)
  }

  animate()

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
