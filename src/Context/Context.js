import { createContext, useState } from "react";

export const ProductContext=createContext(null)

export default function Context({children}){
    const [productId,setProductId]=useState(null)
    console.log(productId);
    return(
        <ProductContext.Provider value={{productId,setProductId}}>
            {children}
        </ProductContext.Provider>
    )
}
