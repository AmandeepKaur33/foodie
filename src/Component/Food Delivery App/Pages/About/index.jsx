import React from 'react'
import { Navbar } from '../../Food Components/Header'
import About from '../../Food Components/About'
import Foodfooter from '../../Food Components/Footer'

const Aboutpage = () => {
  return (
    <div className='w-full'>
       <Navbar />
        <About />
        <Foodfooter />
        
    </div>
  )
}

export default Aboutpage