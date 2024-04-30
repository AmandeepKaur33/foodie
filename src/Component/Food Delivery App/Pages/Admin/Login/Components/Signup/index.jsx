import React from 'react'

const SignupFoodie = ({submit,data,input,display}) => {
  return (
    <form className='bg-white rounded-lg flex flex-col pt-5  items-center w-full ' onSubmit={submit}>
        <h1 className='text-5xl font-semibold text-blue-600 mx-auto mb-4'>Sign-up</h1>
        <div className='w-full grid grid-cols-2 mt-7'>
            <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
                <label htmlFor='fname' className='text-xl font-medium'>First Name</label>
                <input type='text' name='fname' id='fname' value={data.fname} onChange={input} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
            </div>
            <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
                <label htmlFor='lname' className='text-xl font-medium'>Last Name</label>
                <input type='text' name='lname' id='lname' value={data.lname} onChange={input} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
            </div>
            <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
                <label htmlFor='uname' className='text-xl font-medium'>Username</label>
                <input type='text' name='uname' id='uname' value={data.uname} onChange={input} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
            </div>
            <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
                <label htmlFor='email' className='text-xl font-medium'>Email</label>
                <input type='email' name='email' id='email' value={data.email} onChange={input} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
            </div>
            <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
                <label htmlFor='password' className='text-xl font-medium'>Password</label>
                <input type='password' name='password' id='password' value={data.password} onChange={input} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
            </div>
            </div>
            <div className='flex gap-1 items-center mt-3'>
            <button type='submit' className=' px-5 rounded-md py-1 text-xl bg-blue-600 text-white'>Submit</button>
            <h1>If you have already an account,</h1>
            <button onClick={() => display(false)} className='bg-yellow-500 text-white py-1 px-4 rounded-xl font-semibold font-serif'>Login here...</button>
            </div>
        </form>
  )
}

export default SignupFoodie