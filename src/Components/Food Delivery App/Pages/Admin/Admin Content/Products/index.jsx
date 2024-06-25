import React, { useContext, useState } from "react";
import Inputs from "../../../../Food Components/Assets/Form";
import Buttons from "../../../../Food Components/Assets/Button";
import { ProductContext } from "../../../../../Context/Admin Context/ProductsContext";
import { CategoryContext } from "../../../../../Context/Admin Context/CategoryContext";
import TableModal from "../../../../Food Components/Assets/Table Modal";

const Product = () => {
  const { prodState, handleProdChange, handleProdSubmit, handleProdSearch } =
    useContext(ProductContext);
  const { state } = useContext(CategoryContext);
  const [showDetails, setShowDetails] = useState({ id: "", toggle: false });

  const inp = [
    {
      label: "Product Name",
      placeholder: "Enter Product Name",
      type: "text",
      name: "PName",
      value: prodState?.PName,
    },
    {
      label: "Product Description",
      placeholder: "Enter Product Description",
      type: "textarea",
      name: "PDesc",
      value: prodState?.PDesc,
    },
    {
      label: "Product Price",
      placeholder: "Enter Product Price",
      type: "number",
      name: "Price",
      value: prodState?.Price,
      change: handleProdChange,
    },
    {
      label: "Product Quantity",
      placeholder: "Enter Product Quantity",
      type: "text",
      name: "Qty",
      value: prodState?.Qty,
    },
    {
      label: "Product Image",
      type: "file",
      name: "PImg",
    },
  ];
  return (
    <div className="w-full flex gap-6 h-[calc(100vh-20vh)] overflow-auto bg-white px-6 py-12 my-1 mx-auto ">
      <div className="w-2/5">
        <h1 className="text-gray-700 text-lg font-medium border-b border-b-gray-200 pb-4 w-full">
          PRODUCT
        </h1>
        <form onSubmit={handleProdSubmit}>
          {inp.map((item) => (
            <Inputs key={item.id} list={item} onChange={handleProdChange} />
          ))}
          <div className="flex mt-4 gap-3">
            <select
              className="w-full border-2 border-gray-300 py-1 px-2"
              name="Cat"
              onChange={handleProdChange}
            >
              {state?.categories?.map((elem) => (
                <option key={elem?.id}>{elem?.CName}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center mt-8 gap-4">
            <button
              type="submit"
              className="px-5 py-1 bg-blue-400 text-white text-base font-medium"
            >
              {prodState?.isEdit ? "Edit" : "Add"}
            </button>
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
            onChange={handleProdSearch}
          ></input>
        </div>
        <div>
          <table className="w-full text-left mt-3">
            <thead>
              <tr className="my-32 border-y border-b-2 w-full  shadow-xl">
                <th className="py-3 px-3 ">Name</th>
                <th className="py-3 px-3 ">Image</th>
                <th className="py-3 px-3 text-center">Price</th>
                <th className="py-3 px-3 text-center ">Quantity</th>
                <th className="py-3 px-3 text-center ">Category</th>
              </tr>
            </thead>

            <tbody className="">
              {prodState?.showProducts?.map((item) => (
                <tr className=" " key={item?.PId}>
                  <td className=" py-4 px-3 text-gray-500 font-semibold flex items-center gap-2">
                    <span
                      onClick={() =>
                        setShowDetails({
                          id: item?.PId,
                          toggle: true,
                          obj: { ...item },
                        })
                      }
                      className="w-4  outline outline-offset-2 h-4 pb-1 p outline-stone-600 flex items-center text-base justify-center text-white  bg-blue-500 rounded-full"
                    >
                      +
                    </span>
                    {item?.PName}
                  </td>
                  <td className=" py-4 px-3 text-gray-500 font-semibold">
                    <img src={item?.PImg} width={56} alt={item.PName} />
                  </td>
                  <td className="py-4 px-3 text-gray-500 font-semibold text-center ">
                    {item?.Price}
                  </td>
                  <td className=" py-4 px-3 text-gray-500 font-semibold text-center">
                    {item?.Qty}
                  </td>
                  <td className=" py-4 px-3 text-gray-500 font-semibold text-center">
                    {item?.Cat}
                  </td>
                  <td className=" py-4 px-3 text-gray-500 font-semibold text-center">
                    {showDetails.toggle && (
                      <TableModal
                        setShowDetails={setShowDetails}
                        showDetails={showDetails}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
