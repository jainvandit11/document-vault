import { Link, Share2Icon, ShareIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useModal } from "../context/ModalContext";
import { ethers } from "ethers";
import "./Upload.css";
import { useFile } from "../context/FileContext";

const Display = ({ contract, account, setModalOpen }) => {

  const{fileName,file}=useFile();
  const handleConfirmation = () => {
    window.location.reload();

    // Reload the page upon transaction confirmation
  };
  // const [modal, setModal]=useState(setModalOpen);

  const { openModal, modalOpen, setimag } = useModal();

  const handleShareButtonClick = () => {
    openModal();
  };
  const [data, setData] = useState("");

  useEffect(() => {
    const getdata = async () => {
      let dataArray;

      try {
        console.log("kfnkdnf");
        dataArray = await contract.display(account);
        console.log(account);
      } catch (e) {
        console.log(account);
        //alert(`You don't have access ${account}`);
      }
      const isEmpty = Object.keys(dataArray).length === 0;

      if (!isEmpty) {
        const str = dataArray.toString();
        const str_array = str.split(",");
        // console.log(str);
        // console.log(str_array);
        const images = str_array.map((item, i) => {
          return (
            <div className="rounded-xl w-72 aspect-square  grid overflow-hidden bg-gray-5 shadow-lg">
              <div className="border border-bottom-2 border-gray-10 object-center object-cover aspect-video items-center"
                  style={{
                    backgroundImage:`url(${item})`,
                    backgroundSize:"contain"
                  }}
                  >

                </div>
              {/* <img
                key={i}
                className=""
                src={item}
                alt={item}
              /> */}
              <div className="text-gray-10 px-6 py-2 h-fit py-2">
                <h1 className="font-bold text-lg">Photos</h1>
                <p className="text-gray-1 font-light text-md">Description</p>

                <div className="flex gap-2 place-items-center">
                  <a href={item} target="_blank">
                    <button className="px-4 py-1 bg-blues-3 text-gray-5 font-semibold">
                      Show More
                    </button>
                  </a>

                  <p
                    onClick={() => {
                      handleShareButtonClick();
                      setimag(item);
                    }}
                    className="px-4 py-2 text-gray-10"
                  >
                    <Share2Icon className="cursor-pointer" />
                  </p>
                </div>
              </div>
            </div>
          );
        });
        setData(images);
      } else {
        alert("No image to display");
      }
    };
    getdata();
  }, [account]);
  const getdata = async () => {
    let dataArray;

    try {
      console.log("kfnkdnf");
      dataArray = await contract.display(account);
    } catch (e) {
      console.log(account);
      //alert(`You don't have access ${account}`);
    }
    const isEmpty = Object.keys(dataArray).length === 0;
    // console.log(isEmpty)

    if (!isEmpty) {
      console.log(dataArray)
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <div className="rounded-xl w-72 aspect-square  grid overflow-hidden bg-gray-5 shadow-lg">
            <img
              key={i}
              className="border border-bottom-2 border-gray-10 object-center object-cover aspect-video items-center"
              src={item}
              alt={item}
            />
            <div className="text-gray-10 px-6 py-2 h-fit py-2">
              <h1 className="font-bold text-lg">Photos</h1>
              <p className="text-gray-1 font-light text-md">Description</p>

              <div className="flex gap-2 place-items-center">
                <a href={item}>
                  <button className="px-4 py-1 bg-blues-3 text-gray-5 font-semibold">
                    Show More
                  </button>
                </a>

                <p
                  onClick={() => {
                    handleShareButtonClick();
                    setimag(item);
                  }}
                  className="px-4 py-2 text-gray-10"
                >
                  <Share2Icon className="cursor-pointer" />
                </p>
              </div>
            </div>
          </div>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <div className="w-[50vw]">
      <div className="pb-4 w-[80vw]">
        <div className="flex gap-6  grid grid-cols-3">
          {data}
          {file+" "+fileName}
          {console.log(modalOpen)}
        </div>
      </div>
      <button onClick={handleConfirmation} className="reloadButton">
        reload
      </button>
      <button onClick={getdata} className="reloadButton">
        Getdata
      </button>
    </div>
  );
};
export default Display;
