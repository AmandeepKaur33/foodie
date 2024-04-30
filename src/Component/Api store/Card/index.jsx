import React from 'react'

const Card = ({products}) => {
  return (
    <div className='w-1/3  bg-gray-800 text-white'>
        
        <div className=' m-4'>
        <h1 className='text-2xl font-medium '>{products?.title}</h1>
        <p className='mt-2 text-zinc-400'>{products?.body}</p>
        
        </div>
    </div>
  )
}

export default Card