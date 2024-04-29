import React, { useState } from 'react'
import Button from '../../Button'

const Slides = ({Slider}) => {
    const [currentIndex, setIndex] = useState(0)
    const left = {
        transform: "translate(0, -50%)",
        // position: 'absolute',
        // top: '50%',
        // left: '32px',
        // fontSize: '45px',
        // color: '#fff',
        // zindex: '1',
        // cursor: "pointer"
    }
    const right = {
        transform: "translate(0, -50%)"
        // position: 'absolute',
        // top: '50%',
        // right: '32px',
        // fontSize: '45px',
        // color: '#fff',
        // zindex: '1',
        // cursor: "pointer"
    }
    const middle = {
        transform: "translate(0, -50%)"
    }
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? Slider.length - 1 : currentIndex - 1;
        setIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === Slider.length - 1;
        const newIndex = isLastSlide ? 0: currentIndex + 1;
        setIndex(newIndex);
    }
  return (
    <div className='h-full mx-9  relative text-white w-1/2' >
        <div className=" absolute bottom-14 left-7 text-9xl text-white z-[1] cursor-pointer  hover:text-yellow-500" style={left} onClick={goToPrevious} >.</div>
            <div className=" absolute bottom-14 left-12 text-9xl text-white z-[1] cursor-pointer hover:text-yellow-500"  style={right} onClick={goToNext}>.</div>
            <div className=" absolute bottom-14 left-16 ml-1 text-9xl text-white z-[1] cursor-pointer hover:text-yellow-500"  style={middle} onClick={goToNext}>.</div>
        <h1 className='text-7xl font-semibold leading-normal'>{Slider[currentIndex].title}</h1>
        <p className='my-10 '>{Slider[currentIndex].desc}</p>
       <Button text="Order Now" />
    </div>
  )
}

export default Slides