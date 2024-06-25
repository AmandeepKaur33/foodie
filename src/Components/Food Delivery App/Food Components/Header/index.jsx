import React, { createContext, useContext } from "react";
import Button from "../Button";
import '../../../../App.css'
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../../Context/Authentication Context/LoginContext";
import { CartContext } from "../../../Context/Customer Context/CartContext";
// import { LoginContext} from "../../../Context/context";
// import Aboutpage from "../../Pages/About";
// import Menupage from "../../Pages/Menu";
// import Admin from "../../Pages/Admin";
// import cart from '../../../../images/assets/cart.svg';

const Navbar = () => {
    const {cartState} = useContext(CartContext)
    // const {loginState} = useContext(LoginContext);
    
// const move = useNavigate()
    // const login = useContext(LoginContext)
    // console.log(login);
    // const [display, setDisplay] = useState(false)
    // const intialData = {
    //     fname: "", lname: "", uname: "", email: "", password: ""
    // } 
    // const [{fname,lname,uname,email,password }, setData] = useState(intialData);
    // const initialValue = {user: "", pass: "", login: false}
    // const [{user, pass, login}, setPayload] = useState(initialValue);
    // const [{login},setLogin] = useGlobalContext();
    // const {cartState} = useContext(createContext);
    const {loginState, logout } = useContext(LoginContext);
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
    console.log(cartState?.cartItems.map((i)=> i));
    // const navigate = () => {
    //     move("/About")
    // }
    return(
    
        <header className="w-full h-16 bg-gray-800 flex items-center justify-evenly text-white">
            <h1 className="text-3xl font-bold">Feane</h1>
            <ul className="w-2/5 flex items-center justify-evenly font-medium">
                {navLinks.map((item,index)=>(
                    <NavLink to={item.path}  key={index}>{item.link}</NavLink>
                    
                ))}
            </ul>
            <nav className="flex items-center gap-4">
                <NavLink to="/Profile"> <i class="fa fa-user" ></i></NavLink>
                <div className="relative">
                <NavLink to="/Cart"><i className="fa-solid fa-cart-shopping text-white text-lg "></i></NavLink>
                {loginState?.isAuthenticated && <div className="absolute top-[-12px] bg-yellow-400 text-white w-4 h-4  py-0 rounded-full right-[-9px] flex items-center justify-center">{extractCounts.length}</div>}
                </div>
                
                {loginState.isAuthenticated ?  <NavLink to="/Login"><Button onClick={logout} text="Logout" bgColor="yellow-500" /></NavLink> :  <NavLink to="/Login" ><Button text="Login" bgColor="yellow-500" /></NavLink>}
               
                
            </nav>
            
        </header>
        
        
    )
}

export {Navbar};