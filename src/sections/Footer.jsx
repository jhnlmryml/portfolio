import React from 'react'
import { motion } from "framer-motion";

const Footer = () => {
   return (
      <footer className="bg-prime text-white py-12 mt-32 border-t-4 border-second max-md:py-8 bottom-0">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:items-center mx-6 sm:mx-28"
         >
            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-center">
               © 2025 Jhon Almar. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
               <a href="https://github.com/jhnlmryml" target="_blank" rel="noreferrer">
                  <motion.img
                     src="/src/assets/github.svg"
                     alt="github"
                     className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-110 hover:rotate-12"
                     whileHover={{ scale: 1.1, rotate: 10 }}
                  />
               </a>
            </div>
         </motion.div>
      </footer>
   );
};

export default Footer;
