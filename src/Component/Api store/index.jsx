import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';


const Store = () => {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        const data = axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            setData(response.data);
            console.log(data);
        })
    },[])
    
  return (
   <div className='w-full flex flex-wrap gap-11 items-center justify-center py-16'>
    {data.map((item)=>(
        <Card products={item} />
    ))}
   </div>
  )
}

export default Store