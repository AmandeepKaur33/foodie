import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../Context/Customer Context/CartContext";
const Cart = () => {
  const { cart, grandTotal, handleCartItemDelete, setIncrement, setDecrement } =
    useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="w-full flex gap-6 h-[calc(100vh-20vh)] overflow-auto bg-white px-6 py-12 my-1 mx-auto ">
      <div className=" w-full flex flex-col gap-4 mx-8 my-8 items-start justify-center">
        <div className="">
          <h1 className="font-bold text-5xl">Your Shopping Cart</h1>
        </div>
        <table className="w-full text-center  text-sm">
          <thead className="border-b pb-3 border-gray-400">
            <tr className="py-3.5 pr-3 font-semibold text-gray-900">
              <th className="py-3.5 pr-3 font-semibold text-gray-900 text-3xl">
                Name
              </th>
              <th className="py-3.5 pr-3 font-semibold text-gray-900 text-3xl">
                Image
              </th>
              <th className="py-3.5 pr-3 font-semibold text-gray-900 text-3xl">
                Price
              </th>
              <th className="py-3.5 pr-3 font-semibold text-gray-900 text-3xl">
                Quantity
              </th>
              <th className="py-3.5 pr-3 font-semibold text-gray-900 text-3xl">
                Total Price
              </th>
            </tr>
          </thead>
          <tbody className=" w-full mt-14">
            {cart ? (
              cart?.map((item) => (
                <tr className="mt-20 h-24" key={item?.cartId}>
                  <td className="py-4 px-3 text-gray-500 text-xl ">
                    {item.name}
                  </td>
                  <td className="flex items-center justify-center py-5 ">
                    <img src={item?.img} alt="" width={75} />
                  </td>
                  <td className="py-4 px-3 text-gray-500 text-xl">
                    {item?.price}
                  </td>
                  <td className="py-4 px-3 text-gray-500 text-xl">
                    <span
                      onClick={() =>
                        setDecrement(item?.cartId, item?.cartQty, item?.CId)
                      }
                      className="cursor-pointer"
                    >
                      -
                    </span>{" "}
                    {item?.cartQty}{" "}
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        setIncrement(
                          item?.cartId,
                          item?.cartQty,
                          item?.qty,
                          item?.CId
                        )
                      }
                    >
                      +
                    </span>
                  </td>
                  <td className="py-4 px-3 text-gray-500 text-xl">
                    {item?.total_Price}
                  </td>
                  <td>
                    <i
                      onClick={() => {
                        handleCartItemDelete(item?.cartId);
                      }}
                      className="fa-solid fa-trash bg-[#FC6180] px-3 py-1 text-xl rounded-xl text-white "
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <div></div>
            )}
            <tr className="border-y border-gray-400 py-10 w-full pr-12 h-14">
              <td colSpan={6} className="text-right pr-12 text-xl font-bold">
                GrandTotal :- ${grandTotal}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-full flex  gap-36">
          <button
            onClick={() => navigate("/Menu")}
            className="px-8 py-2 rounded-3xl text-white bg-teal-500"
          >
            Continue Order
          </button>
          {cart.length !== 0 && (
            <button
              className="px-8 py-2 rounded-3xl text-white bg-green-500"
              onClick={() => {
                navigate("/Payment");
              }}
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
