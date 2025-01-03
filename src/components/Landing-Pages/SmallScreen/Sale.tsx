import React from 'react'
import Image from 'next/image'
export const Sale = () => {
  return (
    <div className='bg-[#3b6666]  w-full overflow-hidden'>
        <div className='relative'>
            <h1 className='text-white font-kape text-8xl py-2 tracking-wide'>
               BIGGEST SALE!
            </h1>
            <div className='absolute bottom-0 right-5   z-20 h-[120px] w-[120px] xs:hidden'>
              <Image 
                src="/assets/landing-page/discount.png" 
                alt='sd'
                layout='responsive'
                height={200}
                width={200}
              />
            </div>
        </div>
        <div className=' h-[12rem] '>
          <div className='relative min-h-[10rem] flex items-center bg-[green]'>
            <div className='relative h-full w-[200px] flex'>
                <Image  
                  src="/assets/landing-page/pic-1.jpg" alt=''
                  layout='fill'
                  objectFit='contain'
                />
            </div>
          </div>
        </div>
    </div>
  )
}