'use client';
import Link from "next/link";

interface SlideProps {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Slider: React.FC<SlideProps> = ({ open,setOpen }) => {
  
  const handleSetslider = () => {
    setOpen((prev)=>!prev);
  }
  
  return (
    <div
      className={`absolute top-16  w-1/2 h-[calc(100dvh-64px)] bg-[gray] ${open?"left-0":"-left-full"} overflow-hidden transition-all duration-300 ease-in-out z-20`}
    >
      <div 
        className="flex flex-col items-center mt-4  h-[100%] font-semibold  text-white text-xl tracking-widest"
       
      >
        <Link 
           href="/" 
           className="w-full py-4 flex justify-center"
           onClick={handleSetslider}
           >Home</Link>
        <Link 
           href="/main-dish" 
           className="w-full py-4 flex justify-center"
           onClick={handleSetslider}
           >Main-Dish</Link>
        <Link 
           href="/beverage" 
           className="w-full py-4 flex justify-center"
           onClick={handleSetslider}
           >Beverage</Link>
        <Link 
           href="/desert" 
           className="w-full py-4 flex justify-center"
           onClick={handleSetslider}
           >Desert</Link>
        <Link 
           href="/voucher" 
           className="w-full py-4 flex justify-center"
           onClick={handleSetslider}
           >Voucher</Link>
        <Link 
           href="/cart" 
           className="w-full py-4 flex justify-center"
           onClick={handleSetslider}
           >Cart</Link>
      </div>
    </div>
  );
};

export default Slider;