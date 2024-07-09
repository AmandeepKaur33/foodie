import React from 'react';
import About from '../../Food Components/About';

const Aboutpage = () => {
  console.log(localStorage.getItem("productsData"));
  const initial = JSON.parse(localStorage.getItem('LoginData'))
    console.log("check login data", initial);
  return (
    <div className='w-full'>
        <About />
    </div>
  )
}

export default Aboutpage