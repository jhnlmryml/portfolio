import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants/index.js";

const NavItems = ({ onClick = () => {}, activeTab, setActiveTab, setAnimationName }) => {
   const [onChange, setOnChange] = useState(null);

   useEffect(() => {
      if (onChange === null) return;

      const throttleTimer = setTimeout(() => {
         setAnimationName(onChange);
      }, 300);

      return () => {
         clearTimeout(throttleTimer);
      };
   }, [onChange, setAnimationName]);

   return (
      <ul className="nav-ul">
         {navLinks.map(({ id, name, href, animation }) => (
            <li key={id} className={`nav-li ${activeTab === name ? "max-sm:bg-activeBg" : "max-sm:hover:bg-hoverBg"}`}>
               <a
                  href={href}
                  className={`nav-a p-1 ${activeTab === name ? "text-activeHover" : "text-secondary hover:text-hover"}`}
                  onClick={(e) => {
                     e.preventDefault(); // Prevent default anchor behavior
                     setActiveTab(name);
                     document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                     onClick();
                  }}
                  onPointerOver={() => setOnChange(animation)}
                  onPointerOut={() => setOnChange("waving")}
                  role="tab"
                  aria-selected={activeTab === name}
               >
                  {name}
               </a>
            </li>
         ))}
      </ul>
   );
};

const Navbar = ({ setAnimationName }) => {
   const [activeTab, setActiveTab] = useState("Home");
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen(!isOpen);
   const closeMenu = () => setIsOpen(false);

   useEffect(() => {
      const handleScroll = () => {
         let currentSection = "Home"; // Default active section

         navLinks.forEach(({ name, href }) => {
            const section = document.querySelector(href);
            if (section) {
               const sectionTop = section.offsetTop - 150; // Adjust based on navbar height
               if (window.scrollY >= sectionTop) {
                  currentSection = name;
               }
            }
         });

         setActiveTab(currentSection);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);


   const letters = "jhnlmryml".split(""); // Split the logo into individual letters

   const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
         opacity: 1,
         transition: {
            staggerChildren: 0.09,
            delayChildren: 0.09 * i,
         },
      }),
   };

   const jumbledLetter = {
      hidden: {
         y: -50, // Start jumbled (random position)
         opacity: 0,
      },
      visible: {
         y: 0,  // Move to the correct position
         opacity: 1,
         transition: {
            type: "spring",
            stiffness: 500,
            damping: 20,
         },
      },
      hover: {
         y: [-5, 5, -5], // Wave effect on hover
         transition: {
            duration: 0.3,
            repeat: Infinity,
            repeatType: "mirror",
         },
      },
   };


   return (
      <header className="fixed top-0 left-0 right-0 z-50 navbar-container h-16 sm:h-20 w-full">
         <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mx-auto p-4 sm:p-5">
               <motion.div
                  className="font-merriweather text-secondary text-base font-extrabold sm:text-xl md:text-2xl"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
               >
                  {letters.map((letter, index) => (
                     <motion.span key={index} className="inline-block" variants={jumbledLetter}>
                        {letter}
                     </motion.span>
                  ))}
               </motion.div>

               <button
                  aria-label="Toggle menu"
                  onClick={toggleMenu}
                  className="focus:outline-none sm:hidden flex z-30"
               >
                  <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="menu"
                       className="h-6 w-7 hover:scale-150 duration-500 ease-in-out transition-all"/>
               </button>
               <nav className="sm:flex hidden">
                  <NavItems setAnimationName={setAnimationName} activeTab={activeTab} setActiveTab={setActiveTab}/>
               </nav>
            </div>
         </div>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{opacity: 0, x: 20}}
                  animate={{opacity: 1, x: 0}}
                  exit={{opacity: 0}}
                  transition={{duration: 0.5}}
                  className="nav-side"
               >
                  <nav>
                     <NavItems onClick={closeMenu} activeTab={activeTab} setActiveTab={setActiveTab}
                               setAnimationName={setAnimationName} />
                  </nav>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
};

export default Navbar;
