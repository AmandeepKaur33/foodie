import React, { useContext, useState } from 'react'
import { PaymentContext } from '../../../../Context/Customer Context/PaymentContext';
import { LoginContext } from '../../../../Context/Authentication Context/LoginContext';
import { ResponsiveContext } from '../../../../Context/Display Context/ResponsiveContext';
import TableModal from '../../../Food Components/Assets/Table Modal';
import MobileResponsiveModal from './Responsive Modal';

const InvoiceInfo = () => {
    const {paymentState} = useContext(PaymentContext);
    const {loginState} = useContext(LoginContext);
    const {mobileResponsive} = useContext(ResponsiveContext)
    const [showDetails, setShowDetails] = useState({ id: "", toggle: false });
    // console.log("showDetails",showDetails);
  return (
    <table className="w-[98%] text-left mt-3 border">
            <thead>
              <tr className="my-32 border-y border-b-2 w-full  shadow-xl">
                <th className="p-3 ">Product Name</th>
                {/* <th className="p-3 ">Unit Price</th>
                <th className="p-3 "> Qty</th> */}
                {/* <th className="p-3 text-center">Total Price</th> */}
                <th className="p-3 text-center ">Order Id</th>
                <th className="p-3 text-center ">Status</th>
              </tr>
            </thead>

            <tbody 
            // className={`${setShowDetails({toggle: true})} sm:${setShowDetails({toggle: false})}`}
            >
              
                {paymentState?.paymentRecords?.map((item)=>(
                paymentState?.orderDetails?.map((element)=>(
                  element?.map((el)=> (
                   el?.CId === loginState?.user?.CId && item?.CId === loginState?.user?.CId && el?.OrderId === item?.OrderId
                  ?
                <tr className=" border-b" >
                  <td className=" py-3 text-gray-500 font-semibold flex items-center gap-2 text-xs">
                    {mobileResponsive && <span
                      onClick={() =>
                        setShowDetails({
                          id: el?.OrderId,
                          toggle: true,
                          obj: { ...el },
                        })
                      }
                      className="w-4 cursor-pointer outline outline-offset-2 h-4 pb-1  outline-stone-600 flex items-center text-base justify-center text-white  bg-blue-500 rounded-full"
                    >
                      +
                    </span>}
                    {el?.PName}
                  </td>
                  {/* <td className=" p-3 text-gray-500 font-semibold">
                    {el?.unitPrice}
                  </td> */}
                  {/* <td className="p-3 text-gray-500 font-semibold text-center ">
                    {el?.Qty}
                  </td>
                  <td className=" p-3 text-gray-500 font-semibold text-center">
                    {el?.total_Price}
                  </td> */}
                  <td className=" p-3 text-gray-500 font-semibold text-center text-xs">
                    {item?.OrderId}
                  </td>
                  <td className="p-3 text-gray-500 font-semibold text-center text-xs">
                    {el?.status}
                  </td>
                  <td className=" py-4 px-3 text-gray-500 font-semibold text-center">
                    {showDetails.toggle && (
                      <MobileResponsiveModal
                        setShowDetails={setShowDetails}
                        showDetails={showDetails}
                      />
                    )}
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