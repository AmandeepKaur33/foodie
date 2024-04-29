import React from "react";
import Button from "../Button";
import '../../../../App.css'
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../../Context/context";
// import { LoginContext} from "../../../Context/context";
// import Aboutpage from "../../Pages/About";
// import Menupage from "../../Pages/Menu";
// import Admin from "../../Pages/Admin";
// import cart from '../../../../images/assets/cart.svg';

const Navbar = () => {
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
    const [{login},setLogin] = useGlobalContext()
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
            <nav className="flex items-center gap-2">
                <NavLink to="/Cart"><i className="fa-solid fa-cart-shopping text-white "></i></NavLink>
                {login ?  <NavLink to="/Login"><Button onClick={() => setLogin({login: false})} text="Logout" bgColor="yellow-500" /></NavLink> :  <NavLink to="/Login" ><Button text="Login" bgColor="yellow-500" /></NavLink>}
               
                
            </nav>
            
        </header>
        
        
    )
}

export {Navbar};