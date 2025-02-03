import React from "react"
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";


const Details = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex gap-32 mb-[200px]"> 
      <section>
        {/* <Image src="detail-pg.png" className="mt-[50px] ml-20" alt="" /> */}
        <Image className="h-80 w-80"
  src="/detail-pg.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
        </section>
      <section className="mt-[150px]">
        <h1 className="text-5xl font-semibold mb-8">Nike Air Force 1 <br />PLT.AF.ORM</h1>
        <p className="text-[15px] weight-400 w-[374px] h-[180px] mb-5">
        Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
        </p>
        <h1 className="text-[36px] mt-0">8 695.00</h1>
        <button className=" mt-7 h-11 w-[160px] bg-black flex text-white rounded-full p-3 gap-4 text-center"> <PiShoppingCartSimpleBold className="h-[22px] w-[25px] " />
        Add To Cart</button>
      </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Details
