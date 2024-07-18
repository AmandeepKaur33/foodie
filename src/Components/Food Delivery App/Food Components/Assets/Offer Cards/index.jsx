import React from 'react'

const OfferCards = ({item}) => {
  return (
    <div className='w-36 mt-16 sm:mt-0 pb-3 sm:w-72 flex flex-col items-center sm:gap-7 group   transition-all hover:border-2 hover:bg-white hover:scale-125 hover:shadow-xl border-blue-50'>
      <img src={item?.img} className='w-full sm:w-36 bg-cyan-200 group-hover:w-full group-hover:rounded-none sm:rounded-full h-36' alt="" />
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-lg sm:text-xl text-blue-400 text-center font-semibold'>{item?.title}</h1>
        <p className='text-base hidden sm:flex text-center text-gray-400 font-normal'>{item?.desc}</p>
      </div>
    </div>
  )
}

export default OfferCards