import React from 'react';
import Aboutpage from '../../Pages/About';
import ContentIntro from '../Assets/Starting Block';
import img1 from '../../../Images/assets/images.png'; 
import chef from '../../../Images/assets/staff.png'; 
import homeDelivery from '../../../Images/assets/downloadpic.jpeg'; 
import foodCategory from '../../../Images/assets/multiple-category.jpeg';
import OfferCards from '../Assets/Offer Cards';
import spiceImg from '../../../Images/assets/spice-removebg-preview.png';
import Review from '../Review';

const AboutUs = () => {
  const offersList = [
    {
      img: homeDelivery,
      title: "Home Delivery",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, labore."
    },
    {
      img: chef,
      title: "Experinced Staff",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, labore."
    },
    {
      img: foodCategory,
      title: "Multiple Categories",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, labore."
    },
    {
      img: img1,
      title: "Easy Payment",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, labore."
    },
  ]
  return (
    <div className='w-full'>
      <div className='w-full relative flex items-center justify-center'>
      <ContentIntro title="We Are Foodies" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est porro qui, consequatur praesentium illum laborum ea earum dolorem odit aut saepe, numquam quia accusamus! Ipsa consequuntur aperiam rem quo magni!"/>
      <div className='absolute w-full sm:w-11/12 h-96 sm:pl-4 py-5 mt-24 sm:mt-0 sm:gap-16 flex-wrap sm:flex-nowrap inset-y-3/4 flex items-start pt-5 justify-evenly bottom-0'>
      {offersList?.map((item,index)=>(
        <OfferCards key={index} item={item}/>
      ))}
      </div>
      </div>
      <div className='w-full h-[70vh] sm:h-[20vh] bg-yellow-50'></div>
        <Aboutpage/>
      <div className='w-full h-[65vh] sm:h-[55vh] py-6 sm:pb-12 flex items-center justify-center'>
        <div className='w-full relative px-2 sm:px-14  h-full flex flex-col gap-6 items-center sm:items-start sm:justify-center'>
        <h1 className='text-4xl sm:px-9 bg-blue-200 py-3 rounded-2xl h-1/4 sm:h-2/5 w-full sm:w-2/5 leading-[3.3rem] font-semibold text-center'>Get Your Order With Trusted People</h1>
        <div className='w-full sm:w-2/5 shadow bg-white sm:absolute right-12 sm:bottom-2 p-3 items-end'>
        <p className='text-center  text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur atque, eveniet alias adipisci velit nemo doloremque laborum odio asperiores repellat dolore mollitia obcaecati, sapiente libero voluptas beatae iusto odit in debitis placeat! Culpa, labore eius.</p>
        <div className='w-full  sm:w-1/2 h-4/5 absolute  sm:right-[95%] rounded-full sm:bottom-2/4 -z-10'>
        <img src={spiceImg} alt="spice" className='w-56 absolute  right-6 -inset-y-16 ' />
        </div>
        </div>
        </div>
      </div>
      <Review/>
    </div>
  )
}

export default AboutUs