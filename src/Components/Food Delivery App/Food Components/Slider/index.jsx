import React from "react";
// import herobanner from "../../../Images/assets/foodimg-removebg-preview.png";
import bgBanner from "../../../Images/delevery-bg1.png";
import pizzaSlice from '../../../Images/assets/pizza-slice1.png';

import Button from "../Button";

const Slider = () => {
  return (
    <div className=" sm:h-[70vh] lg:h-[100vh] bg-gradient-to-b to-blue-50 from-white bg-blue-100 bg-no-repeat  py-10  relative">
      <div className="w-full flex gap-1 sm:flex-row flex-col-reverse sm:items-center">
      <div className="h-1/2  sm:h-full w-full sm:w-1/2 sm:mx-9 px-6 sm:pl-8">
        <h1 className="lg:text-6xl sm:text-xl md:text-3xl  font-bold leading-snug">
          Enjoy Quick <span className="text-blue-500">Food</span> Delivery In
          Special Occation.
        </h1>
        <p className="text-gray-500 mb-12 mt-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic vero
          debitis voluptatem molestias! Tempora commodi sed quaerat distinctio
          rem ad.
        </p>

        <Button
          text="Order Now"
          bgColor="rgba(250 204 21 / var(--tw-bg-opacity))"
          width="156px"
        />
      </div>
       <div className="sm:w-1/2 w-full  flex items-center justify-center h-1/2 sm:h-full ">
        <img src={bgBanner} className="relative w-48 lg:w-[480px] md:w-96 sm:w-56" alt="" />
        <img src={pizzaSlice} alt="" className="absolute w-72 md:w-[380px] inset-y-2 lg:w-[780px]" />
       </div>
      </div>
    </div>
  );
};
export { Slider };
