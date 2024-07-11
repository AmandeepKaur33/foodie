import React, { useContext } from "react";
import { PaymentContext } from "../../../../../Context/Customer Context/PaymentContext";

const OrderStatus = () => {
  const {
    paymentState,
    convertToDate,
    handleOrderSearch,
    handleUpdateValue,
    handleStatusChange,
    handleStatusUpdate,
    handleStatusClear,
    setEditStatus,
    editStatus
  } = useContext(PaymentContext);
  return (
    <div className="w-full h-[calc(100vh-20vh)] overflow-auto flex gap-6  bg-white px-6 py-12 my-1 mx-auto">
      <div className="w-full ">
        <h1 className="text-gray-700 text-lg font-medium border-b border-b-gray-200 pb-4 w-full">
          ORDER LIST
        </h1>
        <div className="mt-5 flex items-center gap-2 justify-between">
          <div className="w-1/3">
         {editStatus 
         &&
         <div className="w-full flex flex-col gap-5">
         <div className="flex w-full items-center gap-1">
         <label htmlFor="status" className="text-lg">Update Status:</label>
         <select onChange={handleStatusChange} id="status" className="border px-3 py-1 w-56">
           <option value="Pending">Pending</option>
           <option value="Dispatch">Dispatch</option>
           <option value="Delivered">Delivered</option>
           </select>
           </div>
           <div className="flex items-center gap-3">
             <button
               className="px-5 py-1  bg-blue-400 text-white text-base font-medium"
               onClick={()=> {
                handleStatusUpdate();
                setEditStatus(false);
               }}
               >
               Update
             </button>
             <button
               type="reset"
               className="px-5 py-1  bg-blue-400 text-white text-base font-medium"
               onClick={handleStatusClear}
               >
               Clear
             </button>
           </div>
         </div>
         }
         </div>
          <div className="flex items-center gap-3">
            <label htmlFor="search" className="text-zinc-500 font-medium">
              Search:
            </label>
            <input
              type="search"
              id="search"
              placeholder="search"
              className=" px-2 border border-gray-400 focus:ring-1 focus:outline-none"
              onChange={handleOrderSearch}
            ></input>
          </div>
        </div>
        <div className="flex items-center">
          <table className="w-full text-left mt-3">
            <thead>
              <tr className="my-32 border-y border-b-2 w-4/5  shadow-xl">
                <th className="py-3 px-3 text-center ">Order No</th>
                <th className="py-3 px-3 text-center">Product Name</th>
                <th className="py-3 px-3 text-center ">Total Price</th>
                <th className="py-3 px-3 text-center">Order Date</th>
                <th className="py-3 px-3 text-center ">Status</th>
                <th className="py-3 px-3 text-center ">Edit</th>
              </tr>
            </thead>
            <tbody className="">
              {paymentState?.paymentRecords?.map((item) =>
                paymentState?.orderDetails?.map((element) =>
                  element?.map((el) =>
                    el?.OrderId === item?.OrderId ? (
                      <tr className=" border-b">
                        <td className=" py-4 px-3 text-gray-500 font-semibold">
                          {item?.OrderId}
                        </td>
                        <td className=" py-4 px-3 text-center text-gray-500 font-semibold ">
                          {el?.PName}
                        </td>
                        <td className=" py-4 px-3 text-gray-500 font-semibold text-center">
                          {el?.total_Price}
                        </td>
                        <td className="py-4 px-3 text-gray-500 font-semibold text-center ">
                          {convertToDate(item?.paymentDate)}
                        </td>
                        <td className=" py-4 px-3 text-gray-500 font-semibold text-center">
                          {el?.status}
                        </td>
                        <td className=" py-4 px-3 text-gray-500 font-semibold text-center">
                          <i
                            onClick={() => {
                              handleUpdateValue(item?.OrderId, el?.PName);
                              setEditStatus(true)
                            }}
                            className="fa-solid fa-pencil bg-blue-500 px-3 py-1 text-xs rounded-xl text-white"
                          ></i>
                        </td>
                      </tr>
                    ) : (
                      ""
                    )
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
