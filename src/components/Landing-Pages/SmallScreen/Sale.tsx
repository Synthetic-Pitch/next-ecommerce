import React from 'react'
import Image from 'next/image'
export const Sale = () => {
  return (
    <div className='bg-[#3b6666]  w-full overflow-hidden '>
        <div className='relative select-none'>
          <h1 className='text-white font-kape text-8xl py-2 tracking-wide'>
              BIGGEST SALE!
          </h1>
          <div className='absolute bottom-0 right-5   z-20 h-[120px] w-[120px] xs:hidden'>
            <Image
              src="/assets/landing-page/discount.png" 
              alt='sd'
              height={100}
              width={100}
            />
          </div>
        </div>

        <div className='pb-6'>
          <section>
            <div className='w-full flex'>
              <aside 
                className="w-1/2 relative flex justify-center items-center">
                <Image
                  src="/assets/landing-page/pic-1.jpg"
                  alt="sd"
                  height={100}
                  width={100}
                  className='w-[95%] xs:w-[280px] max-h-[160px] rounded-r-[20px] rounded-bl-[20px]'
                />
                <Image 
                  src="/assets/landing-page/30-percent-removed.png"
                  alt=''
                  height={100}
                  width={100}
                  className='absolute h-12 w-12 xs:h-14 xs:w-14 -top-2 right-0 xs:-right-2 sm:right-4'
                />
              </aside>
              <article className='w-1/2 flex flex-col items-center justify-center '>
                <span className='font-kape text-[2rem] px-4 rounded-2xl  bg-[teal] select-none'>Fubu Steak</span>
                <p className='text-center text-[13px] text-white font-bold font-sans pt-2 select-none'>Fobu steak is a savory masterpiece, blending tender perfection with rich, mouthwatering flavors.</p>
                <button className='font-kape px-6 py-1 rounded-2xl text-3xl underline text-[#da6767]'>order now -&gt;</button>
              </article>
            </div>

            <div className='w-full flex mt-2'>
              <article className='w-1/2 flex flex-col justify-center items-center'>
                <p className='px-4 font-bold text-[khaki] text-xl select-none'>35% discount</p>
                <p className='px-2 text-[pink] text-center py-2 select-none'>bursts with bold flavors in every bite.</p>
                <span className='font-kape text-4xl bg-[teal] px-4 rounded-2xl select-none  '>Bhugger</span>
              </article>
              <aside className='w-1/2 relative flex justify-center '>
                <Image 
                  src="/assets/landing-page/pic-2.jpg"
                  alt=''
                  width={100}
                  height={10}
                  className='w-[80%] rounded-tr-2xl max-w-[260px]'
                />
              </aside>
            </div>
          </section>
        </div>
    </div>
  )
}