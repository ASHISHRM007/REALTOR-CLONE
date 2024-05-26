import React, {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import{useDispatch} from "react-redux"
import { signinstart,signinsucces,signinfailue } from '../APP/user/userslice.js';
import OAuth from '../components/OAuth.jsx';

function Signup() {
   
  const[username,setusername] =useState("");
  const[password,setpassword] =useState("");
  const[email,setemail]=useState("");
  const[loading ,setloading]=useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const  handlesubmit= async(e)=>{
    e.preventDefault();
    setloading(true)
    if(!username||!password||!email){
        toast.error("enter the credentials")
        setloading(false)
        return  
    }
    
    const res = await fetch("http://localhost:8000/api/users",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,password,email})
      })

    const ans =await res.text()   
    try {
      console.log(res.text())
      if (res.statusText==="OK"){
        toast.success(ans)
        setloading(false)
        navigate("/signin")
      }
      else{
        toast.error(ans)
        setloading(false)
        
      }
    } catch (error) {
      console.log(error)
      setloading(false)
    }

  }
  return (
    <div className='p-3 max-w-lg mx-auto '>
        <h1 className='font-semibold text-3xl text-center my-7'>Sign up</h1>
        <form onSubmit={handlesubmit} className=' flex flex-col gap-4'>
        <input type='text' value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder='Username' className='border p-3 rounded-lg outline-none shadow-md'/>
        <input type='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Password' className='border p-3 rounded-lg outline-none shadow-md'/>
        <input type='email' onChange={(e)=>{setemail(e.target.value)}} value={email} placeholder='Email' className='border p-3 rounded-lg outline-none shadow-md'/>
        <button disabled={loading}  className='bg-slate-700 p-3 text-white rounded-lg hover:opacity-95 disabled:opacity-80 shadow-md text-xl'>{loading ?"LOADING.." :"SIGN UP"
        }</button>
        <OAuth/>      
        </form>
       <div className='mt-2 flex'>
       <p>Have an account ?</p>
       <Link to="/signin">
        <span className='text-blue-600 p-2 hover:underline'>Sign in</span>
       </Link>
       </div>
    </div>
  )
}

export default Signup