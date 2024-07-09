// import React from "react";
// import '../../../../index.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "../../../../App.css";
// // import Swiper from 'swiper/bundle';

// // import styles bundle
// import 'swiper/css/bundle';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// // import 'swiper/css/scrollbar';

// import { EffectCoverflow,Pagination,Navigation, Autoplay } from "swiper/modules";

// import FoodCategory from "./Asset/index.jsx";
// import { useContext } from "react";
// import { CategoryContext } from "../../../Context/Admin Context/CategoryContext.js";
// // import FoodCategory from "./Asset";

// const Category = () => {
//   const {state} = useContext(CategoryContext);
//   return (
//     <div className="w-full h-[80vh]  flex flex-col py-8 items-center justify-evenly bg-white flex-wrap">
//       <h1 className="text-4xl text-[#151631] font-serif font-semibold">Our Category</h1>
//       <ul className="w-full flex h-4/5  items-center ">
//          <Swiper

//       // install Swiper modules
//       effect={'coverflow'}
//       grabCursor={true}
//       centeredSlides={true}
//       loop={true}
//       slidesPerView={3}
//       // slidesPerView={'auto'}
//       coverflowEffect={
//         {
//           rotate: 0,
//           slideShadows: false,
//           stretch: 0,
//           depth: 100,
//           modifier:2.5
//         }
//       }
//       autoplay={{
//         delay: 2500,
//       }}
//       navigation={{
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//         clickable: true,
//       }}
//       pagination={{el:'.swiper-pagination',clickable:true}}
//       modules={[EffectCoverflow,Pagination,Navigation,Autoplay]}
//       className=" w-full "
//     >
//      {state?.categories?.map((item)=> (
//           <SwiperSlide key={item?.CatId} className="">
//           <li  className="even:bg-blue-50 w-96 shadow-xl flex p-5 gap-2 mt-10  h-60  bg-yellow-50 rounded-2xl text-blue-500 border-2 border-double border-white">
//             <FoodCategory itemList={item}/>
//           </li>
//           </SwiperSlide>
//        ))}
//       {/* <div className="swiper-container mt-10 w-full  ">
//         <div className="swiper-button-prev  ">
//           <div className=""></div>
//         </div>
//         <div className="swiper-button-next ">
//           <div className=""></div>
//         </div>
//       </div> */}
//     </Swiper>
//       </ul>
//       </div>
   
//   );
// };

// export default Category;


import React, { useContext, useRef, useState } from 'react';
import FoodCategory from "./Asset/index.jsx";
import { CategoryContext } from "../../../Context/Admin Context/CategoryContext.js";
import img from '../../../Images/assets/favicon.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../../../style.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Category() {
  const {state} = useContext(CategoryContext);
  return (
    <div className="w-full h-[80vh]  flex  items-center justify-between bg-white flex-wrap">
      <div className=' h-full w-2/5 flex flex-col gap-12 px-6 py-16  '>
   <h1 className="text-5xl text-yellow-500 font-serif relative border-b-2 border-b-blue-500 pb-5 font-semibold">Our Category</h1>
  <img src={img} className='absolute w-16 rounded-full h-16 ml-[400px]  mt-[2.3rem]'/>
   <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minus laudantium est dignissimos aperiam asperiores nam vel laborum dolorem unde voluptas quod quasi repellendus nihil atque minima, qui ea, nobis non porro placeat quaerat iusto blanditiis? Veniam, cum at!</p>
   <div className='w-5/6 border rounded-2xl'>
   <input type="text" placeholder='Search Category' className='border outline-none rounded-s-2xl w-4/5 px-3 py-1' />
   <button className='text-center bg-yellow-500 text-white rounded-e-2xl h-full w-1/5'>Search</button>
   </div>
      </div>
      <div className='w-[55%] h-full flex py-8 items-center justify-evenly rounded-ss-full bg-blue-100 flex-wrap'>
     <ul className="w-full flex h-4/5 justify-center ml-28 items-center ">
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
                  delay: 2500,
                }}
        modules={[Pagination,Autoplay]}
        className="swiper"
      >
         {state?.categories?.map((item)=> (
          <SwiperSlide key={item?.CatId} className="">
          <li  className="even:bg-blue-50 w-96 shadow-xl flex p-5 gap-2 mt-10  h-60  bg-yellow-50 rounded-2xl text-blue-500 border-2 border-double border-white">
            <FoodCategory itemList={item}/>
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
