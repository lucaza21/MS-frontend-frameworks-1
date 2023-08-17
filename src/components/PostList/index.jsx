import React from 'react'
import { posts } from '../../../data'
import Post from '../Post'
export default function PostList() {
  return (
    <>
      {posts ? (
        <>
        <div className='min-w-min w-4/5 container mx-auto grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 bg-gray-200 text-center '>
       
                {posts.map((post) => (
                
                    <Post post={post} key={post.id} />
                
                ))}

        </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
}
