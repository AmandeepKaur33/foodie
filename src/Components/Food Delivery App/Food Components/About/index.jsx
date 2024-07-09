import React from 'react';
import aboutpic from '../../../Images/about-img.png';
import Button from '../Button';

const About = () => {
  return (
    <div className='w-full bg-yellow-50 h-[100vh] flex gap-8 items-center text-blue-600 justify-center'>
        <img src={aboutpic} className='w-96' alt='img' />
        <div className='w-1/2 flex flex-col gap-2'>
            <h1 className='text-5xl text-black font-semibold leading-tight pr-32'>Your Favorite Fast <span className='text-yellow-500'>Food</span> Partner</h1>
            <p className='text-zinc-600 mb-8 mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
            <Button text="Read More" width="156px" paddingx="5" bgColor="rgba(250 204 21 / var(--tw-bg-opacity))" />
        </div>
    </div>
  )
}

export default About