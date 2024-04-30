import React from 'react'
import img from '../../../../Images/download (13).jpg';

const Adminheader = () => {
  return (
    <header className='w-full flex items-center justify-between h-20 border-b-2'>
        <nav className='w-1/6 flex items-center px-3 bg-gray-700 h-full'>
            <h1 className='text-white text-xl '>Foodie</h1>
            {/* <i></i> */}
        </nav>
        <nav className='pr-8 flex items-center gap-3'>
          <img src={img} alt='admin'  className='rounded-full w-14 h-14' />
          <h2 className='text-zinc-700 text-xl '>Admin</h2>
        </nav>
    </header>
  )
}

export default Adminheader