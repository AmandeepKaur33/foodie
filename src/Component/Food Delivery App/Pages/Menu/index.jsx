import React, { useState } from 'react'
// import Category from '../../Food Components/Category';
import img1 from '../../../Images/f1.png';
import img2 from '../../../Images/f2.png';
import img3 from '../../../Images/f3.png';
import img4 from '../../../Images/f4.png';
import img5 from '../../../Images/f5.png';
import img6 from '../../../Images/f6.png';
import img7 from '../../../Images/f7.png';
import img8 from '../../../Images/f8.png';
import img9 from '../../../Images/f9.png';
import FoodItems from './Food items';
import { Navbar } from '../../Food Components/Header';
import Foodfooter from '../../Food Components/Footer';

const Menupage = () => {
  const foodItems = [
    {
      img: img1,
      item_name: "Delicious Pizza",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 20
    },
    {
      img: img2,
      item_name: "Delicious Burger",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 15
    },
    {
      img: img3,
      item_name: "Delicious Pizza",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 15
    },
    {
      img: img4,
      item_name: "Delicious Pasta",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 30
    },
    {
      img: img5,
      item_name: "French Fries",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 10
    },
    {
      img: img6,
      item_name: "Delicious Pasta",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 15
    },
    {
      img: img7,
      item_name: "Tasty Burger",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 12
    },
    {
      img: img8,
      item_name: "Healthy Burger",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 14
    },
    {
      img: img9,
      item_name: "Tasty Pasta",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 15
    },
  ]
  const [menu,setMenu] = useState(foodItems)
  const Filter = (e) => {
    setMenu(foodItems.filter((item)=> item.item_name.toLowerCase().includes(e.target.value)))
  }
  return (
    <>
    <Navbar />
    <div className=' w-full h-[80vh]  flex flex-col items-center py-6 overflow-auto'>
      <div className='w-11/12 mb-9 mx-auto bg-slate-100 flex h-[10vh] rounded-md justify-center items-center'>
        <input type='text' placeholder='Search your tasty meal' onChange={Filter} className='w-1/2 border rounded-s-lg py-2 px-3'/>
      </div>
      <div className=' w-full flex flex-wrap gap-11 items-center justify-center '>
       {menu.map((item,index)=>(
        <FoodItems key={index} items={item} />
       ))}
       </div>
    </div>
    <Foodfooter />
    </>
  )
}

export default Menupage