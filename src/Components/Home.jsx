import React from 'react'
import Photo from '../assets/Photo/photo_2025-04-21_14-01-08.jpg'
import TextChange from './TextChange'






const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
 
        <div className='md:w-2/4 md:pt-10'>f
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'  ><img className='w-2/5 rounded-full  ml-20 mb-10' src={Photo} alt='Obsa'></img></div>
          <h1 className='text-xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
            <TextChange/>
            </h1>
            <h6 className='text-2xl md:text-2xl font-bold flex leading-normal tracking-tighter text-green-700'>Banking and Financial Professional</h6>
            <p className='text-sm md:text-2xl tracking-tight'>With a strong passion for delivering secure, efficient, and customer-focused financial solutions, I bring proven experience in banking operations, loan processing, and financial compliance. Whether supporting digital banking platforms or working directly with clients, I strive to ensure trust, accuracy, and excellence in every financial transaction.</p>

            
  <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-blue-300'> <a
    href="https://t.me/Muas_tech" // Replace with your actual Telegram username
    target="_blank"
    rel="noopener noreferrer"
    
  >
  💬 Contact Me
  </a>
   
  </button> 
            </div>
            
           
    </div>
  )
}

export default Home