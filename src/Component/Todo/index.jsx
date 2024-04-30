import React, { useState } from "react";
import { toast } from "react-toastify";
// #8B893FF
const TodoList = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState("")
  console.log(edit);
  // console.log(edit.map((item)=>item.isEdited));
  return (
    <div className="w-full h-screen bg-[#c7bdc3] flex items-center justify-center">
      <div className="w-10/12 h-3/4 bg-[#FFF7FC]">
        <div className="rounded-3xl shadow-2xl m-3 h-1/5 bg-[#5755FE] flex items-center justify-center ">
          <input
            type="text"
            className="w-4/5 py-2 rounded-s-2xl  px-2 
                focus:outline-2  focus:outline-[#c7bdc3]"
            placeholder="Add something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className=" py-1 px-4 bg-[#8B93FF] rounded-e-2xl text-white text-lg font-bold"
            onClick={(e) => {
              e.stopPropagation();
              if (!text) {
                toast.error("plz enter something")
              }
              else if (edit){
                setData(data.map((item) => {
                  if (item?.id === editId) {
                    return {...item, name: text}
                  }
                  return item
                }
                ))
                setEdit(false)
                setEditId("")
                setText('')
              }
              else{
                if(data?.map((item) => item.name).includes(text)){
                  toast.error("Item is already existed")
                }else{
                setData([
                    ...data,
                    {
                      id: data?.length + 1,
                      name: text,
                      completed: false,
                    },
                  ]);
                  setText("");
                }
              }
              // !edit ? setData(
              //   data?.map((item) => (
              //     item?.id === editId 
              //     ?
              //     {...item, name: text}
              //     :
              //     item
              //   ))
              // )
              // :
              // setData([
              //   ...data,
              //   {
              //     id: data?.length + 1,
              //     name: text,
              //     completed: false,
              //   },
              // ]);
              // setText("");
            }}
          >
            {edit ? "UPDATE" : "ADD"}
          </button>
        </div>
        <ul className="w-full my-6 h-3/4 bg-[#5755FE] overflow-auto  px-4">
          {data.map((item, index) => (
            <li
              key={index}
              className="bg-indigo-200 text-blue-600 text-xl font-medium rounded-3xl mt-4 px-5 py-2 flex items-center justify-between"
              onClick={() => {
                setData(
                  data?.map((v, i) =>
                    i === index ? { ...v, completed: !v?.completed } : v
                  )
                );
              }}
            >
              <div className="flex items-center gap-2">
                {item?.completed ? (
                  <i className="fa-solid fa-check w-4 text-green-500"></i>
                ) : (
                  <div className="px-2 bg-red-500"></div>
                )}
                {item?.name}
                {/* {item?.id} */}
              </div>
              <span className="flex items-center gap-4">
                <i
                  className="fa-solid fa-pencil text-pink-500"
                  onClick={(e) => {
                    e.stopPropagation();
                   let editedText = data?.find((val)=> val?.id === item?.id)
                   setEdit(true)
                   setText(editedText?.name)
                   setEditId(editedText?.id)
                  }}
                ></i>
                <i
                  className="fa-solid fa-trash text-red-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    const newList = data.filter(
                      (value, indexValue) => indexValue !== index
                    );
                    setData(newList);
                  }}
                ></i>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
