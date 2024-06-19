import React from 'react'
import Navigationpanel from './Navigation'
import { useContext } from 'react'
import { LoginContext } from '../../../../../Context/Authentication Context/LoginContext'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const {logout} = useContext(LoginContext)
    const navigate = useNavigate();
    const navList = [
        {
            desc: "Overview",
            nav: "Dashboard",
            link: "/admin",
            img: "fa-solid fa-home"
        },
        {
            desc: "Category Crud",
            nav: "Categories",
            link: "/categories",
            img: "fa-solid fa-layer-group"
        },
        {
            desc: "Product Crud",
            nav: "Product",
            link: "/products",
            img: "fa-solid fa-layer-group"
        },
        {
            desc: "Product Delivery Status",
            nav: "Product Status",
            link: "/Admin/Product Status",
            img: "fa-solid fa-signs-post"
        },
        {
            desc: "User's Status",
            nav: "Users",
            link: "/users",
            img: "fa-solid fa-signs-post"
        },
        {
            desc: "Contact / Feedback",
            nav: "Contact",
            link: "/Admin/Contact",
            img: "fa-regular fa-comments"
        },
        {
            desc: "Report",
            nav: "Selling Report",
            link: "Selling Report",
            img: "fa-regular fa-comments"
        },
    ]
  return (
    <div className='w-1/5 border-r-2 h-full overflow-auto'>
        <div className='mx-2 my-2 bg-blue-500 px-3 py-1 rounded-2xl text-white flex items-center justify-between'>
            <h1>Logo</h1>
            <button onClick={()=> {
                logout();
                navigate("/")
            }}>Logout</button>
        </div>
        {navList.map((item,index)=>(
            <Navigationpanel key={index} list={item}/>
            
        ))}
        
    </div>
  )
}

export default Sidebar