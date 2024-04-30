import React from "react";
import '../../../../index.css';
import category1 from "../../../Images/f8.png";
import category2 from "../../../Images/f2.png";
import FoodCategory from "./Asset/index.jsx";
// import FoodCategory from "./Asset";

const Category = () => {
  const foodCategory = [
    {
      img: category1,
      title: "Tasty Thursdays",
      offer: 20,
    },
    {
      img: category2,
      title: "Tasty Saturdays",
      offer: 15,
    },
    {
      img: category1,
      title: "Pizza Days",
      offer: 40,
    },
    {
      img: category1,
      title: "Nuggets Specials",
      offer: 25,
    }
  ]
  return (
    <div className="w-full h-[80vh] flex justify-evenly flex-wrap">
      {foodCategory.map((item,index)=>(
        <FoodCategory key={index} itemList={item}  />
      ))}
    </div>
  );
};

export default Category;
