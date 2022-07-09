import { createContext, useState } from "react";

export const UserContext=createContext(null)

export default function U_Context({children}){
    const [userDetails,setUserDetails]=useState(null)
    console.log(userDetails);
    return(
        <UserContext.Provider value={{userDetails,setUserDetails}}>
            {children}
        </UserContext.Provider>
    )
}
