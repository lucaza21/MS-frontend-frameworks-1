
import React from 'react'
import { FaHeart, FaRegCommentAlt } from "react-icons/fa";

export default function Post({post: {image, author, description, date,likes, comments}}) {
  return (
    <>
        
        <div className='m-3 flex flex-col justify-center items-center  hover:scale-110' >
            <div className='shadow-xl'>
                <img src={image} alt={image} className='w-full rounded-t-lg'></img>
            </div>
            <div className='p-2 h-2/3 flex flex-col justify-end border-solid rounded-b-lg border-x-2 border-b-2 border-indigo-300'>
                
                <div className='flex flex-row justify-between w-full items-center'>
                    <p className='font-medium text-sm text-slate-500'>{date}</p>
                    <div className=' h-8 w-auto flex flex-row justify-between items-center rounded-md bg-red-500 text-white'>
                        <FaHeart className='mx-1'/> 
                        <button className='mx-1'>{likes}</button>
                    </div>
                </div>
                <h3 className='self-start my-2 text-xl font-medium text-neutral-800'>@{author}</h3>
                <p className='grow my-2 text-neutral-600 overflow-hidden'>{description}</p>
                <div className='flex flex-row w-full items-center'>
                    <div className=' text-xs h-8 w-auto flex flex-row font-medium items-center rounded-md text-slate-500'>
                        <FaRegCommentAlt className='mx-1'/> 
                        <button className='mx-1'>{comments}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
