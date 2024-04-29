import React from "react";
import { Landing } from "./Food Components/Landing";
import { Routes, Route } from "react-router-dom";
import Aboutpage from "./Pages/About";
import Menupage from "./Pages/Menu";
import Contact from "./Pages/Contact/input";
import Error from "./Pages/Error";
import Login from "./Pages/Admin/Login";
import Cart from "./Pages/Cart";
import { Navbar } from "./Food Components/Header";
import Foodfooter from "./Food Components/Footer";
import {  useGlobalContext } from "../Context/context";

const Foodapp = () => {
    const [{login}] = useGlobalContext();
    console.log("loginData",login);
    return(
        <div className="w-full">
        <Navbar />
        <Routes>
        <Route name="Landing" element={<Landing />} path="/" />
        <Route name="About" element={<Aboutpage />} path="/About"></Route>
        <Route name="Menu" element={<Menupage />} path="/Menu"></Route>
        <Route name="Contact" element={<Contact />} path="/Contact"></Route>
        {login ? <Route name="Cart" element={<Cart />} path="/Cart"></Route> : <Route name="Cart" element={<Login />} path="/Cart"></Route>}
       
        <Route name="Login" element={<Login  />} path="/Login">
        </Route>
        <Route path="*" element={<Error />} />
        </Routes>
        <Foodfooter />
        </div>
    )
}

export default Foodapp;