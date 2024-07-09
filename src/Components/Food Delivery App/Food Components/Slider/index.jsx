import React, { useEffect } from "react";
import herobanner from "../../../Images/assets/foodimg-removebg-preview.png";
import bgBanner from "../../../Images/delevery-bg1.png";
import Button from "../Button";

const Slider = () => {
    useEffect(()=>{
        const now = new Date().getTime();
        const expirationTime = 24 * 60 * 60 * 1000;
        Object.keys(localStorage).forEach((key) => {
            const item = JSON.parse(localStorage.getItem(key));
            if (item && item.timestamp && now - item.timestamp > expirationTime) {
                localStorage.removeItem(key);
            }
        });
    },[])

  return (
    <div className="w-full h-[100vh] bg-gradient-to-b to-blue-50 from-white bg-blue-100 bg-no-repeat  pt-10 relative">
      <div className="absolute top-4 right-4">
        <img src={bgBanner} className="w-[500px] " alt="" />
        <img
          src={herobanner}
          className="absolute w-[650px]  top-[40px] inset-x-8"
          alt=""
        />
      </div>
      <div className="h-full w-1/2 mx-9 pt-14 pl-14">
        <h1 className="text-6xl font-bold leading-snug">
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
    </div>
  );
};
export { Slider };
