import React, { createContext, useEffect, useState } from "react";

const ResponsiveContext = createContext();

const ResponsiveProvider = ({ children }) => {
    const [mobileResponsive,setMobileResponsive] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    useEffect(()=>{
    window.innerWidth < 768 ? setMobileResponsive(true) : setMobileResponsive(false)
  },[setMobileResponsive])
  console.log("mobileResponsive",mobileResponsive);
    return <ResponsiveContext.Provider value={{mobileResponsive,showMenu,setShowMenu}}>
        {children}
    </ResponsiveContext.Provider>
}

export {ResponsiveContext, ResponsiveProvider}