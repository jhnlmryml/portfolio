import React from 'react'
import {Canvas} from "@react-three/fiber";
import {motion} from "framer-motion";
import DownBtn from "../components/DownBtn.jsx";
import Avatar from "../components/Avatar.jsx";
import {ContactShadows} from "@react-three/drei";
import Blobs from "../components/Blobs.jsx";


const Hero = ({animationName}) => {

   return (

      <section id="home" className="relative h-dvh w-full justify-center items-center flex mb-10 element">

         <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: .8}}
            className="flex items-center  w-full flex-responsive">

            <div
               className="greet position-element font-jetbrains absolute top-[5.5rem] text-black-200
               flex flex-col items-center justify-center text-center">
               <p className=" font-semibold">Hi! I am <span className="text-slate-900 font-black"> Jhon Almar </span>
               </p>
               <p className="font-bls">From Code to Conversion – I Build Websites That Work</p>
            </div>

            <div className="avatar">
               <Canvas shadows camera={{position: [0, 2, 5]}}>
                  <group>

                     <directionalLight position={[2, 5, 5]} intensity={.2} castShadow shadow-mapSize={[2048, 2048]}/>
                     <spotLight position={[-5, 3, 2]} intensity={0.4} angle={0.3} penumbra={0.8} color={"#ffddaa"}/>
                     <spotLight position={[30, -9, -4]} intensity={0.9} angle={0.3} penumbra={0.8} color={"#adbbda"}/>
                     <directionalLight position={[-2, 4, -3]} intensity={0.7} color={"#88aaff"}/>
                     <ambientLight intensity={0.2}/>
                     <ContactShadows
                        opacity={0.42}
                        scale={10}
                        blur={1}
                        far={10}
                        position={[0, -3.2, 0]}
                        resolution={256}
                        color="#000000"
                     />
                     {/* Character */}
                     <Avatar animationName={animationName} castShadow recieveShadow/>
                  </group>
               </Canvas>
            </div>

         </motion.div>
         <div className="w-full -z-20 absolute h-full">
            <Canvas>

               <directionalLight position={[2, 5, 5]} intensity={.2} castShadow shadow-mapSize={[2048, 2048]}/>
               <spotLight position={[-5, 3, 2]} intensity={0.4} angle={0.3} penumbra={0.8} color={"#ffddaa"}/>
               <spotLight position={[30, -9, -4]} intensity={0.9} angle={0.3} penumbra={0.8} color={"#adbbda"}/>
               <directionalLight position={[-2, 4, -3]} intensity={0.7} color={"#88aaff"}/>
               <ambientLight intensity={.2}/>
               <Blobs/>
            </Canvas>
         </div>
         <div className={"absolute bottom-16"}>
            <DownBtn/>
         </div>
      </section>


   )
}
export default Hero

