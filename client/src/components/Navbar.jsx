import React, { useContext, useState } from 'react'
import { ChatAppContext } from '../context/chatAppContext'
import { Link } from 'react-router-dom'
function Navbar() {
    const menuItems=[
        {
            menu:"ALL USERS",
            link:"allusers"
        },
        {
            menu:"CHAT",
            link:"chat"
        },
        {
            menu:"CONTACT",
            link:""
        }

    ]
    const [active, setactive] = useState(2)
    const [open, setOpen] = useState(false)
    const [openModel, setOpenModel] = useState(false)

    const{account,UserName,connectWallet}=useContext(ChatAppContext);

  return (
    <div className='w-full rounded-xl left-0 grid grid-flow-col px-32 gap-12 p-4 bg-gray-7'>
        <div>Navbar</div>
        <div className='grid right-0 grid-flow-col gap-4 place-items-center'>
            {menuItems.map((data)=>{
                return(
                    <Link to={`/friends/${data.link}`}><div className=''>
                        {data.menu}
                    </div></Link>
                )
            })}
        </div>
    </div>
  )
}

export default Navbar