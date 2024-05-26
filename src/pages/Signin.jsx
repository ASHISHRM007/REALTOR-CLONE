import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {LoaderIcon, toast} from 'react-hot-toast';
import{useDispatch, useSelector} from "react-redux";
import { signinstart,signinsucces,signinfailue } from '../APP/user/userslice.js';
import OAuth from '../components/OAuth.jsx';
import { useNavigate } from 'react-router-dom';


function Signin() {
  const[username,setusername] =useState("");
  const[password,setpassword] =useState("");
  const[email,setemail]=useState("");
  const  dispatch = useDispatch();
  const  navigate =useNavigate() 
  const {loading,currentuser,error}=useSelector((state)=>state.user )

  

   const handlesubmit = async (e)=>{
       e.preventDefault();
       
       dispatch(signinstart())
       
      
       if(!username||!password||!email){
        toast.error("enter the credentials")
        dispatch(signinfailue("enter the credentials"))
        return  
    }
    const res = await fetch("http://localhost:8000/api/users/login",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,password,email})
      })
      
    try {
      console.log(res)
      if (res.statusText==="OK"){
        toast.success("user signin");
         const a= await res.json()
         console.log(a,"A")
         
        dispatch(signinsucces(a))
        navigate("/")
        
      }
      else{
        const pay=await res.text()
        toast.error(pay)
        dispatch(signinfailue(pay))
      }
    } catch (error) {
      console.log(error)
    }
   }

  return (
    <div className='max-w-lg p-3 mx-auto'>
    <h1 className='text-3xl font-semibold mt-5 p-3 text-center'>Sign In</h1>
    <form className='flex flex-col mt-6 gap-4' onSubmit={handlesubmit}>
    <input placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}} type='text' className='p-3 rounded-lg shadow-md outline-none border'/>
    <input placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} className='p-3 shadow-md rounded-lg outline-none border'/>
    <input placeholder='email' value={email} className='p-3 shadow-md rounded-lg outline-none border' onChange={(e)=>{setemail(e.target.value)}}/>
    <button disabled={loading}  className='bg-slate-700 p-3 text-semibold capitalize text-slate-50 text-xl  rounded-md hover:bg-slate-600 shadow-md disabled:bg-slate-500'>{loading?"LOADING":"SIGN IN"}</button>
    <OAuth/>
    </form>
    <div className='flex gap-2 mt-2 '>
    <p >New user ?</p>
    <Link to="/signup"><span className='text-blue-500 hover:underline cursor-pointer  '>create an Account</span>
    </Link>
    </div>

    </div>
  )
}

export default Signin