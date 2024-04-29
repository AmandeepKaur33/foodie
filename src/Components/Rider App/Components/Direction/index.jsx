import React from 'react'

const Button = (props) => {
  // console.log(props.directionCount);
  return (
    <button onClick={props?.handleDirection} className='bg-blue-500 text-white px-4 py-2'>{props.text}</button>
  )
}

export default Button