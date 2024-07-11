import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import img1 from "../../../Images/assets/client3.png";
import img2 from "../../../Images/assets/client4.png";
import img3 from "../../../Images/assets/client5.png";
import img4 from "../../../Images/assets/client6.png";
import img5 from "../../../Images/assets/client7.png";
import img6 from "../../../Images/assets/client2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../../style.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Review() {
  const reviewList = [
    {
      img: img1,
      name: "Crystal Thomes",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, corporis voluptatem sequi repudiandae inventore nisi ad, alias perferendis explicabo fugit omnis? Esse, eveniet. Placeat, esse!",
      time: "20/10/2023",
    },
    {
      img: img2,
      name: "Micheal Fred",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, corporis voluptatem sequi repudiandae inventore nisi ad, alias perferendis explicabo fugit omnis? Esse, eveniet. Placeat, esse!",
      time: "20/10/2023",
    },
    {
      img: img3,
      name: "Brad Gael",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, corporis voluptatem sequi repudiandae inventore nisi ad, alias perferendis explicabo fugit omnis? Esse, eveniet. Placeat, esse!",
      time: "20/10/2023",
    },
    {
      img: img4,
      name: "Ronal Dseuza",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, corporis voluptatem sequi repudiandae inventore nisi ad, alias perferendis explicabo fugit omnis? Esse, eveniet. Placeat, esse!",
      time: "20/10/2023",
    },
    {
      img: img5,
      name: "Genilla Wington",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, corporis voluptatem sequi repudiandae inventore nisi ad, alias perferendis explicabo fugit omnis? Esse, eveniet. Placeat, esse!",
      time: "20/10/2023",
    },
    {
      img: img6,
      name: "Jesicca Landen",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, corporis voluptatem sequi repudiandae inventore nisi ad, alias perferendis explicabo fugit omnis? Esse, eveniet. Placeat, esse!",
      time: "20/10/2023",
    },
  ];
  return (
    <div className="w-[100vw] h-[110vh] overflow-auto flex py-14 flex-col items-center justify-center bg-blue-50">
      <h1 className="text-5xl font-serif font-semibold">Our Happy Clients</h1>
      <Swiper
        slidesPerView={2}
        direction={'horizontal'}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          waitForTransition: true,
        }}
        pagination={{
          horizontalClass: true,
          clickable: true,
          
        }}
        modules={[Pagination,Autoplay]}
        className="slider"
      >
        {reviewList?.map((item, index) => (
          
          <SwiperSlide key={index} className=" slide ">
            <div className="w-full h-full  " >
              <div className="w-full h-3/5 flex py-12 px-6 gap-2 shadow-md  bg-white">
              <div className=" text-2xl">
              <FaQuoteLeft className="text-gray-500  "/>
              </div>
              <p className="text-gray-500 text-base">{item?.message}</p>
              <div className="flex items-end text-2xl">
              <FaQuoteRight className="text-gray-500  "/>
              </div>
              </div>
              <div className="w-full h-[40%] py-5 flex flex-col gap-1 items-center justify-center">
                <img src={item?.img} className="w-24 h-20 rounded-full" alt={item?.name} />
                <h1 className="text-blue-500 font-semibold">{item?.name}</h1>
              </div>
              {/* <img src={item?.img} alt={item?.name} /> */}
              {/* {item?.name} */}
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
