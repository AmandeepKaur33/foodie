import React from 'react'

const ContactDetails = ({img,detailTitle,info1,info2,bgColor}) => {
  return (
    <div className='w-1/4 flex items-center px-3 h-[18vh] shadow-lg gap-3  border rounded-lg'>
        <div className={`w-16 h-16 bg-${bgColor}-500 flex rounded-xl items-center justify-center text-white text-4xl`}>{img}</div>
        <div className='flex flex-col '>
            <h1 className='font-medium mb-1'>{detailTitle}</h1>
            <h3 className='text-sm text-gray-400'>{info1}</h3>
            <h3 className='text-sm text-gray-400'>{info2}</h3>
        </div>
    </div>
  )
}

export default ContactDetails