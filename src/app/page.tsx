import { Sale } from "@/components/Landing-Pages/SmallScreen/Sale";
import { Scroll } from "@/components/Landing-Pages/SmallScreen/Scroll";
import { SmallScreen } from "@/components/Landing-Pages/SmallScreen/SmallScreen";

export default function Home() {
  
  return (
   <div>
      <div
        className=" md:hidden"
      >
        <SmallScreen/>
        <Scroll/>
        <Sale/>
      </div>
   </div>
  );
}
