import React, { useContext } from 'react'
import { AuthContext, useAuth } from '../../../../../Context/Authentication Context/Signup'

const Users = () => {
  const {state,handleUserDelete,handleUserSearch} = useContext(AuthContext)
  console.log(state.user);
  return (
    <div className="w-full h-[calc(100vh-20vh)] flex gap-6  bg-white px-6 py-12 my-1 mx-auto ">
      <div className="w-full h-full pr-4 overflow-auto">
        <h1 className="text-gray-700 text-lg font-medium border-b border-b-gray-200 pb-4 w-full">
          USERS LIST
        </h1>
        <div className="mt-5 flex items-center gap-2 justify-end">
          <label htmlFor="search" className="text-zinc-500 font-medium">
            Search:
          </label>
          <input
            type="search"
            id="search"
            placeholder="search"
            className=" px-2 border border-gray-400 focus:ring-1 focus:outline-none"
            onChange={handleUserSearch}
          ></input>
        </div>
        <div>
        <table className='w-full text-left mt-3'>
      
      <tr className='my-32 border-y border-b-2 w-full  shadow-xl'>
      <th className="py-3 px-3 text-center ">SrNo</th>
              <th className="py-3 px-3 ">Name</th>
              <th className="py-3 px-3 ">Username</th>
              <th className="py-3 px-3 ">Email</th>
              <th colSpan="2" className="py-3 px-3  ">Action</th>
        {/* {headingList?.map((item,index)=>(
          <th className='py-3 px-3 text-stone-700' key={index}>{item}</th>
        ))} */}
      </tr>
  
    <tbody className=''>
      {state?.showUsers?.map((item,index)=>(
        <tr className='border-b'>
          <td className=' py-4 px-3 text-gray-500 font-semibold'>{index+1}</td>
          <td className=' py-4 px-3 text-gray-500 font-semibold'>{item?.name}</td>
          <td className=' py-4 px-3 text-gray-500 font-semibold'>{item?.username}</td>
          <td className=' py-4 px-3 text-gray-500 font-semibold'>{item?.email}</td>
          {/* <td className=' py-4 px-3 text-gray-500 font-semibold'><img src={item?.CatImg} width={56} alt={item.CName}/></td> */}
          
          {/* <td className=' py-4 px-3 text-gray-500 font-semibold'>{item?.CreatedDate}</td> */}
          <td className='py-4 mt-3 px-3 text-gray-500 font-semibold '>
            {/* <i onClick={()=>handleUpdate(item?.CatId)} className='fa-solid fa-pencil bg-blue-500 px-3 py-1 text-xs rounded-xl text-white '></i> */}
            <i onClick={()=>handleUserDelete(item?.id)} className='fa-solid fa-trash bg-[#FC6180] px-3 py-1 text-xs rounded-xl text-white '></i>
          </td>
        </tr>
       ))} 
    </tbody>
  </table>
          {/* <Table /> */}
        </div>
      </div>
      </div>
  )
}

export default Users