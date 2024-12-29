import Image from 'next/image';
import React from 'react';

export const SmallScreen = () => {
  return (
    <div>
      <header className='bg-[#b4a9a9] h-[40dvh] w-full flex flex-col items-center justify-center py-4'>
        <section className='h-[30%] bg-[#466975] w-[90%] flex rounded-[20px] shadow-sm'>
          <div className="relative w-[50%] h-full ">
            <Image 
              src="/assets/main-dish/maindish-selection-removebg-preview.png" alt=''
              layout='fill'
              objectFit='fit'/
            >
          </div>
          <div 
            className='flex items-center justify-center w-[50%] font-bold'
          >
            <span className='font-tinapa text-[20px] text-white tracking-[2px]'>MAIN DISH</span>
          </div>
        </section >
          
        <section className='h-[30%] bg-[#294752] w-[90%] flex rounded-[20px] shadow-sm mt-4'>
        <div className="relative w-[50%] h-full ">
            <Image 
              src="/assets/main-dish/donut.png" alt=''
              layout='fill'
              objectFit='fit'/
            >
          </div>
          <div 
            className='flex items-center justify-center  w-[50%] font-bold'
          >
            <span className='font-tinapa text-[20px] text-white tracking-[2px]'>Desert</span>
          </div>
        </section>
        
        <section className='h-[30%] bg-[#0c1518] w-[90%] flex rounded-[20px] shadow-sm mt-4'>
        <div className="relative w-[50%] h-full ">
            <Image 
              src="/assets/main-dish/download-removebg-preview.png" alt=''
              layout='fill'
              objectFit='fit'/
            >
          </div>
          <div 
            className='flex items-center justify-center  w-[50%] font-bold'
          >
            <span className='font-tinapa text-[20px] text-white tracking-[2px]'>Beverages</span>
          </div>
        </section>
      </header>
    </div>
  )
};