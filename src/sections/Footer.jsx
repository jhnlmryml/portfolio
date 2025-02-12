import React from 'react'
import {motion} from "framer-motion";

const Footer = () => {
    return (
        <footer
            className="mt-32 font-jetbrains border-t bottom-0 border-hover py-10 flex justify-center items-center  mx-28 max-md:mx-2 ">


           <motion.div
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              className="flex gap-3 justify-center items-center flex-row">

              <p className="text-secondary text-sm sm:text-base md:text-md xl:text-lg">© 2025 Jhon Almar. All rights reserved. </p>
              <div className="">
                 <a href="https://github.com/jhnlmryml" target="_blank" rel="noreferrer">
                 <img src="/assets/github.svg" alt="github" className="w-8 h-8 cursor-pointer"/></a>
              </div>
           </motion.div>


        </footer>
    )
}
export default Footer
