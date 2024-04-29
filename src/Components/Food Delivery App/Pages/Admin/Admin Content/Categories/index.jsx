import React from "react";
import Inputs from "../../../../Food Components/Assets/Form";
import Buttons from "../../../../Food Components/Assets/Button";
import Table from "../../../../Food Components/Assets/Table";
import burger from '../../../../../Images/f2.png';
import pizza from '../../../../../Images/f6.png';
import sandwich from '../../../../../Images/sandwich.png';
import momos from '../../../../../Images/Momos5.png';
import nuggets from '../../../../../Images/vegetable nuggets.png';
import tacos from '../../../../../Images/tacos.png';

const Categories = () => {
  const inp = [
    {
      label: "Category Name",
      placeholder: "Enter Category Name",
      type: "text",
      id: "cname",
    },
    {
      label: "Category Image",
      type: "file",
      id: "fupload",
    },
  ];
  const categoryList = [
    {
      heading: ["Name","Image","IsActive","CreatedDate","Action"],
      content: [
        {
          cname: "Burger",
          img: burger,
          status: "Active",
          CreatedDate: "03-02-2023"
        },
        {
          cname: "Pizza",
          img: pizza,
          status: "Active",
          CreatedDate: "12-12-2020"
        },
        {
          cname: "Momos",
          img: momos,
          status: "Active",
          CreatedDate: "12-12-2020"
        },
        {
          cname: "Sandvich",
          img: sandwich,
          status: "Active",
          CreatedDate: "12-12-2020"
        },
        {
          cname: "Nuggets",
          img: nuggets,
          status: "InActive",
          CreatedDate: "12-12-2020"
        },
        {
          cname: "Tacos",
          img: tacos,
          status: "Active",
          CreatedDate: "12-12-2020"
        }
      ]
    }
  ]
  return (
    <div className="w-11/12 flex gap-6 overflow-auto bg-white px-6 py-12 my-16 mx-auto ">
      <div className="w-2/5">
        <h1 className="text-gray-700 text-lg font-medium border-b border-b-gray-200 pb-4 w-full">
          CATEGORY
        </h1>
        <form>
          {inp.map((item) => (
            <Inputs key={item.id} list={item} />
          ))}
          <div className="flex mt-4 gap-3">
            <input
              type="checkbox"
              placeholder=""
              className=" border-2 border-gray-300 py-1 px-2"
              id="isActive" alt="imh"
            />
            <label htmlFor="isActive" className="font-medium text-gray-700">
              IsActive
            </label>
          </div>
          <div className="flex items-center mt-8 gap-4">
            <Buttons text="Add" />
            <Buttons text="Clear" />
          </div>
        </form>
      </div>
      <div className="w-3/5">
      <h1 className="text-gray-700 text-lg font-medium border-b border-b-gray-200 pb-4 w-full">
          CATEGORY LIST
        </h1>
        <div className="mt-5 flex items-center gap-2 justify-end">
         <label htmlFor="search" className="text-zinc-500 font-medium">Search:</label>
         <input type="search" id="search" placeholder="search" className=" px-2 border border-gray-400 focus:ring-1 focus:outline-none"></input>
        </div>
        <div>
          {categoryList.map((item,index)=>(
            <Table key={index} headingList={item.heading} contentList={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
