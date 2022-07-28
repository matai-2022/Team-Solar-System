import React from 'react'
import CreateOrbitLines from './CreateOrbitLines'

export default function OrbitLines() {
  return (
    <>
      <CreateOrbitLines planetName={'mercury'} args={[4.3, 0.005, 30, 100]} />
      <CreateOrbitLines planetName={'venus'} args={[5.2, 0.005, 30, 100]} />
      <CreateOrbitLines planetName={'earth'} args={[6.1, 0.005, 30, 100]} />
      <CreateOrbitLines planetName={'mars'} args={[7.2, 0.005, 30, 100]} />
      <CreateOrbitLines planetName={'jupiter'} args={[9.5, 0.005, 30, 100]} />
      <CreateOrbitLines planetName={'saturn'} args={[14, 0.005, 30, 100]} />
      <CreateOrbitLines planetName={'uranus'} args={[17.3, 0.005, 30, 100]} />
      <CreateOrbitLines planetName={'neptune'} args={[19.5, 0.005, 30, 100]} />
      {/* <CreateOrbitLines planetName={'pluto'} args={[19.3, 0.005, 30, 100]} /> */}
    </>
  )
}
