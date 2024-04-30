import React from "react";
import { Landing } from "./Food Components/Landing";
// import { Navbar } from "./Food Components/Header";
// import Foodfooter from "./Food Components/Footer";
import { Routes, Route } from "react-router-dom";
import Aboutpage from "./Pages/About";
import Menupage from "./Pages/Menu";
import Contact from "./Pages/Contact/input";
// import Admin from "./Pages/Admin";
import Error from "./Pages/Error";
// import Admin from "./Pages/Admin";
// import Categories from "./Pages/Admin/Admin Content/Categories";
// import Product from "./Pages/Admin/Admin Content/Products";
import Login from "./Pages/Admin/Login";
import Cart from "./Pages/Cart";
// import Categories from "./Pages/Admin/Admin Content/Categories";
// import Product from "./Pages/Admin/Admin Content/Products";
// import Dashboard from "./Pages/Admin/Admin Content/Dashboard";
// import Categories from "./Pages/Admin/Admin Content/Categories";
// import Product from "./Pages/Admin/Admin Content/Products";

const Foodapp = () => {
    return(
        <div className="w-full">
        {/* <Navbar /> */}
        <Routes>
        <Route name="Landing" element={<Landing />} path="/" />
        <Route name="About" element={<Aboutpage />} path="/About"></Route>
        <Route name="Menu" element={<Menupage />} path="/Menu"></Route>
        <Route name="Contact" element={<Contact />} path="/Contact"></Route>
        <Route name="Cart" element={<Cart />} path="/Cart"></Route>
        <Route name="Login" element={<Login />} path="/Login">
            {/* <Route name="Dashboard" element={<Dashboard />} path="/Admin" />
            <Route name="Categories" element={<Categories />} path="/Admin/Categories" />
            <Route name="Product" element={<Product />} path="/Admin/Product" /> */}
        </Route>
        
        <Route path="*" element={<Error />} />
        </Routes>
        {/* <Foodfooter /> */}
        </div>
        
    )
}

export default Foodapp;