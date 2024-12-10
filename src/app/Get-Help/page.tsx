import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosThumbsUp } from "react-icons/io";
import { BsHandThumbsDownFill } from "react-icons/bs";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Help = () => {
  return (
    <div>
        <Navbar/>
     
    <div className='p-14 weight-400 '>
        
      <h1 className='text-3xl my-10 font-bold ml-[500px]'>GET HELP</h1>
      <section  className=' pl-5 gap-48 ml-[350px] rounded-md mb-20 items-center flex  text-[15px] text-[#757575] h-14 border-2 border-gray-300 w-[457px]'>
      <input type="text" placeholder='What can we help you with ? ' className='w-[200px]' />
      <IoSearchOutline className='h-5 w-5' />

      </section>
      {/* YAHAN AIK DIV BANAYA JIS ME 2 SECTION BANAYE HAI LEFT OR RIGHT  */}
      <div className='flex gap-8'>
        {/* LEFT SECTION */}
        <section className='h-[1024px] w-[939px] border-2 border-gray-100 pr-4'>
            <h1 className='text-3xl font-semibold '>WHAT PAYMENT OPTION CAN I USE ON NIKE ORDERS ?</h1>
            <p className='weight-400 text-[15px]'>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
            <div className='weight-400 my-7 ml-10 text-[15px]'>
                <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                <p>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
                <p>Apple Pay</p>
            </div>
            <div className='flex flex-wrap  '>
            <p className='underline font-semibold mr-2'>Nike Members</p>
            <p>can store multiple debit or credit cards in their profile for faster checkout. If you're not alredy a Member,</p>
                <p className='underline font-semibold'>Join  </p> 
            </div>
            <div className='flex mb-7'>
            <p className='cursor-pointer underline font-semibold mr-2'>us </p> today </div>
            <section>
                <button className=' bg-black text-[16px] text-white h-[39px] w-[106px] items-center text-center rounded-full ml-5'>JOIN US</button>
                <button className=' bg-black text-[16px] text-white h-[39px] w-[129px] items-center text-center rounded-full ml-3'>SHOP NIKE</button>
            </section>
                    {/* DIV  IN WHICH MANY SECTION OCCURED*/}
        <div>
            <section className='my-7'>
                <h1 className='text-xl  font-semibold'>FAQs</h1>
                <p className='font-semibold mt-7'>Does my card need international purcases enabled?</p>
                <p className='text-[16px] weight-400'>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
            </section>
            <section className='flex my-7'>
                <p>Please note, some banks may charge </p>
                <p className='font-semibold underline mx-2'>a small transaction free</p>
                <p>for international orders.</p>
            </section>
            <section className='my-7'>
                <p className='font-semibold'>Can I pay for my order with multiple methods?</p>
                <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
                

            </section>
            <section className='text-[16p] my-7'>
                <p className='font-semibold'>What payment method is accepted for SNKRS orders?</p>
                <p>You can use any accepted credit card to pay for your SNKRS order.</p>
            </section>
            <section className='text-[16px] w-[923px] flex-wrap my-7'>
                <p className='font-semibold'>Why don't I see Apple Pay as an option?</p>
                <p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
            </section>
            <section className='mt-7'>
                <p>Was this answer helpful?</p>
                <div className='flex my-3'>
                <p><IoIosThumbsUp  className='ml-5 '/> </p>
                <p><BsHandThumbsDownFill className='ml-3' /></p>
                </div>
            </section>
            <section>
            <p className='text-[#757575] font-semibold text-lg'>Related</p>
                <p className='font-semibold underline text-lg mt-5 ml-5'>WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
                <p className='font-semibold underline text-lg ml-5'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
            </section>
        </div>
            
        </section>
        {/* RIGTH SECTION */}
        <section>
    <h1 className='font-semibold ml-8 text-3xl'>CONTACT US</h1>
    <section className='text-center'>
        <p className='my-8 ml-20 '><img src="mobile.png" alt="" /></p>
        <p className='font-semibold'>000 800 919 0566</p>
        <p>Products & orders 24 hours a day,</p>
        <p>7 days a week</p>
        <p>Company info and Enquerries; 07:30-</p>
        <p>16:30, Monday - Friday</p>
    </section>
    <section>
        <p className='ml-20 my-8'><img src="message-.png" alt="" /></p>
        <p className='font-semibold ml-16'>24 hous a day</p>
        <p className='ml-16'>7 days a week</p>
    </section>
    <section>
        <p className='ml-20 my-8'><img src="message.png" alt="" /></p>
        <p className='font-semibold ml-16'>We'll reply with in</p>
        <p className='ml-14'>5 buisness days</p>
    </section>
    <section>
        <p className='ml-20 my-8'><img src="locator.png" alt="" /></p>
        <p className='font-semibold ml-16'>STORE LOCATOR</p>
        <p className='ml-6'>Find Nike retail stores near you</p>
    </section>

{/* end */}
</section>
      </div>

    
    </div>  
    <Footer/>
    </div>  // main div 
)
}

export default Help
