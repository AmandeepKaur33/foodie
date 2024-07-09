import React, { useContext } from 'react'
import { CartContext } from '../../../../Context/Customer Context/CartContext'
const FoodItems = ({items}) => {
  const {handleCart} = useContext(CartContext);
  return (
  
    <div className='w-[23%] h-[26rem] relative bg-white gap-5 pb-4 shadow-md rounded-2xl text-black flex items-start px-4 flex-col mt-10'>
      <div className='w-full h-2/5 flex justify-center'>
      <img src={items?.PImg} alt={items?.PName} className='w-48 h-48 drop-shadow-xl absolute rounded-full -top-12' />
      </div>
      <h1 className='text-2xl font-semibold font-sans text-gray-800'>{items?.PName}</h1>
      <div className='w-full flex gap-1 items-center'>
      <h1 className='px-4 bg-green-300 text-green-900 rounded-xl'>{items?.Cat}</h1>
      <h1 className='px-4 bg-amber-200 text-amber-900 rounded-xl'>${items?.Price}</h1>
      <h1 className='px-4 bg-fuchsia-200 text-fuchsia-900 rounded-xl'>Available</h1>
      </div>
      <p className='text-base text-gray-500 h-20 '>{items?.PDesc}</p>
      <div className='flex items-end justify-center  h-[6vh] w-full'>
        <button  onClick={() => handleCart(items)} className='text-base bg-blue-500 py-2 px-4 text-white'><i className='fa-solid fa-cart-shopping mr-2'></i>Add To Cart</button>
      </div>
   </div>
  )
}

export default FoodItems