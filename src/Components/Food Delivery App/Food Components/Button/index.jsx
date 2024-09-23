import React from 'react'

const Button = (props) => {
  return (
    <div onClick={props?.onClick}  className={` px-8 py-2 rounded-3xl  cursor-pointer sticky w-${props?.width} hover:scale-110 hover:-rotate-3 text-white  bg-${props?.bgColor}`}  style={{backgroundColor: `${props?.bgColor}`,width: `${props?.width}`}}>{props.text}</div>
  )
}

export default Button