import { createContext } from "react";
import { useCart } from "../hook/useCart";


export const ShopeContext=createContext({
    carTItems:null,
    addToCart:()=>{},
    removeFromCart:()=>{}
}) 
 export const ShopeContextProvider=(props)=>{
    return <ShopeContext.Provider value={useCart()}>{props.children}</ShopeContext.Provider>
 } 