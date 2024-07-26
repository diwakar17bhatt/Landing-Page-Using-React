import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='h-80 w-full bg-yellow-700 mt-32 flex flex-col items-center justify-evenly'>
            <div className='flex w-full items-center justify-evenly'>
                <div className='space-y-3 h-44'>
                    <p className='text-2xl text-white'><b>Our Services</b></p>
                    <ul className='text-slate-200'>
                        <li >Online Coaching</li>
                        <li>Offline Classes</li>
                        <li>Home Tuitions</li>
                        <li>Coaching</li>
                    </ul>
                </div>
                <div className='space-y-3 h-44'>
                    <p className='text-2xl text-white'><b>Our Services</b></p>
                    <ul className='text-slate-200'>
                        <li >Online Coaching</li>
                        <li>Offline Classes</li>
                        <li>Home Tuitions</li>
                        <li>Coaching</li>
                    </ul>
                </div>
                <div className='space-y-3 h-44'>
                    <p className='text-2xl text-white'><b>Our Services</b></p>
                    <ul className='text-slate-200'>
                        <li >Online Coaching</li>
                        <li>Offline Classes</li>
                        <li>Home Tuitions</li>
                        <li>Coaching</li>
                    </ul>
                </div>
                <div className=' space-y-3 text-white h-44'>
                    <p className='text-2xl'><b>Register Here</b></p>
                    <div className='space-x-4'>
                        <input className='w-96 h-12 rounded-md px-7 text-black ' type="text" placeholder='Email' />
                        <button className='h-12 w-32 bg-yellow-600 rounded-md hover:bg-yellow-500'>Subscribe</button>
                    </div>
                    <p>Mobie: 91+ x x x x x x x x x x</p>
                    <p>Email: xxxyyy@gmail.com</p>
                </div>
            </div>
            <div className='flex text-white space-x-1 justify-center items-center'>
                <i class="fa-regular fa-copyright"></i>
                <p>2024 ABC Coaching Institute</p>
            </div>
      </div>
    </>
  )
}
