import React, {useRef, useState} from 'react'
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser'
import {ToastContainer, toast} from 'react-toastify';
import {Slide, Bounce} from "react-toastify/unstyled";


const Contact = () => {
   const formRef = useRef();

   const [loading, setLoading] = useState(false);
// service id
   const [form, setForm] = useState({
      name: '',
      email: '',
      message: '',
   })

   const handleChange = ({target: {name, value}}) => {
      setForm({...form, [name]: value});
   }
   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
         await emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            {
               from_name: form.name,
               to_name: "JHNLMRYML",
               from_email: form.email,
               to_email: "yjhonalmar@gmail.com",
               message: form.message

            }, import.meta.env.VITE_PUBLIC_KEY,)
         setLoading(false);
         toast.success('Thank you for your message 😃', {
            position: "bottom-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
         });
         setForm({
            name: '',
            email: '',
            message: '',
         })
      } catch (error) {
         setLoading(false);
         toast.error("I didn't receive your message 😢", {
            position: "bottom-right",
            autoClose: 1700,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
         });
      }


   };

   return (
      <section className=" pt-20 max-sm:pt-10" id="contact">
         <div className={"flex justify-center items-center  px-4 sm:px-6 lg:px-12"}>
            <motion.div
               initial={{opacity: 0, x: -50}}
               whileInView={{opacity: 1, x: 0}}
               transition={{duration: 0.5}}
               className=" grid-container rounded-3xl py-10 z-10 mt-12 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 "
            >
               <div className="mb-7 text-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  <h3
                     className="text-prime tracking-wide font-poppins font-semibold my-2 text-base sm:text-lg md:text-xl xl:text-2xl">
                     Let’s Create Something Great!!
                  </h3>
                  <motion.p
                     className="text-justify tracking-wide font-nunito text-prime text-sm sm:text-base md:text-md xl:text-lg">
                     From vision to execution, I’m committed to delivering solutions that drive success. Let’s
                     connect and bring your
                     ideas to life.
                  </motion.p>
               </div>

               <motion.form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
               >
                  {/* Name Input */}
                  <div className="mt-3">
                     <label htmlFor="name" className="block mb-2">
                        <span className="text-prime font-poppins text-sm font-extrabold sm:text-base md:text-lg xl:text-xl">Full Name</span>
                     </label>
                     <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-neutral-100">
                        <img src="/assets/user.svg" alt="Name Icon" className="w-5 h-5 sm:w-6 sm:h-6 mr-2"/>
                        <input
                           type="text"
                           name="name"
                           id="name"
                           value={form.name}
                           onChange={handleChange}
                           required
                           className="flex-1 rounded-lg px-2 py-2  text-ellipsis font-jetbrains outline-none bg-transparent placeholder-neutral-500 text-sm sm:text-base"
                           placeholder="Phoenix Jpri"
                        />
                     </div>
                  </div>

                  {/* Email Input */}
                  <div className="mt-3">
                     <label htmlFor="email" className="block mb-2">
                            <span
                               className="text-prime font-poppins font-extrabold text-sm sm:text-base md:text-lg xl:text-xl">Email Address</span>
                     </label>
                     <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-neutral-100">
                        <img src="/assets/email.svg" alt="Email Icon" className="w-5 h-5 sm:w-6 sm:h-6 mr-2"/>
                        <input
                           type="email"
                           name="email"
                           id="email"
                           value={form.email}
                           onChange={handleChange}
                           required
                           className="flex-1 rounded-lg px-2 py-2 font-jetbrains text-ellipsis outline-none bg-transparent placeholder-neutral-500 text-sm sm:text-base"
                           placeholder="phoenix@gmail.com"
                        />
                     </div>
                  </div>

                  {/* Message Input */}
                  <div className="mt-3">
                     <label htmlFor="message" className="block mb-2">
                            <span
                               className="text-prime text-sm font-poppins font-extrabold sm:text-base md:text-lg xl:text-xl">Your Message</span>
                     </label>
                     <div className="flex items-start border border-gray-300 rounded-lg px-3 bg-neutral-100">
                        <img src="/assets/message.svg" alt="Message Icon"
                             className="w-5 h-5 sm:w-6 sm:h-6 mr-2 mt-2"/>
                        <textarea
                           name="message"
                           id="message"
                           value={form.message}
                           onChange={handleChange}
                           rows={5}
                           required
                           className="flex-1 rounded-lg font-jetbrains px-2 py-2 text-ellipsis outline-none bg-transparent resize-none placeholder-neutral-500 text-sm sm:text-base"
                           placeholder="I’d like to discuss an exciting opportunity with you..."
                        />
                     </div>
                  </div>
                  <button
                     type="submit"
                     disabled={loading}
                     className="relative font-poppins font-bold flex my-8 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
            text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500
            hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
               <span
                  className="relative flex items-center justify-center gap-2 w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
               {loading ? 'Sending...' : 'Send Message'}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                           stroke="currentColor" strokeWidth="2"/>
                        <path d="M14.5 9.5L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M10 9H14.6717C14.853 9 15 9.14703 15 9.32837V14" stroke="currentColor" strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"/>
                  </svg>
               </span>
                  </button>

               </motion.form>
            </motion.div>
         </div>

         <ToastContainer
            position="bottom-right"
            autoClose={1700}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
         />
      </section>
   )
}
export default Contact
