import React from 'react'
import {Float, useGLTF} from '@react-three/drei'

const Message = (props) => {
   const { nodes, materials } = useGLTF('models/message.glb')
   return (
      <Float floatIntensity={5}>
      <group  position={[0, -8, 0]} scale={12} {...props} dispose={null}>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials['Material.016']}
            position={[0.003, 0.695, 0.069]}
            rotation={[0, 0, -0.776]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Material}
            position={[0.003, 0.72, 0.023]}
         />
      </group>
      </Float>
   )
}


useGLTF.preload('models/message.glb')

export default Message
