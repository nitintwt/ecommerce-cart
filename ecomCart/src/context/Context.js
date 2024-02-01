import { createContext, useContext } from "react";


export const ShopContext = createContext({
  addToCart :(itemId)=>{},
  deleteFromCart :(itemId)=>{},
  updateCartItemCount :(newAmount , itemId)=>{},
  totalCartAmount:()=>{}
})

export const useItem =()=>{
  return useContext(ShopContext)
}

export const ShopContextProvider = ShopContext.Provider