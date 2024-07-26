import React from 'react'

export default function Content() {
  return (
    <>
        <div className='h-screen w-full  mt-80 flex flex-col items-center justify-evenly'>
          <p className='text-3xl  h-16 flex justify-center items-center'><b>Have A Look On</b></p>
            <div className='cursor-pointer hover:bg-yellow-600 text-white flex h-20 px-16 text-2xl w-10/12 justify-between items-center bg-yellow-500'>
              <p>Courses</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>
            <div className='hover:bg-yellow-600 cursor-pointer text-white flex h-20 px-16 text-2xl w-10/12 justify-between items-center bg-yellow-500'>
              <p>Fee Structure</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>
            <div className='hover:bg-yellow-600 cursor-pointer text-white flex h-20 px-16 text-2xl w-10/12 justify-between items-center bg-yellow-500'>
              <p>Campus</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>
            <div className='hover:bg-yellow-600 cursor-pointer text-white flex h-20 px-16 text-2xl w-10/12 justify-between items-center bg-yellow-500'>
              <p>Achivements</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>
            <div className='hover:bg-yellow-600 cursor-pointer text-white flex h-20 px-16 text-2xl w-10/12 justify-between items-center bg-yellow-500'>
              <p>Art Gallery</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>
            <div className='hover:bg-yellow-600 cursor-pointer text-white flex h-20 px-16 text-2xl w-10/12 justify-between items-center bg-yellow-500'>
              <p>Milestones</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>
            
        </div>
    </>
  )
}
