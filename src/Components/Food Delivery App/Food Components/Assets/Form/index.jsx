import React from 'react'

const Inputs = ({list}) => {
  return (
    <div className='flex mt-3 flex-col gap-2'>
        <label htmlFor={list?.id} className='font-medium text-gray-700'>{list?.label}</label>
        <input type={list?.type} placeholder={list?.placeholder} className='w-full border-2 border-gray-300 py-1 px-2' id={list?.id}/>
    </div>
  )
}

export default Inputs