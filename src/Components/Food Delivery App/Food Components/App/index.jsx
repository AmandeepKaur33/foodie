import React from "react";
import bg from "../../../Images/assets/fsfbg7.jpg";

const GetApp = () => {
  return (
    <div className="w-[100%] h-[60vh] md:w-full   bg-yellow-50">
      
      <div className="w-3/5 h-full md:w-1/2 md:h-5/6 px-3 md:px-10 flex flex-col gap-3 md:gap-4 py-6 md:py-16">
        <div>
          <h1 className="text-black text-5xl font-semibold font-serif">
            Get The App Now
          </h1>
          <p className="text-gray-400 hidden md:flex mt-6 font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            ducimus distinctio nesciunt at doloremque recusandae itaque
            repudiandae! Nobis aut sit quod non dolor reiciendis atque!
          </p>
        </div>
        <div className="mt-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <button className="bg-yellow-500 px-2 py-1 md:py-2 md:px-6 text-white">
            Google Play
          </button>
          <button className="bg-red-500 px-2 py-1 md:py-2 md:px-6 text-white">
            App Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetApp;
