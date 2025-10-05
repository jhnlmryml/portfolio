import React from 'react'

import {useGLTF, Float} from '@react-three/drei'

const Blobs = (props) => {
   const {nodes, materials, animations} = useGLTF('/models/blobs.glb')


   return (
      <Float floatIntensity={5}>

      <group {...props} dispose={null}>
         <group position={[-0.044, -0.8, 0.082]} rotation={[2.334, 0.703, -0.296]} scale={0.015}>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Vector017.geometry}
               material={materials['Material.002']}
               position={[154.939, -55.699, 2.001]}
               rotation={[-1.282, 0.174, 0.512]}
               scale={1.088}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Vector001.geometry}
               material={materials['Material.002']}
               position={[95.748, -148.046, -112.377]}
               rotation={[-2.68, -1.043, 0.927]}
               scale={0.986}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Vector002.geometry}
               material={materials['Material.002']}
               position={[1.154, -51.308, -96.75]}
               rotation={[1.142, 0.121, 0.139]}
               scale={0.946}
            />
         </group>
      </group>
      </Float>

   )
}

useGLTF.preload('/models/blobs.glb')
export default Blobs;


