import React, { useEffect, useState } from 'react';
import img from "../../../../../Images/assets/f2.png";
import { useAuth } from '../../../../../Context/Authentication Context/Signup';

const Signup = () => {
  const { state, handleChange, toggleForm ,handleSubmit} = useAuth();
  return (
    <div className='w-4/5 h-4/5  bg-blue-500 shadow-2xl flex'>
      <form onSubmit={handleSubmit} className='w-1/2 h-full flex flex-col items-center gap-5 justify-center bg-white'>
      <h1 className='text-3xl font-bold text-blue-500'>SignUp Here!!</h1>
        <input type='text' name='name' required className='w-4/5 border border-blue-500 px-3 py-1  focus:outline-2 outline-blue-500 focus:rounded-2xl' value={state?.name} onChange={handleChange} placeholder='Enter name'/>
        <input type='text' name='username' required className='w-4/5 border border-blue-500 px-3 py-1  focus:outline-2 outline-blue-500 focus:rounded-2xl' value={state?.username} onChange={handleChange} placeholder='Enter username'/>
        <input type='password' name='password' required className='w-4/5 border border-blue-500 px-3 py-1  focus:outline-2 outline-blue-500 focus:rounded-2xl' value={state?.password} onChange={handleChange} placeholder='Enter password'/>
        <button type='submit' className=' px-8 py-2 rounded-3xl w-40 text-white  bg-blue-500 text-xl'>Signup</button>
      </form>
      <div className="w-1/2 h-full flex flex-col items-center gap-20 justify-end  text-white pt-4">
        <div className="text-center flex items-center flex-col">
          <img src={img} alt="img" className="w-20 " />
          <h1 className="font-bold text-4xl">Welcome To Foodie</h1>
          <p className="text-yellow-400">
           SignUp here to connect with foodie and for taking up our services
          </p>
        </div>
        <div className="w-full h-2/5 pt-12 px-8 rounded-ss-full rounded-se-full text-center bg-white text-blue-500">
          <p className="text-center text-lg">
            If you are a member of foodie and you have already an account, then  
            <button className="bg-blue-500 text-white px-3 ml-3 " onClick={toggleForm}>
              Login Here
            </button>
          </p>
        </div>
      </div>
    </div>
    // <h1>login</h1>
  )
}

export default Signup