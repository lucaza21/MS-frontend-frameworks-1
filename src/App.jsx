import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import PostList from './components/PostList'

function App() {
  

  return (
    <>
    
    <div className='min-w-min'>
    <div className='py-3 w-4/5 flex items-center justify-center container mx-auto'>
      <h1 className='font-bold text-xl text-center'>El objetivo del ejercicio es la construcción de una aplicación web React.js con diferentes components que
      tenga como resultado la siguiente interfaz de usuario (Mobile first):</h1>
    </div>

    <Navbar />
    <SearchBar />
    <PostList />
    </div>
    </>
  )
}

export default App
