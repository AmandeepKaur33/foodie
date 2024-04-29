import React from 'react'

const Modal = (props) => {
  return (
    <button onClick={()=>props.modal(true)} className='bg-blue-500 text-white px-4 py-1'>Add Items</button>
  )
}

export default Modal