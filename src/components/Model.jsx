import React, {useRef} from 'react'
import { Environment,  Sparkles} from "@react-three/drei";
import Avatar from "./Avatar.jsx";
import {useFrame} from "@react-three/fiber";

const Model = ({animationName}) => {
   const meshRef = useRef();
   useFrame(() => {
      if (meshRef.current) {
         meshRef.current.rotation.x += 0.0001;
         meshRef.current.rotation.y += 0.0001;
         meshRef.current.rotation.z += 0.0001;
      }
   });


   return (
      <>
         <Environment preset="sunset"/>
         <directionalLight position={[-3, 2.2, 3]} intensity={0.3} castShadow/>
         <group>

            <Avatar animationName={animationName}/>

            <mesh ref={meshRef}>
               <Sparkles count={80} color="red" scale={20} speed={0.002} size={1.5} noise={.1}/>
               <Sparkles count={80} color="blue" scale={20} speed={0.002} size={1.5} noise={.1}/>
               <Sparkles count={80} color="yellow" scale={20} speed={0.002} size={1.5} noise={.1}/>
               <Sparkles count={80} color="purple" scale={20} speed={0.002} size={1.5} noise={.1}/>
               <Sparkles count={80} color="white" scale={20} speed={0.002} size={1.5} noise={.1}/>

            </mesh>
         </group>
      </>
   )
}
export default Model
