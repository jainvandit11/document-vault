import React, { useState } from 'react'

function ChatModal({funtionName, readMessage, FriendMsg, account ,userName,loading ,currentUserName,currentUserAddress}) {
    const [message,setMessage]=useState('');
    const [chatData,setChatData]=useState({
        name:"",
        address:""
    });
    return (
        <div>
            {console.log(FriendMsg)}
            {FriendMsg.map((el,i)=>(
                <div className='bg-gray-7 p-12'>
                    {el.sender}
                </div>
            ))}
        </div>
  )
}

export default ChatModal