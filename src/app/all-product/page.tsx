import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import { FaAngleUp } from "react-icons/fa";



const Prodct = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex">
        <p className="weight-600 mr-[400px] text-2xl mb-6">New (500)</p>
        <p className="ml-[500px] mr-[100px]">Hide Filters</p>
        <p></p>
        <p>Sort By</p>
        <p><FaAngleDown className="mt-1"/> </p>
      </div>

      <div className="flex">
      {/* LEFT SECTION */}
      <div>

    <div className="font-semiboldtext-[15px] cursor-pointer grid gap-5 ml-7 ">
      <p>Shoes</p>
      <p>Sports Bras</p>
      <p>tops & T-Shirts</p>
      <p>Hoodies & Sweatshirts</p>
      <p>Jackets</p>
      <p>Trouser & Tights</p>
      <p>Shorts</p>
      <p>Tracksuit</p>
      <p>Jumsuits & Rompers</p>
      <p>Skirts & Dreses</p>
      <p>Socks</p>
      <p>Acessories</p>
      <p>& Equipment</p>
    </div>
    <section className="pl-4 h-[163px] w-[192px]">
    <div className="flex gap-6 mt-5">
      <p className="text-[16px] font-semibold ">Gender</p>
      <p className="weight-500 text-[15px]"><FaAngleUp  className="mt-1 ml-5"/> </p>
    </div>
    <div  className="flex gap-3 mt-7">
      <p><input type="checkbox" /></p>
      <p className="weight-500 text-[15px]">Men</p>
    </div>
    <div  className="flex gap-3">
      <p><input type="checkbox" /></p>
      <p className="weight-500 text-[15px]">Women</p>
    </div>
    <div  className="flex gap-3">
      <p><input type="checkbox" /></p>
      <p>Unisex</p>
    </div>
    </section>
    <div>
    <section className="pl-4 h-[163px] w-[192px]">
    <div className="flex gap-6 mt-5">
      <p className="text-[16px] font-semibold ">Kids</p>
      <p className="weight-500 text-[15px]"><FaAngleUp  className="mt-1 ml-5"/> </p>
    </div>
    <div  className="flex gap-3 mt-7">
      <p><input type="checkbox" /></p>
      <p className="weight-500 text-[15px]">Boys</p>
    </div>
    <div  className="flex gap-3">
      <p><input type="checkbox" /></p>
      <p className="weight-500 text-[15px]">Girls</p>
    </div>
    </section>
    </div>

    <div>
    <section className="pl-4 h-[163px] w-[192px]">
    <div className="flex gap-6 mt-5">
      <p className="text-[16px] font-semibold ">Shop By Price</p>
      <p className="weight-500 text-[15px]"><FaAngleUp  className="mt-1 ml-5"/> </p>
    </div>
    <div  className="flex gap-3 mt-7">
      <p><input type="checkbox" /></p>
      <p className="weight-500 text-[15px]">Under 2 500.00</p>
    </div>
    <div  className="flex gap-3">
      <p><input type="checkbox" /></p>
      <p className="weight-500 text-[15px]">2 501.00</p>
    </div>
    </section>
    </div>
    </div>
{/* mene  10 div banai or har div me 3 section banai or un me aik div or 1 section banaya */}
{/* RIGHT SECTION */}
<div className="  ml-7 w-[1000px] h-[5500px]">
  {/* IMAGE 1 */}
  <div className=" flex gap-10  ">
     <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-1.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Air Force Mid"07</p>
    <p className="text-[#757575]">Men"s Shoes</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 10 795.00</p>
  </div></section>
  {/* SECTION 2 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-2.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Court Vision Low Next Nature</p>
    <p className="text-[#757575]">Men"s Shoes</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 4 995.00</p>
  </div></section>
  
  {/* SECTION 3 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-3.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Air Force 1 PlatForm</p>
    <p className="text-[#757575]">Women"s Shoes</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 8 895.00</p>
  </div></section>
  </div>
  {/* SECOND DIV */}
  <div className="  ml-7 h-[3500px]">
  {/* IMAGE 1 */}
  <div className=" flex gap-10  ">
     <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-4.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Air Force 1 React</p>
    <p className="text-[#757575]">Men"s Shoes</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 13 295.00</p>
  </div></section>
  {/* SECTION 2 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-5.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Promo Exclusion</p>
    <p>Air Jordan 1 Elevate Low</p>
    <p className="text-[#757575]">Women"s Shoes</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 11 895.00</p>
  </div></section>
  
  {/* SECTION 3 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-6.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Standard Issue</p>
    <p className="text-[#757575]">Women"s Basketball Jursey</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 2 895.00</p>
  </div></section>
  </div>

  
  {/* THIRD DIV */}
  <div className="  ml-7 h-[3500px]">
  {/* IMAGE 1 */}
  <div className=" flex gap-10  ">
     <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-7.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Promo Exclusion</p>
    <p>Nike Dunk Low Retro SE</p>
    <p className="text-[#757575]">Men"s Shoes</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 9 695.00</p>
  </div></section>
  {/* SECTION 2 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-8.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Sustainable Materials</p>
    <p>Nike Dri-Fit UV Hyverse</p>
    <p className="text-[#757575]">Men"s Short Sleeve Graphhics Fitnes Top</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 2 495.00</p>
  </div></section>
  
  {/* SECTION 3 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-9.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Court Vision Low </p>
    <p className="text-[#757575]">Men"s Shoes</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 5 695.00</p>
  </div></section>
  </div>
       {/* fourth div */}
       <div className=" flex gap-10  ">
     <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-10.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Dri-FIT Ready</p>
    <p className="text-[#757575]">Men"s Short Sleeve Fitness Top</p>
    <p className="text-[#757575]">3 Colour</p>
    <p>MRP : 2 495.00</p>
  </div></section>
  {/* SECTION 2 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-11.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike 1 Leak Protection :Period</p>
    <p className="text-[#757575]">Women"s Mild-Rise 18cm(approax) Biker Shorts</p>
    <p className="text-[#757575]">2 Colour</p>
    <p>MRP : 2 495.00</p>
  </div></section>
  
  {/* SECTION 3 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-12.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Air Force LV8 3</p>
    <p className="text-[#757575]">Older Kids Shoe</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 7 495.00</p>
  </div></section>
  </div>

       {/* five div */}
       <div className=" flex gap-10  ">
     <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-13.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Blazer Low Platform</p>
    <p className="text-[#757575]">Women"s Shoes</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 8 195.00</p>
  </div></section>
  {/* SECTION 2 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-14.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Air Force 1"07</p>
    <p className="text-[#757575]">Women"s Shoes</p>
    <p className="text-[#757575]">2 Colour</p>
    <p>MRP : 1 495.00</p>
  </div></section>
  
  {/* SECTION 3 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-15.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Pro Dri-Fit </p>
    <p className="text-[#757575]">Men"s Tight-Fit Sleeveless Top</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 1 495.00</p>
  </div></section>
  </div>

       {/* six div */}
       <div className=" flex gap-10  ">
     <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-16.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Dunk Low Retro </p>
    <p className="text-[#757575]">Men"s Shoes</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 8 695.00</p>
  </div></section>
  {/* SECTION 2 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-17.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Air Max SC</p>
    <p className="text-[#757575]">Women"s Shoes</p>
    <p className="text-[#757575]">2 Colour</p>
    <p>MRP : 1 695.00</p>
  </div></section>
  
  {/* SECTION 3 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-18.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Dri-FIT UV Miler </p>
    <p className="text-[#757575]">Men"s Short Sleeve Running Top</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 1 695.00</p>
  </div></section>
  </div>

       {/* seven div */}
       <div className=" flex gap-10  ">
     <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-19.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Air Max SYSTM</p>
    <p className="text-[#757575]">Older Kids Shoes</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 2 195.00</p>
  </div></section>
  {/* SECTION 2 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-20.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Allate AU</p>
    <p className="text-[#757575]">Women"s Sports Bra</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 2 495.00</p>
  </div></section>
  
  {/* SECTION 3 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-21.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Court Legacy lift </p>
    <p className="text-[#757575]">Women"s Shoes</p>
    <p className="text-[#757575]">2 Colour</p>
    <p>MRP : 2 495.00</p>
  </div></section>
  </div>

       {/* eigth div */}
       <div className=" flex gap-10  ">
     <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-22.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Swoosh</p>
    <p className="text-[#757575]">Women"s Medium Sports Bra </p>
    <p className="text-[#757575]">2 Colour</p>
    <p>MRP : 3 095.00</p>
  </div></section>
  {/* SECTION 2 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-23.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike SB Zoom Janoski OG +</p>
    <p className="text-[#757575]">Shoes</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 4 595.00</p>
  </div></section>
  
  {/* SECTION 3 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-24.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Dri-FIT Run Division Rise 365 </p>
    <p className="text-[#757575]">Men"s Running Tank</p>
    <p className="text-[#757575]">2 Colour</p>
    <p>MRP : 3 495.00</p>
  </div></section>
  </div>


       {/* nine div */}
       <div className=" flex gap-10  ">
     <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-25.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Dri-FIT Challenger</p>
    <p className="text-[#757575]">Men"s 18cm (approaax) 2-in-1 Versatile Shorts</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 2 495.00</p>
  </div></section>
  {/* SECTION 2 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-26.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Jordan Series Es</p>
    <p className="text-[#757575]">Men"s Shoes</p>
    <p className="text-[#757575]">2 Colour</p>
    <p>MRP : 7 495.00</p>
  </div></section>
  
  {/* SECTION 3 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-27.jpeg" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Outdoor Play </p>
    <p className="text-[#757575]">Older Kids OversizedWoven Jacket</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 3 895.00</p>
  </div></section>
  </div>

       {/* ten div */}
       <div className=" flex gap-10  ">
     <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-28.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Sports Wear Trend</p>
    <p className="text-[#757575]">Older Kids High Vasted Vowen Shorts</p>
    <p className="text-[#757575]">2 Colour</p>
    <p>MRP : 2 495.00</p>
  </div></section>
  {/* SECTION 2 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-29.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Blazer Low 77 Jumbo </p>
    <p className="text-[#757575]">Women"s Shoes</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 8 495.00</p>
  </div></section>
  
  {/* SECTION 3 */}
  <section className="w-[350px] h-[553px]">
<Image className="h-80 w-80"
  src="/pic-30.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
  
  <div className="font-weight-500 text-[15px] ml-8">
    <p className="text-red-500">Just In</p>
    <p>Nike Sb Force 58 </p>
    <p className="text-[#757575]">Skate Shoes</p>
    <p className="text-[#757575]">1 Colour</p>
    <p>MRP : 5 995.00</p>
  </div></section>
  </div>


  {/* FINALLY TAMAM PICTURES KHATAM HOI */}

  





</div></div></div>
      
      </div> <Footer />  
         </div>

    

  )
}

export default Prodct