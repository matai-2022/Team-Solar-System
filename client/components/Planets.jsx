import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Planets() {
  const mountRef = useRef(null)

  useEffect(() => {
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

    const sunTexture = new THREE.TextureLoader().load('/images/sun.png')
    const sunGeometry = new THREE.SphereGeometry(1)
    const sunMaterial = new THREE.MeshBasicMaterial({
      map: sunTexture,
    })
    const sun = new THREE.Mesh(sunGeometry, sunMaterial)
    scene.add(sun)

    camera.position.z = 15
    // camera.position.x = 0
    // camera.position.y = 0

    function animate() {
      requestAnimationFrame(animate)
      // sun.rotation.x += 0.0
      sun.rotation.y += 0.01
      // sun.rotation.z += 0.0git push --set-upstream origin clickable-planets
    }
    animate()

    return () => mountRef.current.removeChild(renderer.domElement)
  }, [])

  return <div ref={mountRef}></div>
}
