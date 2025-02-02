import React from "react"
import { CiHeart } from "react-icons/ci";
import { GoTrash } from "react-icons/go";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link"
import Image from "next/image";

const Men = () => {
  return (
    <div>
      <Navbar/>
       <div className="sm:flex md:flex lg:flex xl:flex  sm:pl-10 pl-2 gap-6 md:pl-[50px] lg:pl-[400px] xl:pl-[400px]">
          <section>
            <h1 className="font-semibold weight-500 text-sm">Free Delievery</h1>
            <div className="flex gap-5">
               <p className="text-xs">Applies to orders of 14 000.00 or more.</p>
               <button className="underline font-semibold text-xs">View details</button>
            </div>
            <h1 className="weight-500 text-[22px]">Bag</h1>
            {/* AB YAHAN AIK DIV BANEGA JISME 3 SECTION HONGE */}
       <div className="md:flex flex-wrap">
         <section className="h-[300px] w-[300px]">
          {/* <Image src="banda.jpeg" alt="Shirt" className="h-[150px] w-[150px]" /> */}
          <Image className="h-80 w-80"
  src="/banda.jpeg" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
          </section>
         <section className=" h-[170px] text-[15px]  w-[300px]">
            <p>Nike Dri-FIT ADV TechKnit Ultra</p>
            <p className="text-[#8d8d8d]">Men"s Short-Sleeve Running Top</p>
            <p className="text-[#8d8d8d]">Ashen Slate/Cobalt Bliss</p>
            <div className="text-[#8d8d8d] flex gap-5">
                <p>Size L</p><p>Quantity 1</p>
         </div>
         <div className="flex mt-5 gap-3">
                <p><CiHeart className="h-6 w-6 "/></p>
                <p><GoTrash className="h-6 w-6 "/>  </p>
         </div>
        </section>
        <section className="ml-[50px]"><p>MRP : 3 895.00</p></section>
    </div>
        </section>
    

            {/* RIGHT SECTION */}
        <section className="h-[295px] w-[350px]">
            <h1 className="weight-500 text-xl mt-5  my-5 ">Summary</h1>
            <div className="flex  gap-40">
              <p>Subtotal</p>
              <p>20 890.00</p>
            </div>
            <div className="flex mt-1">
              <p>Estimted Delievery & Handling</p>
              <p>Free</p>
            </div>
            <div className="flex my-5 gap-[188px]">
              <p>Total</p>
              <p>20 890.00</p>
            </div>
            <Link href="/Check-out" className="w-[264px] p-3 mt-5 h-[60px] text-center items-center text-[15px] rounded-full bg-black text-white">Member Checkout</Link>
        </section>
    </div>

    {/* SECTION KE NEESCHE WALA HISSA */}
    <div className=" pl-5 flex lg:pl-[450px] xl:pl-[450px]">
    <section className=" text-[15px]">
            <p>Nike Air Max 97 SE</p>
            <p className="text-[#8d8d8d]">Men"s Shoes</p>
            <p className="text-[#8d8d8d]">Flat Pewter/Light Bone/Black/White</p>
            <div className="text-[#8d8d8d] flex gap-5">
                <p>Size 8</p><p>Quantity 1</p>
            </div>
            <div className="flex mt-5 gap-3">
                <p><CiHeart className="h-6 w-6 "/></p>
                <p><GoTrash className="h-6 w-6 "/>  </p>
            </div>

        </section>
        <section className="ml-[110px]"><p>MRP : 16 995.00</p></section></div>
    <Footer/>
    </div>
  )
}

export default Men
