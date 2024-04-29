import React, { useEffect, useState } from "react";

const RiderApp = () => {
  const initialValue = { north: 0, south: 0, east: 0, west: 0 };
  const [directionCount, setDirectionCount] = useState(initialValue);
  const [total, setTotal] = useState(0);
  const [text, setText] = useState("");
  // const [fruits,setFruits] = useState([])
  // const [drinks,setDrinks] = useState([])
  const [item, setItem] = useState([{fruits: "" , drinks: "",type: ""}]);
  useEffect(() => {
    setTotal(
      directionCount.east +
        directionCount?.north +
        directionCount?.south +
        directionCount?.west
    );
  }, [directionCount]);
  const handleAdd = () => {
    item?.map((i) => i?.type === "Fruit" ? setItem([...item,{fruits: text}]) : setItem([...item,{drinks: text}]))
    setText("")
  };
  console.log(item,"itemmm");
  console.log(item?.map((i) => i?.type));
  const handleClear = () => {
    setDirectionCount(initialValue);
  };
  console.log(text);
  console.log(item?.map((i) => i?.type));
  return (
    <div className="w-full h-screen bg-slate-100 flex items-center justify-center">
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
        <div className="w-full h-1/2 flex items-center justify-between">
          <div className="w-1/3 h-full bg-slate-100">
            <h1>Food Items</h1>
            <ul>
            {item?.map((i) => (
             <li>{i.fruits}</li>
            ))}
            </ul>
          </div>
          <div className="w-1/3 ">
            <div className="w-full flex items-center ">
              <input type="text" className=" border-2 border-blue-500 px-2" value={text} onChange={(e) => setText(e.target.value)}/>
              <select
                disabled={text ? false : true}
                name="item"
                id="item"
                className={`border-blue-500 border-2 w-3/4`}
                onChange={(e) =>setItem([...item,{type: e.target.value}])}
              >
                <option value="Select">Select</option>
                <option value="Fruit">Fruit</option>
                <option value="Drink">Drink</option>
              </select>
              <button className="bg-blue-500 text-white px-4 py-1" onClick={handleAdd}>Add</button>
            </div>
            
            {/* <Modal modal={setShowModal} /> */}
          </div>
          <div className="w-1/3 h-full bg-slate-100">
            <h1>Drinks Items</h1>
            <ul>
            {item?.map((i) => (
              <li>{i.drinks}</li>
            ))}
            </ul>
            
          </div>
        </div>
      </div>
      {/* {sshowModal && <ModalContent handleAdd={handleAdd} modal={setShowModal} text={text} setText={setText} item={item} setType={setItem} />} */}
    </div>
  );
};

export default RiderApp;
