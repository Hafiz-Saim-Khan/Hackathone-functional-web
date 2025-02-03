// import { SiNike } from "react-icons/si";
// import React from "react"
// import Link from "next/link"
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Login = () => {
//   return (
//     <div>
//       <Navbar/>
//    <div className="xl:pl-[450px] 2xl:pl-[450px] md:pl-[250px] sm:pl-[200px] pl-5"> 
//     <section className="h-[489px] w-[380px] border-2 border-gray-100 bg-gray-100 text-center">
//     <SiNike  className="h-10 w-16  text-black ml-[150px]"/>
//     <h1 className="text-[18px] font-bold">YOUR ACCOUNT <br /> FOR EVERYTHING <br />NIKE</h1>
//     <input type="text" placeholder="Email address"  className="h-[40px] w-[324px] items-center bg-gray-100  mt-1 pl-2"/>
//     <input type="password" placeholder="Password" className="h-[40px] w-[324px] items-center bg-gray-100  mt-1 pl-2" />
//     <div className="flex text-[14px] mt-4 pl-4 gap-5">
//     <input type="checkbox" /><p className="text-[#8d8d8d]">Keep me signed in</p>
//    <p className="text-[#BCBCBC]"> Forgotten your password ?</p></div>
//     <p className="text-[15px] my-5">By logging in, you agree to Nike"s Privacy Policy <br />and Terms of Use</p>

//     <button className="w-[324px] h-[40px] bg-black text-white text-[14px]">Sign In</button>
//     <div className="flex ml-[100px] mt-5">
//     <p>Not a Member? </p>
//     <Link href="/Join-us" className="underline font-bold">Join us</Link>
//     </div>
   
//     </section>
//    </div>
//    <Footer/>
//    </div>
//   )
// }

// export default Login





import { SiNike } from "react-icons/si";
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <Navbar/>
   <div className="xl:pl-[450px] 2xl:pl-[450px] md:pl-[250px] sm:pl-[200px] pl-5"> 
    <section className="h-[489px] w-[380px] border-2 border-gray-100 bg-gray-100 text-center">
    <SiNike  className="h-10 w-16  text-black ml-[150px]"/>
    <h1 className="text-[18px] font-bold">YOUR ACCOUNT <br /> FOR EVERYTHING <br />NIKE</h1>
    <input type="text" placeholder="Email address"  className="h-[40px] w-[324px] items-center bg-gray-100  mt-1 pl-2"/>
    <input type="password" placeholder="Password" className="h-[40px] w-[324px] items-center bg-gray-100  mt-1 pl-2" />
    <div className="flex text-[14px] mt-4 pl-4 gap-5">
    <input type="checkbox" /><p className="text-[#8d8d8d]">Keep me signed in</p>
   <p className="text-[#BCBCBC]"> Forgotten your password ?</p></div>
    <p className="text-[15px] my-5">By logging in, you agree to Nike&quot;s Privacy Policy <br />and Terms of Use</p>

    <button className="w-[324px] h-[40px] bg-black text-white text-[14px]">Sign In</button>
    <div className="flex ml-[100px] mt-5">
    <p>Not a Member? </p>
    <Link href="/Join-us" className="underline font-bold">Join us</Link>
    </div>
   
    </section>
   </div>
   <Footer/>
   </div>
  )
}

export default Login;
