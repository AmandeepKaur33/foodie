import React from 'react'

const OfferCards = ({item}) => {
  return (
    <div className='w-72 flex flex-col items-center gap-7 group   transition-all hover:border-2 hover:bg-white hover:scale-125 hover:shadow-xl border-blue-50'>
      <img src={item?.img} className='w-36 bg-cyan-200 group-hover:w-full group-hover:rounded-none rounded-full h-36' alt="" />
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-xl text-blue-400 font-semibold'>{item?.title}</h1>
        <p className='text-base text-center text-gray-400 font-normal'>{item?.desc}</p>
      </div>
    </div>
  )
}

export default OfferCards