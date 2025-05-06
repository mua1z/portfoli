import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Experience from './Components/Experience';
import About from './Components/About';
import Projects from './Components/projects';
import Contact from './Components/Contact';





import './index.css';




function App() {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
    <Navbar/>

     
     <Home/>

{/* Sections with IDs for anchor-based navigation */}


<section id="about">
  <About />
</section>

<section id="experience">
  <Experience />
</section>

<section id="projects">
  <Projects />
</section>

<section id="contact">
  <Contact />
</section>

    
   
    <footer className='text-center text-white py-4 bg-black bg-opacity-30'>
      <p>© 2023 Obsa Amin. All rights reserved.</p>
      <p>Developed by Muaz Amin</p>
    </footer>
  
    </div>
  )
}

export default App