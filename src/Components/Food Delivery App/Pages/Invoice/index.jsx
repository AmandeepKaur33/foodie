import React from 'react';
import InvoiceInfo from './Invoice Details';

const Invoice = () => {
  // const {paymentState} = useContext(PaymentContext);
  // const {loginState} = useContext(LoginContext);
  // console.log(paymentState?.orderDetails,loginState?.user?.CId);
  return (
    <div className='w-full  h-[80vh] flex items-center justify-center'>
      <InvoiceInfo/>
       {/* <table className="w-11/12 text-left mt-3 border">
            <thead>
              <tr className="my-32 border-y border-b-2 w-full  shadow-xl">
                <th className="py-3 px-3 ">Product Name</th>
                <th className="py-3 px-3 ">Unit Price</th>
                <th className="py-3 px-3 "> Qty</th>
                <th className="py-3 px-3 text-center">Total Price</th>
                <th className="py-3 px-3 text-center ">Order Id</th>
                <th className="py-3 px-3 text-center ">Status</th>
              </tr>
            </thead>

            <tbody className="">
              
                {paymentState?.paymentRecords?.map((item)=>(
                paymentState?.orderDetails?.map((element)=>(
                  element?.map((el)=> (
                   el?.CId === loginState?.user?.CId && item?.CId === loginState?.user?.CId && el?.OrderId === item?.OrderId
                  ?
                <tr className=" border-b" >
                  <td className=" py-4 px-3 text-gray-500 font-semibold flex items-center gap-2">
                    
                    {el?.PName}
                  </td>
                  <td className=" py-4 px-3 text-gray-500 font-semibold">
                    {el?.unitPrice}
                  </td>
                  <td className="py-4 px-3 text-gray-500 font-semibold text-center ">
                    {el?.Qty}
                  </td>
                  <td className=" py-4 px-3 text-gray-500 font-semibold text-center">
                    {el?.total_Price}
                  </td>
                  <td className=" py-4 px-3 text-gray-500 font-semibold text-center">
                    {item?.OrderId}
                  </td>
                  <td className=" py-4 px-3 text-gray-500 font-semibold text-center">
                    {el?.status}
                  </td>
                </tr>
                :
                ""
              ))
              ))
                ))}
            </tbody>
          </table> */}
    </div>
  )
}

export default Invoice