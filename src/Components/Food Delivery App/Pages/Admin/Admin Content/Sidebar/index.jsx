import React from 'react'
import Navigationpanel from './Navigation';
import logoImg from '../../../../../Images/assets/spices-removebg-preview.png';

const Sidebar = () => {
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
            nav: "Order Status",
            link: "/orderstatus",
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
            link: "/feedback",
            img: "fa-regular fa-comments"
        },
    ]
  return (
    <div className='w-1/5 border-r-2 h-full overflow-auto'>
        <div className='mx-2 my-2 py-1  text-blue-500 flex items-center justify-between border-b border-b-gray-300'>
        <div className='text-lg text-blue-500  font-bold rounded-2xl flex items-center gap-1 '><img src={logoImg} className="w-9" alt="" />Foodies Point</div>
            {/* <button onClick={()=> {
                logout();
                navigate("/")
            }}>Logout</button> */}
        </div>
        {navList.map((item,index)=>(
            <Navigationpanel key={index} list={item}/>
            
        ))}
        
    </div>
  )
}

export default Sidebar