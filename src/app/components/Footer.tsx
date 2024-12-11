import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { MdLocationOn } from "react-icons/md";





const Footer = () => {
  return (
    <div>
      <footer className=' sm:h-[330px] h-[400px]  md:h-[330px] lg:h-[330px] xl:h-[330px] xl:w-[1350px] bg-black mt-[100px] pt-7 md:pl-[10px] lg:pl-[10px] xl:pl-[100px] text-[#FFFFFF] gap-11 sm:text-[11px] text-[8px] md:text-[10px] lg:text-[11px] xl:text-[11px]'>
        <div className='flex md:gap-3 '>

        <section className='h-[166px] w-[245px]'>
         <p className='mt-5 md:mr-28'>Find A Store</p> 
         <p className='mt-5'>BECOME A MEMBER</p>
         <p className='mt-5'>SIGN UP FOR EMAIL</p>
         <p className='mt-5'>Send Us Feedback</p>
         <p className='mt-5'>STUDENT DISCOUNTS</p>
        </section>
        <section className='h-[166px] w-[245px]'>
          <p className='mt-5 md:mr-28 text-[#7E7E7E]'>Get Help</p>
          <p className='mt-5 text-[#7E7E7E]'>Order Status</p>
          <p className='mt-5 text-[#7E7E7E]'>Delivery</p>
          <p className='mt-5 text-[#7E7E7E]'>Returns</p>
          <p className='mt-5 text-[#7E7E7E]'>Payment Option</p>
          <p className='mt-5 text-[#7E7E7E]'>Contact Us On Nike.com Inquiries</p>
          <p className='mt-5 text-[#7E7E7E]'>Contact Us On All Other Querries</p>
        </section>
        <section className='h-[166px] w-[245px]'>
          <p className='mt-5 md:mr-28 text-[#7E7E7E]'>About Nike</p>
          <p className='mt-5 text-[#7E7E7E]'>News</p>
          <p className='mt-5 text-[#7E7E7E]'>Carriers</p>
          <p className='mt-5 text-[#7E7E7E]'>Investors</p>
          <p className='mt-5 text-[#7E7E7E]'>Sustainability</p>
        </section>
        <section className='flex gap-6 md:ml-4 lg:ml-[200px] xl:ml-[300px] md:mr-5 '>
        <BsTwitter  className='h-8 w-8 sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px] sm:w-[40px] md:w-[40px] lg:w-[40px] xl:w-[40px] rounded-full bg-gray-400 p-2 text-gray-900'/>
        <FaFacebookF  className='h-8 w-8 sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px] sm:w-[40px] md:w-[40px] lg:w-[40px] xl:w-[40px] rounded-full bg-gray-400 p-2 text-gray-900'/>
        <TfiYoutube  className='h-8 w-8 sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px] sm:w-[40px] md:w-[40px] lg:w-[40px] xl:w-[40px] rounded-full bg-gray-400 p-2 text-gray-900'/>

        </section>
        </div>



      
      <div className='flex mt-[100px] gap-20'>
        <section className='flex'>
          <p className='text-white mr-3'><MdLocationOn className='h-[15px] w-[18px]' />
          </p>
          <p className='text-white sm:mr-7 mr-14 md:mr-7 lg:mr-7 xl:mr-7'>India</p>
          <p className='text-[#7E7E7E]'>2023,Inc.Nike All Rights Reserved</p>
        </section>
        <section className=' sm:hidden md:hidden lg:hidden xl:visible hidden text-[12px]  text-[#7E7E7E] gap-5  ml-[500px]'>
          <p>Guides</p>
          <p>Terms of Sale</p>
          <p>Terms of Use </p>
          <p>Nike Privacy Policy</p>
        </section>
      </div>
      </footer>

    </div>
  )
}

export default Footer
