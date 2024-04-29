import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
// #8B893FF
const TodoList = () => {
  // const initial = JSON.parse(window.localStorage.getItem('todo') )
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState({ isEdit: false, editId: "" });
  useEffect(() => {
    document.title = data.length;
    // window.localStorage.setItem('todo',JSON.stringify(data))
  }, [data]);
  //   const [editId, setEditId] = useState("")
  console.log(edit);
  console.log(edit?.isEdit);
  console.log(data);
  const handleDeletion = (e,item) => {
    e.stopPropagation();
    const newList = data.filter((value) => value?.id !== item?.id);
    if (window.confirm("Are you want to delete this item ")) {
      setData(newList)
    }
    // setData(newList);
  };
  return (
    <div className="w-full h-screen bg-[#c7bdc3] flex flex-col items-center justify-center">
      <h1 className="mb-2 text-2xl text-blue-500 font-bold flex w-10/12 items-center justify-between">
        Total: {data?.length}{" "}
        <span>
          Completed: {(data?.filter((item) => item?.completed)).length}
        </span>
      </h1>
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
            className=" py-1 px-2 bg-[#8B93FF] rounded-e-2xl text-white text-2xl font-bold"
            onClick={(e) => {
              e.stopPropagation();
              if (!text) {
                toast.error("plz enter something");
              } else if (edit?.isEdit) {
                setData(
                  data.map((item) => {
                    if (item?.id === edit?.editId) {
                      return { ...item, name: text };
                    }
                    return item;
                  })
                );
                toast("Task updated");
                setEdit({ isEdit: false, editId: "" });
                setText("");
              } else {
                if (data?.map((item) => item.name).includes(text)) {
                  toast.error("Item is already existed");
                } else if (data.length < 10) {
                  setData([
                    ...data,
                    {
                      id: Math.floor(Math.random() * 10),
                      name: text,
                      completed: false,
                    },
                  ]);
                  toast("task added");
                  setText("");
                } else if (data.length > 10) {
                  alert("task limit crossed");
                }
              }
            }}
          >
            {edit?.isEdit ? "UPDATE" : "ADD"}
          </button>
        </div>
        {data.length === 0 ? (
          <div className="w-full my-6 h-3/4 flex flex-col items-center justify-center bg-[#5755FE] overflow-auto  px-4">
            <h1 className="text-4xl text-white font-bold">No Tasks</h1>
            <p className="font-semibold text-[#c7bdc3] text-xl underline">
              Add your Tasks
            </p>
          </div>
        ) : (
          <ul className="w-full my-6 h-3/4 bg-[#5755FE] overflow-auto flex flex-col items-center   px-">
            {data.map((item, index) => (
              <li
                key={index}
                className="bg-indigo-200 text-blue-600 text-xl w-[88%] hover:bg-slate-100 hover:shadow-2xl hover:border hover:border-pink-500  font-medium rounded-3xl mt-4 px-5 py-2 flex items-center justify-between"
                onClick={() => {
                  setData(
                    data?.map((v, i) =>
                      i === index ? { ...v, completed: !v?.completed } : v
                    )
                  );
                }}
              >
                <div className={`flex items-center gap-2`}>
                  {item?.completed ? (
                    <i className="fa-solid fa-check w-4 text-green-500"></i>
                  ) : (
                    <div className="px-2 bg-red-500"></div>
                  )}
                  <span
                    className={`${item?.completed ? "line-through" : " "} `}
                  >
                    {" "}
                    {item?.name}
                  </span>

                  {/* {item?.id} */}
                </div>
                <span className="flex items-center gap-4">
                  <i
                    className="fa-solid fa-pencil text-pink-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      let editedText = data?.find(
                        (val) => val?.id === item?.id
                      );

                      setText(editedText?.name);
                      setEdit({ editId: editedText?.id, isEdit: true });
                    }}
                  ></i>
                  <i
                    className="fa-solid fa-trash text-red-500"
                    onClick={(e) => handleDeletion(e,item)}
                  ></i>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
