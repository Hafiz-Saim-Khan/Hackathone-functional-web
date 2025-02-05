import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/app/sidebar/page";
import Navbar from "../components/Navbar";
import { client } from "@/sanity/lib/client";

export interface Hackathone {
  _id: string;  // Add _id for dynamic routing
  productName: string;
  category: string;
  price: string;
  inventory: string;
  colors: string;
  status: string;
  imageUrl: string;
  description: string;
}

export default async function Home() {
  const data: Hackathone[] = await client.fetch(`*[_type == "product" ]{ 
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    "imageUrl": image.asset->url,
    description,
  }`);

  return (
    <div>
      <Navbar />
      <div className="flex gap-10 mt-10 ">
        <Sidebar />
        <div className="flex gap-16 flex-wrap w-screen">
          {data.map((product, index) => (
            <section key={index} className="w-[300px] h-[430px] bg-gray-100 border-2 border-gray-200 rounded-lg">
              <Link href={`/products/${product._id}`}> {/* Pass the product's unique _id for routing */}
                
                  <Image 
                    className="h-80 w-80" 
                    src={product.imageUrl} 
                    alt={product.productName} 
                    width={300}  
                    height={300} 
                  />
                  <div className="font-weight-500 text-[15px] ml-8">
                    <p className="text-red-500">Just In</p>
                    <p>{product.productName}</p>
                    <p className="text-[#757575]">{product.category}</p>
                    <p className="text-[#757575]">{product.colors} Colour</p>
                    <p>MRP: {product.price}</p>
                  </div>
                
              </Link>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

