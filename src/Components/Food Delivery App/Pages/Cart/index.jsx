import React from 'react'
import { useCartContext } from '../../../Context/context'
import Button from '../../Food Components/Button'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { Navbar } from '../../Food Components/Header'
// import Foodfooter from '../../Food Components/Footer'

const Cart = () => {
  const initial = JSON.parse(window.localStorage.getItem('cart'))
  const [{img,item_name,price}] = useCartContext()
  const goBack = useNavigate()
  const arr = [{}]
  arr.push({img,item_name,price})
  console.log(arr);
  const handleContinue = () => {
    goBack("/Menu")
  }
  // console.log("initial",initial);
  return (
    <div>
        {/* <Navbar /> */}
        <div className='  flex flex-col gap-4 mx-8 items-start justify-center'>
          <div className=''>
            <h1 className='font-bold text-5xl'>Your Shopping Cart</h1>
          </div>
          <table className='w-full text-left text-sm'>
            <thead className='border-b pb-3 border-gray-400'>
              <tr className='py-3.5 pr-3 font-semibold text-gray-900'>
                <th className='py-3.5 pr-3 font-semibold text-gray-900 text-3xl'>Name</th>
                <th className='py-3.5 pr-3 font-semibold text-gray-900 text-3xl'>Image</th>
                <th className='py-3.5 pr-3 font-semibold text-gray-900 text-3xl'>Price</th>
              </tr>
            </thead>
            <tbody className=' mt-14'>
              {initial.map((item)=>(
                <tr className='mt-14 h-28'>
                <td className='py-4 px-3 text-gray-500 text-xl '>{item.item_name}</td>
                <td><img src={item?.img} alt="" width={75} /></td>
                <td className='py-4 px-3 text-gray-500 text-xl'>{item?.price}</td>
              </tr>
              ))}
              <tr className='border-y border-gray-400 py-10 h-14'>
                <td colSpan={2} className='text-right  text-xl font-bold'>GrandTotal :-{price}</td>
              </tr>
            </tbody>
          </table>
          <div className='w-full flex gap-36'>
            <Button text="Continue Shopping" onClick={handleContinue} bgColor="teal-500"  />
            <Button text="Update Cart" bgColor="yellow-600"  />
            <Button text="Checkout" bgColor="green-500"  />
          </div>
        </div>
        {/* <Foodfooter /> */}
    </div>
  )
}

export default Cart