import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featued from './components/Featued'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll'


function App() {
  return (
    <>
    <div className='w-full bg-zinc-900 h-screen'>
    <Navbar/>
    <Landingpage/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Featued/>
    <Cards/>
    </div>
     </>
  )
}

export default App