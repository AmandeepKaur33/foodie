import React, { useContext, useState } from "react";
import Button from "../Button";
import '../../../../App.css'
import logoImg from '../../../Images/assets/spices-removebg-preview.png';
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../../Context/Authentication Context/LoginContext";
import { CartContext } from "../../../Context/Customer Context/CartContext";

const Navbar = () => {
    const {cartState} = useContext(CartContext);
    const {loginState, logout } = useContext(LoginContext);
    const [showMenu, setShowMenu] = useState(false)
    const extractCounts = cartState?.cartItems?.filter((i)=> loginState?.user?.CId === i?.CId )
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
        },
        
    ]
    console.log("show",showMenu);
    return(
    
        <header className="w-11/12  sm:mx-12 py-5 h-20 bg-white flex border-b border-yellow-100 items-center justify-between text-blue-500">
            <div className="text-3xl relative text-blue-500  font-bold rounded-2xl flex items-center">
                <img src={logoImg} className="w-12 mt-2" alt="" /><h1 className="hidden sm:flex">Foodies Point</h1></div>
                <div className={`flex items-center transition-all  ${showMenu ? 'absolute w-screen px-0 mx-0 h-[35vh] z-[999]  p-2 top-16 flex flex-col bg-blue-700 ': 'hidden'} sm:flex`}>
                <ul className={`w-2/5 transition-all  ${showMenu ? 'flex flex-col h-5/6 items-center  ': 'hidden'} sm:flex items-center text-xl justify-evenly font-medium`}>
                {navLinks.map((item,index)=>(
                    <NavLink to={item.path}  key={index}>{item.link}</NavLink>
                    
                ))}
            </ul>
            <nav className={`${showMenu ? 'flex' : 'hidden'} sm:flex items-center gap-4`}>
                <NavLink to="/Profile"> <i className="fa fa-user" ></i></NavLink>
                <div className="relative">
                <NavLink to="/Cart"><i className="fa-solid fa-cart-shopping  text-blue-50 text-lg "></i></NavLink>
                {loginState?.isAuthenticated && <div className="absolute top-[-12px] bg-yellow-400 text-white w-4 h-4  py-0 rounded-full right-[-9px] flex items-center justify-center">{extractCounts.length}</div>}
                </div>
                
                {loginState.isAuthenticated ?  <NavLink to="/Login"><Button onClick={logout} text="Logout" bgColor="yellow-500" /></NavLink> :  <NavLink to="/Login" ><Button text="Login" bgColor="yellow-500" /></NavLink>}
               
            </nav>
                </div>
            
            <i onClick={()=>setShowMenu(!showMenu)} className="fa-solid fa-hamburger text-xl sm:hidden"></i>
            
        </header>
        
        
    )
}

export {Navbar};