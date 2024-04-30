import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

const  Signform = () => {
    const intialData = {
        fname: "", lname: "", uname: "", email: "", password: "", submit: false
    } 
    const [{fname,lname,uname,email,password, submit}, setData] = useState(intialData);
    const initialValue = {user: "", pass: "", login: false}
    const [{user, pass, login}, setPayload] = useState(initialValue);
    const handleSubmit = (e) => {
        e.preventDefault();
        setData({fname, lname, uname, email, password, submit: true})
        console.log("submit");
     
    }
    useEffect(() => {
        if(login && uname === user && pass === password){
            setData(intialData);
            setPayload(initialValue);
            toast("Login successful")
            console.log("login successfull");
        }else if (login && uname !== user && pass !== password){
            toast.error("incorrect usename && password")
            setPayload(initialValue)
        }
    },[uname, password, user, pass, login])
    const handleInput = (e) => {
        const {name, value} = e.target;
        setData((prev)=>({...prev, [name]: value}))
        console.log(uname,fname);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        setPayload({user, pass, login: true});
        console.log("login successfully");
    }
    const handleLogininp = (e) => {
        const {name, value} = e.target;
        setPayload((p) => ({...p, [name]: value}))
    }
  return (
    <div className='w-full h-screen bg-gray-900 flex items-start pt-8 justify-center'>
        <div className={` mr-16 w-64  text-blue-500 bg-white  mt-5  text-xl font-normal   `}>
            <div className={`${submit ? 'block' : 'hidden'} px-3 py-1`}>
            <h1>Usename: {uname}</h1>
            <h2>Password: {password}</h2>
            </div>
        </div>
        <form className='bg-white relative rounded-lg flex flex-col items-center w-5/12 py-3 ' onSubmit={handleSubmit}>
        <h1 className='text-5xl font-semibold text-blue-600 mx-auto mb-4'>Sign-up</h1>
            <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
                <label htmlFor='fname' className='text-xl font-medium'>First Name</label>
                <input type='text' name='fname' id='fname' value={fname} onChange={handleInput} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
            </div>
            <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
                <label htmlFor='lname' className='text-xl font-medium'>Last Name</label>
                <input type='text' name='lname' id='lname' value={lname} onChange={handleInput} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
            </div>
            <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
                <label htmlFor='uname' className='text-xl font-medium'>Username</label>
                <input type='text' name='uname' id='uname' value={uname} onChange={handleInput} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
            </div>
            <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
                <label htmlFor='email' className='text-xl font-medium'>Email</label>
                <input type='email' name='email' id='email' value={email} onChange={handleInput} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
            </div>
            <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
                <label htmlFor='password' className='text-xl font-medium'>Password</label>
                <input type='password' name='password' id='password' value={password} onChange={handleInput} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
            </div>
            <button type='submit' className='mt-3 px-5 rounded-md py-1 bg-blue-600 text-white'>Submit</button>
        </form>
        <form onSubmit={handleLogin} className='text-white bg-slate-700 px-12 ml-4 py-9'>
        <div className='flex flex-col mb-3 gap-2 w-full '>
                <label htmlFor='user' className='text-xl font-medium'>Username</label>
                <input type='text' name='user' id='user' value={user} onChange={handleLogininp} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
        </div>
        <div className='flex flex-col mb-3 gap-2 w-full '>
                <label htmlFor='pass' className='text-xl font-medium'>Password</label>
                <input type='pass' name='pass' id='pass' value={pass} onChange={handleLogininp} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
        </div>
            <button type='submit' className='mt-3 px-5  rounded-md py-1 bg-blue-600 text-white'>Submit</button>
        </form>
    </div>
  )
}

export default  Signform