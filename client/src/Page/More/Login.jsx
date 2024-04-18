
import React, { useEffect } from 'react'
import { LoginButton } from '../../components/Log(in-out)Button';

function Login() {
  return (
    
    <div className='w-screen bg-gray-10 h-screen text-lg text-gray-5 font-bold grid place-items-center'>
        <div className='grid text-center'>
        <h1 className='text-4xl'>E-vault Registration.</h1>
        <p className='font-light pb-6'>Inorder to Open the Dashboard make sure to <b className='font-semibold'>Login</b></p>
        <LoginButton/> 
        </div>
           
    </div>
  )
}

export default Login