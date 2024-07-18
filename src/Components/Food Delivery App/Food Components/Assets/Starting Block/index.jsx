import React from 'react'

const ContentIntro = ({title,desc}) => {
  return (
    <div className='w-full flex bg-blue-50 items-center justify-center h-[55vh] sm:h-[70vh] pb-16'>
            <div className='w-11/12 sm:w-4/5 text-center flex flex-col gap-6'>
            <h1 className='text-blue-500 text-6xl font-black'>{title}</h1>
            <p>{desc}</p>
            </div>
            {/* <img src={bg} className='w-full h-full' alt="" /> */}
        </div>
  )
}

export default ContentIntro