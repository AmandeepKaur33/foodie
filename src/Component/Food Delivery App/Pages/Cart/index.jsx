import React from 'react'
import { Navbar } from '../../Food Components/Header'
import Foodfooter from '../../Food Components/Footer'

const Cart = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full h-[90vh]'>Cart</div>
        <Foodfooter />
    </div>
  )
}

export default Cart