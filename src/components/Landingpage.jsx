import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";


function Landingpage() {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed=".9" className='w-full h-screen  pt-1 bg-zinc-900  relative'>
        <div  className="text text-white mt-30 px-20">
       {["WE CREATE","EYE OPENING","PRESENTATIONS"].map((item,index)=>{
       return (<div className='mask'>
        <div className='w-fit flex items-end overflow-hidden'>
            {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.45, 0, 0.55, 1],duration:2}} className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500'></motion.div>)}
        <h1 className="pt-[2vw] mb-[1vw] uppercase text-[9vw] font-bold tracking-tighter leading-[.7]">{item}</h1>
        </div>
    </div>);
       })}

        </div>
        <div className="h-1 w-full px-5 bg-zinc-800 mt-20 flex justify-between ">
             
             {["For public and private companies","From the first pitch to IPO"]
             .map((item,index)=><p className='text-xl font-light leading-none  tracking-tight mt-10 text-white'>{item}</p>)}

             <div className=" text-white mt-10 flex items-center gap-2"><button className='border-[2px]   w-60px tracking-tighter px-3  h-8 border-zinc-400 rounded-full'>START THE PROJECT</button>
             <span className='rotate-[45deg] border-[2px] w-5 h-5 items-center justify-center border-zinc-400 rounded-full'><FaLongArrowAltUp />
</span></div>
        </div>


    </div>
  )
}

export default Landingpage