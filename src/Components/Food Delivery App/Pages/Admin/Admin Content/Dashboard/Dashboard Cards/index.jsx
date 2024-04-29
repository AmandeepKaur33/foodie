import React from "react";

const Card = ({ list }) => {
  return (
    <div className="w-60 h-36 px-5 group group-hover:cursor-pointer rounded-xl shadow-2xl bg-white relative">
      <div className="flex justify-between group-hover:cursor-pointer items-center w-full">
        <div>
        <i
          className={`${list.img} w-16 h-16 group-hover:-translate-y-6 transition-all rounded-lg absolute top-[-15px] flex items-center justify-center text-white text-3xl  bg-[${list.color}]`}></i>
          </div>
        <div className=" mt-3  ">
          <h1 className={`text-[${list.color}]  l font-bold `}>{list.title}</h1>
          <h1 className="text-2xl text-end mt-2">{list.count}</h1>
        </div>
      </div>
      <div className="py-5">
      <h1 className={` font-medium text-[${list.color}] l`}>View Details</h1>
      </div>
    </div>
  );
};

export default Card;
