import { useContext, useState } from "react";
import axios from "axios";
import "./Upload.css";
import { Button } from "./ui/button";
import { providers } from "ethers";
import { useFile } from "../context/FileContext";
const Upload = ({ contract, account, provider }) => {
  const{changeFile,changeFileName, file, fileName}=useFile();
  const [fileDescription, setFileDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", fileName); // Add file name to form data
        formData.append("description", fileDescription); // Add file description to form data
            
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `6494f6c1e744b0265920`,
            pinata_secret_api_key: `cc34679e8a8270c4d9596c8dca28bf4aaa89a0e026f8026e513955aba9f3bddd`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;

        contract.add(account, ImgHash).then(() => {
          alert("Successfully Image Uploaded");
          changeFileName("No image selected");
          changeFile(null);
          setFileDescription(""); // Clear file description after upload
        });
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      changeFile(e.target.files[0]);
    };
    changeFileName(e.target.files[0].name);
    e.preventDefault();
  };

  return (
    <div className="">
      <form className="grid justify-center" onSubmit={handleSubmit}>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          className="p-5"
          onChange={retrieveFile}
        />
        <input
          type="text"
          placeholder="File Name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="p-5"
        />
        <textarea
          placeholder="File Description"
          value={fileDescription}
          onChange={(e) => setFileDescription(e.target.value)}
          className="p-5"
        />
        <button
          variant="secondary"
          type="submit"
          className="bg-blues-3 text-gray-5 p-2 rounded-lg"
          disabled={!file}
        >
          Upload File
        </button>
      </form>
    </div>
  );
};

export default Upload;

// import { useState } from "react";
// import axios from "axios";
// import "./FileUpload.css";
// function FileUpload({ contract, provider, account }) {
//   // const [urlArr, setUrlArr] = useState([]);
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState("No image selected");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (file) {
//         try {
//           const formData = new FormData();
//           formData.append("file", file);

//           const resFile = await axios({
//             method: "post",
//             url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
//             data: formData,
//             headers: {
//               pinata_api_key: `95f328a012f1634eab8b`,
//               pinata_secret_api_key: `8ea64e6b39c91631c66128a7c0e0dde35a6fbdf797a8393cc5ba8bf8d58e9b54`,
//               "Content-Type": "multipart/form-data",
//             },
//           });

//           const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
//           const signer = contract.connect(provider.getSigner());
//           signer.add(account, ImgHash);

//           //setUrlArr((prev) => [...prev, ImgHash]);

//           //Take a look at your Pinata Pinned section, you will see a new file added to you list.
//         } catch (error) {
//           alert("Error sending File to IPFS");
//           console.log(error);
//         }
//       }

//       alert("Successfully Uploaded");
//       setFileName("No image selected");
//       setFile(null); //to again disable the upload button after upload
//     } catch (error) {
//       console.log(error.message); //this mostly occurse when net is not working
//     }
//   };
//   const retrieveFile = (e) => {
//     const data = e.target.files[0];
//     console.log(data);

//     const reader = new window.FileReader();

//     reader.readAsArrayBuffer(data);
//     reader.onloadend = () => {
//       setFile(e.target.files[0]);
//     };
//     setFileName(e.target.files[0].name);
//     e.preventDefault();
//   };
//   return (
//     <div className="top">
//       <form className="form" onSubmit={handleSubmit}>
//         <label htmlFor="file-upload" className="choose">
//           {/*turn around for avoding choose file */}
//           Choose Image
//         </label>
//         <input
//           disabled={!account} //disabling button when metamask account is not connected
//           type="file"
//           id="file-upload"
//           name="data"
//           onChange={retrieveFile}
//         />
//         <span className="textArea">Image: {fileName}</span>
//         {/* choose file */}
//         <button type="submit" disabled={!file} className="upload">
//           Upload file
//         </button>
//       </form>
//     </div>
//   );
// }

// export default FileUpload;
