import React from 'react'
import Navbar from '../../components/Navbar'
import Friend from '../../components/Friend'

function Chat() {
  return (
    <div>
        <div className='grid justify-center w-screen py-2 text-gray-5'>
      <div className='bg-gray-6 min-h-[97vh] text-center w-[60vw] rounded-2xl'>
        <div className='grid place-items-center'>
        <Navbar/>
        </div>
        <div >
           <Friend/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Chat