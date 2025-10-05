import React, {useRef, useState} from 'react'
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser'
import {ToastContainer, toast} from 'react-toastify';
import { Bounce} from "react-toastify/unstyled";


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
      <section className="relative pt-20 max-sm:pt-10" id="contact">
         <div className="flex justify-center items-center px-8 ">
            <motion.div
               initial={{opacity: 0, y: 50}}
               whileInView={{opacity: 1, y: 0}}
               transition={{duration: 0.8, ease: "easeOut"}}
               className="relative bg-gradient-to-br from-third to-fourth rounded-3xl shadow-2xl p-10 w-full max-w-2xl border border-sixth/30 backdrop-blur-xl"
            >
               <div className="text-center w-full">
                  <h3 className="text-prime font-poppins font-extrabold text-xl md:text-2xl xl:text-3xl mb-4">
                     Let’s Create Something Great!!
                  </h3>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                     From vision to execution, I’m committed to delivering solutions that drive success. 🤝 Let’s connect and bring your ideas to life! 💡✨
                  </p>
               </div>

               <motion.form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="mt-6 flex flex-col space-y-5"
               >
                  {/* Input Fields */}
                  {[
                     {name: "name", placeholder: "Phoenix Jpri", type: "text", icon: "/assets/user.svg", emoji: "🧑🏻‍💼"},
                     {name: "email", placeholder: "phoenix@gmail.com", type: "email", icon: "/assets/email.svg", emoji: "📧"},
                  ].map((field, index) => (
                     <div key={index} className="relative">
                        <div
                           className="flex items-center bg-white rounded-lg px-4 py-2 shadow-lg ring-1 ring-fourth focus-within:ring-third transition-all">
                           <span className="text-lg mr-2">{field.emoji}</span>
                           <input
                              type={field.type}
                              name={field.name}
                              value={form[field.name]}
                              onChange={handleChange}
                              required
                              className="w-full bg-transparent focus:outline-none text-black placeholder-gray-500 font-jetbrains"
                              placeholder={field.placeholder}
                           />
                        </div>
                     </div>
                  ))}

                  {/* Message Field */}
                  <div className="relative">
                     <div
                        className="flex bg-white rounded-lg px-4 py-3 shadow-lg ring-1 ring-fourth focus-within:ring-third transition-all">
                        <span className="text-lg mr-2">💬</span>
                        <textarea
                           name="message"
                           value={form.message}
                           onChange={handleChange}
                           rows={5}
                           required
                           className="w-full bg-transparent focus:outline-none text-black placeholder-gray-500 resize-none font-jetbrains"
                           placeholder="I’d like to discuss an exciting opportunity with you... ✨"
                        />
                     </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                     type="submit"
                     disabled={loading}
                     whileHover={{scale: 1.05}}
                     whileTap={{scale: 0.95}}
                     className="relative font-poppins font-bold flex justify-center items-center p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-2xl transition-all"
                  >
                     {loading ? "Sending...🚀" : "Send Message 📩"}
                     {/*<svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                     {/*   <path*/}
                     {/*      d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"*/}
                     {/*      stroke="currentColor" strokeWidth="2"/>*/}
                     {/*   <path d="M14.5 9.5L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
                     {/*         strokeLinejoin="round"/>*/}
                     {/*   <path d="M10 9H14.6717C14.853 9 15 9.14703 15 9.32837V14" stroke="currentColor" strokeWidth="2"*/}
                     {/*         strokeLinecap="round" strokeLinejoin="round"/>*/}
                     {/*</svg>*/}
                  </motion.button>
               </motion.form>
            </motion.div>
         </div>

         {/* Toast Notification */}
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
