import React, { useContext, useState } from "react";
import FoodItems from "./Food items";
import { ProductContext } from "../../../Context/Admin Context/ProductsContext";
import { CategoryContext } from "../../../Context/Admin Context/CategoryContext";

const Menupage = () => {
  const { prodState,productsData } = useContext(ProductContext);
  const { state } = useContext(CategoryContext);

  const showMenu = prodState?.products?.filter(
    (i) => i?.Qty !== "Out of Stock"
  );
  const [menu, setMenu] = useState(showMenu);
  const Filter = (e) => {
    e.target.value !== "All"
      ? setMenu(
          prodState?.products.filter(
            (item) =>
              item.PName.toLowerCase().includes(e.target.value) ||
              item.PName.includes(e.target.value)
          )
        )
      : setMenu(prodState?.products);
  };
  return (
    <>
      <div className=" w-full  flex flex-col items-center py-6 overflow-auto">
        <div className="w-11/12 mb-9 gap-3 mx-auto bg-slate-100 flex  py-5 rounded-md justify-between px-2 items-center">
          <div className="flex w-11/12 items-center justify-between">
            <select
              onChange={Filter}
              className="w-1/3 border-2 border-gray-300 py-1 px-2"
            >
              <option>All</option>
              {state?.categories?.map((item) => (
                <option key={item?.CatId}>{item?.CName}</option>
              ))}
            </select>
          </div>
          <input
            type="text"
            placeholder="Search your tasty meal"
            onChange={Filter}
            className="w-1/2 border rounded-s-lg py-2 px-3"
          />
        </div>
        <div className=" w-full bg-slate-100 py-10 flex flex-wrap gap-32 items-center justify-center ">
          {productsData?.map((item)=>(
             <FoodItems key={item?.PId} items={item} />
          ))}
          {menu.map((item) => (
            <FoodItems key={item?.PId} items={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menupage;
