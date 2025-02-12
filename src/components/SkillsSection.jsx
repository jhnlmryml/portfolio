import React from 'react'
import {motion} from "framer-motion";
import {skills} from "../constants/index.js";

const SkillsSection = () => {
   return (
      <div className="mt-4">
         <motion.div whileInView={"visible"}>
            <div className="flex flex-row flex-wrap justify-evenly after:content-[''] after:w-60 gap-7 ">

               {skills.map((skill, index) => (
                  <div className="w-60" key={index}>
                     <div className="flex flex-row gap-x-3 items-center justify-center">

                        <motion.div
                           whileHover={{
                              scale: 1.2,
                              rotateY: 360,
                              transition: {duration: 1, ease: "easeInOut",},
                           }}
                           whileTap={{scale: 0.9}}
                           className="w-10 h-10 items-center justify-center flex">
                           <img src={skill.icon} alt={skill.title}/>
                        </motion.div>

                        <div className="w-full">
                           <motion.h3
                              className="font-poppins font-bold  text-secondary"
                              initial={{
                                 opacity: 0,
                              }}
                              variants={{
                                 visible: {
                                    opacity: 1,
                                    transition: {
                                       duration: 1,
                                       delay: 1 + index * 0.2,
                                    },
                                 },
                              }}
                           >
                              {skill.title}
                           </motion.h3>
                           <motion.div
                              className="h-2 w-full bg-tertiary rounded-full mt-2"
                              initial={{
                                 scaleX: 0,
                                 originX: 0,
                              }}
                              variants={{
                                 visible: {
                                    scaleX: 1,
                                    transition: {
                                       duration: 1,
                                       delay: index * 0.2,
                                    },
                                 },
                              }}
                           >
                              <motion.div
                                 className="h-full bg-gradient-to-r from-amber-600 to-amber-500 rounded-full "
                                 style={{width: `${skill.level}%`}}
                                 initial={{
                                    scaleX: 0,
                                    originX: 0,
                                 }}
                                 variants={{
                                    visible: {
                                       scaleX: 1,
                                       transition: {
                                          duration: 1,
                                          delay: 1 + index * 0.2,
                                       },
                                    },
                                 }}
                              />
                           </motion.div>
                        </div>
                     </div>

                  </div>
               ))}
            </div>

         </motion.div>
      </div>
   )
}
export default SkillsSection
