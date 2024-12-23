import Link from "next/link";

interface SlideProps {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Slider: React.FC<SlideProps> = ({ open,setOpen }) => {

 
  
  return (
    <div
      className={`absolute top-16 left-0 w-1/2 h-[calc(100dvh-64px)] bg-[gray] ${open?"left-0":"-left-full"} overflow-hidden transition-all duration-300`}
    >
      <div 
        className="flex flex-col items-center mt-4  h-[100%] font-semibold  text-white text-xl tracking-widest"
        onClick={()=>setOpen(false)}
      >
        <Link href="/" className="w-full py-4 flex justify-center">Home</Link>
        <Link href="/main-dish" className="w-full py-4 flex justify-center">Main-Dish</Link>
        <Link href="/beverage" className="w-full py-4 flex justify-center">Beverage</Link>
        <Link href="/desert" className="w-full py-4 flex justify-center">Desert</Link>
        <Link href="/voucher" className="w-full py-4 flex justify-center">Voucher</Link>
        <Link href="/cart" className="w-full py-4 flex justify-center">Cart</Link>
      </div>
    </div>
  );
};

export default Slider;