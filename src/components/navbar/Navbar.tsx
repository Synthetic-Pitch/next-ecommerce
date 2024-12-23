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
        <TiThMenu className="h-9 w-9 text-black" onClick={()=>setOpen(!open)}/>
        <Slider open={open} setOpen={setOpen}/>
      </div>

      {/* {MEDIUM VIEW} */}
      <div className="hidden h-full md:flex items-center">
        <div className="text-2xl font-bold text-black flex start w-[30%]">Markies</div>
        <div className="flex grow justify-evenly">
          <div>Home</div>
          <div>Voucher</div>
          <FaCartShopping className="h-6 w-6 text-black"/>
        </div>
      </div>
      
      {/* {LARGE SCREEN} */}
      <div>

      </div>
      
    </div>
  );
};

export default Navbar;
