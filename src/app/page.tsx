import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



export default function Home () {
  return(
    <div>
      <Navbar/>
      {/* PART 1 OF HOME PAGE */}
        {/* IMAGE CONTAINER */}
        <div className="text-center ">
          <h1 className="text-lg font-semibold mb-4">Hello Nike App</h1>
          <div className="grid text-center sm:flex md:flex lg:flex sm:ml-[100px] xl:ml-[450px] md:ml-[200px] lg:ml-[300px]">
          <p className="text-md font-medium mb-3">Download the app access everthing Nike .</p> <p className="underline cursor-pointer font-semibold">Get Your Great</p></div>
          <section className="mt-10">
          <Image
  src="/nike-shoes.png" 
  alt="Shoes" 
  width={100}
  height={100}
  layout="responsive" />
          </section>
        </div>


        <div className="h-[229px] ml-3 lg:w-[800px] xl:w-[1008px] sm:text-center md:text-center xl:text-center flex-wrap  xl:ml-28 lg:ml-28  mb-[100px]">
          <h3 className="weight-500 sm:ml-[50px] ml-28 font-bold text-[15px]">First Look</h3>
          <h1 className=" weight-500 text-4xl sm:text-[56px] md:text-[56px] lg:text-[56px] xl:text-[56px] ml-0">NIKE AIR MAX PULSE</h1>
          <p className="weight-400 text-[16px] mt-5">Extreme comfort , Hyper durable, Max volume, Introducing the Air Max Pulse <br />designed to push your past your limits and help you go to the max</p>
          <section className="flex gap-2">
            <button className="h-[39px] w-[110px] bg-black text-white rounded-full pt-2 pr-6 pb-2 pl-5 ml-8 sm:ml-40 md:ml-60 xl:ml-[400px]  lg:ml-[300px] mt-8">Notify Me</button>
            <button className="h-[39px] w-[148px] bg-black text-white rounded-full pt-2 pr-6 pb-2 pl-5 mt-8 ">Shop Air Max</button>
          </section>
        </div>

        {/* PART  2 OF HOME  */}
        <div className="p-5">
          <section className="flex ">
            <h1 className="weight-500 text-[22px] ml-2 sm:ml-10 md:ml-10 lg:ml-10 xl:ml-10">Best of Air Max</h1>
            <div className="flex ml-20 lg:ml-[600px] xl:ml-[900px] gap-4">
              <h3 className="text-[13px]">Shop</h3>
              <FaAngleLeft  className="rounded-full h-6 w-6 text-gray-400 bg-[#e0e0e0] p-1"/>
              <FaAngleRight className="rounded-full h-6 w-6 bg-[#bebebe] p-1" />
            </div>
          </section>
          {/*   IMAGE 1 */}
          <div className="gap-2 md:flex flex-wrap">
            <section  className=" lg:w-[300px] h-[320px] sm:h-[510px] md:h-[510px] lg:h-[400px] xl:h-[460px] mx-9 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0  sm:w-[441px] md:w-[441px]  xl:w-[341px] border-2 bg-gray-50">
              {/* <Image src="/women-shoes.png"  alt="Womens Shoes" className="h-[441px] w-[441px]" /> */}
              <Image className="md:h-[210px] md:w-[200px]"
  src="/women-shoes.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
            <div className="flex">
            <h3 className="weight-500 text-[15px]">Nike Air Max Pulse</h3>
            <p className=" sm:ml-[250px] ml-20  md:ml-[250px] lg:ml-[80px] xl:ml-[100px]">13 995</p></div>
            <p className="text-[#757575] weight-400 text-sm">Women"s shoes</p>
            
            </section>
              {/* IMAGE 2 */}
            <div className="gap-2 flex flex-wrap ">
            <section  className=" lg:w-[300px] h-[320px] sm:h-[510px] md:h-[510px] lg:h-[400px] xl:h-[460px] mx-9 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0  sm:w-[441px] md:w-[441px]  xl:w-[341px] border-2 bg-gray-50">
              {/* <Image src="Mens-shoes.png" alt="Mens Shoes" className="h-[441px] w-[441px]" /> */}
              <Image className="h-80 w-80"
  src="/Mens-shoes.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
            <div className="flex">
            <h3 className="weight-500 text-[15px] ">Nike Air Max Pulse</h3>
            <p className=" sm:ml-[250px] ml-20 md:ml-[250px] lg:ml-[80px] xl:ml-[100px]">13 995</p></div>
            <p className="text-[#757575] weight-400 text-sm">Men"s shoes</p>
            
            </section>
            {/* IMAGE 3 */}
            <div className="gap-2 flex">
            <section  className="lg:w-[300px] mx-9 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 h-[320px] sm:h-[510px] md:h-[510px] lg:h-[400px] xl:h-[460px] sm:w-[441px] md:w-[441px] xl:w-[341px] border-2 bg-gray-50">
              {/* <Image src="mens-shoes-2.png" alt="Mens Shoes" className="h-[441px] w-[441px]" /> */}
              <Image className="h-80 w-80"
  src="/mens-shoes-2.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
            <div className="flex">
            <h3 className="weight-500 text-[15px]">Nike Air Max 97 SE</h3>
            <p className="sm:ml-[250px] ml-20 md:ml-[250px] lg:ml-[80px] xl:ml-[100px]">16 995</p></div>
            <p className="text-[#757575] weight-400 text-sm">Men"s shoes</p>
            
            </section>

          </div>
        </div>


        </div>
        </div>


        {/*       HOME PAGE PART THREE */}
        <div className="p-5 mt-20 mb-20">
          <h2 className="weight-500 text-[22px]">Featured</h2>
          {/* <Image src="mens-pic.jpeg" className="w-[1344px] h-[700px] mt-5 mb-20"/> */}
          <Image className="h-80 w-80"
  src="/mens-pic.jpeg" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
          <section className="text-center">
          <h1 className="weight-500 text-3xl lg:mt-10 sm:text-[44px] md:text-[44px] lg:text-[54px] xl:text-[54px]">STEP INTO WHAT FEELS GOOD</h1>
          <p className="text-[15px] weight-400">Cause eveyone should know the feeling of running in that perfect pair</p>
          <button className="h-[39px] w-[160px] bg-black text-white rounded-full pt-2 pr-6 pb-2 pl-5 mt-8 ">Find Your Shoe</button>
          </section>
        </div>

          {/* HOME PAGE PART FOUR */}
          <h1 className="weight-500 text-[23px] ml-10 p-5">Gear Up</h1>
          
       <div className="sm:flex md:flex  block flex-wrap lg:flex xl:flex gap-5 p-5">
        <section className=" lg:ml-48 lg:gap-10 lg:h-[470px] xl:h-[470px] lg:w-[669px] xl:w-[669px] sm:flex md:flex lg:flex xl:flex  px-5 py-5">
          {/* h-470px w-669px */}
          <div>
            {/* <Image src="tea-shirt-1.png" alt="" /> */}
            <Image 
  src="/tea-shirt-1.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
          <section className="  flex text-[15px] font-semibold ">
          <h1 className="mt-5 ">Nike Dri FIT ADV TechKnit Ultra</h1><p className="mt-5 ml-5"> 3 895</p></section>

          <p className="text-[#757575] text-[16px] mt-1">Men"s Short Sleeve</p>
          <p className="text-[#757575] text-[16px] mb-10 mt-1">Running Top</p>
          </div>

          <div>
            {/* <Image src="chadda.png" alt="" /> */}
            <Image 
  src="/chadda.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
            <section className="flex text-[15px] font-semibold ">
          <h1 className="mt-5 sm:ml-2 md:mt-5 md:ml-10 sm:mt-14">Nike Dri FIT Challenger</h1><p className=" md:mt-5 md:ml-10 mt-5 sm:mt-14 ml-9"> 2 495</p></section>

          <p className="text-[#757575] text-[16px] md:ml-10 mt-1">Men"s 18cm (approx) 2-</p>
          <p className="text-[#757575] text-[16px] md:ml-10 mt-1">in-1 Versatile Shorts</p>
          
          
          </div>
        </section>


{/* RIGHT SECTION */}

      
        <section className=" lg:ml-48 lg:gap-10 gap-5 lg:h-[470px] xl:h-[470px] lg:w-[669px] xl:w-[669px]  sm:flex md:flex lg:flex xl:flex px-5 py-5">
          
          <div>
            {/* <Image src="female-t-shirt.png" alt="" /> */}
            <Image className="h-80 w-80"
  src="/female-t-shirt.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
          <section className="flex text-[15px] font-semibold ">
          <h1 className="mt-5">Nike Dri FIT ADV TechKnit Ultra</h1><p className="mt-5 ml-5"> 5 295</p></section>

          <p className="text-[#757575] text-[16px] mt-1">Women"s Long  Sleeve</p>
          <p className="text-[#757575] text-[16px] mb-10 mt-1">Running Top</p>
          </div>

          <div>
            {/* <Image src="trowser.png" alt="" /> */}
            <Image className="h-80 w-80"
  src="/trowser.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
            <section className="flex text-[15px] font-semibold ">
          <h1 className="mt-5 sm:mt-14 md:mt-5 md:ml-6 sm:ml-3">Nike Fast</h1><p className="mt-5 md:mt-5  md:ml-6 sm:mt-14 ml-9"> 3 795</p></section>

          <p className="text-[#757575] text-[16px] md:ml-7 mt-1">Women"s Mid-Rise 7/8 Running</p>
          <p className="text-[#757575] text-[16px] md:ml-7 mt-1">Legging with Pockets</p>
          
          
          </div>
        </section>
        





        </div>
        


         {/* HOME PAGE PART 4 */}
    <div className="p-5">
    <h1 className="text-[22px] weight-500">Don"t Miss</h1>
    {/* <Image  className="h-[700px] w-[1344px]" src="part-4-Image.png" alt="" /> */}
    <Image className="h-80 w-80"
  src="/part-4-Image.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
    </div>


    {/* HOME PAGE PART 5 */}

      <div className="text-center mb-10">
         <h1 className=" mt-10 weight-500 text-[54px]">FLIGHT ESSENTIALS</h1>
          <p className="text-[15px] weight-400">Your built-to-last,all week wears-but with style only jordan brand can deliver</p>
          <button className="h-[39px] w-[80px] bg-black text-white text-[15px] rounded-full pt-2 pr-6 pb-2 pl-5 mt-9 ">Shop</button>
      </div>    

            {/*HOME PAGE PART 6  */}
        <h1 className="text-[23px] weight-600 font-semibold p-5">The Essentials</h1>
        <div  className=" sm:flex md:flex lg:flex xl:flex p-5 gap-10 ml-20">
          <section >
            {/* <Image src="part-5-1.png " className="cursor-pointer" alt="" /> */}
            <Image className="h-80 w-80 mb-5"
  src="/part-5-1.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
            </section>
          <section >
            {/* <Image src="part-5-2.png " className="cursor-pointer" alt="" /> */}
            <Image className="h-80 w-80 mb-5"
  src="/part-5-2.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />
          </section>
          <section >
            {/* <Image src="part-5-3.png " className="cursor-pointer" alt="" /> */}
<Image className="h-80 w-80"
  src="/part-5-3.png" 
  alt="Shoes" 
  width={200}
  height={200}
  layout="responsive" />

            </section>
        </div>

        {/* HOME PAGE PART 7 */}
      <div className="flex  md:pl-[50px] lg:pl-[100px] xl:pl-[300px] gap-3 font-semibold mt-[80px]">
        <section className=" sm:ml-[44px] md:ml-[44px] lg:ml-[44px] xl:ml-[44px]">
          <h3 className="text-[16px] weight-500 font-semibold">Icons</h3>
          <p className="text-[15px] text-[#757575] mt-5">Air Force 1</p>
          <p className="text-[15px] text-[#757575] mt-2">Huarache</p>
          <p className="text-[15px] text-[#757575] mt-2">Air Max 90</p>
          <p className="text-[15px] text-[#757575] mt-2">Air Max 95</p>
        </section>
        <section className="sm:ml-[44px] md:ml-[44px] lg:ml-[44px] xl:ml-[44px]">
        <h3 className="text-[16px] weight-500 font-semibold">Shoes</h3>
          <p className="text-[15px] text-[#757575] mt-5">All Shoes</p>
          <p className="text-[15px] text-[#757575] mt-2">Custom Shoes</p>
          <p className="text-[15px] text-[#757575] mt-2">Jordan Shoes</p>
          <p className="text-[15px] text-[#757575] mt-2">Running Shoes</p>
        </section>
        <section className="sm:ml-[44px] md:ml-[44px] lg:ml-[44px] xl:ml-[44px]">
        <h3 className="text-[16px] weight-500 font-semibold"> Clothing</h3>
          <p className="text-[15px] text-[#757575] mt-5">All Clothing</p>
          <p className="text-[15px] text-[#757575] mt-2">Modest Wear</p>
          <p className="text-[15px] text-[#757575] mt-2">Hoodies & Pullovers</p>
          <p className="text-[15px] text-[#757575] mt-2">Shirts & Tops</p>
        </section>
        <section className="ml-[44px]">
        <h3 className="text-[16px] weight-500 font-semibold">Kids"</h3>
          <p className="text-[15px] text-[#757575] mt-5">Infant & Toddler Shoes</p>
          <p className="text-[15px] text-[#757575] mt-2">Kids" Shoes</p>
          <p className="text-[15px] text-[#757575] mt-2">Kids" Jordan Shoes</p>
          <p className="text-[15px] text-[#757575] mt-2">Kids" Basketball Shoes</p>
        </section>
      </div>


    
    <Footer/>
</div>
)
}
