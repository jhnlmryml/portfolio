import React from 'react'
import {Float, useGLTF} from '@react-three/drei'

const Message = (props) => {
   const { nodes, materials } = useGLTF('models/message.glb')
   return (
      <Float floatIntensity={2}>
         <group position={[0, -3, 0]} scale={2} {...props} dispose={null}>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane001.geometry}
               material={materials.Material}
               position={[0.74, 1.457, -0.007]}
               rotation={[Math.PI / 2, 0.47, 0]}
               scale={[0.853, 0.853, 0.564]}
            />
            <group position={[-0.082, 1.292, 0.705]} scale={[0.763, 0.834, 0.036]}>
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube001.geometry}
                  material={materials['Material.006']}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube001_1.geometry}
                  material={materials['Material.007']}
               />
            </group>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane012.geometry}
               material={materials.Material}
               position={[-0.932, 1.434, -0.007]}
               rotation={[Math.PI / 2, -0.549, 0]}
               scale={[0.853, 0.853, 0.564]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane004.geometry}
               material={materials['Material.005']}
               position={[-0.106, 0.928, 0.705]}
               rotation={[Math.PI / 2, 0, 0]}
               scale={[1, 1, 0.714]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane006.geometry}
               material={materials['Material.005']}
               position={[-1.078, 0.947, 0.813]}
               rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane007.geometry}
               material={materials['Material.005']}
               position={[-0.141, 0.943, 0.866]}
               rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane005.geometry}
               material={materials['Material.005']}
               position={[0.866, 0.919, 0.782]}
               rotation={[Math.PI / 2, 0, Math.PI]}
            />

         </group>
      </Float>
   )
}


useGLTF.preload('models/message.glb')

export default Message
