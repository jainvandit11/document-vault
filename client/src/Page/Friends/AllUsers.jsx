import { Search } from 'lucide-react'
import React, { useContext } from 'react'
import { Input } from '../../components/ui/input'
import { ChatAppContext } from '../../context/chatAppContext'
import Navbar from '../../components/Navbar'
import { UserCard } from '../../components/Cards'

function AllUsers() {
  const {UserList,addFriends}=useContext(ChatAppContext);
  return (
    <div className='grid justify-center w-screen py-2 text-gray-5'>
      <div className='bg-gray-6 min-h-[97vh] w-[60vw] rounded-2xl'>
        <div className='grid place-items-center'>
        <Navbar/>
        </div>
        <div className='px-24'>
            <h1 className='font-bold text-2xl py-12  tracking-wider'>Find Your Friends</h1>
            <div className='grid grid-cols-3 gap-12'>
                {UserList.map((el,i)=>{
                  return(
                    <UserCard el={el} addFriends={addFriends}/>
                  )
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default AllUsers