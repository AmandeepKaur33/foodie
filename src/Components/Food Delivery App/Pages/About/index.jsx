import React from 'react'
// import { Navbar } from '../../Food Components/Header'
import About from '../../Food Components/About'
// import Foodfooter from '../../Food Components/Footer'

const Aboutpage = () => {
  console.log(localStorage.getItem("productsData"));
  const initial = JSON.parse(localStorage.getItem('LoginData'))
    console.log("check login data", initial);
  return (
    <div className='w-full'>
       {/* <Navbar /> */}
        <About />
        {/* <Foodfooter /> */}
        
    </div>
  )
}

export default Aboutpage