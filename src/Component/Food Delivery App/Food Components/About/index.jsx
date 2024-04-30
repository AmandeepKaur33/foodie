import React from 'react';
import aboutpic from '../../../Images/about-img.png';
import Button from '../Button';

const About = () => {
  return (
    <div className='w-full bg-gray-700 h-[90vh] flex gap-8 items-center text-white justify-center'>
        <img src={aboutpic} className='w-96' alt='img' />
        <div className='w-1/2 flex flex-col gap-2'>
            <h1 className='text-4xl font-bold'>We are Foodie</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
            <Button text="Read More" width="36" paddingx="5" />
        </div>
    </div>
  )
}

export default About