import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { BookDashedIcon, PackageIcon } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useShare } from '../context/ShareContext'
import { ChatAppContext } from '../context/chatAppContext'

export function ConclusionCards(props) {
  return (
    <div className='flex place-items-center gap-4 p-4 bg-base-primary rounded-xl'>
      <div className='text-gray-10 bg-gray-5 p-4 rounded-full'>
        <BookDashedIcon />
      </div>
      <div className=''>
        <h1>{props.name}</h1>
        <h1 className='font-bold text-xl'>{props.value}</h1>
      </div>
    </div>
  )
}
export function DocsCard() {
  return (
    <div class="max-w-sm rounded-lg bg-gray-5 text-gray-10 overflow-hidden shadow-lg">
      
      <img class="w-full" src="vite.svg" className='w-24 h-12 items-center' alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  )
}
export function ChatCard({name,pubkey,readMessage,FriendMsg,account,userName,currentUserName,currentUserAddress}) {
  // const {user}=useAuth0();
  const { openModall, modalOpen, setimag } = useShare();
  const {changemypbk,curerntpbk}=useContext(ChatAppContext)
  const handleShareButtonClick = () => {
    openModall();
  };
  const handleChat=()=>{
    let pub=pubkey
    changemypbk(pub)
    console.log(curerntpbk);
  }
  return (
    <a onClick={()=>{handleShareButtonClick();handleChat();}}><div className='hover:bg-gray-6 gap-1 p-6 bg-gray-7 rounded-2xl text-gray-5 flex place-items-center'>
      <Avatar className="w-12">
        <AvatarImage className="rounded-full" src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
      <h1 className='font-bold text-lg'>{name}</h1>
      <h1 className='text-xs'>{pubkey}</h1>

      </div>

    </div></a>
  )
}
export function UserCard({el,addFriends}){
  // console.log(el)
  return(
    <div className='gap-1 p-6 bg-gray-7 rounded-2xl grid place-items-center'>
      <Avatar className="">
        <AvatarImage className="rounded-full w-16" src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className='font-bold text-lg'>{el.name}</p>
      <p className='text-xs'>{el.accountAddress.slice(0,20)}</p>
      <button className='bg-blues-3 px-4 py-2 font-semibold hover:bg-blues-2 rounded-full'
        onClick={()=>{
          addFriends({name:el.name,accounAddress:el.accountAddress});
          // window.location.reload("/friends")

        }}
      >Add Friends</button>
    </div>
  )
}
