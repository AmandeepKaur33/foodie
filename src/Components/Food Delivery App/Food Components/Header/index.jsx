import React, { useContext } from "react";
import Button from "../Button";
import '../../../../App.css'
import logoImg from '../../../Images/assets/spices-removebg-preview.png';
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../../Context/Authentication Context/LoginContext";
import { CartContext } from "../../../Context/Customer Context/CartContext";
import { ResponsiveContext } from "../../../Context/Display Context/ResponsiveContext";

const Navbar = () => {
    const {cartState} = useContext(CartContext);
    const {loginState, logout } = useContext(LoginContext);
    // const [showMenu, setShowMenu] = useState(false);
    const {showMenu, setShowMenu} = useContext(ResponsiveContext);
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
    const removeShowMenu = () => {
        return setShowMenu(false)
    }
    return(
        <header className="w-11/12  md:mx-12 py-5 h-20 bg-white flex border-b border-yellow-100 items-center justify-between text-blue-500">
            <div className="text-3xl relative text-blue-500  font-bold rounded-2xl flex items-center">
                <img src={logoImg} className="w-12 mt-2" alt="" /><h1 className="text-xl mt-1 md:mt-0 md:text-3xl">Foodies Point</h1></div>
                <div onMouseLeave={()=>setShowMenu(false)} className={`flex items-center md:w-3/5  md:justify-between transition-all  ${showMenu ? 'absolute w-screen px-0 mx-0 h-[35vh] sm:h-[50vh] z-[999]  p-2 top-16 flex flex-col bg-blue-700 ': 'hidden'} md:flex`}>
                <ul className={`w-2/5 md:w-2/3 transition-all  ${showMenu ? 'flex flex-col h-5/6 items-center  ': 'hidden'} md:flex items-center text-xl justify-evenly font-medium`}>
                {navLinks.map((item,index)=>(
                    <NavLink to={item.path} onClick={removeShowMenu}  key={index}>{item.link}</NavLink>
                    
                ))}
            </ul>
            <nav className={`${showMenu ? 'flex' : 'hidden'} md:flex items-center gap-4`} >
                <NavLink onClick={removeShowMenu} to="/Profile"> <i className="fa fa-user" ></i></NavLink>
                <div className="relative">
                <NavLink to="/Cart" onClick={removeShowMenu}><i className="fa-solid fa-cart-shopping  text-blue-50 md:text-blue-500 text-lg "></i></NavLink>
                {loginState?.isAuthenticated && <div className="absolute top-[-12px] bg-yellow-400 text-white w-4 h-4  py-0 rounded-full right-[-9px] flex items-center justify-center">{extractCounts.length}</div>}
                </div>
                
                {loginState.isAuthenticated ?  <NavLink onClick={removeShowMenu} to="/Login"><Button onClick={logout} text="Logout" bgColor="yellow-500" /></NavLink> :  <NavLink onClick={removeShowMenu} to="/Login" ><Button text="Login" bgColor="yellow-500" /></NavLink>}
               
            </nav>
                </div>
            
            <i onClick={()=>setShowMenu(!showMenu)} className="fa-solid fa-hamburger text-xl md:hidden"></i>
            
        </header>
        
        
    )
}

export {Navbar};