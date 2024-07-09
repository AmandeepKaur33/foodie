import React, { useContext } from 'react'
import { PaymentContext } from '../../../../Context/Customer Context/PaymentContext';
import { LoginContext } from '../../../../Context/Authentication Context/LoginContext';

const InvoiceInfo = () => {
    const {paymentState} = useContext(PaymentContext);
    const {loginState} = useContext(LoginContext);
  return (
    <table className="w-11/12 text-left mt-3 border">
            <thead>
              <tr className="my-32 border-y border-b-2 w-full  shadow-xl">
                <th className="p-3 ">Product Name</th>
                <th className="p-3 ">Unit Price</th>
                <th className="p-3 "> Qty</th>
                <th className="p-3 text-center">Total Price</th>
                <th className="p-3 text-center ">Order Id</th>
                <th className="p-3 text-center ">Status</th>
              </tr>
            </thead>

            <tbody className="">
              
                {paymentState?.paymentRecords?.map((item)=>(
                paymentState?.orderDetails?.map((element)=>(
                  element?.map((el)=> (
                   el?.CId === loginState?.user?.CId && item?.CId === loginState?.user?.CId && el?.OrderId === item?.OrderId
                  ?
                <tr className=" border-b" >
                  <td className=" p-3 text-gray-500 font-semibold ">
                    
                    {el?.PName}
                  </td>
                  <td className=" p-3 text-gray-500 font-semibold">
                    {el?.unitPrice}
                  </td>
                  <td className="p-3 text-gray-500 font-semibold text-center ">
                    {el?.Qty}
                  </td>
                  <td className=" p-3 text-gray-500 font-semibold text-center">
                    {el?.total_Price}
                  </td>
                  <td className=" p-3 text-gray-500 font-semibold text-center">
                    {item?.OrderId}
                  </td>
                  <td className="p-3 text-gray-500 font-semibold text-center">
                    {el?.status}
                  </td>
                </tr>
                :
                ""
              ))
              ))
                ))}
            </tbody>
          </table>
  )
}

export default InvoiceInfo