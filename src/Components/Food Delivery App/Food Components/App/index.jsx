import React from 'react';
import bg from '../../../Images/assets/fsfbg7.jpg'

const GetApp = () => {
  return (
    <div className='w-full h-[60vh] sm:h-[80vh] relative bg-blue-100  -z-30'>
      <div className='w-full absolute h-full -z-10'>
<img src={bg} className='w-full  h-full' alt="" />
      </div>
      <div className='w-3/5 h-full sm:w-1/2 sm:h-5/6 px-3 sm:px-10 flex flex-col gap-3 sm:gap-4 py-6 sm:py-16'>
      <div>
        <h1 className='text-black text-5xl font-semibold font-serif'>Get The App Now</h1>
        <p className='text-gray-400 hidden sm:flex mt-6 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ducimus distinctio nesciunt at doloremque recusandae itaque repudiandae! Nobis aut sit quod non dolor reiciendis atque!</p>
      </div>
        <div className='mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6'>
          <button className='bg-yellow-500 px-2 py-1 sm:py-2 sm:px-6 text-white'>Google Play</button>
          <button className='bg-red-500 px-2 py-1 sm:py-2 sm:px-6 text-white'>App Store</button>
        </div>
      </div>
    </div>
  )
}

export default GetApp