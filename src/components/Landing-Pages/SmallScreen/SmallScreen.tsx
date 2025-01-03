import Image from 'next/image';
import React from 'react';

export const SmallScreen = () => {

  return (
    <div>
      <header className='bg-gradient-to-l from-[gray] to-[#c4f6ff] h-[40dvh] w-full flex flex-col items-center justify-center py-4'>
        <section
          className='h-[30%]  bg-gradient-to-r from-r from-[white] to-[skyblue]  w-[90%] flex rounded-[20px] shadow-md shadow-[#505050] border-[black] '
        >
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
            <span className='font-tinapa text-[20px] text-[gray] tracking-[2px]'>MAIN DISH</span>
          </div>
        </section >
          
        <section className='h-[30%] bg-gradient-to-r from-r from-[white] to-[skyblue]  w-[90%] flex rounded-[20px] shadow-md shadow-[#505050] mt-4 border-[black]'>
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
            <span className='font-tinapa text-[20px] text-[gray] tracking-[2px]'>Desert</span>
          </div>
        </section>
        
        <section className='h-[30%] bg-gradient-to-r from-r from-[white] to-[skyblue] w-[90%] flex rounded-[20px] shadow-md shadow-[#505050] mt-4 border-[black]'>
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
            <span className='font-tinapa text-[20px] text-[gray] tracking-[2px]'>Beverages</span>
          </div>
        </section>
      </header>
    </div>
  )
};