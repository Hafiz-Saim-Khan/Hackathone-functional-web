
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
          <p className="text-md font-medium mb-3">Download yhe app access everthing Nike . <b className="underline cursor-pointer font-semibold">Get Your Great</b></p>
          <section className="h-[700px] w-[1330px]"><img src="/nike-shoes.png"  alt="Nike Shoes" /></section>
        </div>


        <div className="h-[229px] w-[1008px] text-center ml-28 mb-[100px]">
          <h3 className="weight-500  font-bold text-[15px]">First Look</h3>
          <h1 className=" weight-500 text-[56px]">NIKE AIR MAX PULSE</h1>
          <p className="weight-400 text-[16px] mt-5">Extreme comfort , Hyper durable, Max volume, Introducing the Air Max Pulse <br />-designed to push your past your limits and help you go to the max</p>
          <section className="flex gap-2">
            <button className="h-[39px] w-[110px] bg-black text-white rounded-full pt-2 pr-6 pb-2 pl-5  ml-[400px] mt-8">Notify Me</button>
            <button className="h-[39px] w-[148px] bg-black text-white rounded-full pt-2 pr-6 pb-2 pl-5 mt-8 ">Shop Air Max</button>
          </section>
        </div>

        {/* PART  2 OF HOME  */}
        <div className="p-5">
          <section className="flex ">
            <h1 className="weight-500 text-[22px] ml-10">Best of Air Max</h1>
            <div className="flex ml-[900px] gap-4">
              <h3 className="text-[13px]">Shop</h3>
              <FaAngleLeft  className="rounded-full h-6 w-6 text-gray-400 bg-[#e0e0e0] p-1"/>
              <FaAngleRight className="rounded-full h-6 w-6 bg-[#bebebe] p-1" />
            </div>
          </section>
          {/*   IMAGE 1 */}
          <div className="gap-2 flex">
            <section  className="h-[510px] w-[441px] border-2 bg-gray-50"><img src="/women-shoes.png" alt="Womens Shoes" className="h-[441px] w-[441px]" />
            <div className="flex">
            <h3 className="weight-500 text-[15px]">Nike Air Max Pulse</h3>
            <p className="ml-[250px]">13 995</p></div>
            <p className="text-[#757575] weight-400 text-sm">Women's shoes</p>
            
            </section>
              {/* IMAGE 2 */}
            <div className="gap-2 flex">
            <section  className="h-[510px] w-[441px] border-2 bg-gray-50"><img src="Mens-shoes.png" alt="Mens Shoes" className="h-[441px] w-[441px]" />
            <div className="flex">
            <h3 className="weight-500 text-[15px]">Nike Air Max Pulse</h3>
            <p className="ml-[250px]">13 995</p></div>
            <p className="text-[#757575] weight-400 text-sm">Men's shoes</p>
            
            </section>
            {/* IMAGE 3 */}
            <div className="gap-2 flex">
            <section  className="h-[510px] w-[441px] border-2 bg-gray-50"><img src="mens-shoes-2.png" alt="Mens Shoes" className="h-[441px] w-[441px]" />
            <div className="flex">
            <h3 className="weight-500 text-[15px]">Nike Air Max 97 SE</h3>
            <p className="ml-[250px]">16 995</p></div>
            <p className="text-[#757575] weight-400 text-sm">Men's shoes</p>
            
            </section>

          </div>
        </div>


        </div>
        </div>


        {/*       HOME PAGE PART THREE */}
        <div className="p-5 mt-20 mb-20">
          <h2 className="weight-500 text-[22px]">Featured</h2>
          <img src="mens-pic.jpeg" className="w-[1344px] h-[700px] mt-5 mb-20"/>
          <section className="text-center">
          <h1 className="weight-500 text-[54px]">STEP INTO WHAT FEELS GOOD</h1>
          <p className="text-[15px] weight-400">Cause eveyone should know the feeling of running in that perfect pair</p>
          <button className="h-[39px] w-[160px] bg-black text-white rounded-full pt-2 pr-6 pb-2 pl-5 mt-8 ">Find Your Shoe</button>
          </section>
        </div>

          {/* HOME PAGE PART FOUR */}
          <h1 className="weight-500 text-[23px] ml-10 p-5">Gear Up</h1>
       <div className="flex gap-5 p-5">
        <section className="h-[470px] w-[669px]  flex  px-5 py-5">
          
          <div><img src="tea-shirt-1.png" alt="" />
          <section className="flex text-[15px] font-semibold ">
          <h1 className="mt-5">Nike Dri FIT ADV TechKnit Ultra</h1><p className="mt-5 ml-5"> 3 895</p></section>

          <p className="text-[#757575] text-[16px] mt-1">Men's Short Sleeve</p>
          <p className="text-[#757575] text-[16px] mt-1">Running Top</p>
          </div>

          <div>
            <img src="chadda.png" alt="" />
            <section className="flex text-[15px] font-semibold ">
          <h1 className="mt-5">Nike Dri FIT Challenger</h1><p className="mt-5 ml-9"> 2 495</p></section>

          <p className="text-[#757575] text-[16px] mt-1">Men's 18cm (approx) 2-</p>
          <p className="text-[#757575] text-[16px] mt-1">in-1 Versatile Shorts</p>
          
          
          </div>
        </section>


