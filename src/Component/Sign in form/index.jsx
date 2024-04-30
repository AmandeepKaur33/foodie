import React, { useState } from 'react'
import Input from './Input'

const Signin = () => {
  const [payload, setPayload] = useState([]);
  console.log(payload);
  const handleSubmit = (e) => {
    e.preventDefault()
    setPayload([...payload,{
      payload: {payload}
    }])
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='flex flex-col items-center justify-start' onSubmit={handleSubmit}>
        <div className='flex flex-wrap  items-center gap-9 w-10/12'>
        <Input type="text" id="fname" label="First Name" placeholder="Enter First Name" value={payload} onChange={()=>(
          setPayload(payload)
        )} />
         <Input type="text" id="lname" label="Last Name" placeholder="Enter Last Name"   />
         <Input type="text" id="uname" label="Username" placeholder="Enter Username"   />
         <Input type="email" id="email" label="Email" placeholder="Enter Email"  />
         <Input type="password" id="pass" label="Password" placeholder="Enter Password"  />
        </div>
         <button className='px-5 py-1 bg-blue-500 text-white text-xl font-medium' >Sign-up</button>
    </form>
    </div>
  )
}

export default Signin