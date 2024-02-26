import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
   
    <div data-scroll data-scroll-speed="-." className='text bg-green-800  w-full whitespace-nowrap absolute py-10'>
        <div className='border-t-2 border-b-2  w-full flex '>
            <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:3,repeat:Infinity}}className='text-[13vw] leading-none w-full font-semibold'>WE ARE OCHI</motion.h1>
            <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:3,repeat:Infinity}}className='text-[13vw] leading-none w-full font-semibold'>WE ARE OCHI</motion.h1>
     

        </div>
    </div>
  )
}

export default Marquee