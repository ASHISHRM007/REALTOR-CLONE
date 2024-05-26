import React from 'react';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';


function Widgets() {
   
    const {currentuser} =useSelector((state)=>state.user)
    console.log(currentuser)
    return (
        <div  className='flex flex-col  '>
        <Avatar className='rounded-full max text-md shadow-sm'size="40" name={currentuser.username} />
        
         </div>
      )
}

export default Widgets 