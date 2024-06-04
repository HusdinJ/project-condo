import React from 'react'

function Footer() {
  return (
    <div className=' relative w-full h-[300px] bg-white'>
      <p className='w-96'><a href="#" className=' mt-8 px-8 font-Italiana bg-[--blackgreen] text-white absolute left-20 top-2 text-center font-bold tracking-widest item-center justify-center border-solid border-2 border-[--blackgreen] rounded-md'><p className='text-4xl pl-2'> WILD</p> <p className='text-1xl'>L I S</p></a></p>
      <div className='m-auto flex justify-between w-[800px] pt-16'>
        <ul>
          <li className='pt-3 text-[--blackgreen] font-semibold '> <a href="#slide1">Home</a></li>
          <li className='pt-3 text-[--blackgreen] font-semibold '> <a href="#slide2">ABOUT</a></li>
          <li className='pt-3 text-[--blackgreen] font-semibold '> <a href="#slide3">CONCEPT</a></li>
          <li className='pt-3 text-[--blackgreen] font-semibold '> <a href="#slide4">BLUEPRINT</a></li>
        </ul>
        <ul>
          <li className='pt-3 text-[--blackgreen] font-semibold '> Contect</li>
          <li className='pt-3 text-[--blackgreen] font-semibold '> Tel. 093-901-6404</li>
          <li className='pt-3 text-[--blackgreen] font-semibold '> husdin220644@gmail.com</li>
          <li className='flex pt-3 text-[--blackgreen] font-semibold '> 
            <a href="" target='_blank'><img className='w-8 mx-3' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
            <a href="https://www.facebook.com/husdin.jitpreedakorn/" target='_blank'><img className='w-8 mx-3' src="https://cdn-icons-png.flaticon.com/256/20/20673.png" alt="" /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Footer
