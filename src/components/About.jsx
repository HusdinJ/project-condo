import React from 'react'

function About() {
  return (
    <div id='slide2' className='m-0 w-full pt-36 h-[1080px] bg-[--blackgreen] '>
        <div className='flex justify-around mx-auto  h-[800px] w-[1400px] bg-[rgb(240,244,245)] shadow-2xl'>
            <div className='flex flex-col justify-around w-[40%] h-72  my-auto px-20'>
                <h1 className=' text-4xl font-Italiana font-bold text-[--lightgreen]'>About</h1>
                <p className=' text-black mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia inventore possimus animi tempore in iusto eum beatae dolorum sequi?</p>
                <p className=' text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim adipisci quod natus minus quam optio, incidunt placeat quae maiores aut eligendi explicabo pariatur corrupti magni doloribus accusantium, obcaecati nostrum numquam.</p>
                <button className='mt-4 btn text-white rounded-full bg-[--blackgreen] hover:bg-[rgb(58,90,68)]'><img className='w-6 invert' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /> Git Hub</button>
            </div>
            <div className='h-full bg-slate-200'>
                <div className='flex justify-around w-[100%] h-[600px] mt-[180px] '>
                    <button className=' text-left cursor-pointer opacity-75 rounded-e-2xl relative overflow-hidden w-28 h-[500px] bg-black hover:w-[150px] hover:opacity-95 mx-3 focus:w-[600px] focus:opacity-100 custom-bg bg-cover bg-center duration-300 ease-in-out focus '>
                        <p className='h-16 w-full absolute bottom-0 left-0 z-10  text-white bg-black bg-opacity-70 p-2'><p className='font-bold'>Living</p>ROOM</p>
                        <img className='absolute top-0 object-cover h-[100%] w-auto'  src="../img/02.jpg" alt="" />
                    </button>
                    <button className=' text-left cursor-pointer opacity-75 rounded-2xl	relative overflow-hidden w-28 h-[500px] bg-black hover:w-[150px] hover:opacity-95 mx-3 focus:w-[600px] focus:opacity-100 custom-bg bg-cover bg-center duration-300 ease-in-out '>
                        <p className='h-16 w-full absolute bottom-0 left-0 z-10  text-white bg-black bg-opacity-70 p-2'><p className='font-bold'>Bed</p>ROOM</p>
                        <img className='absolute top-0 object-cover h-[100%] w-auto'  src="../img/05.jpg" alt="" />
                    </button>
                    <button className=' text-left cursor-pointer opacity-75 rounded-s-2xl relative overflow-hidden w-28 h-[500px] bg-black hover:w-[150px] hover:opacity-95 mx-3 focus:w-[600px] focus:opacity-100 custom-bg bg-cover bg-center duration-300 ease-in-out'>
                        <p className='h-16 w-full absolute bottom-0 left-0 z-10  text-white bg-black bg-opacity-70 p-2'><p className='font-bold'>Bath</p>ROOM</p>
                        <img className='absolute top-0 object-cover h-[100%] w-auto'  src="../img/03.jpg" alt="" />
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About
