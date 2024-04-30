import React from 'react'

const Input = (props) => {
  return (
    <div className='flex-col flex gap-2 '>
        <label for={props.id} className='text-base'>{props.label}</label>
        <input type={props.type} id={props.id} placeholder={props.placeholder} className='border-2 px-2 w-96 py-1 ring-1 ring-slate-700' />
    </div>
  )
}

export default Input