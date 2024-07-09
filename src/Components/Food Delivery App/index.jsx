import React, { useContext } from "react";
import { Landing } from "./Food Components/Landing";
import { Routes, Route } from "react-router-dom";
import Menupage from "./Pages/Menu";
import Error from "./Pages/Error";
import Cart from "./Pages/Cart";
import { Navbar } from "./Food Components/Header";
import Foodfooter from "./Food Components/Footer";
import { LoginContext } from "../Context/Authentication Context/LoginContext";
import Panel from "./Pages/Admin/Admin Content";
import Payment from "./Pages/Payment";
import Invoice from "./Pages/Invoice";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Authentication/Signup";
import Login from "./Pages/Authentication/Login";
import AboutUs from "./Food Components/About Us";
import Contact from "./Pages/Contact/Contact";

const Foodapp = () => {
    // const initial = JSON.parse(localStorage.getItem('LoginData'))
    // console.log("check login data", initial);
    const {loginState} = useContext(LoginContext);
    return(
        <div className="w-full">
            {loginState?.admin
            ?
            <Panel/>
            :
            <div className="w-full">
<Navbar />
        <Routes>
        <Route name="Landing" element={<Landing />} path="/" />
        <Route name="About" element={<AboutUs />} path="/About"></Route>
        <Route name="Menu" element={<Menupage />} path="/Menu"></Route>
        <Route name="Contact" element={<Contact />} path="/Contact"></Route>
        {loginState?.isAuthenticated ? <Route name="Cart" element={<Cart />} path="/Cart"></Route> : <Route name="Cart" element={<Login />} path="/Cart"></Route>}
       {/* <Route name="Cart" element={<Cart />} path="/Cart"></Route> */}
       <Route name="Payment" element={<Payment/>} path="/Payment" />
       {loginState?.isAuthenticated ? <Route name="Profile" element={<Profile/>} path="/Profile" /> : <Route name="Profile" element={<Login  />} path="/Profile"></Route>}
       <Route name="Invoice" element={<Invoice/>} path="/Invoice" />
       <Route name="Signup" element={<Signup/>} path="/Signup" />
        <Route name="Login" element={<Login  />} path="/Login">
        </Route>
        <Route path="*" element={<Error />} />
        </Routes>
        <Foodfooter />
            </div>
        }
        
        
        </div>
    )
}

export default Foodapp;