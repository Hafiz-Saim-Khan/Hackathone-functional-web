import React from "react"
import { FaAngleDown } from "react-icons/fa";
import { SiNike } from "react-icons/si";
import { IoBagOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { FaLocationPin } from "react-icons/fa6";
import Image from 'next/image';

const Checkout = () => {
  return (
    <div>
         <div className="flex">
        <p><SiNike className="h-10 mr-[500px] w-20"/></p>
        <p className="ml-[500px]">000 800 100 9538</p>
        <p><LuMessageSquareText className="h-5 w-5 ml-7"/></p>
        <p><IoBagOutline className="h-5 w-5 ml-7"/> </p>
      </div> 

    <div className=" h-[4000px] lg:flex xl:flex gap-20">
     
        <div className="h-[208px] lg:ml-[300px] ml-5 xl:ml-[300px] w-[440px]" >
        <h1 className="font-semibold">How would you like to get your order?</h1>
            <section className=" text-[#7e7e7e] weight-400 text-[16px] ">
             <p>Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.</p>
             <button className="underline">Learn More</button>            
            </section>
            <div className="h-[82px] my-10 border-2 gap-5 weigth-600 border-black flex items-center pl-5 rounded-lg w-[440px]">
                <p><img src="deliever-it.png " className="h-6 w-6" alt="Deliever" /></p>
                <p>Deliver it</p>
            </div>
            {/* SECOND SECTION */}
            <section>
                <h1 className="weight-500 text-[16px] ">Enter your name and address :</h1>
                <input type="text"placeholder="First Name" className=" mt-4 rounded-md h-[56px] border-2 border-gray-200 pl-5 w-[440px] " />
                <input type="text"placeholder="Last Name" className=" mt-4 rounded-md h-[56px] border-2 border-gray-200 pl-5 w-[440px] " />
                <input type="text"placeholder="Address Line 1" className=" mt-4 rounded-md h-[56px] border-2 border-gray-200 pl-5 w-[440px] " />
                <p className="weight-400 text-[11px] text-[#7e7e7e] ml-8 mt-2 mb-0">We donot ship to P.O boxes</p>
                <input type="text"placeholder="Address Line 2" className=" mt-4 rounded-md h-[56px] border-2 border-gray-200 pl-5 w-[440px] " />
                <input type="text"placeholder="Address Line 3" className=" mt-4 rounded-md h-[56px] border-2 border-gray-200 pl-5 w-[440px] " />
                <div className="flex text-black gap-4 mt-5">
                   <button className="h-[56px] border-gray-200 border-2 w-[211px]">Postal Code</button>
                   <button className="h-[56px] border-gray-200 border-2 w-[211px]">Locality</button>
                </div>
                <div className="flex text-black gap-4  mt-5">
                    <div className="gap-14 flex pl-3 items-center h-[56px] border-gray-200 border-2 w-[211px]">
                   <button className="text-[#7e7e7e]"> State/Territory </button><p><FaAngleDown /></p></div>
                   <div  className=" flex pl-3 items-center gap-36 h-[56px] border-gray-200 border-2 w-[211px] weight-400 text-[16px]">
                   <button>India</button><p className="h-2 w-2 bg-gray-500 rounded-full"></p></div>
                </div>
                <div className="flex gap-6 my-6">
                <input type="checkbox" /><p>Save this address to my profile</p></div>
                <div className="flex gap-6 ">
                <input type="checkbox" /><p>Make this my preffered address</p></div>

            </section>
            {/* THIRD SECTION */}
            <section>
                <h1 className="font-semibold my-7 text-[21px]">What's your contact information?</h1>
                <input type="text"placeholder='Email' className=" mt-4 rounded-md h-[56px] border-2 border-gray-200 pl-5 w-[440px] " />
                <p className="weight-400 text-[11px] text-[#7e7e7e] ml-8 mt-2 mb-0">A confirmation email will be sent after checkout.</p>
                <input type="text"placeholder="Phone Number" className=" mt-4 rounded-md h-[56px] border-2 border-gray-200 pl-5 w-[440px] " />
                <p className="weight-400 text-[11px] text-[#7e7e7e] ml-8 mt-2 mb-0">A carrier might contact you to confirm delivery.</p>
            </section>
                {/* section 4 */}
            <section>
            <h1 className="font-semibold my-7 text-[21px]">What's your PAN?</h1>
            <p className="text-[16px] weight-400 mt-4 rounded-md h-[56px] border-2 border-gray-200 pl-5 w-[440px] p-2" >PAN</p>
            <p className="weight-400 text-[12px] text-[#7e7e7e] ml-8 mt-2 mb-0">Enter your PAN to enable payment with upi,Net Banking or local <br />card methods </p>
            <div className="flex gap-5 text-[#7e7e7e] text-sm mb-20 mt-5"><input type="checkbox" /><p>Save PAN details to Nike Profile</p></div>
            <div className="flex gap-5 text-[#7e7e7e] text-sm"><input type="checkbox" />
            <div className="w-[500px] "><p>I have read, consent to eShopWorld processing my information </p>
             <section className="flex"><p>in accordance with the</p><p className="underline mx-2">Privacy Statement</p>and <p className="underline mx-2">Cookie Policy. </p></section>
             <p>eShopWorld is a trusted Nike partner.</p>

            </div>
{/*         SECTION 5 */}
            </div>
            <button className="h-[60px] items-center  text-center pr-14 my-5 rounded-full text-[15px] weight-500 w-[440px] bg-gray-200">Continue</button>
            <div className="h-[346px] w-[440px] weight-500">
                <p className="text-xl weigth-600">Delievery</p>
                <p className="text-[21px] h-12 w-full border-2 mt-7 border-gray-200 items-center text-[#7e7e7e]">Shipping</p>
                <p className="text-[21px] h-12 w-full border-2 mt-7 border-gray-200 items-center text-[#7e7e7e]">Billing</p>
                <p className="text-[21px] h-12 w-full border-2 mt-7 border-gray-200 items-center text-[#7e7e7e]">Payment</p>
             </div>
          </section>
        </div>

        
         {/* RIGHT SECTION */}
         <section>
            <h1 className="font-smibold text-[21px] mb-5">Order Summary</h1>
            <div className="text-[15px] weight-500 text-[#8d8d8d] flex gap-5 mt-5 mb-2">
              <p>Sub Total</p>
              <p>20 890.00</p>
            </div>
            <div className="gap-5 text-[15px] weight-500 mb-6 text-[#8d8d8d] flex">
              <p>Delivery</p>
              <p>Shipping</p>
            </div>
            <div className="gap-5 text-[15px] weight-500 font-semibold text-black  flex">
              <p>Total</p>
              <p>20 890.00</p>
            </div>
            <p className="weight-400 my-3 text-[9px]">(The total reflects the price of your order, including all duties and taxes)</p>
            <h1 className="font-bold mb-4 text-[15px]">Arrives Mon, 27 Mar - Wed, 12 Apr</h1>
            <section className="flex gap-5">
                <div className="size-[208px]"><img src="banda.jpeg" alt="tea-shirt" /></div>
                <div>
                    <p className="weight-500 text-sm">Nike Dri-Fit</p>
                    <p className="weight-500 text-sm">ADV TechKnit</p>
                    <p className="weight-500 text-sm">Ultra Men's</p>
                    <p className="weight-500 text-sm">Short-Sleeve</p>
                    <p className="weight-500 text-sm">Running Top</p>
                    <p className="weight-400 text-[15px] text-[#8d8d8d]">Qty 1</p>
                    <p className="weight-400 text-[15px] text-[#8d8d8d]">Size L</p>
                    <p className="weight-400 text-[15px] text-[#8d8d8d]">3 895.00</p>
                </div>
            </section>
            <section className="flex  my-9 gap-5">
                <div className="size-[208px]"><img src="shoes.jpeg" alt="Shoes" /></div>
                <div>
                    <p className="weight-500 text-sm">Nike Air Max</p>
                    <p className="weight-500 text-sm">97 SE Men's</p>
                    <p className="weight-500 text-sm">Shoes</p>
                    <p className="weight-500 text-sm  text-[#8d8d8d]">Qty 1</p>
                    <p className="weight-500 text-sm  text-[#8d8d8d]">Size UK 8</p>
                    <p className="weight-400 text-[15px] text-[#8d8d8d]">16 995.00</p>
                </div>
            </section>
            </section>
    </div>
    {/* /FOOTER */}
    <div className="flex bg-black h-14 mt-[100px] w-[1350px] text-[12px] items-center">
        <div className="flex pl-4">
            <p className="text-white"><FaLocationPin className="h-4 w-4"/></p><p className="text-white mx-4">India</p>
            <p className="ml-3 text-[#8d8d8d]">2023 Nike,Inc.All Rights Reserved</p>
        </div>
        <div className="text-[#8d8d8d] flex gap-5 mr-28 ml-10">
            <p>Terms of Use </p>
            <p>Terms of Sale</p>
            <p>Privacy Policy</p>
        </div>
        <div>
        <Image
  src="/footer.png" 
  alt="Shoes" 
  width={100}
  height={100}
  layout="responsive" />
        </div>

    </div>
    </div>
  )
}

export default Checkout
