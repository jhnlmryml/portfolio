import React from 'react'
import {Canvas} from "@react-three/fiber";
import {motion} from "framer-motion";
import Downbtn from "../components/Downbtn.jsx";
import Avatar from "../components/Avatar.jsx";
import Sparkle from "../components/Sparkle.jsx";


const Hero = ({animationName}) => {

   return (

      <section id="home" className="relative h-dvh w-full justify-center items-center flex ">

         <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.9}}
            className="flex items-center  w-full flex-responsive">

            <div
               className="greet position-element font-jetbrains absolute top-[5.5rem] font-ibm flex flex-col items-center justify-center text-primary text-center">
               <p className="text-primary  font-extrabold">Hi! I am <span className="text-hover "> Jhon Almar </span>
               </p>
               <p className="font-extralight  text-secondary">A Passionate Frontend Developer </p>
            </div>

            <div className="avatar">
               <Canvas>
                  <group>
                     <directionalLight position={[2, 5, 5]} intensity={.2} castShadow shadow-mapSize={[2048, 2048]}/>
                     <spotLight position={[-5, 3, 2]} intensity={0.4} angle={0.3} penumbra={0.8} color={"#ffddaa"}/>
                     <directionalLight position={[-2, 4, -3]} intensity={0.7} color={"#88aaff"}/>
                     <ambientLight intensity={0.2}/>
                     {/* Character */}
                     <Avatar animationName={animationName}/>
                  </group>
               </Canvas>
            </div>

         </motion.div>
         <div className="w-full -z-20 absolute h-full">
            <Canvas>
               <Sparkle/>
            </Canvas>
         </div>
         <div className={"absolute bottom-16 z-50"}>
            <Downbtn/>
         </div>
      </section>


   )
}
export default Hero

