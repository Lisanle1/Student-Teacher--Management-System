import { createContext, useState } from "react";

let Ucont=createContext();
export const Ab=({children})=>{
    let [user,setUser]=useState([]);
    let [teach,setteach]=useState([]);
    return(
        <Ucont.Provider value={{user,setUser,teach,setteach}}>{children}</Ucont.Provider>
    )
}
export default Ucont;