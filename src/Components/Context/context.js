// Context <API > </>
// useContext hooks
import React, { useContext, useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";


// context(warehouse)
// Provider
// Consumer / (useContext())
// const data = {
//     user , pass, login ,submit, setPayload,initialValue
// }

const AppContext = createContext();
const CartContext = createContext();

// we need to create a provider func
const AppProvider = ({children}) => {
    const initialValue = {user: "", pass: "", login: false, submit: false}
    const [{user,pass,login,submit}, setLogin] = useState(initialValue);
    

    return <AppContext.Provider value={[{user,pass,login,submit},setLogin]}>
        {children}
    </AppContext.Provider>
}
const CartProvider = ({children}) => {
    const initial = JSON.parse(localStorage.getItem('cart') || "[]")
    // const initialValue = {img: "", item_name:"",price:""}
    const [cart,setCart] = useState(initial)
    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cart))
       }, [cart])
   return <CartContext.Provider value={[cart,setCart]} >
    {children}
   </CartContext.Provider>
}

// global custom hook
const useGlobalContext = () => {
    return useContext(AppContext)
}
const useCartContext = () => {
    return useContext(CartContext)
}

// export {AppContext,AppProvider,useGlobalContext,CartProvider,useCartContext}