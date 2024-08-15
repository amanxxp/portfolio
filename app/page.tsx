"use client"
import { Vortex } from "@/components/ui/vortex";
import { WavyBackground } from "@/components/ui/wavy-background";
import React, { useEffect, useState } from "react";
const Vorte =()=> (
  <Vortex>
  <div className=" m-10 mt-32 ">
    <div className="flex justify-center items-center gap-2 ">
    <div className="bg-customGreen h-[1.2vh] w-[1.2vh] rounded-full shadow-[0_0_15px_rgba(34,197,94,0.7),0_0_25px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.9),0_0_35px_rgba(34,197,94,0.7)] transition-shadow duration-300"></div>
      <h1 className="text-xl font-bold">Available for Web development</h1>
    </div>
    <div className="flex justify-start ml-[7vw] gap-[2vw] items-center">
        <h1 className="text-[25vh] font-bold">AMAN</h1>
        <p className="w-1/3 leading-[2vh] mt-[60px] font-bold text-customGray">Software engineering enthusiast on the lookout for an internship role, eager to dive into
        real World tech and expand my skills.</p>
    </div>
    <div>
      <h1 className="text-[25vh] font-bold text-end mr-[80px] leading-[10vh]">PANWAR</h1>
    </div>
    <div className="font-bold flex justify-between items-center mt-[180px] text-xl m-8">
      <p>BASED IN DELHI, INDIA</p>
      <p>FULL STACK DEVELOPER</p>
    </div>
  </div>
  </Vortex>
)
const Wave = () =>(
  <WavyBackground>
      <div className=" m-10 mt-32 ">
        <div className="flex justify-center items-center gap-2 ">
        <div className="bg-customGreen h-[1.2vh] w-[1.2vh] rounded-full shadow-[0_0_15px_rgba(34,197,94,0.7),0_0_25px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.9),0_0_35px_rgba(34,197,94,0.7)] transition-shadow duration-300"></div>
          <h1 className="text-xl font-bold">Available for Web development</h1>
        </div>
        <div className="flex justify-start ml-[7vw] gap-[2vw] items-center">
            <h1 className="text-[25vh] font-bold">AMAN</h1>
            <p className="w-1/3 leading-[2vh] mt-[60px] font-bold text-customGray">Software engineering enthusiast on the lookout for an internship role, eager to dive into
            real World tech and expand my skills.</p>
        </div>
        <div>
          <h1 className="text-[25vh] font-bold text-end mr-[80px] leading-[10vh]">PANWAR</h1>
        </div>
        <div className="font-bold flex justify-between items-center mt-[180px] text-xl m-8">
          <p>BASED IN DELHI, INDIA</p>
          <p>FULL STACK DEVELOPER</p>
        </div>
      </div>
      </WavyBackground>
)
function page() {

  const [show,setShow]  = useState(true);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setShow(prev => !prev)
    },10000);
    return ()=>clearInterval(interval);
  },[])
  return (
    <div className="overflow-hidden">
      {show ? <Vorte/>:<Wave/>}
    </div>
  );
}

export default page;
