import React, { useContext } from "react";
import { FeedbackContaxt } from "../../../../Context/Customer Context/FeedbackContext";

const Input = (props) => {
  const {handleInpChange} = useContext(FeedbackContaxt)
  return (
    <div className="form-label w-full mb-6">
        <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        className=" placeholder:text-gray-400 px-4 pr-4 w-full h-12 focus:outline-none focus:ring-indigo-500 rounded-md bg-white/[.05] ring-2 ring-white/[0.1] border border-gray-200  text-gary-500 text-lg min-h-9"
        name={props?.name}
        value={props?.value}
        onChange={handleInpChange}
        required
      />
        </div>
      
    
  );
};

export default Input;
