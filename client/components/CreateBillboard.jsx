import React from 'react'
import { Billboard, Text } from '@react-three/drei'

export default function CreateBillboard(position, fontSize) {
  return (
    <>
      <Billboard
        follow={false}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
        position={position}
      >
        <Text fontSize={fontSize} color={'white'}>
          Mars
        </Text>
      </Billboard>
    </>
  )
}
