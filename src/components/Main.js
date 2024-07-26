import React from 'react'
import OfficeImage from './office.jpg'

export default function Main() {
  return (
    <>
        <div className=" bg-cover"  style={{backgroundImage: `url(${OfficeImage})`}}>
            <div className=' h-96 flex items-center justify-center flex-col' style={{backgroundColor: 'rgba(0,0,0,0.4'}}>
                <p className=' text-white text-5xl w-1/3 text-center'><b>Better Education For A Better World</b></p>
                <button className='bg-yellow-500 rounded h-8 w-28 my-7'>Read More</button>
            </div>
        </div>
        <div className=' h-64 w-full absolute -my-10 flex justify-center space-x-20 items-center' >
            <div className="bg-white h-64 w-72 shadow-2xl flex justify-evenly items-center flex-col">
              <i className="fa-solid fa-book-open text-yellow-500 text-3xl"></i> 
              <p className=''><b>Book, Libraries & Stores</b></p>
              <p className='text-center  w-64 leading-none '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, optio iste voluptatum hic esse nulla doloribus consectetur</p>
              <button className='bg-yellow-500 rounded h-8 w-28'>Read More</button>
              </div>
            <div className="bg-white h-64 w-72 shadow-2xl flex justify-evenly items-center flex-col">
            <i className="fa-solid fa-laptop text-yellow-500 text-3xl"></i> 
              <p className=''><b>Learn Courses Online</b></p>
              <p className='text-center  w-64 leading-none '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, optio iste voluptatum hic esse nulla doloribus consectetur</p>
              <button className='bg-yellow-500 rounded h-8 w-28'>Read More</button>
               </div>
            <div className="bg-white h-64 w-72 shadow-2xl flex justify-evenly items-center flex-col"> 
            <i className="fa-solid fa-users text-yellow-500 text-3xl"></i> 
              <p className=''><b>Highly Qualified Teachers</b></p>
              <p className='text-center  w-64 leading-none '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, optio iste voluptatum hic esse nulla doloribus consectetur</p>
              <button className='bg-yellow-500 rounded h-8 w-28'>Read More</button>

            </div>
        </div>
    </>
  )
}
