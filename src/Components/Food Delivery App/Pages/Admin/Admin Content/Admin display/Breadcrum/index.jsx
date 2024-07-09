import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../../../../../Context/Authentication Context/LoginContext';
import { IoIosLogOut } from "react-icons/io";

const Breadcrum = () => {
  const {logout} = useContext(LoginContext)
  const navigate = useNavigate();
 const currLocation = useLocation()
  return (
    <div className='h-full bg-[#FC6180] flex items-center justify-between px-5 text-white text-lg font-semibold'>
      <div className='flex gap-3 items-center'>
        <i className='fa-solid fa-home'></i>
        <h1>Dashboard</h1>
       / {currLocation.pathname.slice(1,currLocation.pathname.length)}
       
      </div>
      <div>
      <button className='flex items-center gap-2 justify-center mt-2' onClick={()=> {
                logout();
                navigate("/")
            }}>
            Logout  <IoIosLogOut className='text-3xl text-white font-bold'/>
            </button>
      </div>
    </div>
  )
}

export default Breadcrum