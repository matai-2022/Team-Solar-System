import React from 'react'
import ReactThreeTestRenderer from '@react-three/test-renderer'

// import { App } from './App'
import SolarSystem from './SolarSystem'

test('mesh to have two children', async () => {
  console.log('test')
  const renderer = await ReactThreeTestRenderer.create(<SolarSystem />)
  const mesh = renderer.scene.children[0].allChildren
  expect(mesh).toBe(2)
})
