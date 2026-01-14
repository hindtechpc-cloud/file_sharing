import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./Authcontext";
import { file } from "zod";

export const FileContext = createContext();

export const FileContextProvider = ({ children }) => {
    const {user}=useContext(AuthContext);
  const [files, setFiles] = useState([]);
    const loadFiles = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/file", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        console.log(res);
        setFiles( res?.data?.files);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      loadFiles();
    }, [files]);
  return (
    <FileContext.Provider value={{ files, setFiles,loadFiles }}>
      {children}
    </FileContext.Provider>
  );
};
