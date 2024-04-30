import React from "react";
import Inputs from "../../../../Food Components/Assets/Form";
import Buttons from "../../../../Food Components/Assets/Button";

const Product = () => {
  const inp = [
    {
      label: "Product Name",
      placeholder: "Enter Product Name",
      type: "text",
      id: "pname",
    },
    {
      label: "Product Description",
      placeholder: "Enter Product Description",
      type: "textarea",
      id: "description",
    },
    {
      label: "Product Price",
      placeholder: "Enter Product Price",
      type: "text",
      id: "pprice",
    },
    {
      label: "Product Quantity",
      placeholder: "Enter Product Quantity",
      type: "text",
      id: "pqty",
    },
    {
      label: "Product Image",
      type: "file",
      id: "pimg",
    }
  ];
  return (
    <div className="w-11/12 flex gap-6 overflow-auto bg-white px-6 py-12 my-16 mx-auto ">
      <div className="w-2/5">
        <h1 className="text-gray-700 text-lg font-medium border-b border-b-gray-200 pb-4 w-full">
          PRODUCT
        </h1>
        <form>
          {inp.map((item) => (
            <Inputs key={item.id} list={item} />
          ))}
          <div className="flex mt-4 gap-3">
            <select className="w-full border-2 border-gray-300 py-1 px-2">
              <option>Pizza</option>
              <option>Burger</option>
              <option>Momos</option>
              <option>Nuggets</option>
              <option>Tacos</option>
              <option>Sandwich</option>
            </select>
          </div>
          <div className="flex items-center mt-8 gap-4">
            <Buttons text="Add" />
            <Buttons text="Clear" />
          </div>
        </form>
      </div>
      <div className="w-3/5">
        <h1 className="text-gray-700 text-lg font-medium border-b border-b-gray-200 pb-4 w-full">
          PRODUCT LIST
        </h1>
        <div className="mt-5 flex items-center gap-2 justify-end">
          <label htmlFor="search" className="text-zinc-500 font-medium">
            Search:
          </label>
          <input
            type="search"
            id="search"
            placeholder="search"
            className=" px-2 border border-gray-400 focus:ring-1 focus:outline-none"
          ></input>
        </div>
        {/* <div>
          {categoryList.map((item, index) => (
            <Table
              key={index}
              headingList={item.heading}
              contentList={item.content}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Product;
