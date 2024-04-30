import React, { useState } from 'react'
import Options from './Options'

const Dropdown = () => {
    const [show, setShow] = useState(false)
    const [list, setList] = useState("Choose one")
    const optList = [
        {
            opt: "Car"
        },
        {
            opt: "Bike"
        },
        {
            opt: "Van"
        },
        {
            opt: "Bus"
        },
        {
            opt: "Jeep"
        },
    ]
    const handleStateChange = (value) => {
        setList(value)
    }
  return (
    <div className='w-full bg-gray-800 h-screen flex flex-col items-center justify-center'>
        <div className='w-1/3 bg-white p-2 font-semibold flex items-center justify-between'>
            {list}
            <h1 onClick={()=>setShow(!show)} className='cursor-pointer'>V</h1>
        </div>
        {show && <Options list={optList} onStateChange={handleStateChange} /> || <div className='h-36'></div>}
    </div>
  )
}

export default Dropdown