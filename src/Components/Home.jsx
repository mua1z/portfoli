import React from 'react'
import Photo from '../assets/Photo/photo_2025-04-21_14-01-08.jpg'


const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>

        <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-2xl md:text-5xl font-bold flex leading-normal tracking-tighter'>Hey There! I'm Obsa Amin</h1>
            <h6 className='text-2xl md:text-4xl font-bold flex leading-normal tracking-tighter'>Banking and Financial Professional</h6>
            <p className='text-sm md:text-2xl tracking-tight'>With a strong passion for delivering secure, efficient, and customer-focused financial solutions, I bring proven experience in banking operations, loan processing, and financial compliance. Whether supporting digital banking platforms or working directly with clients, I strive to ensure trust, accuracy, and excellence in every financial transaction.</p>

            <button className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-blue-300 '>Contact Me</button>
            </div>
            <div><img className='w-2/5 rounded-full' src={Photo} alt='Obsa'></img></div>
    </div>
  )
}

export default Home