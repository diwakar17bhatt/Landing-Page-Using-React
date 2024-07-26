import React, { useState } from 'react'


export default function Navbar() {

    const [hide, sethide] = useState("hidden");
    function popup(){   
        if(hide==='hidden'){
            sethide('')
        }else{
            sethide('hidden')            
        }
        
    }
    return (
    <>
       <nav className='bg-yellow-600 flex items-center justify-between h-14'>
            <div className='flex text-white space-x-9 px-16'>
                <i className="fa-brands fa-html5 size-11 flex items-center justify-center   text-4xl"></i>
                <ul className='flex space-x-9 items-center justify-center'>
                    <li className='hover:bg-yellow-700 h-10 w-20 flex items-center justify-center rounded-lg cursor-pointer'>Home</li>
                    <li className='hover:bg-yellow-700 h-10 w-20 flex items-center justify-center rounded-lg cursor-pointer'>Find</li>
                    <li className='hover:bg-yellow-700 h-10 w-20 flex items-center justify-center rounded-lg cursor-pointer'>About</li>
                    <li className='hover:bg-yellow-700 h-10 w-20 flex items-center justify-center rounded-lg cursor-pointer'>Work</li>
                </ul>
            </div>
            <div className='px-16  space-x-9 text-white flex items-center justify-center'>
                <i className="fa-solid fa-bell text-2xl cursor-pointer"></i> 
                <i className="fa-solid fa-user text-1xl cursor-pointer bg-yellow-900 h-11 w-11 flex items-center justify-center rounded-full" onClick={popup}></i>
            </div>
            
       </nav>
       <div className= { ` ${hide}  popup h-24 w-48 bg-white absolute -my-3 right-0 mx-28 rounded-xl text-black flex items-center justify-evenly flex-col text-1xl  z-10 shadow-2xl`}>
            <p className='hover:bg-slate-200 h-8 flex items-center justify-start px-5 w-48 rounded-t-xl cursor-pointer'>Profile</p>
            <p className='hover:bg-slate-200 h-8 flex items-center justify-start px-5 w-48 cursor-pointer'>Settings</p>
            <p className=' hover:bg-slate-200 h-8 flex items-center justify-start px-5 w-48 rounded-b-xl cursor-pointer'>Sign out</p>
        </div>
    
    </>
  )
}
