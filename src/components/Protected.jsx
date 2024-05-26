import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Signin from '../pages/Signin'


function Protected() {
  const {currentuser} = useSelector((state)=>state.user)
  return (
    <div>{currentuser?<Outlet/>:<Signin/>}</div>
  )
}

export default Protected