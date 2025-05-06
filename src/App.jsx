import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Experience from './Components/Experience';
import About from './Components/About';



import './index.css';




function App() {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
  
    </div>
  )
}

export default App