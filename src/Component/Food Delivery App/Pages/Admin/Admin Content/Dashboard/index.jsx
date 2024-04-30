import React from 'react'
import Card from './Dashboard Cards'

const Dashboard = () => {
    const dashboardList = [
        {
            img: "fa-solid fa-utensils",
            title: "Categories",
            count: 5,
            color: "#4680ff"
        },
        {
            img: "fa-solid fa-pizza-slice",
            title: "Products",
            count: 26,
            color: "#FC6180"
        },
        {
            img: "fa-solid fa-hand-holding-dollar",
            title: "Total Orders",
            count: 51,
            color: "#93BE52"
        },
        {
            img: "fa-solid fa-truck",
            title: "Delivered Items",
            count: 5,
            color: "#FFB64D"
        },
        {
            img: "fa-solid fa-hourglass-end",
            title: "Pending Items",
            count: 46,
            color: "#4680ff"
        },
        {
            img: "fa-solid fa-users-line",
            title: "Users",
            count: 36,
            color: "#FC6180"
        },
        {
            img: "fa-solid fa-sack-dollar",
            title: "Sold Amount",
            count: 10931,
            color: "#93BE52"
        },
        {
            img: "fa-regular fa-comments",
            title: "Feedback",
            count: 83,
            color: "#FFB64D"
        }
    ]
  return (
    <div className='w-full h-[calc(100%-12%)] grid grid-flow-dense grid-cols-4 items-center py-5 pt-16 pl-5'>
        {dashboardList.map((item,index)=>(
            <Card key={index} list={item} />
        ))}
    </div>
  )
}

export default Dashboard