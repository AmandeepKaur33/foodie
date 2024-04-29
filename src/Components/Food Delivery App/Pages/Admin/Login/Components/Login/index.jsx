import React from 'react'
import { useGlobalContext } from '../../../../../../Context/context'

const LoginFoodie = ({login,display,loginInp}) => {
  const loginData = useGlobalContext();
  return (
    <form onSubmit={login} className='bg-white  rounded-lg flex items-center flex-col w-full  py-10 '>
            <h1 className='text-6xl text-blue-700 font-sans font-semibold pb-10'>Login Now</h1>
        <div className='flex flex-col mb-3 gap-2 w-full pl-16 '>
                <label htmlFor='user' className='text-xl font-medium'>Username</label>
                <input type='text' name='user' id='user' value={loginData?.user} onChange={loginInp} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
        </div>
        <div className='flex flex-col mb-3 gap-2 w-full pl-16 '>
                <label htmlFor='pass' className='text-xl font-medium'>Password</label>
                <input type='password' name='pass' id='pass' value={loginData?.pass} onChange={loginInp} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
        </div>
            <button type='submit' className='mt-3 px-5  rounded-md py-1 bg-blue-600 text-white'>Submit</button>
            <h1>If you don't have any account than, </h1>
          <button onClick={() => display(true)} className='text-teal-400 py-1 px-2 font-bold rounded-full' >Signup here...</button>
        </form>
  )
}

export default LoginFoodie