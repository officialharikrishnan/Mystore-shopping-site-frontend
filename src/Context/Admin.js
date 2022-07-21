import {createContext,useState } from 'react'

export const AdminContext=createContext(null)

export default function A_Context({children}){
    const [admin,setAdmin]=useState(null)
    return (
        <AdminContext.Provider value={{admin,setAdmin}}>
            {children}
        </AdminContext.Provider>
    )
}