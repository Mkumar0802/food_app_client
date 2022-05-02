import React from 'react'
import {useSelector} from 'react-redux'
 
function Cartbag() {

const user =useSelector(state => state.user.value)

  return (
    <div className='bg-slate-900 text-white'>
        <div className='flex justify-center'>



           <h1 className='text-xl   md:text-2xl  font-semibold  '>
               Cart Summary
           </h1>
           <p>name:{user.name}</p>
           <p>price:{user.price}</p>
           
        </div>
    </div>
  )
}

export default Cartbag;