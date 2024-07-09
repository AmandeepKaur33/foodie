import React, { useContext } from 'react';
import Input from './Input/input.jsx';
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import ContentIntro from '../../Food Components/Assets/Starting Block/index.jsx';
import ContactDetails from '../../Food Components/Assets/Contact Details/index.jsx';
import GetApp from '../../Food Components/App/index.jsx';
import burger from '../../../Images/assets/vegcreamburger.png'
import { FeedbackContaxt } from '../../../Context/Customer Context/FeedbackContext.js';

const Contact = () => {
  const {feedbackState,handleFeedbackSubmit,handleInpChange} = useContext(FeedbackContaxt)
  return (
    <>
    <div className='w-full   '>
      <div className='w-full relative bg-blue-50 flex items-center justify-evenly'>
      <ContentIntro title="Contact US" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perferendis labore consequatur amet voluptas repudiandae?"/>
      <div className='bg-blue-50 w-full h-[80vh]'>
        <img src={burger} className='w-full h-full' alt="" />
      </div>
      <form onSubmit={handleFeedbackSubmit} className='absolute inset-y-3/4 bottom-0 w-1/2 px-9 py-14 h-[80vh] rounded-2xl shadow-2xl bg-white '>
      <div className='flex w-full gap-3'>
      <Input type="text" placeholder="First Name" name="FName" value={feedbackState?.FName}/>
      <Input type="text" placeholder="Last Name" name="LName" value={feedbackState?.LName}/>
      </div>
      <Input type="text" placeholder="Email Address" name="email" value={feedbackState?.email}/>
      <Input type="text" placeholder="Subject" name="subject"value={feedbackState?.subject}/>
      <textarea name='message' value={feedbackState?.message} onChange={handleInpChange} className='placeholder:text-gray-500 px-4 pr-4 w-full h-20 focus:outline-none focus:ring-indigo-500 rounded-md bg-white/[.05] ring-2 ring-white/[0.1] border border-gray-300  text-gary-500 text-lg py-1 min-h-9' placeholder='Your Message'/>
      <div className='mt-8 flex items-center justify-center'>
        <button type='submit' className='bg-yellow-400 text-white py-1 px-8  text-lg'>Submit</button>
      </div>
      </form>
      
      </div>
      <div className='w-full h-[75vh] bg-yellow-50'></div>
      <div className='w-full h-[60vh] flex flex-col gap-9 items-center justify-center '>
        <h1 className='text-4xl  font-serif font-semibold'>Get In Touch</h1>
        <div className='flex justify-center items-center w-full gap-4'>
          <ContactDetails img={<IoMdCall/>} bgColor="green" detailTitle="Phone Number" info1="+ 536 902 2963 139 (1826)" info2="+ 637 117 9034 276 (1826)"/>
          <ContactDetails img={<MdEmail/>} bgColor="blue" detailTitle="Email" info1="info@foodiepoint.com" info2="help@foodiepoint.com"/>
          <ContactDetails img={<FaLocationDot/>} bgColor="yellow" detailTitle="Address" info1="13 Modern Street,California," info2="USA (United States)"/>
        </div>
      </div>
      <GetApp/>
    </div>
    </>
    
  )
}

export default Contact