import React from 'react'

const Inputs = ({list,onChange}) => {
  return (
    <div className='flex mt-3 flex-col gap-2'>
        <label htmlFor={list?.name} className='font-medium text-gray-700'>{list?.label}{list?.error && <span className='text-red-500  mt-1 text-lg'>*</span>}</label>
        <input type={list?.type} value={list?.value} required placeholder={list?.placeholder} onChange={onChange}  className='w-full border-2 border-gray-300 py-1 px-2' name={list?.name}/>
    </div>
  )
}

export default Inputs