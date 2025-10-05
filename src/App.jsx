import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import {useState} from "react";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Work from "./sections/Work.jsx";
import Footer from "./sections/Footer.jsx";
import Loading from "./components/Loading.jsx";

const App = () => {
   const [animationName, setAnimationName] = useState('waving');
   const [started, setStarted] = useState(false)
   return (
      <>
         <Loading started={started} setStarted={setStarted} />
         <main>
            <Navbar setAnimationName={setAnimationName}/>
            <Hero animationName={animationName} />
            <About  />
            <Work/>
            <Contact/>
            <Footer/>
         </main>
      </>

   )
}
export default App