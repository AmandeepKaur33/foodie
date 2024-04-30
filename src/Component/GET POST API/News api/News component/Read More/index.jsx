import React, { useState } from 'react'

const Readmore = ({text,maxLength}) => {
    const [show,setShow] = useState(true)
  return (
    <>
      <p className='font-medium mt-2'>
      {show ? `${text.slice(0,maxLength)}...`: text}
      <span className='cursor-pointer text-indigo-500 underline' onClick={() => setShow(!show)}>
        {show ? "Read more" : "Less" }
      </span>
      </p>
    </>
  )
}

export default Readmore