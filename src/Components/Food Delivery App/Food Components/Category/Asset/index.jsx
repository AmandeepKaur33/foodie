import React from 'react';
import '../../../../../index.css';

const FoodCategory = ({itemList}) => {
  return (
    <div className="flex w-full flex-col justify-around items-center " >
      <img src={itemList.CatImg} className='w-36 ' alt={itemList.CName} />
      <div className='flex flex-col items-center gap-1'>
          <h1 className='text-2xl text-black font-normal'>{itemList.CName}</h1>
          <button  className='underline text-sm text-gray-300 hover:scale-105 hover:text-blue-400'>View More</button>
      </div>
    </div>
  )
}

export default FoodCategory