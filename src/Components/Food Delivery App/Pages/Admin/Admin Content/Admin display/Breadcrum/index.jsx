import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../../../../../Context/Authentication Context/LoginContext';
import { IoIosLogOut } from "react-icons/io";
import { ResponsiveContext } from '../../../../../../Context/Display Context/ResponsiveContext';
import logoImg from '../../../../../../Images/assets/spices-removebg-preview.png';

const Breadcrum = () => {
  const {logout} = useContext(LoginContext);
  const {mobileResponsive} = useContext(ResponsiveContext);
  const navigate = useNavigate();
 const currLocation = useLocation();
  return (
    <div className='h-3/4 sm:h-full bg-[#FC6180] flex items-center justify-between px-5 text-white text-lg font-semibold'>
    {mobileResponsive 
    ?
    <div className='text-lg text-white  font-bold rounded-2xl flex items-center gap-1 '><img src={logoImg} className="w-9" alt="" />Foodies Point</div>
    :
    <div className='flex gap-3 items-center'>
    <i className='fa-solid fa-home'></i>
    <h1>Dashboard</h1>
   / {currLocation.pathname.slice(1,currLocation.pathname.length)}
   
  </div>
  }
      <div>
      <button className='flex items-center gap-2 justify-center mt-2' onClick={()=> {
                logout();
                navigate("/")
            }}>
           <h1 className='sm:flex hidden'> Logout </h1> <IoIosLogOut className='text-3xl text-white font-bold'/>
            </button>
      </div>
    </div>
  )
}

export default Breadcrum