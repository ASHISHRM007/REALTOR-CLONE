import React from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
import { app } from '../firbase.js';
import{useDispatch, useSelector} from "react-redux";
import { signinsucces } from '../APP/user/userslice.js';
import { useNavigate } from 'react-router-dom';

function OAuth() {
const navigate = useNavigate()
const  dispatch = useDispatch();
const handleclick =async (e)=>{
    try {
        const provider = new GoogleAuthProvider();
        const auth =getAuth(app);
        const result = await signInWithPopup(auth,provider) 
        
        const res = await fetch("http://localhost:8000/api/users/oauth",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify ({username:result.user.displayName,email:result.user.email,photo:result.user.photoURL})
        })
       
        dispatch(signinsucces())
        const a  = await res.json()
        dispatch(signinsucces(a))
        navigate("/")
        
    } catch (error) {
        
    }
}
  return (
    <button type='button'onClick={handleclick} className='bg-red-500 outline-none text-white p-2 text-xl rounded-lg shadow-md'>Continue With Google</button>
  )
}

export default OAuth