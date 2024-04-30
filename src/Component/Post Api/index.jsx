import React, { useState } from 'react'
import axios from 'axios';

const AxiosPost = () => {
    const data = {fname: "", lname: ""};
    const [inputData, setInputdata] = useState(data);
    const handleData = (e) => {
        setInputdata({...inputData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then((response)=>{
            console.log(response);
        })
    }
  return (
    <div className=''>
        <label htmlFor="">First Name:</label>
        <input type="text" name='fname' value={inputData.fname}  className='mb-5 text-black' onChange={handleData} /><br/>
        <label>Last Name:</label>
        <input type="text" name='lname' value={inputData.lname} className='mb-5' onChange={handleData} />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default AxiosPost