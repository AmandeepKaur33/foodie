import React from 'react'

const Button = (props) => {
  return (
    <a href='www.google.com' className={` px-8 py-2 rounded-3xl w-${props?.width} text-white bg-yellow-500`}>{props.text}</a>
  )
}

export default Button