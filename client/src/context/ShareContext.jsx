import React, { createContext, useState, useContext } from 'react';

const ShareContext = createContext();

export const ShareProvider = ({ children }) => {
  const [modalOpenn, setModalOpen] = useState(false);
  const[imag,setimag]=useState("");

  
  const openModall = () => {
    setModalOpen(true);
  };

  const closeModall = () => {
    setModalOpen(false);
  };

  return (
    <ShareContext.Provider value={{ modalOpenn, openModall, closeModall, setimag, imag }}>
      {children}
    </ShareContext.Provider>
  );
};

export const useShare = () => {
  return useContext(ShareContext);
};
