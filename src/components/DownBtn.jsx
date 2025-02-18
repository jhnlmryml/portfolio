import React from "react";
import { motion } from "framer-motion";

const fadeVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }, // Smooth fade loop
   },
};

const DownBtn = () => {
   const handleScroll = () => {
      const nextSection = document.getElementById("about");
      if (nextSection) {
         nextSection.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <motion.button
         variants={fadeVariants}
         initial="hidden"
         animate="visible"
         className="p-2 rounded-full bg-transparent z-100 cursor-pointer"
         onClick={handleScroll} // Scrolls on click
      >
         {/* Single Bouncing Arrow */}
         <motion.div
            className="p-2 rounded-full"
            animate={{ y: [0, 10, 0] }} // Bouncing animation
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
         >
            <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M19 11L12 17L5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M19 7L12 13L5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
         </motion.div>
      </motion.button>
   );
};

export default DownBtn;
