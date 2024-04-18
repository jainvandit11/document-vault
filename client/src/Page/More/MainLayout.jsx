import { Link, Outlet, useLocation } from "react-router-dom";
import Upload from "../../components/Upload"
import { Toaster } from "../../components/ui/toaster";
import { LogoutButton } from "../../components/Log(in-out)Button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { User, useAuth0 } from "@auth0/auth0-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { CopyIcon, Dock, GroupIcon, HomeIcon, UploadIcon, } from "lucide-react";
import { Button, buttonVariants } from "../../components/ui/button";
import { DialogFooter, DialogHeader, DialogOverlay } from "../../components/ui/dialog";
import { useEffect, useState } from "react";
import { AccCard } from "../../lists/Data";
import { ChatCard } from "../../components/Cards";
import { useModal } from "../../context/ModalContext";
import Modal from "../../components/Modal";
import { useShare } from "../../context/ShareContext";
import Share from "../../components/Share";
import { useChatApp } from "../../context/chatAppContext";
// import { Toast } from "../../components/ui/toast";
// import Footer from "../../Components/Footer/Footer";
// import Navbar from "../../Components/Navbar/Navbar";

const MainLayout = ({contract,account,provider, setModalOpen }) => {
  const { user } = useAuth0();
  const {modalOpen,closeModal}=useModal();
  const {modalOpenn,closeModall}=useShare();
  const {currentpbk}=useChatApp
  const location = useLocation();
  const [Active, setActive] = useState(false)
  const isButtonActive = (to) => {
    return location.pathname === to;
  };
  const handleclose = () => {
    closeModal(); 
  };
  useEffect(() => {
    // setAlert(false);

    const isMonitorPage = window.location.pathname.includes("/chat");
    setActive(isMonitorPage);

  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen h-fit bg-grey-1 text-gray-5">
      <div className='fixed text-gray-5 bg-base-primary grid justify-center w-52 pt-6 h-screen'>
        <div className="text-center">
          <h1 className='flex gap-4 justify-start px-4 font-bold text-xl pb-16'><Dock /> Doc-Vault</h1>
          <ul className='grid gap-2 text-gray-3 text-md font-semibold'>
            <Link to="/" className={buttonVariants({ variant: "secondary", size: "sm", className: "flex w-52 gap-4 hover:bg-gray-5 hover:text-gray-10" })}><HomeIcon /> My Documents</Link>
            <Link to="/friends" className={buttonVariants({ variant: "secondary", size: "sm", className: "flex w-52 gap-4 hover:bg-gray-5 hover:text-gray-10" })}><GroupIcon /> Friends</Link>
            {/* <Link to="/Upload" className={buttonVariants({ variant: "secondary", size: "sm", className: "flex w-52 gap-4 hover:bg-gray-5 hover:text-gray-10" })}><GroupIcon /> Upload</Link> */}
            <Dialog>
              <DialogTrigger className="flex w-52 gap-4 px-3 py-2 rounded-lg hover:bg-gray-5 hover:text-gray-10"><UploadIcon/> Upload</DialogTrigger>
              <DialogOverlay className="w-screen h-screen grid place-items-center">
                <DialogContent className=" p-5 rounded-2xl sm:max-w-[425px] bg-gray-5 text-gray-10">
                  <DialogHeader>
                    <DialogTitle className="font-bold text-xl">Upload</DialogTitle>
                  </DialogHeader>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Upload contract={contract} account={account} provider={provider}/>
                  </div>
                </DialogContent>
              </DialogOverlay>
            </Dialog>
            {/* <LogoutButton /> */}
          </ul>
        </div>
      </div>

      <div className="">
        <Outlet />
        {/* <Footer/> */}
      </div>
      <HoverCard className="">
        <HoverCardTrigger className="absolute z-20 right-5 top-5 flex cursor-pointer items-center gap-2 bg-gray-6 p-2 rounded-3xl">
          <Avatar className="w-8">
            <AvatarImage className="rounded-full" src={user.picture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

        </HoverCardTrigger>
        <HoverCardContent className="z-20 mt-2 grid gap-2 text-center w-44 bg-gray-6 p-2">
          <h1 className="text-sm tracking-widest">{user.name}</h1>
          <h1 className="text-gray-1">AccountType: Sellers</h1>

        </HoverCardContent>
      </HoverCard>
      
      {modalOpen&&<div className="absolute top-0">
              <div className="w-screen h-screen grid place-items-center hello">
                <div className=" p-5 rounded-2xl sm:max-w-[425px] bg-gray-5 text-gray-10">
                  <div>
                    <div className="font-bold text-xl">Upload</div>
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Modal contract={contract}/>
                  </div>
                </div>
              </div>
            </div>}
            {modalOpenn&&<div className="absolute top-0">
              <div className="w-screen h-screen grid place-items-center hello">
                <div className=" p-5 rounded-2xl sm:max-w-[425px] bg-gray-5 text-gray-10">
                  <div>
                    <div className="font-bold text-xl">Share</div>
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Share contract={contract}/>
                  </div>
                </div>
              </div>
            </div>}
    </div>
  );
};

export default MainLayout;
