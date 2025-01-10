import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='h-[200px] w-full bg-[#b6b6b6] flex'>
        <figure className='w-1/2  h-full  flex justify-center items-center select-none'>
           <table className='w-[90%]'>

               <caption className='text-black text-2xl font-sans font-bold'>Branches</caption>

               <tbody>
                    <tr className='h-[40px] text-[12px] text-[#4b4b4b]'> 
                        <td className='text-center w-1/2 h-full'>SM Cavite</td>
                        <td className='text-center w-1/2 h-full'>Quezon Circle</td>
                    </tr>
                    
                    <tr className='h-[40px] text-[12px] text-[#4b4b4b]'>
                        <td className='text-center w-1/2 h-full'>SM Marikina</td>
                        <td className='text-center w-1/2 h-full'>Pampanga</td>
                    </tr>
                    
                    <tr className='h-[40px] text-[12px] text-[#4b4b4b]'>
                        <td className='text-center w-1/2 h-full'>Sta. Lucia</td>
                        <td className='text-center w-1/2 h-full'>Pampanga Robinson</td>
                    </tr>
               </tbody>

           </table>
        </figure>

        <section className='w-1/2 flex flex-col justify-center items-center select-none'>
            <ul className='text-[13px] flex flex-col items-center text-[#37424d]'>
                <li className="font-bold">Markies.corporation</li>
                <li>09707331334</li>
                <li>192-23-422-13</li>
            </ul>
            
            <ul className='flex gap-2 py-2'>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaXTwitter/>
                </li>
            </ul>
            <span className="text-[12px] text-[#4e4e4e]">&copy; all right reserve {currentYear}</span>
        </section>
    </footer>
  )
}