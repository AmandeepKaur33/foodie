import React from "react";
import Button from "../Button";
import '../../../../App.css'
import { NavLink } from "react-router-dom";
// import Aboutpage from "../../Pages/About";
// import Menupage from "../../Pages/Menu";
// import Admin from "../../Pages/Admin";
// import cart from '../../../../images/assets/cart.svg';

const Navbar = () => {
    const navLinks = [
        {
            link: "HOME",
            path: "/"
        },
        {
            link: "MENU",
            path: "/Menu"
        },
        {
            link: "ABOUT",
            path: "/About",
            element: "Aboutpage"
        },
        {
            link: "CONTACT",
            path: "/Contact"
        }
    ]
    return(
        <header className="w-full h-16 bg-gray-800 flex items-center justify-evenly text-white">
            <h1 className="text-3xl font-bold">Feane</h1>
            <ul className="w-2/5 flex items-center justify-evenly font-medium">
                {navLinks.map((item,index)=>(
                    <NavLink to={item.path}  key={index}><a href="#home">{item.link}</a></NavLink>
                    
                ))}
            </ul>
            <nav className="flex">
                <NavLink to="/Cart"><i className="fa-solid fa-cart">Cart</i></NavLink>
                <NavLink to="/Login" ><Button text="Login" /></NavLink>
                
            </nav>
            
        </header>
        
    )
}

export {Navbar};