'use client';
import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'
// import { setTimeout } from 'timers/promises'

function Logout () {
  const [authUser, setAuthUser] = useAuth()
  const handleLagout =()=>{
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users")
      toast.success("Logout Successful")
      setTimeout(()=>{
        window.location.reload();
      },1000);
    }catch(error){
       toast.error("Error:" + error.message)
    }
  }
  return (
    <div>
      <button onClick ={handleLagout} className='px-3 py-2 bg-red-600 text-white rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logout 
