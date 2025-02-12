import React, {Suspense, useEffect, useRef, useState} from 'react'
import {motion} from "framer-motion";
import {skills} from "../constants/index.js";
import {Canvas} from "@react-three/fiber";
import Message from "../components/Message.jsx";
import {OrbitControls} from "@react-three/drei";
import Loading from "../components/Loading.jsx";
import Globe from "react-globe.gl";
import * as THREE from "three";
import SkillsSection from "../components/SkillsSection.jsx";

const About = () => {

   const N = 20;
   const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
         ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
   }));

   const [rotated, setRotated] = useState(true);

   const [hasCopied, setHasCopied] = useState(false);

   const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;



   const handleCopy = () => {
      navigator.clipboard.writeText('yjhonalmar@gmail.com');
      setHasCopied(true);

      setTimeout(() => {
         setHasCopied(false);
      }, 2000);
   };


   const globeEl = useRef();

   useEffect(() => {
      const globe = globeEl.current
      // Auto-rotate
      globe.controls().autoRotate = rotated;
      globe.controls().autoRotateSpeed = 1.85;


   }, [rotated]);

   return (
      <section className="pt-20 max-sm:pt-10" id="about">
         <motion.div
            initial={{opacity: 0,}}
            whileInView={{opacity: 1,}}
            transition={{duration: 1.9}}
            className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 element"
         >

            <div className="col-span-1 xl:row-span-2">
               <div className="h-full pt-0 p-6 rounded-lg shadow-md grid-container ">

                  <motion.div
                     initial={{opacity: 0, scale: 0}}
                     whileInView={{opacity: 1, scale: 1}}
                     transition={{duration: 1}}
                     className={"flex justify-center"}>
                     <div className="relative w-[450px] h-[450px] mx-auto">
                        <img src="/assets/svg-blob.svg" alt="" className="absolute w-full h-full"/>
                        <img
                           src={import.meta.env.VITE_IMAGE_PATH}
                           alt="picture"
                           className="w-full h-full object-contain drop-shadow-[0_0_45px_rgba(0,0,0,0.7)] "
                        />
                     </div>
                  </motion.div>


                  <motion.div
                     initial={{opacity: 0, x: -20}}
                     whileInView={{opacity: 1, x: 0}}
                     transition={{duration: 1.6}}
                     className="mt-4 ">
                     <p className=" py-2 text-xl font-poppins text-primary font-semibold">Hi, I’m Jhon Almar</p>
                     <p className="text-secondary font-nunito mt-2 text-justify">
                        As a dedicated BS Information Technology student, I’m passionate about solving problems and
                        building innovative solutions through code. I enjoy exploring new technologies and honing my
                        skills in web development, programming, and system design. While I’m still early in my journey,
                        my enthusiasm for learning and creating drives me to take on new challenges and grow as a
                        developer. I’m excited to contribute to meaningful projects and make an impact in the tech
                        world. </p>
                  </motion.div>
               </div>
            </div>


            <div className="xl:col-span-2 xl:row-span-1">
               <div className="h-full p-6 rounded-lg shadow-md grid-container">

                  <div className="my-2">
                     <p className="text-xl font-poppins text-primary font-semibold">Tech Stack</p>
                     <p className="text-secondary font-nunito mt-2 text-justify">
                        I utilize a wide range of languages, frameworks, and tools to build powerful and scalable
                        applications. Each solution is designed with precision, ensuring high performance and
                        reliability. My focus is on innovation and creating seamless experiences that make an impact.
                     </p>
                  </div>
                  <SkillsSection/>
               </div>
            </div>

            <div className="col-span-1 xl:row-span-1">
               <div className="h-full p-6 rounded-lg shadow-md grid-container flex flex-col justify-evenly">
                  <div className="w-full h-[200px] ">
                     <Canvas>
                        <ambientLight intensity={0.5} />
                        {/* Additional Lights */}
                        <pointLight position={[5, -5, 5]} intensity={0.8} />
                        <spotLight position={[0, 5, 10]} angle={0.3} penumbra={0.5} intensity={1} />
                        <Message/>
                     </Canvas>
                  </div>
                  <div className="space-y-2">
                     <motion.p
                        animate={{
                           y: [0, -5, 0],
                        }}
                        transition={{
                           duration: 0.6,
                           ease: "easeInOut",
                           repeat: Infinity,
                           repeatType: "loop",
                        }}
                        className="text-xl font-poppins text-primary font-semibold text-center">Contact me</motion.p>
                     <div className="cursor-pointer flex justify-center items-center gap-2 text-secondary hover:text-hover" onClick={handleCopy}>
                        {hasCopied ?
                           <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8"
                                xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z"
                                 fill="#03911b"/>
                              <path
                                 d="M11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1V12.9C16 9.4 14.6 8 11.1 8ZM12.29 13.65L8.58 17.36C8.44 17.5 8.26 17.57 8.07 17.57C7.88 17.57 7.7 17.5 7.56 17.36L5.7 15.5C5.42 15.22 5.42 14.77 5.7 14.49C5.98 14.21 6.43 14.21 6.71 14.49L8.06 15.84L11.27 12.63C11.55 12.35 12 12.35 12.28 12.63C12.56 12.91 12.57 13.37 12.29 13.65Z"
                                 fill="#03911b"/>
                           </svg>

                           : <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8"
                                  xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
                                 fill="currentColor"/>
                              <path
                                 d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z"
                                 fill="currentColor"/>
                           </svg>}
                        <p className="lg:text-2xl md:text-xl font-medium font-nunito ">yjhonalmar@gmail.com</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-span-1 xl:row-span-1">
               <div
                  onMouseOver={() => setRotated(false)}
                  onMouseOut={() => setRotated(true)}
                  className="h-full p-6 rounded-lg shadow-md flex flex-col items-center justify-center  grid-container space-y-6"
               >
                  {/* Globe Container */}
                  <div className="rounded-3xl w-full flex justify-center items-center">
                     <Globe
                        arcsData={arcsData}
                        arcColor={'color'}
                        arcDashLength={() => Math.random()}
                        arcDashGap={() => Math.random()}
                        arcDashAnimateTime={() => Math.random() * 4000 + 500}
                        height={250} // Slightly larger for better visibility
                        width={250}
                        backgroundColor="rgba(0, 0, 0, 0)"
                        backgroundImageOpacity={0.5}
                        ref={globeEl}
                        animateIn={true}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        htmlElementsData={[{lat: 15.5794, lng: 120.6200,}]}
                        htmlElement={(d) => {
                           const el = document.createElement("div");

                           // Marker icon
                           el.innerHTML = markerSvg;

                           // Label
                           const label = document.createElement("p");
                           label.textContent = "Pampanga, Philippines";
                           label.style.color = "white";
                           label.style.whiteSpace = "nowrap"; // Prevents text wrapping
                           label.style.fontSize = "12px";

                           // Parent div styling (ensures full centering)
                           el.style.display = "flex";
                           el.style.flexDirection = "column"; // Stacks items vertically
                           el.style.alignItems = "center"; // Centers horizontally
                           el.style.justifyContent = "center"; // Centers vertically
                           el.style.textAlign = "center";
                           el.style.color = "#660000";
                           el.style.cursor = "pointer";
                           el.style.maxWidth = "50px"
                           el.appendChild(label);
                           return el;
                        }}

                     />
                  </div>

                  <div className="text-center">
                     <p className="text-lg font-poppins text-primary font-semibold">
                        Adaptable Across Time Zones & Locations
                     </p>
                     <motion.p
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.6}}
                        className="text-sm font-nunito text-secondary mt-2">
                        Based in Pampanga, Philippines and open to remote work worldwide.
                     </motion.p>
                  </div>
               </div>
            </div>


         </motion.div>
      </section>
   )
}
export default About




