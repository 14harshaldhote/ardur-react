import React from 'react';
import bg from '../../../assets/images/bg2.png';
import Instructions from './Instructions';


function HomePage() {
  return (
    <div className='p-4 md:p-12 lg:p-24 min-h-screen flex flex-col lg:flex-row items-center justify-between bg-blue-900'>
      <div className='flex flex-col justify-center items-start space-y-8 w-full lg:w-1/2'>
        <div className='px-4 lg:px-16'>
          <Instructions />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center space-y-4 w-full lg:w-1/2 mt-8 lg:mt-0'>
        <img src={bg} className='h-64 md:h-80 lg:h-96 object-cover rounded-3xl shadow-2xl' alt="Background" />
        <div className='w-full md:w-3/4 lg:w-80 text-left px-4'>
          <p className='text-white'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
