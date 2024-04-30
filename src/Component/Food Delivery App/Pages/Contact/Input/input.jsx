import React from "react";

const Input = (props) => {
  return (
    <div className="form-label mb-6">
        
        <div className="mt-10">
        <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        className=" placeholder:text-black px-4 pr-4 w-96 h-12 focus:outline-none focus:ring-indigo-500 rounded-md bg-white/[.05] ring-2 ring-white/[0.1] border border-gray-950 text-sm text-white min-h-9"
        required
      />
        </div>
      
    </div>
  );
};

export default Input;
