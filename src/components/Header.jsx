import { current } from '@reduxjs/toolkit';
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Widgets from './Widgets.jsx';
function Header() {
  

  
  const {currentuser} = useSelector((state)=>state.user)
  const navigate = useNavigate()
  return (
    <header className ="bg-slate-200 shadow-md p-1">
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
   <Link to="/"> <h1 className='font-bold text-sm sm:text-xl  flex flex-wrap'>
   <span className='text-slate-500 font-bold'>Ashish</span>
   <span className='text-slate-700 font-bold'>Estate</span>
   </h1></Link>
    <form className='bg-slate-100 rounded-lg flex p-2 items-center text-center'>
    <input type='text' placeholder='Search..' className='rounded-md outline-none bg-transparent w-24 sm:w-64'/>
    <FaSearch  className='text-slate-500'/>
    </form>
    <ul className='flex gap-4 text-center'>
    <Link to="/"><li className='cursor-pointer hidden sm:inline hover:underline text-slate-700 text-2xl'>Home</li></Link>
    <Link to="/about"><li className='cursor-pointer hidden sm:inline hover:underline text-slate-700 text-2xl'>About</li></Link>
    <Link to ="/profile">{currentuser ?<Widgets/> :<li className='cursor-pointer hover:underline text-slate-700 text-2xl'>Sign in</li>}</Link> 
    </ul>
     </div> 
    
    </header>
  )
}

export default Header