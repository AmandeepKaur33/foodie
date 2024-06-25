import React, { useContext } from 'react'
import { useAuth } from '../../../../../../Context/Authentication Context/Signup'
import { LoginContext } from '../../../../../../Context/Authentication Context/LoginContext';

const InfoList = ({title,value,name}) => {
  const {edit,handleChange} = useAuth();
  return (
    <div className='mx-10 py-5 border-b flex items-center '>
      <div>
        <h1 className='text-black font-bold w-44'>{title}</h1>
      </div>
      <div>
        {edit ? <input type={value === "email"? "email":"text"} value={value} name={name} onChange={handleChange}/> : <h1 className='font-normal'>{value}</h1>}
        
      </div>
    </div>
  )
}

export default InfoList