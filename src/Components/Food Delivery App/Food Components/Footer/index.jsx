import React from 'react';
import '../../../../index.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Foodfooter = () => {
  const infoList = [
    {
      Heading: "FoodiesPoint",
      isHighlighted: true,
      list: [
        {
          logo: <MdEmail/>,
          infoData: "foodie@gmail.com",
        },
        {
          logo: <IoMdCall/>,
          infoData: "910 468 587 1432",
        },
        {
          logo: <FaLocationDot/>,
          infoData: "Model Town N-32",
        },
      ]
    },
    {
      Heading: "Our Menu",
      list: [
        {
          infoData: "Breakfast",
        },
        {
          infoData: "Lunch",
        },
        {
          infoData: "Dinner",
        },
      ]
    },
    {
      Heading: "Useful Links",
      list: [
        {
          infoData: "Services",
        },
        {
          infoData: "Help & Support",
        },
        {
          infoData: "Terms & Conditions",
        },
      ]
    },
    {
      Heading: "Social",
      list: [
        {
          logo: <FaFacebook/>,
          infoData: "Facebook",
        },
        {
          logo: <FaInstagram/>,
          infoData: "Instagram",
        },
        {
          logo: <FaYoutube/>,
          infoData: "Youtube",
        },
      ]
    }
  ]
  return (
    <div className="w-full h-[40vh] items-center  py-14 flex bg-cover flex-col" >
      <div className='flex justify-center w-5/6 border-b pb-12 gap-28'>
      
        {infoList?.map((item,index)=>(
          <div key={index} className='text-left'>
            <h1 className={`${item?.isHighlighted ?' text-3xl font-extrabold text-blue-500' : ' text-xl font-bold'}`}>{item?.Heading}</h1>
            <div className='mt-4 flex flex-col gap-3'>
              {item?.list?.map((elem,index)=>(
                <h1 key={index} className='text-gray-400 font-normal flex items-center gap-3'>{elem?.logo && <span className='text-blue-300 text-xl font-bold'>{elem?.logo}</span>}{elem?.infoData}</h1>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h1 className='py-4 text-gray-400 font-normal'>2024 @ ALL RIGHTS RESERVED BY FOODIE.COM</h1>
    </div>
  )
}

export default Foodfooter;