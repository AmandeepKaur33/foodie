import React, { useContext } from "react";
import FoodCategory from "./Asset/index.jsx";
import { CategoryContext } from "../../../Context/Admin Context/CategoryContext.js";
import img from "../../../Images/assets/favicon.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../../style.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Category() {
  const { state , categoryData} = useContext(CategoryContext);
  return (
    <div className="w-full h-[100vh] md:h-[80vh]   flex flex-col items-center justify-between bg-white flex-wrap">
      <div className="h-1/2 md:h-full w-full md:w-2/5 flex flex-col gap-12 px-6 py-12 md:py-16  ">
        <h1 className="text-3xl sm:w-80 md:text-5xl text-yellow-500 font-serif relative border-b-2 border-b-blue-500 pb-5 font-semibold">
          Our Category
        </h1>
        <img
          src={img}
          alt="forks"
          className="absolute w-16 rounded-full h-16 ml-[250px] mt-[1.4rem] md:ml-[400px]  md:mt-[2.3rem]"
        />
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
          minus laudantium est dignissimos aperiam asperiores nam vel laborum
          dolorem unde voluptas quod quasi repellendus nihil atque minima, qui
          ea, nobis non porro placeat quaerat iusto blanditiis? Veniam, cum at!
        </p>
        <div className="w-5/6 border rounded-2xl">
          <input
            type="text"
            placeholder="Search Category"
            className="border outline-none rounded-s-2xl w-4/5 px-3 py-1"
          />
          <button className="text-center bg-yellow-500 text-white rounded-e-2xl h-full w-1/5">
            Search
          </button>
        </div>
      </div>
      <div className="w-full md:w-[55%] h-1/2 md:h-full flex md:py-8 items-center md:justify-evenly rounded-t-2xl md:rounded-ss-full bg-blue-100 flex-wrap">
        <ul className="w-full flex h-3/5 sm:h-4/5 justify-center md:ml-28 items-center ">
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
            }}
            modules={[Pagination, Autoplay]}
            className="swiper"
          >
            {state?.categories?.map((item) => (
              <SwiperSlide key={item?.CatId} className="">
                <li className="even:bg-blue-50 w-64  md:w-96 shadow-xl flex pb-8 md:p-5 gap-2 mt-10  h-60  bg-yellow-50 rounded-2xl text-blue-500 border-2 border-double border-white">
                  <FoodCategory itemList={item} />
                </li>
              </SwiperSlide>
            ))}
             {categoryData?.map((item) => (
              <SwiperSlide key={item?.CatId} className="">
                <li className="even:bg-blue-50  w-64 md:w-96  shadow-xl flex pb-8 md:p-5 gap-2 mt-10  h-60  bg-yellow-50 rounded-2xl text-blue-500 border-2 border-double border-white">
                  <FoodCategory itemList={item} />
                </li>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>Slide 1</SwiperSlide> */}
          </Swiper>
        </ul>
      </div>
    </div>
  );
}
