import React from 'react'
import { AiFillThunderbolt  } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
    <div className='bg-slate-300 py-3 w-4/5 flex items-center justify-center container mx-auto '>
        <nav className=' gap-4  flex justify-between w-5/6 lg:w-/4'>
            <div className='  flex justify-start items-center w-1/2 gap-2' >
                <div className='text-lg'>
                    <AiFillThunderbolt />
                </div>
                <div className='text-lg  '>
                    <p>three pics</p>
                </div>
            </div>
            <div className='text-2xl '>
                <FaUserCircle /> 
            </div>
        </nav>
    </div>
    </>
  )
}
