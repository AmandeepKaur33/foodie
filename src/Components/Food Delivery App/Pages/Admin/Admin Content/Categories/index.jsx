import React, { useContext } from "react";
import Buttons from "../../../../Food Components/Assets/Button";
import Table from "../../../../Food Components/Assets/Table";
import { CategoryContext } from "../../../../../Context/Admin Context/CategoryContext";
import catbanner from '../../../../../Images/banner.png';

const Categories = () => {
  const { state, handleChange ,handleSubmit, handleImg, handleStatus, handleReset, handleSearch } =
    useContext(CategoryContext);
    
  return (
    <div className="w-full h-[calc(100vh-20vh)] flex flex-col items-center sm:flex-row gap-6  bg-white px-2 sm:px-6 py-12 my-1 mx-auto ">
      <div className="w-11/12 sm:w-2/5">
        <h1 className="text-gray-700 text-lg font-medium border-b border-b-gray-200 pb-4 w-full">
          CATEGORY
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex mt-3 flex-col gap-2">
            <label htmlFor="CName" className="font-medium text-gray-700">
              Category Name
            </label>
            <input
              type="text"
              placeholder="Enter Category Name"
              name="CName"
              value={state?.CName}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 py-1 px-2"
              id="CName"
            />
          </div>
          <div className="flex mt-3 flex-col gap-2">
            <label htmlFor="CatImg" className="font-medium text-gray-700">
              Category Image
            </label>
            <input
              type="file"
              className="w-full border-2 border-gray-300 py-1 px-2"
              id="CatImg"
              name="CatImg"
              onChange={handleImg}
            />
          </div>
          <div className="flex mt-4 gap-3">
            <input
              type="checkbox"
              placeholder=""
              className=" border-2 border-gray-300 py-1 px-2"
              id="isActive"
              alt="imh"
              name="CatStatus"
              value={state?.CatStatus}
              onChange={handleStatus}
              checked={state?.CatStatus}
            />
            <label htmlFor="isActive" className="font-medium text-gray-700">
              IsActive
            </label>
          </div>
          <div className="flex items-center mt-8 gap-4">
            <button
              type="submit"
              className="px-5 py-1 bg-blue-400 text-white text-base font-medium"
            >
              {state?.isEdit ? "Edit" : "Add"}
            </button>
            <Buttons type="reset" onClick={handleReset} text="Clear" />
          </div>
        </form>
      </div>
      <div className="w-11/12 sm:w-3/5 h-full sm:pr-4 overflow-auto">
        <h1 className="text-gray-700 text-lg font-medium border-b border-b-gray-200 pb-4 w-full">
          CATEGORY LIST
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
            onChange={handleSearch}
          ></input>
        </div>
        <div>
          {
          state?.categories.length !== 0
          ?
          <Table />
          :
          <div className='w-full text-left mt-3 h-[45vh] flex flex-col items-center justify-center gap-1'>
            <img src={catbanner} alt="category" className="w-16" />
            <h1 className="text-2xl px-11 relative text-blue-500 border-b border-blue-500 pb-4 font-semibold">
              Add Category
              <span className="absolute w-6 h-6 rotate-45 border-b-2 border-l-2 border-blue-400 inset-y-9 -inset-x-2 "></span>
            </h1>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Categories;
