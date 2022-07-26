import { createContext, useState } from "react";

export const UserContext=createContext(null)

export default function U_Context({children}){
    const [userDetails,setUserDetails]=useState(null)
    return(
        <UserContext.Provider value={{userDetails,setUserDetails}}>
            {children}
        </UserContext.Provider>
    )
}
