import React from 'react'

function Maskhead() {
  return (
    <div className=' sticky font-Italiana w-full top-0 z-50 bg-gradient-to-b from-[rgb(22,31,21)] to-transparent text-[--yellowgrow] '>
        <ul className='flex justify-between h-40 pt-4 w-[800px] mx-auto'>
          <li className='hover:text-white pt-4'><a href="#slide1">| HOME</a></li>
          <li className='hover:text-white pt-4'><a href="#slide2">| ABOUT</a></li>
          <li className='w-96'><a href="#" className=' text-center font-semibold tracking-widest item-center justify-center duration-300 ease-in-out hover:tracking-custom hover:text-white '><p className='text-6xl pl-10'> WILD</p> <p className='pl-8 text-2xl'>L I S</p></a></li>
          <li className='hover:text-white pt-4'><a href="#slide3">| CONCEPT</a></li>
          <li className='hover:text-white pt-4'><a href="#slide4">| BLUEPRINT</a></li>
        </ul>
    </div>
  )
}
export default Maskhead