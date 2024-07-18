import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/Authentication Context/Signup';

const Signup = () => {
    const {state,handleChange,handleSubmit} = useAuth();
    const navigate = useNavigate()
  return (
    <div className="w-full flex flex-col  gap-6 h-[100vh] overflow-auto bg-white px-3 sm:px-20 py-12 my-1 mx-auto ">
        <h1 className='text-5xl font-bold text-stone-800'>User Registration</h1>
        <div>
        <form onSubmit={handleSubmit} className='w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center bg-white mt-3'>
        <input type='text' name='name' required className=' border border-gray-500  px-5 py-1 mt-3' value={state?.name} onChange={handleChange} placeholder='Enter Full name'/>
        <input type='text' name='address' required className=' border border-gray-500  px-5 py-1 mt-3' value={state?.address} onChange={handleChange} placeholder='Enter Address'/>
        <input type='text' name='username' required className=' border border-gray-500  px-5 py-1 mt-3' value={state?.username} onChange={handleChange} placeholder='Enter username'/>
        <input type='text' name='zipCode' required className=' border border-gray-500  px-5 py-1 mt-3' value={state?.zipCode} onChange={handleChange} placeholder='Enter Post/Zip Code'/>
        <input type='email' name='email' required className=' border border-gray-500  px-5 py-1 mt-3' value={state?.email} onChange={handleChange} placeholder='Enter Email'/>
        <input type='file' name='img' required className=' border border-gray-500  px-3 py-1 mt-3'  onChange={handleChange} />
        <input type='text' name='mobile' required className=' border border-gray-500  px-5 py-1 mt-3' value={state?.mobile} onChange={handleChange} placeholder='Enter Mobile Number'/>
        <input type='password' name='password' required className=' border border-gray-500  px-5  py-1  mt-3' value={state?.password} onChange={handleChange} placeholder='Enter password'/>
        <div className='flex flex-col sm:flex-row items-start sm:items-center mt-2 sm:mt-0 gap-2'>
        <button type='submit' className=' px-1 rounded-3xl w-28 text-white  bg-green-500 text-lg'>Register</button>
        <div>Already Registered? <span onClick={()=>navigate("/Login")} className='cursor-pointer bg-teal-500 py-1 px-2 rounded-2xl text-white'>Login here...</span></div>
        </div>
      </form>
        </div>
    </div>
  )
}

export default Signup