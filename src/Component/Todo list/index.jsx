import React, { useState } from "react";
import { toast } from "react-toastify";

const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const handleInp = (e) => {
    if (text && !list?.map(e=>e.value)?.includes(text)) {
      setList([
        ...list,
        {
          id: list.length + 1,
          value: text,
          done: false,
          edit: false,
        },
      ]);
      setText("");
    } else{
      toast.error("Plz enter something");
    }
  }
  return (
    <div className="w-full h-[100vh] bg-slate-300 flex items-center justify-center">
      <div className="w-5/6 h-5/6 bg-gray-800 rounded-2xl shadow-2xlhg">
        <div className="w-full h-1/4 p-6">
          <h1 className="text-gray-300 text-3xl font-semibold">TODO LIST</h1>
          <div className="mt-3 mx-auto flex items-center gap-2 w-full">
            <input
              type="text"
              placeholder="Enter something"
              value={text}
              onChange={(e) => setText(e.target.value.trimStart())}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleInp()
                }
              }}
              className="w-3/4 p-1 border focus:border-indigo-700 outline-none bg-gray-600 text-white focus:ring-1 border-zinc-600 rounded-md"
            />
            <button
              className="px-5 py-1 bg-stone-500 text-white text-xl font-medium"
              onClick={handleInp}
            >
              ADD
            </button>
          </div>
        </div>
        <div className="h-[calc(100%-33%)] overflow-auto  w-full px-5 py-2 ">
          {list.map((item, index) => (
            <div>
              <div
                key={index}
                className="flex items-center justify-between bg-gray-700 mb-1 px-2 py-1 "
                onClick={() => {
                  setList(
                    list?.map((v) =>
                      v.id === item.id ? { ...v, done: !v?.done } : v
                    )
                  );
                }}
              >
                <div className="flex items-center gap-2 text-gray-300">
                  {item?.done ? (
                    <i className="fa-solid fa-check w-4 text-white"></i>
                  ) : (
                    <div className="w-4"></div>
                  )}
                  {item?.edit ? (
                    <input
                      type="text"
                      autoFocus
                      value={item.value}
                      className=" focus:border-indigo-700 bg-gray-600 text-white outline-none"
                      onChange={(e) => {
                        e.stopPropagation();
                        if (e.target.value !== "") {
                          setList(
                            list.map((v) =>
                              v.id === item.id
                                ? { ...v, value: e.target.value }
                                : v
                            )
                          );
                        }
                      }}
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e)=>{
                        if (e.key === "Enter"){
                          setList(
                            list?.map((v) =>
                              v?.id === item?.id ? { ...v, edit: !v.edit } : v
                            )
                          )
                        }
                      }}
                      onBlur={() =>
                        setList(
                          list?.map((v) =>
                            v?.id === item?.id ? { ...v, edit: !v.edit } : v
                          )
                        )
                      }
                    />
                  ) : (
                    <h1
                      onClick={(e) => {
                        e.stopPropagation();
                        setList(
                          list?.map((v) =>
                            v.id === item.id ? { ...v, edit: !v.edit } : v
                          )
                        );
                      }}
                    >
                      {item.value} {item.id}
                    </h1>
                  )}
                </div>
                <div className="flex items-center  gap-2">
                  <i
                    className="fa-solid fa-trash w-6 h-6 flex items-center justify-center text-white rounded-full "
                    onClick={(e) => {
                      e.stopPropagation();
                      const newList = list.filter((v, i) => i !== index);
                      setList(newList);
                    }}
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
