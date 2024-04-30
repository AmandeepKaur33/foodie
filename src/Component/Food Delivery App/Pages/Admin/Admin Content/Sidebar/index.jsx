import React from 'react'
import Navigationpanel from './Navigation'

const Sidebar = () => {
    const navList = [
        {
            desc: "Overview",
            nav: "Dashboard",
            link: "/Admin",
            img: "fa-solid fa-home"
        },
        {
            desc: "Category Crud",
            nav: "Categories",
            link: "/Admin/Categories",
            img: "fa-solid fa-layer-group"
        },
        {
            desc: "Product Crud",
            nav: "Product",
            link: "/Admin/Product",
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
            link: "/Admin/Users",
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
        {navList.map((item,index)=>(
            <Navigationpanel key={index} list={item}/>
            
        ))}
        
    </div>
  )
}

export default Sidebar