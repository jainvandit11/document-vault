import React, { createContext, useState, useContext } from 'react';

const FileContext = createContext();

export const FileProvider = ({ children }) => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No image selected");

  
  const changeFile = (file) => {
    setFile(file)
  };

  const changeFileName = (string) => {
    setFileName(string);
  };

  return (
    <FileContext.Provider value={{ changeFile,changeFileName,file,fileName }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFile = () => {
  return useContext(FileContext);
};
