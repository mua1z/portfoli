import React from 'react';

const Experience = () => {
  return (
    <div className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-green-400 font-bold'>📚 Experience</h1>

      <div className='mt-6'>
        {/* Financial Services Associate */}
        <div className='bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6'>
          <h2 className='text-xl text-green-500 font-semibold'>💼 Financial Services Associate</h2>
          <p className='text-sm text-green-500 font-thin'>CBE, Harar, Ethiopia</p>
          <p className='text-sm text-green-500 font-thin'>March 2021 – Present</p>
          <ul className='list-disc pl-6 text-white'>
            <li>Managed day-to-day banking operations including deposits, withdrawals, and account servicing.</li>
            <li>Processed over 500+ loan applications with accuracy and compliance to internal policies.</li>
            <li>Provided advisory support to clients on savings, credit, and personal finance options.</li>
            <li>Contributed to the rollout of a mobile banking platform that improved customer access and satisfaction.</li>
          </ul>
        </div>

        {/* Loan and Credit Officer */}
        <div className='bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6'>
          <h2 className='text-xl text-green-500 font-semibold'>🏦 Loan and Credit Officer</h2>
          <p className='text-sm text-green-500 font-thin'>Awash Bank, Aweday, Oromia Regional State, Ethiopia</p>
          <p className='text-sm text-green-500 font-thin'>June 2019 – February 2021</p>
          <ul className='list-disc pl-6 text-white'>
            <li>Evaluated customer creditworthiness, prepared risk assessments, and structured loan terms accordingly.</li>
            <li>Maintained detailed loan records, ensuring compliance with KYC/AML regulations.</li>
            <li>Reduced loan processing times by streamlining client documentation workflows.</li>
          </ul>
        </div>

        {/* Internship – Banking Operations */}
        <div className='bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6'>
          <h2 className='text-xl text-green-500 font-semibold'>🧾 Internship – Banking Operations</h2>
          <p className='text-sm text-green-600 font-thin'>Ramis Bank, Dire Dawa, Ethiopia</p>
          <p className='text-sm text-green-500 font-thin'>January 2024 – May 2025</p>
          <ul className='list-disc pl-6 text-white'>
            <li>Supported front-desk and back-office banking operations.</li>
            <li>Assisted in preparing financial reports and performing data entry with accuracy.</li>
            <li>Gained practical exposure to customer service, account handling, and financial product education.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