{/* RIGHT SECTION */}

      
        <section className="h-[470px] w-[669px] gap-5  flex px-5 py-5">
          
          <div><img src="female-t-shirt.png" alt="" />
          <section className="flex text-[15px] font-semibold ">
          <h1 className="mt-5">Nike Dri FIT ADV TechKnit Ultra</h1><p className="mt-5 ml-5"> 5 295</p></section>

          <p className="text-[#757575] text-[16px] mt-1">Women's Long  Sleeve</p>
          <p className="text-[#757575] text-[16px] mt-1">Running Top</p>
          </div>

          <div>
            <img src="trowser.png" alt="" />
            <section className="flex text-[15px] font-semibold ">
          <h1 className="mt-5">Nike Fast</h1><p className="mt-5 ml-9"> 3 795</p></section>

          <p className="text-[#757575] text-[16px] mt-1">Women's Mid-Rise 7/8 Running</p>
          <p className="text-[#757575] text-[16px] mt-1">Legging with Pockets</p>
          
          
          </div>
        </section>
        





        </div>
        


         {/* HOME PAGE PART 4 */}
    <div className="p-5">
    <h1 className="text-[22px] weight-500">Don't Miss</h1>
    <img  className="h-[700px] w-[1344px]" src="part-4-img.png" alt="" />
    </div>


    {/* HOME PAGE PART 5 */}

      <div className="text-center mb-10">
         <h1 className=" mt-10 weight-500 text-[54px]">FLIGHT ESSENTIALS</h1>
          <p className="text-[15px] weight-400">Your built-to-last,all week wears-but with style only jordan brand can deliver</p>
          <button className="h-[39px] w-[80px] bg-black text-white text-[15px] rounded-full pt-2 pr-6 pb-2 pl-5 mt-9 ">Shop</button>
      </div>    

            {/*HOME PAGE PART 6  */}
        <h1 className="text-[23px] weight-600 font-semibold p-5">The Essentials</h1>
        <div  className="flex p-5 gap-2">
          <section ><img src="part-5-1.png " className="cursor-pointer" alt="" /></section>
          <section ><img src="part-5-2.png " className="cursor-pointer" alt="" /></section>
          <section ><img src="part-5-3.png " className="cursor-pointer" alt="" /></section>
        </div>

        {/* HOME PAGE PART 7 */}
      <div className="flex  pl-[300px] gap-5 font-semibold mt-[80px]">
        <section className="ml-[44px]">
          <h3 className="text-[16px] weight-500 font-semibold">Icons</h3>
          <p className="text-[15px] text-[#757575] mt-5">Air Force 1</p>
          <p className="text-[15px] text-[#757575] mt-2">Huarache</p>
          <p className="text-[15px] text-[#757575] mt-2">Air Max 90</p>
          <p className="text-[15px] text-[#757575] mt-2">Air Max 95</p>
        </section>
        <section className="ml-[44px]">
        <h3 className="text-[16px] weight-500 font-semibold">Shoes</h3>
          <p className="text-[15px] text-[#757575] mt-5">All Shoes</p>
          <p className="text-[15px] text-[#757575] mt-2">Custom Shoes</p>
          <p className="text-[15px] text-[#757575] mt-2">Jordan Shoes</p>
          <p className="text-[15px] text-[#757575] mt-2">Running Shoes</p>
        </section>
        <section className="ml-[44px]">
        <h3 className="text-[16px] weight-500 font-semibold"> Clothing</h3>
          <p className="text-[15px] text-[#757575] mt-5">All Clothing</p>
          <p className="text-[15px] text-[#757575] mt-2">Modest Wear</p>
          <p className="text-[15px] text-[#757575] mt-2">Hoodies & Pullovers</p>
          <p className="text-[15px] text-[#757575] mt-2">Shirts & Tops</p>
        </section>
        <section className="ml-[44px]">
        <h3 className="text-[16px] weight-500 font-semibold">Kids'</h3>
          <p className="text-[15px] text-[#757575] mt-5">Infant & Toddler Shoes</p>
          <p className="text-[15px] text-[#757575] mt-2">Kids' Shoes</p>
          <p className="text-[15px] text-[#757575] mt-2">Kids' Jordan Shoes</p>
          <p className="text-[15px] text-[#757575] mt-2">Kids' Basketball Shoes</p>
        </section>
      </div>


    
    <Footer/>
</div>
)
}
