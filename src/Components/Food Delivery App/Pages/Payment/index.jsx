import React, { useContext } from 'react'
import Inputs from '../../Food Components/Assets/Form'
import { CartContext } from '../../../Context/Customer Context/CartContext'
import { PaymentContext } from '../../../Context/Customer Context/PaymentContext'
import { LoginContext } from '../../../Context/Authentication Context/LoginContext'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
import { ProductContext } from '../../../Context/Admin Context/ProductsContext'
import { v4 as uuid } from 'uuid'

const Payment = () => {
  const {grandTotal} = useContext(CartContext)
  const {paymentState,paymentDispatch,handleChange,validateForm} = useContext(PaymentContext)
  const {handleDeleteCart} = useContext(CartContext)
  const {handleQtyUpdate} = useContext(ProductContext)
  const { loginState } = useContext(LoginContext);
  const {cartState} = useContext(CartContext)
  console.log(paymentState?.submit,"exp");
  const navigate = useNavigate();
  const list = [
    {
      label: "Card Owner",
      name: "Owner",
      type: "text",
      placeholder: "Card Owner Name",
      value: paymentState?.Owner,
      error: `${paymentState?.errors?.Owner}`
    },
    {
      label: "Card Number",
      name: "cardNo",
      type: "text",
      placeholder: "Valid Card Number",
      value: paymentState?.cardNo,
      error: `${paymentState?.errors?.cardNo}`
    }
  ]
  const handleSubmit = () => {
 if (validateForm()) {
    const existingData =  JSON.parse(localStorage.getItem("paymentInfo")) || [];
    const existingOrderData =  JSON.parse(localStorage.getItem("ordersInfo")) || [];
    const filterCartData = cartState?.cartItems?.filter((i) => i?.CId === loginState?.user?.CId)
    const updatedQuantities = filterCartData.map(element => ({
      id: element?.PId,
      qty: element?.cartQty
    }));
    const OrderId = uuid();
      const newOrderDetails = filterCartData?.map(element => (
        {
          OrderId: OrderId,
          CId: element?.CId,
          PName: element?.name,
          unitPrice: element?.price,
          Qty: element?.cartQty,
          total_Price: element?.total_Price,
          status: "Pending"
        }
      ))
      const payloadOrders = [
        ...existingOrderData,
        newOrderDetails
        ]
      console.log("payloadOrders",payloadOrders);
    const payloadData = [
      ...existingData,
      {
        OrderId: OrderId,
        paymentDate: Date.now(),
        CId: loginState?.user?.CId,
        payId: Math.floor(Math.random() * 10),
        Owner: paymentState?.Owner,
        cardNo: paymentState?.cardNo,
        expMonth: paymentState?.expMonth,
        expYear: paymentState?.expYear,
        CVV: paymentState?.CVV,
        DAddr: paymentState?.DAddr,
      },
    ];
    console.log(payloadData.CId,"length");
    paymentDispatch({ type: "SUBMIT", payload: payloadData , orderPayload: payloadOrders});
    console.log(paymentState?.paymentRecords,"pr");
    handleDeleteCart(loginState?.user?.CId)
  const updateId = [{id: "", qty: ""}]
      updatedQuantities.map(({ id, qty }) => {
       return updateId.push({id,qty})
      //   setTimeout(() => {
      //     handleQtyUpdate(id, qty);
      // }, 3000); // 3000 milliseconds delay       
       
      });
      updateId.map((item)=> handleQtyUpdate(item?.id,item?.qty))
    console.log(updateId,"upId");
    // handleQty()
    paymentDispatch({type: "SET_CLEAR"})
    toast("submit");
    navigate("/Invoice")
}
else{
  console.log('form has errors');
}
  };
 console.log(loginState?.user?.CId,"id");
  return (
    <div className="w-full flex flex-col items-center gap-6 h-[800px] overflow-auto bg-white px-6 py-12 my-1 mx-auto ">
        <div className='sm:w-2/5 w-[98%] px-3 sm:px-12 py-10   rounded-3xl' style={{boxShadow: "1px 5px 10px 1px rgba(0, 0, 0, 0.2)"}}>
        <div className='w-full bg-gray-100 h-full flex gap-6 items-center px-5 py-3 flex-col'>
            <div className='w-full h-20 bg-white flex items-center justify-center'>
            <h1 className='text-3xl font-sans text-gray-600 font-semibold '>Order Payment</h1>
            </div>
            <div className='w-full'>
              {list?.map((i)=>(
                <Inputs list={i} onChange={handleChange}/>
              ))}
              <div className='w-full flex-wrap sm:flex-nowrap flex mt-3 gap-7'>
                <div className='w-full flex flex-col gap-2'>
                 <h1 className='flex items-center'>
                 Expiration Date {paymentState?.errors?.expMonth && <span className='text-red-500  mt-1 text-lg'>*</span>}
                  </h1> 
                  <div className='flex '>
                  
                  <input type='text' placeholder='MM' name='expMonth' value={paymentState?.expMonth} onChange={handleChange} className='w-32 border px-2 py-1' />
                  <input type='text' placeholder='YY' name='expYear' value={paymentState?.expYear} onChange={handleChange} className='w-32 border px-2 py-1' />
                  </div>
                </div>
                <div className='w-full flex flex-col gap-2'>
                  <label htmlFor='CVV' className='flex items-center'>CVV{paymentState?.errors?.CVV && <span className='text-red-500  mt-1 text-lg'>*</span>}</label>
                  <input type='number' placeholder='CVV' name='CVV' value={paymentState?.CVV} onChange={handleChange} className='px-2 py-1 border w-28' />
                </div>
              </div>
              <div className='w-full flex flex-col gap-2 mt-3'>
                <label htmlFor="DAddr">Delivery Address {paymentState?.errors?.DAddr && <span className='text-red-500  mt-1 text-lg'>*</span>}</label>
                <textarea  placeholder='Delivery Address' name='DAddr' value={paymentState?.DAddr} onChange={handleChange} className='border px-2 py-1'/>
              </div>
              <div className='w-full mt-3 h-12 px-5 py-2 bg-gray-200'>
                <button onClick={(e)=>{
                  e.preventDefault()
                  handleSubmit();

                }} className='w-full text-center py-1 bg-blue-400 text-white rounded-md'>Confirm Payment</button>
              </div>
              <div className='mt-3 py-3 h-10 border-t-2 border-t-slate-300'>
                   <span className='px-2 bg-green-500 rounded-3xl text-white '>Order Total:{grandTotal}</span>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Payment