import { useContext, useEffect, useState } from "react";
import { useModal } from "../context/ModalContext";
import { useShare } from "../context/ShareContext";
import { ChatAppContext, useChatApp } from "../context/chatAppContext";
import Display from "./Display";


const Share = ({ contract}) => {
  const{currentpbk}=useChatApp();
    // const [address,setaddress]=useState("")
    const {imag,closeModall}=useShare()
    // console.log("Share")
  const sharing = async () => {
    
    // const address = document.getElementsByClassName("address").value;
    // console.log(address)
    
    await contract.add(currentpbk,imag);
    await contract.allow(currentpbk);
    closeModal();
    
  };
  
  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);
  
  return (
    <>
      <div className="modalBackground p-5">
        <div className="modalContainer">
          {/* <div className="title font-semibold">Share with</div>
          <div className="body">
            <input
              type="text"
              className="address border p-2"
              placeholder="Enter Address"
            />
          </div>
          <form id="myForm pt-4">
            <select id="selectNumber">
              <option className="border">People With Access</option>
            </select>
          </form> */}
          <Display contract={contract} account={currentpbk}/>
          <div className="footer flex gap-4 pt-6">
            <button
              onClick={closeModall}
              className="py-2 px-5 bg-semantics-2 rounded-lg text-gray-5"
              id="cancelBtn"
            >
              Cancel
            </button>
            <button
            className="py-2 px-5 bg-semantics-1 rounded-lg text-gray-5"
             onClick={() => {sharing()}}>Share</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Share;