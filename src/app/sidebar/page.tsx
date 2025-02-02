import React from "react"
import { FaAngleUp } from "react-icons/fa";


const sidebar = () => {
  return (
    <div>
      
      {/* <div className="flex">
        <p className="weight-600 mr-[400px] text-2xl mb-6">New (500)</p>
        <p className="ml-[500px] mr-[100px]">Hide Filters</p>
        <p></p>
        <p>Sort By</p>
        <p><FaAngleDown className="mt-1"/> </p>
      </div> */}

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
    </div></div></div>
    )}
export default sidebar