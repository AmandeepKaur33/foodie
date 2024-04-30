import React, { useState } from 'react';

const Countrycity = () => {
  const [match,setMatch] = useState([])
    const countries = [
        {name: "India", value: "IN", cities:["Delhi","Mumbai"]},
        {name: "Pak", value: "PK", cities:["Lahore","Karachi"]},
        {name: "Bangladesh", value: "BG", cities:["Dhaka","Chittagong"]}
    ]
    console.log(match);
  return (
    <div className='w-screen h-screen bg-slate-900 flex items-center justify-center'>
      {/* <div className=''></div> */}
      <select value={match} onChange={(e)=>{setMatch([e.target.value])}}>
        {countries.map((item,index)=>(
          <option key={index} value={index}>{item.name}</option>
        ))}
      </select>
      <div>
          <select className='w-56'>
         {countries[match] && countries[match].cities.map((item,index)=>(
          <option value={index}>{item}</option>
         ))}
      </select>
            </div>
    </div>
  )
}

export default Countrycity