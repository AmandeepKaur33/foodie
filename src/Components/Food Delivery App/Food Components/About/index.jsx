import React from 'react';
import aboutpic from '../../../Images/BurgerBg2.png';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full bg-yellow-50  h-[90vh] md:h-[100vh] flex flex-col md:flex-row gap-8 md:py-1 items-center text-blue-600 justify-center'>
        <img src={aboutpic} className='w-36 md:w-[684px]' alt='img' />
        <div className='w-full  md:w-[45%] flex flex-col items-center justify-center gap-2'>
            <h1 className='md:text-5xl text-3xl sm:text-4xl text-center text-black font-semibold leading-tight md:pr-32'>Your Favorite Fast <span className='text-yellow-500'>Food</span> Partner</h1>
            <p className='text-zinc-600 mb-2 md:mb-8 px-5 mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
            <div onClick={()=>navigate("/about")}>
            <Button text="Read More" width="156px" paddingx="5" bgColor="rgba(250 204 21 / var(--tw-bg-opacity))" />
            </div>
        </div>
    </div>
  )
}

export default About