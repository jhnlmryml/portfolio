import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import Model from "../components/Model.jsx"
import {motion} from "framer-motion";
import Downbtn from "../components/Downbtn.jsx";


const Hero = ({animationName}) => {

   return (

      <section id="home" className="relative h-dvh w-full justify-center items-center flex ">

         <div className="flex flex-col items-center justify-between w-full">
            <div className="greet font-ibm flex flex-col items-center top-16 absolute flex-wrap justify-center text-primary text-center">
               <p className="text-primary  font-extrabold ">Hi! I am <span className="text-hover "> Jhon Almar </span> </p>
               <p className="font-extralight  text-secondary">A Passionate Frontend Developer </p>
            </div>

            <motion.div
               initial={{opacity: 0}}
               whileInView={{opacity: 1}}
               transition={{duration: 0.9}}
               className="" style={{height: "92dvh", width: "98dvw", marginBottom: "2dvh"}}>
               <Canvas>
                        <Model animationName={animationName}/>
               </Canvas>
            </motion.div>

            <div className={"absolute bottom-16 z-50"}>
               <Downbtn/>
            </div>
         </div>
      </section>


   )
}
export default Hero

