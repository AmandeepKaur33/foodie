import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);
    const currentScreenWidth = () => {
        setWidthCount(()=> window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',currentScreenWidth)
        // the promblem in the above is that all previous data is stored there
        // to solve this we use
        return () => {
            window.removeEventListener("resize",currentScreenWidth)
        }
        // above is cleanup function
    })
  return (
    <div className='w-full h-screen bg-gray-800 flex items-center justify-center text-white text-4xl'>
        <h2>The size of the window is <span className='text-yellow-500'>{widthCount}</span></h2>
    </div>
  )
}

export default UseEffect