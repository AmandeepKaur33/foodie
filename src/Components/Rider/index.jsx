import React, { useEffect, useState } from "react";
import Modal from "../Rider App/Components/Modal";
import ModalContent from "../Rider App/Components/Modal/Modal Content";

const Rider = () => {
  const initialValue = { north: 0, south: 0, east: 0, west: 0 };
  const [directionCount, setDirectionCount] = useState(initialValue);
  const [total, setTotal] = useState(0);
  const [text, setText] = useState("");
  const [item, setItem] = useState([{fruits: "", drinks: "", type: "", id: "",edit: false}]);
  const [showModal,setShowModal] = useState(false)
  useEffect(() => {
    setTotal(
      directionCount.east +
        directionCount?.north +
        directionCount?.south +
        directionCount?.west
    );
  }, [directionCount]); 
  const handleAdd = () => {
    item?.map((i) => i?.type === "Fruit" ? setItem([...item,{fruits: text, id: Date.now()}]) : setItem([...item,{drinks: text, id: Date.now()}]))
    setText("")
  };
  console.log("id",item?.map((i) => i?.id));
  console.log(item,"itemmm");
  console.log(item?.map((i) => i?.type));
  const handleClear = () => {
    setDirectionCount(initialValue);
  };
  // Remove func
  const handleRemove = (i) => {
    const newItem = item?.filter((elem) => elem?.id !== i?.id)
     setItem(newItem)
  } 
  console.log("edit",item.map((i) => i?.edit));
  console.log(item?.map((i) => i?.type));
  return (
    <div className="w-full h-screen bg-slate-100 flex flex-col items-center relative justify-center">
      <div className="w-11/12 bg-white h-5/6 shadow-2xl flex flex-col items-center justify-between">
        <div className="w-full h-2/5 flex">
          <div className="w-1/2 h-full m-6  relative text-white ">
            <div className="absolute top-3 left-[45%]">
              <button
                className=" bg-blue-500 px-4 py-1"
                onClick={() =>
                  setDirectionCount({
                    ...directionCount,
                    north: directionCount?.north + 5,
                  })
                }
              >
                North
              </button>
              <h1 className="text-blue-500 px-4 py-1 text-center text-xl">
                {directionCount.north} km
              </h1>
            </div>
            <div className="absolute bottom-3 left-[45%]">
              <h1 className="text-blue-500 px-4 py-1 text-center text-xl">
                {directionCount.south} km
              </h1>
              <button
                className=" bg-blue-500 px-4 py-1"
                onClick={() =>
                  setDirectionCount({
                    ...directionCount,
                    south: directionCount?.south + 5,
                  })
                }
              >
                South
              </button>
            </div>
            <div className="absolute right-3 top-[45%] flex items-center">
              <h1 className="text-blue-500 px-4 py-1 text-center text-xl">
                {directionCount.east} km
              </h1>
              <button
                className=" bg-blue-500 px-4 py-1"
                onClick={() =>
                  setDirectionCount({
                    ...directionCount,
                    east: directionCount?.east + 5,
                  })
                }
              >
                East
              </button>
            </div>
            <div className="absolute left-3 top-[45%] flex items-center">
              <button
                className="bg-blue-500 px-4 py-1"
                onClick={() =>
                  setDirectionCount({
                    ...directionCount,
                    west: directionCount?.west + 5,
                  })
                }
              >
                West
              </button>
              <h1 className="text-blue-500 px-4 py-1 text-center text-xl">
                {directionCount.west} km
              </h1>
            </div>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center )text-blue-500">
            <h1 className="border border-blue-500 py-1 pr-2">
              <span className="bg-blue-500 px-4 py-2 text-white">Total:</span>{" "}
              {total} km
            </h1>
            <h1
              className="border text-white bg-red-500 py-1 px-4"
              onClick={handleClear}
            >
              Clear
            </h1>
          </div>
        </div>
        <div className="w-full h-16 flex items-center justify-between px-48 bg-blue-500">
          <h1 className="text-white font-bold text-xl">Total Fruits: {(item.filter((i) => i?.fruits)).length}</h1>
          <Modal modal={setShowModal}/>
          <h1 className="text-white font-bold text-xl">Total Drinks: {(item.filter((i) => i?.drinks)).length}</h1>
        </div>
        <div className="flex w-full h-[calc(100%-50%-64px)]">
            <ul className="w-1/2 h-full border-r border-t p-4">
            {item.map((i) => (
              i.fruits &&
              (<li key={i?.id} className="flex w-full items-center justify-between border-b pb-2 shadow-2xl">
                  {i?.edit === true 
                  ?
                  ( <input type="text" value={i.fruits} className="outline outline-blue-500" onChange={(e) => {
                    e.stopPropagation();
                    if (e.target.value !== "") {
                      setItem(
                        item.map((v) =>
                          v.id === i.id
                            ? { ...v, fruits: e.target.value }
                            : v
                        )
                      );
                    }
                  }}
                  onKeyDown={(e)=>{
                    if (e.key === "Enter"){
                      setItem(
                        item?.map((v) =>
                          v?.id === i?.id ? { ...v, edit: !v.edit } : v
                        )
                      )
                    }
                  }}/>) 
                  :
                   (<h1>{i.fruits}</h1>)}
                  <div className=" flex gap-3 items-center">
                    <i className="fa-solid fa-pencil text-blue-500" onClick={() =>{
                       setItem(
                        item?.map((v) =>
                          v.id === i.id ? { ...v, edit: !v.edit } : v
                        )
                      );
                       }}></i>
                  <i className="fa-solid fa-trash text-red-500" onClick={() => handleRemove(i)}></i>
                  </div>
                </li>)
            ))}
            </ul>
            <ul className="w-1/2 h-[100%-50%] border-r border-t p-4">
            {item.map((i) => (
              i.drinks &&
              (<li  key={i?.id} className="flex w-full items-center justify-between border-b pb-2 shadow-2xl">
                   {i?.edit === true 
                  ?
                  ( <input type="text" value={i.drinks} className="outline outline-blue-500" onChange={(e) => {
                    e.stopPropagation();
                    if (e.target.value !== "") {
                      setItem(
                        item.map((v) =>
                          v.id === i.id
                            ? { ...v, drinks: e.target.value }
                            : v
                        )
                      );
                    }
                  }}
                  onKeyDown={(e)=>{
                    if (e.key === "Enter"){
                      setItem(
                        item?.map((v) =>
                          v?.id === i?.id ? { ...v, edit: !v.edit } : v
                        )
                      )
                    }
                  }}/>) 
                  :
                   (<h1>{i.drinks}</h1>)}
                  <div className=" flex gap-3 items-center">
                    <i className="fa-solid fa-pencil text-blue-500" onClick={() =>{
                       setItem(
                        item?.map((v) =>
                          v.id === i.id ? { ...v, edit: !v.edit } : v
                        )
                      );
                       }}></i>
                  <i className="fa-solid fa-trash text-red-500" onClick={() => handleRemove(i)}></i>
                  </div>
                </li>)
            ))}
            </ul>
        </div>
      </div>
        {showModal && <ModalContent modal={setShowModal} handleAdd={handleAdd} text={text} setText={setText} setType={setItem} item={item}/>}
      {/* {sshowModal && <ModalContent handleAdd={handleAdd} modal={setShowModal} text={text} setText={setText} item={item} setType={setItem} />} */}
    </div>
  );
};

export default Rider;
