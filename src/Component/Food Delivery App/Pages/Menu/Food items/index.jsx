import React from 'react'
// import Button from '../../../Food Components/Button'
import cart from '../../../../Images/cart.svg'

const FoodItems = ({items}) => {
  return (
    <div className='w-1/4 h-[30rem] bg-gray-800 text-white'>
        <div className='w-full flex justify-center items-center h-3/5 bg-slate-50 rounded-es-[36px] group'>
            <img src={items.img} className='w-56 group-hover:scale-110 group-hover:transition-all ' alt={items.item_name} />
        </div>
        <div className=' m-4'>
        <h1 className='text-2xl font-medium '>{items.item_name}</h1>
        <p className='mt-2 text-zinc-400'>{items.desc}</p>
        <div className='w-full flex items-center justify-between my-4'>
          <h2 className='text-lg font-normal'>${items.price}</h2>
          <div className='bg-yellow-500 w-10 flex items-center justify-center h-10 rounded-full '>
            <img src={cart} aria-hidden="true" className='text-white w-6' alt='cart' />
          </div>
        </div>
        </div>
    </div>
  )
}

export default FoodItems