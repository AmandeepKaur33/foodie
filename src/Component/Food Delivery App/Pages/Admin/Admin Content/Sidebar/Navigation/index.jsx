import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../../../../../App.css';

const Navigationpanel = ({list}) => {
  return (
    <div className='pl-3 py-6'>
        <h1 className='text-zinc-400 font-normal'>{list.desc}</h1>
        <NavLink to={list.link}>
        <div className='mt-3 flex items-center gap-2'>
            <div className='w-8 h-8 flex items-center justify-center bg-blue-500'>
              <i className={`${list.img} text-white`}></i>
            </div>
            <h1 className='font-medium'>{list.nav}</h1>
        </div>
        </NavLink>
        {/* <i class="fa-solid fa-layer-group"></i> */}
        {/* <i class="fa-solid fa-signs-post"></i> */}
        {/* <i class="fa-solid fa-utensils"></i> */}
        {/* <i class="fa-solid fa-pizza-slice"></i> */}
        {/* <i class="fa-solid fa-hand-holding-dollar"></i> */}
        {/* <i class="fa-solid fa-truck"></i> */}
        {/* <i class="fa-solid fa-hourglass-end"></i> */}
        {/* <i class="fa-solid fa-users-line"></i> */}
        {/* <i class="fa-solid fa-sack-dollar"></i> */}
        {/* <i class="fa-regular fa-comments"></i> */}
    </div>
  )
}

export default Navigationpanel