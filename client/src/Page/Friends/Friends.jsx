import { Search } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { Input } from '../../components/ui/input'
import { ChatAppContext } from '../../context/chatAppContext'
import Navbar from '../../components/Navbar'

function Friends({address}) {
  const [name,setName]=useState("")
  const [AccountAdd,setAccountAddress]=useState(address)
  const {createAccount}=useContext(ChatAppContext);
  return (
    <div className='grid justify-center w-screen py-2 text-gray-5'>
      <div className='bg-gray-6 min-h-[97vh] text-center w-[60vw] rounded-2xl'>
        <div className='grid place-items-center'>
        <Navbar/>
        </div>
        <div  className='grid h-[80vh] place-items-center'>
          <div>
          <h1 className='font-sembold text-4xl pt-12 pb-6 px-24 tracking-wider'>Create Account</h1>
            <div className='grid gap-4 place-items-center text-gray-10'>
              <input type="text" placeholder="your name" className='p-2 px-6 w-96 rounded-full ' onChange={(e)=>setName(e.target.value)} />
              <input type="text" placeholder={address||"Enter Address"} className='p-2 w-96 px-6 rounded-full text-gray-10' />
              <button className='p-2 px-12 rounded-xl text-xl font-semibold bg-blues-3 text-gray-5 ' onClick={()=>createAccount({name,accounAddress:address})}>Login</button>
            
          </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Friends