import React, {useRef} from 'react'

import {useGLTF, PerspectiveCamera, useAnimations} from '@react-three/drei'

const Blobs = (props) => {
   const {nodes, materials, animations} = useGLTF('/models/blobs.glb')


   return (
      <group {...props} dispose={null}>
         <group name="Scene">
            <group name="BluffTitler_Show"
                   rotation={[-0.1, .1,-15]}
                   position={[0, 9, -30]}
                   scale={1.7}
            >
               <group
                  name="BluffTitler_Model_Layer_3"
                  position={[-3.976, -30.909, -48.911]}
                  rotation={[2.271, -0.076, 0.37]}
                  scale={0.057}>
                  <group name="BluffTitler_Show_1">
                     <group
                        name="BluffTitler_Camera_Layer_1_1"
                        position={[55.23, 302.789, -1007.034]}
                        rotation={[-2.264, 0.168, 0.151]}
                     />
                     <group name="BluffTitler_Vector_Layer_4">
                        <mesh
                           name="Vector"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector.geometry}
                           material={materials.Material}
                           position={[-855.923, 60.774, -1070.901]}
                           rotation={[-0.682, -0.56, -2.095]}
                           scale={2}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_5">
                        <mesh
                           name="Vector_1"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_1.geometry}
                           material={materials.Material}
                           position={[424.781, 110.312, -834.565]}
                           rotation={[3.089, 0.526, -0.789]}
                           scale={2}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_6">
                        <mesh
                           name="Vector_2"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_2.geometry}
                           material={materials.Material}
                           position={[-5.846, 215.769, -1017.693]}
                           rotation={[-0.85, 0.482, -2.632]}
                           scale={0.404}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_7">
                        <mesh
                           name="Vector_3"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_3.geometry}
                           material={materials.Material}
                           position={[-340.194, -92.793, -518.017]}
                           rotation={[-1.641, 0.013, -0.511]}
                           scale={1.495}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_8">
                        <mesh
                           name="Vector_4"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_4.geometry}
                           material={materials.Material}
                           position={[318.958, -83.736, -387.102]}
                           rotation={[-1.957, -0.204, 2.128]}
                           scale={1.858}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_9">
                        <mesh
                           name="Vector_5"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_5.geometry}
                           material={materials.Material}
                           position={[-239.975, 68.437, -887.229]}
                           rotation={[3.111, -1.031, 2.892]}
                           scale={2}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_10">
                        <mesh
                           name="Vector_6"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_6.geometry}
                           material={materials.Material}
                           position={[278.421, 154.666, -674.989]}
                           rotation={[0.04, -0.604, -1.244]}
                           scale={1.01}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_11">
                        <mesh
                           name="Vector_7"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_7.geometry}
                           material={materials.Material}
                           position={[321.066, -53.055, -515.079]}
                           rotation={[-1.492, 0.106, 0.617]}
                           scale={2.303}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_12">
                        <mesh
                           name="Vector_8"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_8.geometry}
                           material={materials.Material}
                           position={[-383.232, 33.709, -854.456]}
                           rotation={[2.797, 0.507, -0.32]}
                           scale={1.374}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_13">
                        <mesh
                           name="Vector_9"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_9.geometry}
                           material={materials.Material}
                           position={[-187.783, 99.91, -809.135]}
                           rotation={[-1.561, 1.098, -1.224]}
                           scale={0.768}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_14">
                        <mesh
                           name="Vector_10"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_10.geometry}
                           material={materials.Material}
                           position={[350.717, -71.925, -678.686]}
                           rotation={[-2.349, -0.274, 1.417]}
                           scale={1.374}
                        />
                     </group>

                     <group name="BluffTitler_Vector_Layer_19">
                        <mesh
                           name="Vector_11"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_11.geometry}
                           material={materials.Material}
                           position={[-628.991, -1063.322, -752.204]}
                           rotation={[-1.416, -0.692, -2.432]}
                           scale={2}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_20">
                        <mesh
                           name="Vector_12"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_12.geometry}
                           material={materials.Material}
                           position={[532.106, -827.988, -209.08]}
                           rotation={[2.451, 0.8, -0.625]}
                           scale={2}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_21">
                        <mesh
                           name="Vector_13"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_13.geometry}
                           material={materials.Material}
                           position={[182.593, -853.719, -537.559]}
                           rotation={[-2.701, -0.755, -2.607]}
                           scale={0.404}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_22">
                        <mesh
                           name="Vector_14"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_14.geometry}
                           material={materials.Material}
                           position={[-307.234, -888.511, -73.121]}
                           rotation={[-2.156, 0.132, -0.79]}
                           scale={1.495}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_23">
                        <mesh
                           name="Vector_15"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_15.geometry}
                           material={materials.Material}
                           position={[286.117, -776.918, 222.147]}
                           rotation={[-2.516, 0, 1.904]}
                           scale={1.858}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_24">
                        <mesh
                           name="Vector_16"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_16.geometry}
                           material={materials.Material}
                           position={[-91.836, -928.941, -425.719]}
                           rotation={[2.691, -0.742, 3.039]}
                           scale={2}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_25">
                        <mesh
                           name="Vector_17"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_17.geometry}
                           material={materials.Material}
                           position={[353.352, -720.365, -138.23]}
                           rotation={[0.843, -1.106, -2.355]}
                           scale={1.01}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_26">
                        <mesh
                           name="Vector_18"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_18.geometry}
                           material={materials.Material}
                           position={[327.123, -814.566, 102.879]}
                           rotation={[-1.985, 0.179, 0.32]}
                           scale={2.303}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_27">
                        <mesh
                           name="Vector_19"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_19.geometry}
                           material={materials.Material}
                           position={[-241.246, -950.728, -423.579]}
                           rotation={[2.113, 0.728, -0.065]}
                           scale={1.374}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_28">
                        <mesh
                           name="Vector_20"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_20.geometry}
                           material={materials.Material}
                           position={[-60.815, -859.565, -362.175]}
                           rotation={[-1.486, 1.106, -1.904]}
                           scale={0.768}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_29">
                        <mesh
                           name="Vector_21"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_21.geometry}
                           material={materials.Material}
                           position={[311.492, -861.234, -14.95]}
                           rotation={[-2.903, -0.001, 1.05]}
                           scale={1.374}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_31">
                        <mesh
                           name="Vector_22"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_22.geometry}
                           material={materials.Material}
                           position={[-474.149, -914.269, -495.135]}
                           rotation={[-2.401, -0.734, 2.345]}
                           scale={2}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_32">
                        <mesh
                           name="Vector_23"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_23.geometry}
                           material={materials.Material}
                           position={[-458.958, -527.19, 749.232]}
                           rotation={[0.206, 1.19, 1.84]}
                           scale={2}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_33">
                        <mesh
                           name="Vector_24"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_24.geometry}
                           material={materials.Material}
                           position={[-350.949, -560.873, 279.955]}
                           rotation={[-1.271, -0.824, -0.49]}
                           scale={1.535}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_34">
                        <mesh
                           name="Vector_25"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_25.geometry}
                           material={materials.Material}
                           position={[-936.433, -845.05, 118.659]}
                           rotation={[-1.836, 0.203, -1.893]}
                           scale={1.495}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_35">
                        <mesh
                           name="Vector_26"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_26.geometry}
                           material={materials.Material}
                           position={[-939.801, -659.949, 764.745]}
                           rotation={[-2.139, 0.456, 0.877]}
                           scale={1.858}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_36">
                        <mesh
                           name="Vector_27"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_27.geometry}
                           material={materials.Material}
                           position={[-537.126, -731.43, 117.882]}
                           rotation={[2.813, 0.345, 3.064]}
                           scale={2}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_37">
                        <mesh
                           name="Vector_28"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_28.geometry}
                           material={materials.Material}
                           position={[-638.435, -494.326, 625.685]}
                           rotation={[2.302, -0.563, -0.752]}
                           scale={1.01}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_38">
                        <mesh
                           name="Vector_29"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_29.geometry}
                           material={materials.Material}
                           position={[-810.78, -652.293, 739.874]}
                           rotation={[-1.716, 0.074, -0.773]}
                           scale={2.303}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_39">
                        <mesh
                           name="Vector_30"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_30.geometry}
                           material={materials.Material}
                           position={[-600.3, -792.387, -4.984]}
                           rotation={[0.641, 1.022, 1.774]}
                           scale={1.374}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_40">
                        <mesh
                           name="Vector_31"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_31.geometry}
                           material={materials.Material}
                           position={[-599.309, -675.6, 171.075]}
                           rotation={[-0.722, 0.223, -2.819]}
                           scale={0.768}
                        />
                     </group>
                     <group name="BluffTitler_Vector_Layer_41">
                        <mesh
                           name="Vector_32"
                           castShadow
                           receiveShadow
                           geometry={nodes.Vector_32.geometry}
                           material={materials.Material}
                           position={[-648.421, -691.803, 748.874]}
                           rotation={[-2.416, 0.772, 0.421]}
                           scale={1.374}
                        />
                     </group>
                  </group>
               </group>
            </group>
         </group>
      </group>
   )
}

useGLTF.preload('/models/blobs.glb')
export default Blobs;


