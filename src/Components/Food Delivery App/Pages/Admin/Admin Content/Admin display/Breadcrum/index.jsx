import React from 'react';

const Breadcrum = () => {
  
  return (
    <div className='h-full bg-[#FC6180] flex items-center px-5 text-white text-lg font-semibold'>
      <div className='flex gap-3 items-center'>
        <i className='fa-solid fa-home'></i>
        <h1>Dashboard</h1>
        /
        <h2></h2>
      </div>
    </div>
  )
}

export default Breadcrum