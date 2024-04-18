import { ethers } from 'ethers'
import ChatAppContract from "../../artifacts/ChatApp.json"
import { ChatAppAddress } from '../../assets/constant'

export const CheckIfWalletConneted = async () => {
  try{
    if(!window.ethereum)return console.log("Install Metamask");
    
    const accounts=await window.ethereum.request({
      method:"eth_accounts",
    });
    const firsAccount=accounts[0]
    return firsAccount

  }catch(error){
    console.error("Metamask is not installed");
  }
}
export const connectWallet=async()=>{
  try{
    if(!window.ethereum)return console.log("Install Metamask");
    
    const accounts=await window.ethereum.request({
      method:"eth_requestAccounts",
    });
    const firsAccount=accounts[0]
    return firsAccount

  }catch(error){
    console.error("Metamask is not installed");
  }
}
const fetchContract=(signerorProvider)=>new ethers.Contract(
  ChatAppAddress,ChatAppContract.abi,signerorProvider
);
export const connectingwithContract=async()=>{
  try{
    const Cprovider=new ethers.providers.Web3Provider(window.ethereum); 
    await Cprovider.send("eth_requestAccounts", []);
    const signer=Cprovider.getSigner();
    const C_contract=fetchContract(signer)

    return C_contract;

  }catch(error){
    console.log("Not Connecting with Contract");
  }
}