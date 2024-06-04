import React from 'react'

function Homepage() {
  return (
    <div id="slide1" className=' relative mt-[-170px] overflow-hidden  h-[100vh] bg-[--blackgreen] m-auto'>
        <a href="#slide2" className=' bottom-0 w-full h-96 absolute hover:text-[--yellowgrow]'> 
          <p className='animate-bounce absolute right-[5%] bottom-10 z-20 text-center text-6xl text-[--yellowgrow]'>&#8910;</p>
          <div className=' z-2 absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-[--blackgreen] to-transparent'> </div>
        </a>
        <img src="../img/00.jpg" className='w-full h-full object-cover' alt="" />
    </div>
  )
}
export default Homepage
