'use client'

import { alphabetical, bestSale, byPrice, resetFilter } from '@/app/redux/filterSlice';
import React, { useState } from 'react'
import { CiFilter } from "react-icons/ci";
import { useDispatch } from 'react-redux';





const Filter: React.FC = () => {
   const [open,setopen] = useState<boolean>(false);
   const dispatch = useDispatch();
 
   const handleOpen = () =>{
      setopen(!open)
   }
   
   const handleFilter =(FilterType: 'bestSale' | 'byPrice' | 'alphabetical' | 'none') => {
      switch (FilterType) {
         case 'bestSale':
            dispatch(bestSale());
            break;
         case  'byPrice':
            dispatch(byPrice());
            break
         case  'alphabetical':
            dispatch(alphabetical());
            break
         case  'none':
            dispatch(resetFilter());
            break  
      }
      
   }

   return (
      <div className='bg-[#ececec] p-2'>
         <div onClick={handleOpen} className='flex items-center gap-1 h-6 cursor-pointer select-none'>
            <h2 className='font-semibold'>filter</h2>
            <span className='relative h-full flex items-center'>
               <CiFilter/>
               {  open &&
                  <div 
                     className='absolute bg-[#ffffff] left-full top-0 w-[200px] z-10 border-2'
                  >
                     <ul className='w-full h-full flex flex-col text-sm overflow-hidden gap-2  p-2'>
                        <li onClick={()=>handleFilter('bestSale')} className='w-full cursor-pointer p-1'>&#x2022; best sale</li>
                        <li onClick={()=>handleFilter('byPrice')} className='w-full cursor-pointer p-1'>&#x2022; from lower to higher prices</li>
                        <li onClick={()=>handleFilter('alphabetical')} className='w-full cursor-pointer p-1'>&#x2022; alphabetical</li>
                        <li onClick={()=>handleFilter('none')} className='w-full cursor-pointer p-1'>&#x2022; no filter</li>
                     </ul>
                    
                  </div>
               }
            </span>
           
         </div>

      </div>
   )
}

export default Filter