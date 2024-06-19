import React, { useContext } from 'react'
import Inputs from '../../Food Components/Assets/Form'
import { CartContext } from '../../../Context/Customer Context/CartContext'
import { PaymentContext } from '../../../Context/Customer Context/PaymentContext'
import { LoginContext } from '../../../Context/Authentication Context/LoginContext'

const Payment = () => {
  const {grandTotal} = useContext(CartContext)
  const {paymentState,handleChange,handleSubmit} = useContext(PaymentContext)
  const {loginState} = useContext(LoginContext)
  const list = [
    {
      label: "Card Owner",
      name: "Owner",
      type: "text",
      placeholder: "Card Owner Name",
      value: paymentState?.Owner,
    },
    {
      label: "Card Number",
      name: "cardNo",
      type: "text",
      placeholder: "Valid Card Number",
      value: paymentState?.cardNo,
    }
  ]
 console.log(loginState?.user?.CId,"id");
  return (
    <div className="w-full flex flex-col items-center gap-6 h-[800px] overflow-auto bg-white px-6 py-12 my-1 mx-auto ">
        <div className='w-2/5 px-12 py-10   rounded-3xl' style={{boxShadow: "1px 5px 10px 1px rgba(0, 0, 0, 0.2)"}}>
        <div className='w-full bg-gray-100 h-full flex gap-6 items-center px-5 py-3 flex-col'>
            <div className='w-full h-20 bg-white flex items-center justify-center'>
            <h1 className='text-3xl font-sans text-gray-600 font-semibold '>Order Payment</h1>
            </div>
            <div className='w-full'>
              {list?.map((i)=>(
                <Inputs list={i} onChange={handleChange}/>
              ))}
              <div className='w-full flex mt-3 gap-7'>
                <div className='w-full flex flex-col gap-2'>
                  Expiration Date
                  <div className='flex '>
                  <input type='text' placeholder='MM' name='expMonth' value={paymentState?.expMonth} onChange={handleChange} className='w-32 border px-2 py-1' />
                  <input type='text' placeholder='YY' name='expYear' value={paymentState?.expYear} onChange={handleChange} className='w-32 border px-2 py-1' />
                  </div>
                </div>
                <div className='w-full flex flex-col gap-2'>
                  <label htmlFor='CVV'>CVV <span className='text-white bg-black rounded-full px-1 text-xs'>?</span></label>
                  <input type='number' placeholder='CVV' name='CVV' value={paymentState?.CVV} onChange={handleChange} className='px-2 py-1 border w-28' />
                </div>
              </div>
              <div className='w-full flex flex-col gap-2 mt-3'>
                <label htmlFor="DAddr">Delivery Address</label>
                <textarea  placeholder='Delivery Address' name='DAddr' value={paymentState?.DAddr} onChange={handleChange} className='border px-2 py-1'/>
              </div>
              <div className='w-full mt-3 h-12 px-5 py-2 bg-gray-200'>
                <button onClick={(e)=>{
                  e.preventDefault()
                  handleSubmit();
                  // handleDeleteCart(loginState?.user?.CId)

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