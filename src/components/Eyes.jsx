import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate ]=useState(0);
    useEffect(() => {
        window.addEventListener("mousemove",(e)=>{
            let mouseX=e.clientX;
            let mouseY=e.clientY;
            let deltaY =mouseY -window.innerHeight/2 ;
            let deltaX=mouseX-window.innerWidth/2 ;
            var angle=Math.atan2(-deltaY,-deltaX)*(180/Math.PI);
setRotate(angle);
        })
    
})



  return (
    <div className='w-full h-screen overflow-hidden bg-green gap-4 items-center flex justify-center  bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='eyes    w-[15vw] h-[15vw]   items-center flex justify-center  bg-zinc-100 rounded-full'>
        <div className='eyes relative w-1/2 h-1/2 bg-black rounded-full flex items-center justify-center'>
        <div  style={{transform:` translate(-50% , -50%)rotate(${rotate}deg)`}} className="line absolute  top-1/2 left-1/2   translate-x-[-50%] translate-y-[-50%] w-full h-10"><div className='eyes relative transform w-[2vh] h-[2vh] items-center flex justify-center  bg-zinc-100 rounded-full'></div></div>
        </div>
        </div>
        <div className='eyes w-[15vw] h-[15vw] items-center flex justify-center  bg-zinc-100 rounded-full'>
        < div className='eyes relative w-1/2 h-1/2  bg-black rounded-full items-center flex justify-center'>
        <div  style={{transform:` translate(-50% , -50%)rotate(${rotate}deg)`}} className="line absolute  top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] w-full h-10"><div className='eyes relative transform w-[2vh] h-[2vh] items-center flex justify-center  bg-zinc-100 rounded-full'></div></div>
          
            </div>
        </div>
        </div>

  )
}

export default Eyes