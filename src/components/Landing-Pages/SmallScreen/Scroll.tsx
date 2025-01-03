'use client';
import React from 'react';
import Image from 'next/image';

export const Scroll: React.FC = () => {
  const handleScroll = () => {
    const container = document.getElementById('sale-container');
    const middleItem = document.getElementById('middle-item');
        
    if (container && middleItem) {
      // Calculate the position to scroll to so the middle item is centered
      const containerWidth = container.offsetWidth;
      const itemOffsetLeft = middleItem.offsetLeft;
      const itemWidth = middleItem.offsetWidth;

      // Scroll to the position that centers the middle item
      const scrollLeft = itemOffsetLeft - containerWidth / 2 + itemWidth / 2;
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  // Call handleScroll when the component mounts
  React.useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div
      id="sale-container"
      className="Sale-Com flex items-center overflow-x-scroll bg-[#474747] h-40 px-4"
      aria-label="Sale items"
    >
      <ul className="flex items-center gap-4 w-auto h-full">
        <li className="h-[90%] w-[200px]" aria-label="Sale item 1">
          <div className="relative w-full h-full">
            <Image src="/assets/landing-page/scroll-1.jpg" alt="" layout="fill" objectFit="fill" />
          </div>
        </li>
        <li className="h-[90%] w-[200px]" aria-label="Sale item 2">
          <div className="relative w-full h-full">
            <Image src="/assets/landing-page/scroll-2.jpg" alt="" layout="fill" objectFit="fill" />
          </div> 
        </li>
        <li
          id="middle-item" // ID for the middle item
          className="h-[90%] w-[200px]"
          aria-label="Sale item 3"
        >
          <div className="relative w-full h-full">
            <Image src="/assets/landing-page/scroll-3.jpg" alt="" layout="fill" objectFit="fill" />
          </div> 
        </li>
        <li className="h-[90%] w-[200px]" aria-label="Sale item 4">
          <div className="relative w-full h-full">
            <Image src="/assets/landing-page/scroll-4.jpg" alt="" layout="fill" objectFit="fill" />
          </div> 
        </li>
        <li className="h-[90%] w-[200px]" aria-label="Sale item 4">
          <div className="relative w-full h-full">
            <Image src="/assets/landing-page/scroll-5.jpg" alt="" layout="fill" objectFit="fill" />
          </div> 
        </li>
        <li className="h-[90%] w-[200px]" aria-label="Sale item 4">
          <div className="relative w-full h-full">
            <Image src="/assets/landing-page/scroll-6.jpg" alt="" layout="fill" objectFit="fill" />
          </div> 
        </li>
        <li className="h-[90%] w-[200px]" aria-label="Sale item 4">
          <div className="relative w-full h-full">
            <Image src="/assets/landing-page/scroll-7.jpg" alt="" layout="fill" objectFit="fill" />
          </div> 
        </li>
      </ul>
    </div>
  );
};