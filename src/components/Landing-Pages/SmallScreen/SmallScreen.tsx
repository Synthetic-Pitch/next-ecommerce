'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router
import React from 'react';

export const SmallScreen = () => {
  const router = useRouter();

  const MainDish = () => {
    router.push('/main-dish'); // Correctly navigate using next/navigation
  };

  const Desert = () =>{
    router.push('/desert');
  }
  const Beverages = () =>{
    router.push('/beverages');
  }
  return (
    <div>
      <header className="bg-gradient-to-l from-[gray] to-[#c4f6ff] h-[40dvh] w-full flex flex-col items-center justify-center py-4 mt-16 relative">
        {/* Main Dish Section */}
        <section
          onClick={MainDish}
          className="h-[30%] bg-gradient-to-r from-[white] to-[skyblue] w-[90%] flex rounded-[20px] shadow-md shadow-[#505050] border-[black] cursor-pointer"
        >
          <div className="relative w-[50%] h-full flex justify-center items-center">
            <Image
              src="/assets/main-dish/maindish-selection-removebg-preview.png"
              alt="Main Dish"
              height={100} width={100}
              className='h-[80px] w-[auto]'
            />
          </div>
          <div className="flex items-center justify-center w-[50%] font-bold">
            <span className="font-tinapa text-[20px] text-[gray] tracking-[2px] select-none">
              MAIN DISH
            </span>
          </div>
        </section>

        {/* Dessert Section */}
        <section 
          onClick={Desert}
          className="h-[30%] bg-gradient-to-r from-[white] to-[skyblue] w-[90%] flex rounded-[20px] shadow-md shadow-[#505050] mt-4 border-[black]">
          <div className="relative w-[50%] h-full flex justify-center">
            <Image
              src="/assets/main-dish/donut.png"
              alt="Dessert"
              height={100} width={100}
              className='h-[80px] w-[auto]'
            />
          </div>
          <div className="flex items-center justify-center w-[50%] font-bold">
            <span className="font-tinapa text-[20px] text-[gray] tracking-[2px] select-none">
              DESSERT
            </span>
          </div>
        </section>
          
        {/* Beverages Section */}
        <section 
          onClick={Beverages}
          className="h-[30%] bg-gradient-to-r from-[white] to-[skyblue] w-[90%] flex rounded-[20px] shadow-md shadow-[#505050] mt-4 border-[black]">
          <div className="relative w-[50%] h-full flex justify-center items-center -mt-2">
            <Image
              src="/assets/main-dish/download-removebg-preview.png"
              alt="Beverages"
              height={100} width={100}
              className='h-[80px] w-[auto]'
            />
          </div>
          <div className="flex items-center justify-center w-[50%] font-bold">
            <span className="font-tinapa text-[20px] text-[gray] tracking-[2px] select-none">
              BEVERAGES
            </span>
          </div>
        </section>
      </header>
    </div>
  );
};
