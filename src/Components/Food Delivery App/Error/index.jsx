import React from 'react'
import { Navbar } from '../Food Components/Header'
import Foodfooter from '../Food Components/Footer'

const Message = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full h-[calc(100vh-46px)]'></div>
        <Foodfooter />
    </div>
  )
}

export default Message