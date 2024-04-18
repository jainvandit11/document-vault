import { useContext, useEffect } from "react"
import { ChatAppContext } from "../context/chatAppContext";
import { AccCard } from "../lists/Data";
import { ChatCard, UserCard } from "./Cards";
import ChatModal from "./ChatModal";

const Friend=()=>{


    const {
        readMessage,
            CheckIfWalletConneted,
            connectWallet,
            createAccount,
            addFriends,
            getMyFriend,
            sendMessage,
            readUser,
            account,UserName,FriendLists,FriendMsg,Loading,UserList,Error,currentUserAddress,currentUserName
    }=useContext(ChatAppContext);
    return (
        <div className="">
            <div className="">
                <div className="grid grid-flow-row gap-4 w-24 p-6">
                    {/* {console.log(FriendLists)} */}
                    {FriendLists.map((el)=>{
                        return(
                            <ChatCard name={el.name} pubkey={el.pubkey} readMessage={readMessage} FriendMsg={FriendMsg} account={account} userName={UserName} currentUserName={currentUserName} currentUserAddress={currentUserAddress}/>

                        )
                    })}
                </div>
                <div className="">
                    <ChatModal funtionName={sendMessage} readMessage={readMessage} FriendMsg={FriendMsg} account={account} userName={UserName} loading={Loading} currentUserName={currentUserName} currentUserAddress={currentUserAddress}/>
                </div>
            </div>
        </div>
    )
}
export  default Friend;