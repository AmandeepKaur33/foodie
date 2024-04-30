import React from "react";

const ModalContent = (props) => {
  return (
    <div className="w-full h-screen absolute ">
      <div className="top-0 left-0 right-0 bottom-0 fixed bg-[rgba(189,189,189,0.9)]"></div>
      <div className="fixed flex flex-col items-center gap-6 w-2/5 h-2/6 bg-white top-[30%] px-3 py-8 left-[50%] translate-x-[-50%] ">
        <input
          type="text"
          className="w-3/4 border-2 border-blue-500 px-2 py-1"
          placeholder="Enter item"
          value={props?.text}
          onChange={(e) => props?.setText(e.target.value)}
        />
        <select
          disabled={props?.text ? false : true}
          name="item"
          id="item"
          onChange={(e) => {
            props?.setType([...props?.item,{ type: e.target.value }])
            console.log("type1",props?.item?.type);
          }
          }
          className={`border-blue-500 border-2 w-3/4`}
        >
            <option value="Select">Select</option>
          <option value="Fruit">Fruit</option>
          <option value="Drink">Drink</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-1" onClick={props?.handleAdd}>ADD</button>
        <div
          className="absolute top-1 right-1 px-2 text-white bg-red-500"
          onClick={() => props.modal(false)}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
