import React from 'react'
import Photo from '../assets/Photo/photo_2025-04-21_14-01-08.jpg'


const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div >

            <h2 className='text-2xl md:text-4xl font-bold '> About Me</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className='md:h-80 mr-6   rounded-b-full' src={Photo} alt='Obsa'/>
                <ul>

                <div className='flex gap-3 py-4'>

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal text-green-600' >Financial Service</h1>
                            <p className='text-sm md:text-md leading-tight' >I’m Obsa Amin, a dedicated banking and financial services professional with a strong track record in providing reliable, compliant, and customer-centered support within the financial industry. I am passionate about helping individuals and businesses navigate their financial journeys through clear communication, responsible advising, and operational excellence.

With a background in retail and commercial banking, I have experience across various financial functions — from loan and credit services to compliance monitoring and digital banking platforms. I thrive in environments where integrity, attention to detail, and customer trust are paramount.

I believe that finance isn't just about numbers — it's about empowering people with knowledge, access, and opportunity.

</p>

                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                       

                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal text-green-600' > Education</h1>
                            <p className='text-sm md:text-md leading-tight' >Bachelor’s Degree in Banking and Finance
University of Dire Dawa , Dire Dawa, Ethiopia

</p>

                        </span>
                    </div>


                 
                </ul>
            </div>
        </div>
    </div>
  );
};

export default About