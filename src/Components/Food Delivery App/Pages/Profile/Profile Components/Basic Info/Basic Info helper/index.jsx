import React from 'react'
import { useAuth } from '../../../../../../Context/Authentication Context/Signup';

const InfoList = ({title,Value,name,data}) => {
  const {edit,handleChange} = useAuth();
  return (
    <div className='mx-10 py-5 border-b flex items-center '>
      <div>
        <h1 className='text-black font-bold w-44'>{title}</h1>
      </div>
      <div>
        {edit ? <input type={data === "email"? "email":"text"} value={Value} name={name} onChange={handleChange}/> : <h1 className='font-normal'>{data}</h1>}
        
      </div>
    </div>
  )
}

export default InfoList