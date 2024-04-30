import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TodoFilters = () => {
    const [Todo, setTodo] = useState([])
    const [userId, setUserId] = useState()
    // const []
    const getList = () => {
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then((res)=>{
            setTodo(res?.data)
            console.log(res?.data);
        })
    }
    console.log(Todo);
    useEffect(() => {
      getList()
    }, [userId])
    
  return (
    <div className='bg-gray-600 w-full h-screen flex flex-col gap-9 items-center justify-center'>
        <select
        name=""
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className='w-2/4 py-2 px-3 outline outline-indigo-600'
      >
        <option>Filter User</option>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((i) => (
          <option value={i}>UserId {i}</option>
        ))}
      </select>
        <ul className='bg-white rounded-2xl h-[80vh] w-11/12 overflow-auto shadow-2xl px-4 '>
            {Todo.map((item)=>(
                <li key={item?.id} className='w-full my-2 bg-slate-100 px-3 py-2 flex  items-center justify-between' >
                    <div className='flex items-center gap-2'>
                    {item?.completed ? <i className='fa-solid fa-check w-6 text-green-600' ></i> : <div className='w-6'></div>}
                    {item?.title}
                    </div>
                    <span><i className='fa-solid fa-trash text-red-500 ' onClick={(e) => {
                        e.stopPropagation()
                        const newTodo = Todo?.filter((value) => value?.id !== item?.id)
                        setTodo(newTodo)
                    }}></i></span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoFilters