import React from 'react'

const Options = ({list,onStateChange}) => {
 
  return (
    <ul className='w-1/3 p-2 bg-white mt-2 rounded-2xl'>
      {list?.map((item,index)=>(
        <li key={index} className='font-semibold cursor-pointer' onSelect={onStateChange(item?.opt)}>{item.opt}</li>
      ))}
    </ul>
  )
}

export default Options