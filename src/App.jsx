import './App.css'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Hero from './component/Hero/Hero'
import Navbar from './component/Navbar/Navbar'
import Project from './component/Project/Project'
import { Services } from './component/Services/Services'

function App() {

   return (
      <>
         <Navbar />
         <Hero />
         <About />
         <Services />
         <Project />
         <Contact />
      </>
   )
}

export default App
