// import React, { useState, useEffect } from 'react'
// import { toast } from 'react-toastify';
// import { Navbar } from '../../../Food Components/Header';
// import Foodfooter from '../../../Food Components/Footer';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';

// const  Signform = () => {
//   const [display, setDisplay] = useState(false)
//     const intialData = {
//         fname: "", lname: "", uname: "", email: "", password: ""
//     } 
//     const [{fname,lname,uname,email,password }, setData] = useState(intialData);
//     const initialValue = {user: "", pass: "", login: false}
//     const [{user, pass, login}, setPayload] = useState(initialValue);
//     const handleSubmit = (e) => {
//         e.preventDefault();
//             setData({fname, lname, uname, email, password})
//         setDisplay(false)
//         console.log("submit");
//         toast("submit");
        
//     }
//     useEffect(() => {
//         if(login && uname && pass && uname === user && pass === password){
//             setData(intialData);
//             setPayload(initialValue);
//             toast("Login successful")
//             console.log("login successfull");
//         }else if (login && uname !== user && pass !== password){
//             toast.error("incorrect usename && password")
//             setPayload(initialValue)
//         }
//         else if(login && uname === "" && pass === ""){
//             toast.error("plz enter something")
//         }
//     },[uname, password, user, pass, login])
//     const handleInput = (e) => {
//         const {name, value} = e.target;
//         setData((prev)=>({...prev, [name]: value}))
//         console.log(uname,fname);
//     }
//     const handleLogin = (e) => {
//         e.preventDefault();
//         setPayload({user, pass, login: true});
//         console.log("login successfully");
//     }
//     const handleLogininp = (e) => {
//         const {name, value} = e.target;
//         setPayload((p) => ({...p, [name]: value}))
//     }
//   return (
//     <>
//     <Navbar />
//     <div className='w-full h-screen bg-gray-900 flex items-center  justify-center relative'>
//         <div className='bg-white w-3/4 h-5/6'>
//       {display  ?
//         <form className='bg-white rounded-lg flex flex-col pt-5  items-center w-full ' onSubmit={handleSubmit}>
//         <h1 className='text-5xl font-semibold text-blue-600 mx-auto mb-4'>Sign-up</h1>
//         <div className='w-full grid grid-cols-2 mt-7'>
//             <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
//                 <label htmlFor='fname' className='text-xl font-medium'>First Name</label>
//                 <input type='text' name='fname' id='fname' value={fname} onChange={handleInput} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
//             </div>
//             <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
//                 <label htmlFor='lname' className='text-xl font-medium'>Last Name</label>
//                 <input type='text' name='lname' id='lname' value={lname} onChange={handleInput} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
//             </div>
//             <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
//                 <label htmlFor='uname' className='text-xl font-medium'>Username</label>
//                 <input type='text' name='uname' id='uname' value={uname} onChange={handleInput} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
//             </div>
//             <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
//                 <label htmlFor='email' className='text-xl font-medium'>Email</label>
//                 <input type='email' name='email' id='email' value={email} onChange={handleInput} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
//             </div>
//             <div className='flex flex-col mb-3 gap-2 w-full pl-16'>
//                 <label htmlFor='password' className='text-xl font-medium'>Password</label>
//                 <input type='password' name='password' id='password' value={password} onChange={handleInput} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
//             </div>
//             </div>
//             <div className='flex gap-1 items-center mt-3'>
//             <button type='submit' className=' px-5 rounded-md py-1 text-xl bg-blue-600 text-white'>Submit</button>
//             <h1>If you have already an account,</h1>
//             <button onClick={() => setDisplay(false)} className='bg-yellow-500 text-white py-1 px-4 rounded-xl font-semibold font-serif'>Login here...</button>
//             </div>
//         </form>
//         :
//         <form onSubmit={handleLogin} className='bg-white  rounded-lg flex items-center flex-col w-full  py-10 '>
//             <h1 className='text-6xl text-blue-700 font-sans font-semibold pb-10'>Login Now</h1>
//         <div className='flex flex-col mb-3 gap-2 w-full pl-16 '>
//                 <label htmlFor='user' className='text-xl font-medium'>Username</label>
//                 <input type='text' name='user' id='user' value={user} onChange={handleLogininp} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
//         </div>
//         <div className='flex flex-col mb-3 gap-2 w-full pl-16 '>
//                 <label htmlFor='pass' className='text-xl font-medium'>Password</label>
//                 <input type='password' name='pass' id='pass' value={pass} onChange={handleLogininp} className='border w-11/12 rounded-xl px-3 py-1 outline-none border-gray-500 focus:ring-blue-500' />
//         </div>
//             <button type='submit' className='mt-3 px-5  rounded-md py-1 bg-blue-600 text-white'>Submit</button>
//             <h1>If you don't have any account than, </h1>
//           <button onClick={() => setDisplay(true)} className='text-teal-400 py-1 px-2 font-bold rounded-full' >Signup here...</button>
//         </form>
//          }
//         </div>
//     </div>
//     {/* <div className='flex items-center justify-center gap-2 text-2xl h-[8vh] '>
//           <button onClick={() => setDisplay(false)} className='text-yellow-500 text-3xl underline font-semibold font-serif'>Login Now</button>
//           <h1>If you don't have any account than, </h1>
//           <button onClick={() => setDisplay(true)} className='text-teal-400 py-1 px-2 font-bold rounded-full' >Signup here...</button>
//         </div> */}
//     <Foodfooter />
//     </>
//   )
// }

// export default  Signform

import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { Navbar } from '../../../Food Components/Header';
import Foodfooter from '../../../Food Components/Footer';
import SignupFoodie from './Components/Signup';
import LoginFoodie from './Components/Login';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

const  Signform = () => {
  const [display, setDisplay] = useState(false)
    const intialData = {
        fname: "", lname: "", uname: "", email: "", password: ""
    } 
    const [{fname,lname,uname,email,password }, setData] = useState(intialData);
    const initialValue = {user: "", pass: "", login: false}
    const [{user, pass, login}, setPayload] = useState(initialValue);
    const handleSubmit = (e) => {
        e.preventDefault();
            setData({fname, lname, uname, email, password})
        setDisplay(false)
        console.log("submit");
        toast("submit");
        
    }
    useEffect(() => {
        if(login && uname && pass && uname === user && pass === password){
            setData(intialData);
            setPayload(initialValue);
            toast("Login successful")
            console.log("login successfull");
        }else if (login && uname !== user && pass !== password){
            toast.error("incorrect usename && password")
            setPayload(initialValue)
        }
        else if(login && uname === "" && pass === ""){
            toast.error("plz enter something")
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
    <>
    <Navbar />
    <div className='w-full h-screen bg-gray-900 flex items-center  justify-center relative'>
        <div className='bg-white w-3/4 h-5/6'>
      {display  ?
        <SignupFoodie submit={handleSubmit} display={setDisplay} input={handleInput} data={[fname,lname,email,uname,password]}  />
        :
        <LoginFoodie login={handleLogin} display={setDisplay} loginInp={handleLogininp} data={[user,pass]} />
         }
        </div>
    </div>
    {/* <div className='flex items-center justify-center gap-2 text-2xl h-[8vh] '>
          <button onClick={() => setDisplay(false)} className='text-yellow-500 text-3xl underline font-semibold font-serif'>Login Now</button>
          <h1>If you don't have any account than, </h1>
          <button onClick={() => setDisplay(true)} className='text-teal-400 py-1 px-2 font-bold rounded-full' >Signup here...</button>
        </div> */}
    <Foodfooter />
    </>
  )
}

export default  Signform