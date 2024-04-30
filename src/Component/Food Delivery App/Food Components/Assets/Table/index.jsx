import React from 'react'

const Table = ({headingList,contentList}) => {
  return (
    <table className='w-full text-left mt-3'>
      
        <tr className='my-32 border-y border-b-2  shadow-xl'>
          {headingList?.map((item,index)=>(
            <th className='py-3 px-3 text-stone-700' key={index}>{item}</th>
          ))}
        </tr>
    
      <tbody className=''>
        {contentList?.map((item)=>(
          <tr className='border-b-2'>
            <td className=' py-4 px-3 text-gray-500 font-semibold'>{item?.cname}</td>
            <td className=' py-4 px-3 text-gray-500 font-semibold'><img src={item?.img} width={56} alt={item.cname}/></td>
            <td className='py-4 px-3'>
              <button className={`${item?.status==="Active"? 'bg-teal-300' : 'bg-red-500 px-2 py-1 text-sm'} px-3 text-white rounded-3xl text-center `}>{item.status}</button>
            </td>
            <td className=' py-4 px-3 text-gray-500 font-semibold'>{item?.CreatedDate}</td>
            <td className=' py-4 px-3 text-gray-500 font-semibold flex gap-2'>
              <i className='fa-solid fa-pencil bg-blue-500 px-3 py-1 text-xs rounded-xl text-white '></i>
              <i className='fa-solid fa-cancel bg-[#FC6180] px-3 py-1 text-xs rounded-xl text-white '></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table