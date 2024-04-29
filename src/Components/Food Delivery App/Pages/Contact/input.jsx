import React from 'react'
import Input from './Input/input.jsx'
import Button from '../../Food Components/Button/index.jsx';
import img from '../../../Images/assets/cheese and lettuce burger.png'
// import { Navbar } from '../../Food Components/Header/index.jsx';
// import Foodfooter from '../../Food Components/Footer/index.jsx';

const Contact = () => {
  return (
    <>
    {/* <Navbar /> */}
    <div className='w-full p-10 flex items-center justify-evenly my-10'>
        <div>
        <h1 className="text-5xl font-bold font-serif text-yellow-600">Get In Touch...</h1>
        <Input type="text" id="name" placeholder="Enter name" />
        <Input type="text" id="number" placeholder="Phone Number" />
        <Input type="email" id="email" placeholder="Your Email" />
        <Button text="Submit"/>
        </div>
        <img src={img} alt='img' />
    </div>
    {/* <Foodfooter /> */}
    </>
    
  )
}

export default Contact