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
      <section className="pt-20 max-sm:pt-10" id="work">
         <motion.div
            initial={{opacity: 0, y: 40 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
            className="element  relative py-6 z-10 flex-wrap">
            <h3 className="absolute text-prime tracking-wide font-poppins font-extrabold text-base sm:text-lg md:text-xl xl:text-2xl">
               Workshops</h3>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-20 gap-5 w-full">


               <div className='pb-7 bg-gradient-to-br from-cyan-100 rounded-xl shadow-[0px_0px_1px_rgba(0,0,0,0.3)]'>

                  <div
                     className=" rounded-3xl flex flex-col gap-5 relative justify-center items-center sm:p-10 px-5 py-6 ">

                        <div
                           className="certi w-full h-full max-w-md  overflow-hidden shadow-lg shadow-black/30">
                           <img src={items.pics} alt="certification"
                                className="w-full h-auto object-cover"/>
                        </div>

                     {/*</div>*/}

                     <p className="mt-5 text-base sm:text-lg md:text-xl xl:text-2xl font-poppins font-semibold text-prime animatedText">{items.title}</p>
                     <p className="text-sm sm:text-base md:text-md xl:text-lg animatedText text-black-400 font-nunito text-justify">{items.subdesc}</p>

                  </div>
                  <div className="flex justify-between items-center mx-8">
                     <button type="button"
                             onClick={() => handleNavigation('prev')}
                             className="arrow rounded-full p-1">
                        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                           <polyline points="15.5 5 8.5 12 15.5 19" stroke="currentColor" strokeWidth="2"
                                     strokeLinecap="round" strokeLinejoin="round"/>
                           <polyline points="10 19 3 12 10 5" stroke="currentColor" strokeWidth="2"
                                     strokeLinecap="round" strokeLinejoin="round"/>
                           <polyline points="21 5 14 12 21 19" stroke="currentColor" strokeWidth="2"
                                     strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>


                     </button>

                     <button type="button"
                             onClick={() => handleNavigation('next')}
                             className="arrow rounded-full p-1  ">
                        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                           <polyline id="primary" points="8.5 19 15.5 12 8.5 5" stroke="currentColor" strokeWidth="2"
                                     strokeLinecap="round" strokeLinejoin="round"/>
                           <polyline id="primary-2" data-name="primary" points="14 5 21 12 14 19" stroke="currentColor"
                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           <polyline id="primary-3" data-name="primary" points="3 19 10 12 3 5" stroke="currentColor"
                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                     </button>

                  </div>
               </div>
               {/*    projects */}

               <div

                  onMouseEnter={() => setIsHovered(true)} // Stop switching on hover
                  onMouseLeave={() => setIsHovered(false)} // Resume switching when hover ends
                  className='pb-7 bg-gradient-to-tl from-cyan-100 rounded-xl shadow-[0px_0px_1px_rgba(0,0,0,0.3)]'>

                  <div
                     onClick={() => setProj((prevProj) => (prevProj === 0 ? 1 : 0))}
                     className=" rounded-3xl flex flex-col gap-5 items-center relative sm:p-10 px-5 py-6 ">
                     <div className="max-lg:px-2 px-1 video">
                        <video className="w-full xl:h-72 h-64 lg:h-52 object-cover rounded-xl drop-shadow-xl" src={project.src}
                               autoPlay muted loop
                               playsInline controls={false}/>
                     </div>

                     <div className="relative disc flex justify-center flex-col">
                        <div className="flex flex-row justify-between items-center  my-5 ">
                           <h2
                              className="text-prime  text-base sm:text-lg md:text-xl xl:text-2xl font-poppins font-semibold">{project.title}</h2>
                           <div className="flex flex-row gap-3 justify-center items-center">
                              {project.tags.map((tag, index) => (
                                 <div key={index}
                                      className=" w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center">
                                    <img src={tag.path} alt={tag.name}/>
                                 </div>
                              ))}

                           </div>
                        </div>
                        <p className="text-black-400 font-nunito text-justify text-sm sm:text-base md:text-md xl:text-lg  pb-4">{project.desc}</p>


                     </div>

                  </div>
                  <a
                     className="anch flex items-center gap-2 cursor-pointer text-teal-950 hover:text-cyan-950 absolute right-12 bottom-12 max-sm:right-8 max-lg:right-10"
                     href={project.link}
                     target="_blank"
                     rel="noreferrer"
                  >
                     <p className={"font-nunito"}>Check Live Site</p>
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
