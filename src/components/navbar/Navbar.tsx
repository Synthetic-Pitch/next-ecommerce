// Navbar.tsx
'use client';
import { TiThMenu } from "react-icons/ti";
import Slider from "../slider/Slider";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  
  return (
    <div className="h-16 bg-[#e9e5c3] relative px-3 md:px-6 lg:px-12">
      {/* MOBILE VIEW */}
      <div className="h-full flex items-center justify-between md:hidden">
        <h2 className="text-xl font-semibold text-black">Markies</h2>
        <TiThMenu className="h-9 w-9 text-black " onClick={()=>setOpen(!open)}/>
        <Slider open={open} setOpen={setOpen}/>
      </div>
      
      {/* {MEDIUM VIEW} */}
      <div className="hidden h-full md:flex items-center lg:hidden">
        <div className="text-2xl font-bold text-black flex start w-[30%]">Markies</div>
        <div className="flex grow justify-evenly">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Voucher</div>
          <FaCartShopping className="h-6 w-6 text-black cursor-pointer"/>
        </div>
      </div>
      
      {/* {LARGE SCREEN} */}
      <div className="hidden lg:flex items-center justify-evenly bg-green-200 h-full">
        <h2 className="font-bold text-3xl text-black tracking-[1px]">Markies</h2>
        <div className="w-[40%] h-full bg-pink-400 flex items-center justify-evenly">
          <div className="cursor-pointer">
            Main Dish
          </div>
          <div className="cursor-pointer">
            Desert
          </div>
          <div className="cursor-pointer">
            Beverages
          </div>
        </div>

        <div className="">
          asd
        </div>
      </div>
    </div>
  );
};

export default Navbar;
