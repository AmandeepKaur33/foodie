import React, { useContext, useEffect, useState } from 'react'
// import Button from '../../../Food Components/Button'
import cartImg from '../../../../Images/cart.svg'
import {  useGlobalContext } from '../../../../Context/context'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../../../Context/Authentication Context/LoginContext'
import { CartContext } from '../../../../Context/Customer Context/CartContext'

const FoodItems = ({items}) => {
  const {handleCart} = useContext(CartContext)
  // const {loginState} = useContext(LoginContext)
  // const initial = JSON.parse(window.localStorage.getItem('cart') || "[]")
  // const [cart,setCart] = useState(initial)
  // const [{login}] = useGlobalContext()
  // const navigateLogin = useNavigate()
  // console.log("initial",initial);
  // console.log(localStorage.getItem("cart"));
  // const handleCart = () => {
  //    if (!loginState?.isAuthenticated) {
  //     navigateLogin("/Login")
  //    }
  //    else{
  //     setCart([...cart,{
  //       img: items?.img,
  //        item_name: items?.item_name, 
  //        price: items?.price
  //       }])
  //    }
  //   setCart([...cart,{
  //         img: items?.img,
  //          item_name: items?.item_name, 
  //          price: items?.price
  //         }])
  // }
  // useEffect(() => {
  //  window.localStorage.setItem('cart',JSON.stringify(cart))
  // }, [cart])
  
  // console.log(img);
  // console.log("cart details",img,item_name,price);
  return (
    <div className='w-1/4 h-[30rem] bg-gray-800 text-white'>
        <div className='w-full flex justify-center items-center h-3/5 bg-slate-50 rounded-es-[36px] group'>
            <img src={items.PImg} className='w-56 group-hover:scale-110 group-hover:transition-all ' alt={items.PName} />
        </div>
        <div className=' m-4'>
        <h1 className='text-2xl font-medium '>{items.PName}</h1>
        <p className='mt-2 text-zinc-400'>{items.PDesc}</p>
        <div className='w-full flex items-center justify-between my-4'>
          <h2 className='text-lg font-normal'>${items.Price}</h2>
          <div className='bg-yellow-500 w-10 flex items-center justify-center h-10 rounded-full '>
            <img onClick={() => handleCart(items)} src={cartImg} aria-hidden="true" className='text-white w-6' alt='cart'  />
          </div>
        </div>
        </div>
    </div>
  )
}

export default FoodItems