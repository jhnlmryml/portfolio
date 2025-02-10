import React, {useEffect, useState} from 'react'
import {motion} from "framer-motion";
import {projects, works} from "../constants/index.js";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const myItems = works.length;

const Work = () => {
   const [selectedItems, setSelectedItems] = useState(0)
   const [isHovered, setIsHovered] = useState(false); // Track hover state
   const [onChange, setOnChange] = useState(0);
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
      gsap.fromTo(`.animatedText`, {opacity: 0}, {
         opacity: 1,
         duration: 1,
         stagger: 0.2,
         ease: 'power2.inOut',
      });
      gsap.fromTo(`.certi`, {opacity: 0, y: -40}, {
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
            setProj((prevProj) => (prevProj === 0 ? 1 : 0));
         }, 5000);
      }

      // Cleanup the interval when hover state changes or component unmounts
      return () => clearInterval(interval);
   }, [isHovered]);



   useGSAP(() => {
      gsap.fromTo(`.disc`, {opacity: 0, y: 50}, {
         opacity: 1,
         y: 0,
         stagger: 0.2,
         duration: 1.5,
         ease: 'power2.inOut',
      });
      gsap.fromTo(`.video`, {opacity: 0, y: -40}, {
         opacity: 1,
         stagger: 0.2,
         y: 0,
         duration: 1.5,
         ease: 'power2.inOut',
      });
      gsap.fromTo(`.anch`, {opacity: 0, x: 50}, {
         opacity: 1,
         x: 0,
         stagger: 0.2,
         duration: 1.5,
         ease: 'power2.inOut',
      });
   }, [proj]);



   return (
      <section className="h-fit xl:h-dvh mt-20 flex justify-center flex-wrap items-center pt-20 max-sm:p-0 max-sm:pt-16 max-md:mt-0 max-md:p-0 sm:px-10 px-0 "
               id="work">
         <motion.div
            initial={{opacity: 0, y: 40 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
            className="element  relative py-6 z-10 flex-wrap px-4 sm:px-6 lg:px-12 ">
            <h3
               className="absolute text-hover tracking-wide font-merriweather  text-base sm:text-lg md:text-xl xl:text-2xl">Certification's
               & Project's</h3>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-20 gap-5 w-full">


               <div className='pb-7 bg-gradient-to-t from-slate-900 rounded-xl '>

                  <div
                     className=" rounded-3xl flex flex-col gap-5 relative sm:p-10 px-5 py-6 ">
                     <div className="absolute top-0 right-0">
                        <img src={items.spotlight} alt="spotlight"
                             className="w-full h-96 object-cover rounded-xl"/>
                     </div>
                     <div className="relative flex justify-center">
                        <div
                           className="certi w-full h-full max-w-md rounded-2xl overflow-hidden shadow-lg shadow-black/30">
                           <img src={items.pics} alt="certification"
                                className="w-full h-auto object-cover"/>
                        </div>

                     </div>

                     <p className="mt-5 text-base sm:text-lg md:text-xl xl:text-2xl font-ibm font-semibold text-primary animatedText">{items.title}</p>
                     <p className="text-sm sm:text-base md:text-md xl:text-lg animatedText text-secondary text-justify">{items.subdesc}</p>

                  </div>
                  <div className="flex justify-between items-center mx-8">
                     <button type="button"
                             onClick={() => handleNavigation('prev')}
                             className="arrow rounded-full p-1">
                        {/*<img src="/assets/left.svg" alt="left arrow" className="w-8 h-8"/>*/}
                        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10"
                             xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M13 8L9 12M9 12L13 16M9 12H21M19.4845 7C17.8699 4.58803 15.1204 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.1204 21 17.8699 19.412 19.4845 17"
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                     </button>

                     <button type="button"
                             onClick={() => handleNavigation('next')}
                             className="arrow rounded-full p-1  ">
                        {/*<img src="/assets/right.svg" alt="right arrow" className="w-8 h-8"/>*/}
                        <svg  viewBox="0 0 24 24" fill="none" className="w-10 h-10"
                             xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7"
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                     </button>

                  </div>
               </div>
               {/*    projects */}

               <div

                  onMouseEnter={() => setIsHovered(true)} // Stop switching on hover
                  onMouseLeave={() => setIsHovered(false)} // Resume switching when hover ends
                  className='pb-7 bg-slate-900 rounded-xl '>

                  <div
                     onClick={() => setProj((prevProj) => (prevProj === 0 ? 1 : 0))}
                     className=" rounded-3xl flex flex-col gap-5 items-center relative sm:p-10 px-5 py-6 ">
                     <div className="max-lg:px-2 px-1 video">
                        <video className="w-full xl:h-72 h-64 lg:h-52 object-cover rounded-xl " src={project.src}
                               autoPlay muted loop
                               playsInline controls={false}/>
                     </div>

                     <div className="relative disc flex justify-center flex-col">
                        <div className="flex flex-row justify-between items-center  my-5 ">
                           <h2
                              className="text-primary  text-base sm:text-lg md:text-xl xl:text-2xl font-ibm font-semibold">{project.title}</h2>
                           <div className="flex flex-row gap-3 justify-center items-center">
                              {project.tags.map((tag, index) => (
                                 <div key={index}
                                      className=" w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center">
                                    <img src={tag.path} alt={tag.name}/>
                                 </div>
                              ))}

                           </div>
                        </div>
                        <p className="text-secondary font-ibm text-justify text-sm sm:text-base md:text-md xl:text-lg  pb-4">{project.desc}</p>


                     </div>

                  </div>
                  <a
                     className="anch flex items-center gap-2 cursor-pointer text-white hover:text-hover absolute right-24 bottom-12 max-sm:right-12 max-lg:right-16"
                     href={project.link}
                     target="_blank"
                     rel="noreferrer"
                  >
                     <p>Check Live Site</p>
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
                  </a>
               </div>
            </div>


         </motion.div>


      </section>
   )
}
export default Work
