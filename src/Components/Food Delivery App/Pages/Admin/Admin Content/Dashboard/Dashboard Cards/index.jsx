import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ list }) => {
  const navigate = useNavigate()
  return (
    <div className="w-60 h-36 px-5 group group-hover:cursor-pointer rounded-xl shadow-2xl bg-white relative">
      <div className="flex justify-between group-hover:cursor-pointer items-center w-full">
        <div>
        <i
          className={`${list.img} w-16 h-16 group-hover:-translate-y-6 transition-all rounded-lg absolute top-[-15px] flex items-center justify-center text-white text-3xl  `} style={{backgroundColor: `${list.color}`}}></i>
          </div>
        <div className=" mt-3  ">
          <h1 className={` font-bold `} style={{color: `${list.color}`}}>{list.title}</h1>
          <h1 className="text-2xl text-end mt-2">{list.count}</h1>
        </div>
      </div>
      <div className="py-5">
      <h1 onClick={()=>navigate(list?.to)} className={`cursor-pointer font-medium underline pb-2 `} style={{color: `${list.color}`}}>View Details</h1>
      </div>
    </div>
  );
};

export default Card;
