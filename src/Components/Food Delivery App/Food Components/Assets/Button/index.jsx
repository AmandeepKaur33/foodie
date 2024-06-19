import React from 'react'

const Buttons = (props) => {
  return (
    <button type={props?.type} onClick={props?.onClick}  className='px-5 py-1 bg-blue-400 text-white text-base font-medium'>{props.text}</button>
  )
}

export default Buttons