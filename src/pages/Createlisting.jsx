import React, { useState } from 'react'

function Createlisting() {
  const {data,setdata} = useState({
   username : "",
   description : " ",
   adddress: " ",
   type:"rent",
   parkingspot:false,
   furnished:false,



  })
  return (
    <main className='max-w-4xl mx-auto p-2 '>
    <h1 className='font font-semibold text-3xl text-center my-7'>Create a Listing</h1>
    <form className='flex flex-col sm:flex-row my-3  gap-3'>
    <div className='flex flex-col flex-1  gap-4 '>
    <input required id='name' type='text' placeholder='Name' className='rounded-lg shadow-md p-3 outline-none'/>
    <textarea required id="description" type='text' placeholder='description' className='rounded-lg shadow-md  p-3  outline-none'/> 
    <input  required type='text' id="address" placeholder='Address' className='rounded-lg shadow-md p-3'/>
    <div className='flex gap-6 flex-wrap'>
    <div className='flex gap-2'>
    <input  type='checkbox' className='w-5'/>
    <span>Sell</span>
    </div>
    <div className='flex gap-2'>
    <input type='checkbox' className='w-5'/>
    <span>Rent</span>
    </div>
    <div className='flex gap-2'>
    <input type='checkbox' className='w-5'/>
    <span>Parking spot</span>
    </div>
    <div className='flex gap-2'>
    <input type='checkbox' className='w-5'/>
    <span>Furnished</span>
    </div>

    <div className='flex gap-2'>
    <input type='checkbox' className='w-5'/>
    <span>Offer</span>
    </div>
    </div>

    <div className='flex  flex-wrap gap-6'>
    
    <div className='flex items-center gap-2 '>
    <input type='number' min="1" max="10" className=" rounded-lg p-3 border  border-gray-300"/>
    <p>Beds</p>
    </div>
    <div className='flex items-center gap-2'>
    <input type='number' min="1" max="10" className=" rounded-lg p-3 border  border-gray-300"/>
    <p>Baths</p>
    </div>
    <div className='flex items-center gap-2'>
    <input required type='number' min="0" max="1000000" className=" rounded-lg p-3 border  border-gray-300"/>
    <p> Regular price</p>
    </div>
    <div className='flex items-center gap-2'>
    <input required type='number'min="0" max="1000000"  className=" rounded-lg p-3  border  border-gray-300"/>
    <p>Discount price</p>
    </div>   
    </div>
    </div>
    <div className='flex flex-col flex-1  '>
    <p>Images:<span className='text-gray-700'> The first image will be the cover (max6)</span></p>
    <div className='mt-4 space-x-2 flex justify-between'>
    <input required type='file' id='images'   className='border p-4 rounded-lg border-gray-300'/>
    <button type='button' className='border p-4 border-green-600 text-green-600 rounded-lg hover:shadow-lg hover:opacity-80'>Upload</button>
    </div>
    <button className='bg-slate-700 mt-7 rounded-lg text-white p-2 shadow:md hover:bg-slate-600 text-xl'>CREATE LISTING</button>
    </div>
    
    
    </form>
    
    </main>
  )
}

export default Createlisting