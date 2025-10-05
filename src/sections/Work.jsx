import React, {useEffect, useState} from 'react'
import {motion} from "framer-motion";
import {projects, works} from "../constants/index.js";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const myItems = works.length;

const Work = () => {
   const [selectedItems, setSelectedItems] = useState(0)
   const [isHovered, setIsHovered] = useState(false); // Track hover state
   // const [onChange, setOnChange] = useState(0);
   const [proj, setProj] = useState(0)
   const project = projects[proj]
   const items = works[selectedItems];
   const handleNavigation = (direction) => {
      setSelectedItems((prevState) => {
         if (direction === 'prev') {
            return prevState === 0 ? myItems - 1 : prevState - 1;
         } else {
            return prevState === myItems - 1 ? 0 : prevState + 1;
         }
      })
   }


   useGSAP(() => {
      gsap.fromTo(`.animText`, {opacity: 0, y: 30}, {
         opacity: 1,
         y: 0,
         stagger: 0.2,
         duration: 1.5,
         ease: 'power2.inOut',
      });
      gsap.fromTo(`.animTitle`, {opacity: 0}, {
         opacity: 1,
         stagger: 0.2,
         duration: 1.5,
         ease: 'power2.inOut',
      });
      gsap.fromTo(`.certi`, {opacity: 0, y: -20}, {
         opacity: 1,
         y: 0,
         duration: 1,
         stagger: 0.2,
         ease: 'power2.inOut',
      });
   }, [selectedItems]);

   useEffect(() => {
      let interval;

      if (!isHovered) {
         interval = setInterval(() => {
            setProj((prevProj) => (prevProj + 1) % 4)
         }, 5000);
      }

      // Cleanup the interval when hover state changes or component unmounts
      return () => clearInterval(interval);
   }, [isHovered]);



   useGSAP(() => {
      gsap.fromTo(`.disc`, {opacity: 0, y: 30}, {
         opacity: 1,
         y: 0,
         stagger: 0.2,
         duration: 1.5,
         ease: 'power2.inOut',
      });
      gsap.fromTo(`.video`, {opacity: 0, y: -20}, {
         opacity: 1,
         stagger: 0.2,
         y: 0,
         duration: 1.5,
         ease: 'power2.inOut',
      });
      gsap.fromTo(`.animName`, {opacity: 0}, {
         opacity: 1,
         stagger: 0.2,
         duration: 1.5,
         ease: 'power2.inOut',
      });
   }, [proj]);



   return (
      <section className="py-32 max-sm:pt-10 text-white" id="work">
         <motion.div
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
            className="element relative py-10 z-10 flex-wrap"
         >
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 w-full px-4 md:px-10">
               {/* Certificates Section */}
               <motion.div
                  whileHover={{scale: 1.05}}
                  transition={{duration: 0.5}}
                  className="bg-gradient-to-br from-third to-fourth rounded-2xl shadow-2xl p-8"
               >
                  <h3
                     className="text-second font-poppins font-extrabold text-center text-2xl mb-5 hover:scale-105 transition-transform border-b pb-4">
                     🏅 Certificates ✅
                  </h3>

                  <div className="rounded-3xl flex flex-col gap-6 items-center">
                     <motion.div
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.3}}
                        className="w-full max-w-md overflow-hidden shadow-xl rounded-lg certi"
                     >
                        <img
                           src={items.pics}
                           alt="Certification"
                           className="w-full h-[230px] object-fit rounded-lg shadow-lg "
                        />
                     </motion.div>

                     <div className="flex justify-between items-center w-11/12">
                        <button
                           onClick={() => handleNavigation("prev")}
                           className="bg-fourth hover:bg-fifth rounded-full p-2 transition-all duration-300"
                        >
                           ◀️
                        </button>

                        <h3
                           className="text-prime text-center font-poppins py-2 px-6 rounded-full bg-sixth font-black text-lg sm:text-xl animTitle">
                           {items.title}
                        </h3>

                        <button
                           onClick={() => handleNavigation("next")}
                           className="bg-fourth hover:bg-fifth rounded-full p-2 transition-all duration-300"
                        >
                           ▶️
                        </button>
                     </div>

                     <p className="text-white text-sm sm:text-base text-center w-11/12 animText">
                        {items.subdesc}
                     </p>
                  </div>
               </motion.div>

               {/* Projects Section */}
               <motion.div
                  whileHover={{scale: 1.05}}
                  transition={{duration: 0.5}}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="bg-gradient-to-tl from-third to-fifth rounded-2xl shadow-2xl p-8 relative cursor-pointer"
               >
                  <h3
                     className="text-second font-poppins font-extrabold text-center text-2xl hover:scale-105 transition-transform mb-5 border-b pb-4">
                     🚀 Projects 🔥
                  </h3>

                  <motion.div
                     whileHover={{scale: 1.02}}
                     transition={{duration: 0.3}}
                     onClick={() => setProj((prevProj) => (prevProj + 1) % 4)}
                     className="rounded-3xl flex flex-col gap-6 items-center"
                  >
                     {project.src ? (
                        <video
                           className="w-full h-[230px] object-cover rounded-lg shadow-xl max-w-md video"
                           src={project.src}
                           autoPlay
                           muted
                           loop
                           playsInline
                           controls={false}
                        />
                     ) : (
                        <img
                           className="w-full h-[230px] object-cover rounded-lg shadow-xl max-w-md"
                           src={project.image}
                           alt={project.title}
                        />
                     )}


                     <div className="relative  flex flex-col text-center pb-4">
                        <h2
                           className="text-prime font-poppins py-2 px-6 rounded-full bg-sixth font-black text-lg sm:text-xl animName">
                           {project.title}
                        </h2>

                        <p className="text-white text-sm sm:text-base mt-5 disc">
                           {project.desc}
                        </p>
                        <div className="flex justify-between items-center w-full mt-6 disc ">
                           <div className="flex justify-between gap-3">
                              {project.tags.map((tag, index) => (
                                 <motion.div
                                    key={index}
                                    whileHover={{scale: 1.2}}
                                    className="w-10 h-10 rounded-md p-2 bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center"
                                 >
                                    <img src={tag.path} alt={tag.name}/>
                                 </motion.div>
                              ))}

                           </div>
                           {project.link && (
                              <motion.a
                                 whileHover={{scale: 1.1}}
                                 className="flex items-center gap-2 text-teal-300 hover:text-cyan-400  transition-all duration-300"
                                 href={project.link}
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 <p className="font-nunito">Check Live Site</p>
                                 <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                 >
                                    <path
                                       d="M7 17L17 7M17 7H8M17 7V16"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    ></path>
                                 </svg>
                              </motion.a>
                           )}

                        </div>
                     </div>


                  </motion.div>


               </motion.div>
            </div>
         </motion.div>
      </section>

   )
}
export default Work
