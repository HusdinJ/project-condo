import React from 'react'

function Blueprint() {
  return (
    <>
        <div id='slide4' className=' relative w-full h-[1080px] bg-[--blackgreen]'>
            <div className='flex flex-col pt-40 w-[1200px] m-auto'>
                    <div className='flex justify-between text-[--yellowgrow]'>
                        <div className='font-Italiana text-5xl'>Blueprint</div>
                        <div>
                            <div className=' text-2xl'>Tone Color</div>
                            <div className=' cursor-pointer flex pt-2 w-56'>
                                <div className='bg-white h-4 w-[25%] duration-300 ease-in-out hover:w-[90%]'></div>
                                <div className='bg-[--yellowgrow] h-4 w-[25%] duration-300 ease-in-out hover:w-[90%]'></div>
                                <div className='bg-[--lightgreen] h-4 w-[25%] duration-300 ease-in-out hover:w-[90%]'></div>
                                <div className='bg-[--blackgreen] border-2 h-4 w-[25%] duration-300 ease-in-out hover:w-[98%]'></div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute z-99 top-[30%] w-40 right-[47%] translate-x-full flex flex-col ">
                        <button onClick={() => changeFloor('floor2')} className=" text-xl btn btn-outline text-[--yellowgrow] rounded-none rounded-t-lg  hover:bg-[--lightgreen] hover:text-white">Floor II</button>
                        <button onClick={() => changeFloor('floor1')} className=" mt-[-1px] text-xl btn btn-outline text-[--yellowgrow] rounded-none rounded-b-lg  hover:bg-[--lightgreen] hover:text-white">Floor I</button>
                    </div>

                    <div  id='floor1' className='floor my-20'>
                        <div className='flex justify-between'>
                            <img className='w-[550px]' src="../img/Print01.jpg" alt="" /> 
                            <div className=' w-[550px] leading-7 '>
                                <h3 className='mt-36 text-2xl text-white'>Lorem ipsum dolor sit amet.</h3>
                                <p className='mt-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quo molestias nobis aliquid. Voluptatem velit provident quis possimus rem modi quia et dignissimos, ab culpa sunt beatae cum aut repellendus recusandae ad est mollitia quidem voluptatibus doloribus. Nemo, praesentium dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div id='floor2' className='hidden floor my-20'>
                        <div className='flex justify-between'>
                            <img className='w-[550px]' src="../img/Print02.jpg" alt="" /> 
                            <div className=' h-[200px] w-[550px] leading-7 '>
                                <h3 className='mt-36 text-2xl text-white'>Lorem ipsum dolor sit amet.</h3>
                                <p className='mt-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quo molestias nobis aliquid. Voluptatem velit provident quis possimus rem modi quia et dignissimos.</p>
                            </div>
                        </div>
                    </div>

            </div>
            <div>
                <p className='absolute bottom-[10px] right-1/2 translate-x-1/2 w-full text-[--yellowgrow] tracking-custom text-3xl text-center'>MAKE THE WILD - BE YOUR HOME</p>
            </div>
        </div>
    </>
  )
}
function changeFloor(floorNumber) {
    var i;
    var x = document.getElementsByClassName("floor");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    document.getElementById(floorNumber).style.display = "block";
}

export default Blueprint
