// Navbar.tsx
'use client';
import { TiThMenu } from "react-icons/ti";
import Slider from "../slider/Slider";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  
  useEffect(()=>{
    if(open){
      console.log("open");
    }else console.log("close");
  },[open])
  
  return (
    <div className="h-16 bg-[#e9e5c3] relative px-3 md:px-6 lg:px-12">
      {/* MOBILE VIEW */}
      <div className="h-full flex items-center justify-between md:hidden">
        <h2 className="text-xl font-semibold text-black">Markies</h2>
        <TiThMenu className="h-9 w-9 text-black" onClick={()=>setOpen(!open)}/>
        <Slider open={open} setOpen={setOpen}/>
      </div>
    </div>
  );
};

export default Navbar;
