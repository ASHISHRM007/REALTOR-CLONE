import React, { useState } from 'react'
import Avatar from 'react-avatar'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { userupdate } from '../APP/user/userslice';
import toast from 'react-hot-toast';

function Profile() {
    const[username,setusername] =useState("");
    const[password,setpassword] =useState("");
    const[email,setemail]=useState("");
    const {currentuser} =useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    
    
  const handlesubmit = async (e)=>{
    e.preventDefault();
    try {
      if(!username||!password||!email){
        toast.error("enter the credentials")
        return  
      }
      console.log(currentuser)
      const res = await fetch(`http://localhost:8000/api/users/update/${currentuser._id} `,{
          method:"POST",
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({username,password,email})
        })
       const ans =await
        res.json();
       dispatch(userupdate(ans))
       toast.success("credential changed")
    } catch (error) {
      console.log(error);
      toast.error("unable to change credentials")
    }
  }
  const submit =(e)=>{
    e.preventDefault();
    navigate("/create-listing")
  }

  
  return (
    <div className='max-w-lg sm:mx-auto'>
    <h1 className='text-3xl font-semibold text-center p-2'>profile</h1>
    <form className='flex flex-col gap-4 p-2' onSubmit={handlesubmit}>
    <Avatar name={currentuser.username} className='self-center rounded-full'/>
    <input value={username} onChange={(e)=>{setusername(e.target.value)}} type='text' placeholder='username ' className='p-3 rounded-lg outline-none border shadow-md' />
    <input value={email} type='email' onChange={(e)=>{setemail(e.target.value)}}   placeholder='email' className='p-3 rounded-lg outline-none border shadow-md'/>
    <input value={password} type="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder='password' className='p-3 rounded-lg outline-none shadow-md'/>
    <button className='bg-slate-700 text-white p-3 rounded-lg  hover:bg-slate-600 font-semibold'>UPDATE</button>
    <button onClick={submit} type='button' className='bg-green-700 text-white p-3 rounded-lg outline-none hover:bg-green-600 font-semibold'>CREATE LISTING</button>
    </form>
    <div className='flex justify-between p-1'>
    <span className='text-red-600 cursor-pointer hover:underline'>Delete Account</span>
    <span className='text-red-600 cursor-pointer hover:underline' >Sign out</span>
    </div>
    
    
    </div>
  )
}

export default Profile