import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Signupform = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });
  const [record, setRecord] = useState([{}])
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);
    setData({...data, [name]: value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const newRecord = {...data}
    setRecord([...record, newRecord])
    console.log(record);
  }
  useState(()=>{
    if(record != null){
      toast("submission")
    }
  },[record])
  return (
    <div className='m-32 w-full '>
      <form onSubmit={handleSubmit}>
        <div className='mt-9'>
          <label htmlFor='username'>username</label>
          <input type='text' className=' border border-black ml-3' value={data.username} onChange={handleInput} name='username' id='username'/>
        </div>
        <div className='mt-9'>
          <label htmlFor='email'>email</label>
          <input type='text' className=' border border-black ml-3' value={data.email} onChange={handleInput} name='email' id='email'/>
        </div>
        <div className='mt-9'>
          <label htmlFor='phone'>phone</label>
          <input type='text' className=' border border-black ml-3' value={data.phone} onChange={handleInput} name='phone' id='phone'/>
        </div>
        <div className='mt-9'>
          <label htmlFor='password'>password</label>
          <input type='text' className=' border border-black ml-3' value={data.password} onChange={handleInput} name='password' id='password'/>
        </div>
        <button type='submit' className='px-7 py-1 mt-6 bg-blue-500 text-white'>Submit</button>
      </form>
    </div>
  )
}

export default Signupform