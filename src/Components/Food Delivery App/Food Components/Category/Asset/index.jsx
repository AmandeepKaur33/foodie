import React from 'react';
import '../../../../../index.css';
import Button from '../../Button';

const FoodCategory = ({itemList}) => {
  return (
    <div className='w-2/5 flex bg-gray-800 items-center gap-2 mt-10 pl-2 h-44 rounded-2xl text-white' >
      <div className='border-4 border-yellow-400 bg-white rounded-full w-36 h-36 flex items-center justify-center'>
      <img src={itemList.img} className='w-32 h-32' alt={itemList.title} />
      </div>
        <div>
          <h1 className='text-4xl font-semibold'>{itemList.title}</h1>
          <h2 className='text-2xl mb-6'>{itemList.offer}<span className='text-yellow-400 font-medium'>% offer</span></h2>
          <Button text="Order Now"  />
        </div>
    </div>
  )
}

export default FoodCategory