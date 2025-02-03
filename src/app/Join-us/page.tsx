
// import { SiNike } from "react-icons/si";
// import { FaAngleDown } from "react-icons/fa";
// import Link from "next/link"
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// import React from "react"

// const Join = () => {
//   return (
//     <div>
//       <Navbar/>
//     <div>
      
//       <div className="h-[833px] w-[380px] p-4 bg-gray-100 mb-[200px] sm:ml-20 md:ml-44 ml-10 xl:ml-[400px]">
//         <section>
//     <SiNike  className="h-10 w-16  text-black ml-[150px]"/>
//     <h1 className="text-[18px] font-bold mb-8">BECOME A NIKE MEMBER</h1>
//     <p className="text-[#8D8D8D] weight-400 font-semibold text-[14px]">Create your Nike Member profile and get <br /> first access to the very best of Nike <br /> products, inspiration and community  </p>
//     <input type="text" placeholder="Email address"  className=" mb-5 mt-5 h-[40px] w-[324px] items-center bg-gray-100 pl-2"/>
//     <input type="password" placeholder="Password" className=" mb-5 h-[40px] w-[324px] items-center bg-gray-100  mt-1 pl-2" />
//     <input type="text" placeholder="First Name" className=" mb-5 h-[40px] w-[324px] items-center bg-gray-100  mt-1 pl-2" />
//     <input type="text" placeholder="Last Name" className=" mb-5 h-[40px] w-[324px] items-center bg-gray-100  mt-1 pl-2" />
//     <input type="text" placeholder="Date Of Birth" className=" mb-5 h-[40px] w-[324px] items-center bg-gray-100  mt-1 pl-2" />
//     <p className="text-[11px] text-[#8d8d8d] mr-6 mb-5">Get a Nike Member Reward every year on Birthday</p>
//      <section className=" items-center flex gap-60 border-2 pl-4 h-[40px] w-[324px] border-gray-200 text-[14px] text-[#8d8d8d]">
//      <p >India</p>
//      <p><FaAngleDown />
//      </p>     
//       </section>  
//       <div className="flex gap-5 my-5"> 
//         <button className="h-[40px] w-[153px] border-2 text-[#8d8d8d]">Male</button>
//         <button className="h-[40px] w-[153px] border-2 text-[#8d8d8d]">Female</button>
//         </div>  
//           <section className="flex  text-[#8d8d8d] gap-4 text-[12px] text-center">
//         <input type="checkbox" /><p>Sign up for emails to get updates from Nike on <br /> products, offers and your Members bemefits</p></section>
//         <section className="flex text-[#8d8d8d] text-[12px] ml-5 gap-2 mt-5">
//         <p>By creating an accont, you agree to Nike"s </p><p className="underline font-semibold "> Privacy </p></section>
//         <section className="flex text-[#8d8d8d] ml-5 pl-14 gap-2 text-[12px]">
//           <p className="underline font-semibold"> Policy</p> and
//           <p className="underline font-semibold"> Terms of Use </p>
//         </section>
//         <button className="h-[40px] my-5 mr-12 rounded-[3px] bg-black text-white w-[324px]">Join Us</button>
//         <div className="flex text-[11px] mx-24 gap-3 text-[#8d8d8d]">
//         <p>Alredy a Mmber ? </p><Link href="/Login" className="underline">Sign In</Link></div>
//       </section>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   )
// }

// export default Join







import { SiNike } from "react-icons/si";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React from "react";

const Join = () => {
  return (
    <div>
      <Navbar/>
    <div>
      
      <div className="h-[833px] w-[380px] p-4 bg-gray-100 mb-[200px] sm:ml-20 md:ml-44 ml-10 xl:ml-[400px]">
        <section>
    <SiNike  className="h-10 w-16  text-black ml-[150px]"/>
    <h1 className="text-[18px] font-bold mb-8">BECOME A NIKE MEMBER</h1>
    <p className="text-[#8D8D8D] weight-400 font-semibold text-[14px]">Create your Nike Member profile and get <br /> first access to the very best of Nike <br /> products, inspiration and community  </p>
    <input type="text" placeholder="Email address"  className=" mb-5 mt-5 h-[40px] w-[324px] items-center bg-gray-100 pl-2"/>
    <input type="password" placeholder="Password" className=" mb-5 h-[40px] w-[324px] items-center bg-gray-100  mt-1 pl-2" />
    <input type="text" placeholder="First Name" className=" mb-5 h-[40px] w-[324px] items-center bg-gray-100  mt-1 pl-2" />
    <input type="text" placeholder="Last Name" className=" mb-5 h-[40px] w-[324px] items-center bg-gray-100  mt-1 pl-2" />
    <input type="text" placeholder="Date Of Birth" className=" mb-5 h-[40px] w-[324px] items-center bg-gray-100  mt-1 pl-2" />
    <p className="text-[11px] text-[#8d8d8d] mr-6 mb-5">Get a Nike Member Reward every year on Birthday</p>
     <section className=" items-center flex gap-60 border-2 pl-4 h-[40px] w-[324px] border-gray-200 text-[14px] text-[#8d8d8d]">
     <p >India</p>
     <p><FaAngleDown />
     </p>     
      </section>  
      <div className="flex gap-5 my-5"> 
        <button className="h-[40px] w-[153px] border-2 text-[#8d8d8d]">Male</button>
        <button className="h-[40px] w-[153px] border-2 text-[#8d8d8d]">Female</button>
        </div>  
          <section className="flex  text-[#8d8d8d] gap-4 text-[12px] text-center">
        <input type="checkbox" /><p>Sign up for emails to get updates from Nike on <br /> products, offers and your Members bemefits</p></section>
        <section className="flex text-[#8d8d8d] text-[12px] ml-5 gap-2 mt-5">
        <p>By creating an accont, you agree to Nike&quot;s </p><p className="underline font-semibold "> Privacy </p></section>
        <section className="flex text-[#8d8d8d] ml-5 pl-14 gap-2 text-[12px]">
          <p className="underline font-semibold"> Policy</p> and
          <p className="underline font-semibold"> Terms of Use </p>
        </section>
        <button className="h-[40px] my-5 mr-12 rounded-[3px] bg-black text-white w-[324px]">Join Us</button>
        <div className="flex text-[11px] mx-24 gap-3 text-[#8d8d8d]">
        <p>Alredy a Mmber ? </p><Link href="/Login" className="underline">Sign In</Link></div>
      </section>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Join;
