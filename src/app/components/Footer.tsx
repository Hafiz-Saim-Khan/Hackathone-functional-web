import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { MdLocationOn } from "react-icons/md";





const Footer = () => {
  return (
    <div>
      <footer className='h-[330px] w-[1350px] bg-black mt-[100px] pt-7 pl-[100px] text-[#FFFFFF] gap-11 text-[11px]'>
        <div className='flex'>

        <section className='h-[166px] w-[245px]'>
         <p className='mt-5'>Find A Store</p> 
         <p className='mt-5'>BECOME A MEMBER</p>
         <p className='mt-5'>SIGN UP FOR EMAIL</p>
         <p className='mt-5'>Send Us Feedback</p>
         <p className='mt-5'>STUDENT DISCOUNTS</p>
        </section>
        <section className='h-[166px] w-[245px]'>
          <p className='mt-5 text-[#7E7E7E]'>Get Help</p>
          <p className='mt-5 text-[#7E7E7E]'>Order Status</p>
          <p className='mt-5 text-[#7E7E7E]'>Delivery</p>
          <p className='mt-5 text-[#7E7E7E]'>Returns</p>
          <p className='mt-5 text-[#7E7E7E]'>Payment Option</p>
          <p className='mt-5 text-[#7E7E7E]'>Contact Us On Nike.com Inquiries</p>
          <p className='mt-5 text-[#7E7E7E]'>Contact Us On All Other Querries</p>
        </section>
        <section className='h-[166px] w-[245px]'>
          <p className='mt-5 text-[#7E7E7E]'>About Nike</p>
          <p className='mt-5 text-[#7E7E7E]'>News</p>
          <p className='mt-5 text-[#7E7E7E]'>Carriers</p>
          <p className='mt-5 text-[#7E7E7E]'>Investors</p>
          <p className='mt-5 text-[#7E7E7E]'>Sustainability</p>
        </section>
        <section className='flex gap-6 ml-[300px]'>
        <BsTwitter  className='h-[40px] w-[40px] rounded-full bg-gray-400 p-2 text-gray-900'/>
        <FaFacebookF  className='h-[40px] w-[40px] rounded-full bg-gray-400 p-2 text-gray-900'/>
        <TfiYoutube  className='h-[40px] w-[40px] rounded-full bg-gray-400 p-2 text-gray-900'/>

        </section>
        </div>



      
      <div className='flex mt-[100px] gap-20'>
        <section className='flex'>
          <p className='text-white mr-3'><MdLocationOn className='h-[15px] w-[18px]' />
          </p>
          <p className='text-white mr-7'>India</p>
          <p className='text-[#7E7E7E]'>2023,Inc.Nike All Rights Reserved</p>
        </section>
        <section className='text-[12px] flex text-[#7E7E7E] gap-5 ml-[500px]'>
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
