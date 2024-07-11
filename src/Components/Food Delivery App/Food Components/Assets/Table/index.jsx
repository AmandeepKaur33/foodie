import React, { useContext } from 'react'
import { CategoryContext } from '../../../../Context/Admin Context/CategoryContext'

const Table = () => {
  const {state,handleDelete,handleUpdate} = useContext(CategoryContext)
  return (
    <table className='w-full text-left mt-3'>
      
        <tr className='my-32 border-y border-b-2 w-full  shadow-xl'>
        <th className="py-3 px-3 ">Name</th>
                <th className="py-3 px-3 ">Image</th>
                <th className="py-3 px-3 text-center">Status</th>
                <th colSpan="2" className="py-3 px-3 text-center ">Action</th>
          {/* {headingList?.map((item,index)=>(
            <th className='py-3 px-3 text-stone-700' key={index}>{item}</th>
          ))} */}
        </tr>
    
      <tbody className=''>
        {state?.showCategories?.map((item)=>(
          <tr className=''>
            <td className=' py-4 px-3 text-gray-500 font-semibold'>{item?.CName}</td>
            <td className=' py-4 px-3 text-gray-500 font-semibold'><img src={item?.CatImg} width={56} alt={item.CName}/></td>
            <td className='py-4 px-3   text-center'>
              <button className={`${item?.CatStatus? 'bg-teal-300 px-6 py-1 text-sm' : 'bg-red-500 px-2 py-1 text-sm'} text-white rounded-3xl text-center `}>{item.CatStatus ? "Active" : "In-Active"}</button>
            </td>
            <td className=' py-4 px-3 text-gray-500 font-semibold'>{item?.CreatedDate}</td>
            <td className=' py-4 mt-3 px-3 text-gray-500 font-semibold flex items-center gap-2'>
              <i onClick={()=>handleUpdate(item?.CatId)} className='fa-solid fa-pencil bg-blue-500 px-3 py-1 text-xs rounded-xl text-white '></i>
              <i onClick={()=>handleDelete(item?.CatId)} className='fa-solid fa-trash bg-[#FC6180] px-3 py-1 text-xs rounded-xl text-white '></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table