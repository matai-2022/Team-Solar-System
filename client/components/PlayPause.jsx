import React, {useState} from 'React'
import { useFrame } from '@react-three/fiber'


function PlayPause() {
  const [pause, setPause] = useState(false)

useFrame(({ camera }) => {
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
    plutoMesh.current.rotation.y += 0.01 / 6.41
    pin9.current.rotation.y += 0.001 / 248
  } else {
    // camera.position.y = planet.mesh.planet.yPosition
  }
  

})
return (
  <button onClick={  setPause(!pause)}>PLAY/PAUSE</button>
)

}