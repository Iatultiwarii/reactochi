import React from 'react'

function Featued() {
  return (
    <div className="featured  bg-zinc-800 ">
        <div className='border-b-[2px] border-zinc-700 p-20 text-white'>
        <h1 className='text-[8vh]'>Featured Projects</h1>
        </div>
        
        <div className='w-full h-screen flex gap-10 p-20'> 
    <div className="cardcontainer w-1/2 h-[80vh] rounded-3xl bg-cover bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png')]"><div className="card "></div></div>
    <div className="cardcontainer w-1/2 h-[80vh] bg-cover rounded-3xl bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg')] "></div></div>
    </div>
    
  )
}

export default Featued