import React, { useContext } from 'react'
import { ProductContext } from '../../../../Context/Admin Context/ProductsContext';

const TableModal = ({setShowDetails,showDetails}) => {
  const {handleProdDelete,handleProdUpdate} = useContext(ProductContext);
  // const newArray = prodState?.products?.filter((item)=>item?.PId === showDetails?.id)
    console.log(showDetails?.obj);
  return (
    <div className=" absolute ">
    <div className="top-0 left-0 right-0 bottom-0 fixed bg-[rgba(189,189,189,0.47)]"></div>
    <div className={`fixed flex items-start  gap-6 w-2/5 h-2/6  bg-white top-[30%] px-3 py-8 left-[50%] translate-x-[-50%]`} >
    {/* {item?.PId} */}
      <table className='flex  w-full'>
        <thead className='flex flex-col w-1/3 '>
        <tr className='flex flex-col items-start text-black'>
            <th>Name:</th>
            <th>Price:</th>
            <th>Quantity:</th>
            <th>Category:</th>
        </tr>
        </thead>
        <tbody className='w-9/12 '>
            <tr className='flex flex-col items-start'>
                <td>{showDetails?.obj?.PName}</td>
                <td>{showDetails?.obj?.Price}</td>
                <td>{showDetails?.obj?.Qty}</td>
                <td>{showDetails?.obj?.Cat}</td>
            </tr>
        </tbody>
        
      </table>
      <div className='mt-3 w-2/5'>
        <img src={showDetails?.obj?.PImg} width={150} />
        <div className='mt-4 flex gap-2 justify-center'>
          <i onClick={()=>{
            handleProdUpdate(showDetails?.obj?.PId)
            setShowDetails({obj: {}, toggle: false})
            }} className='fa-solid fa-pencil bg-blue-500 px-3 py-1 text-xs rounded-xl text-white' ></i>
          <i onClick={()=>{
            handleProdDelete(showDetails?.obj?.PId);
            setShowDetails({obj: {}, toggle: false})
            }} className='fa-solid fa-cancel bg-[#FC6180] px-3 py-1 text-xs rounded-xl text-white '></i>
        </div>
      </div>
      <div
        className="absolute top-1 right-1 px-2 text-white bg-red-500 cursor-pointer"
        onClick={() => setShowDetails({id: "", toggle: false})}
      >
        X
      </div>
    </div>
  </div>
  )
}

export default TableModal