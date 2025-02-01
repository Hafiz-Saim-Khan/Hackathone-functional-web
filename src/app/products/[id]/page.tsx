// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import Navbar from "../../components/Navbar";

// export interface Hackathone {
//   _id: string;
//   productName: string;
//   category: string;
//   price: string;
//   inventory: string;
//   colors: string;
//   status: string;
//   imageUrl: string;
//   description: string;
// }
// async function getProductData(id: string) {
//   const data: Hackathone[] = await client.fetch(
//     `*[_type == "product" && _id == $id]{
//       _id,
//       productName,
//       category,
//       price,
//       inventory,
//       colors,
//       status,
//       "imageUrl": image.asset->url,
//       description,
//     }`, { id }
//   );

//   if (!data || data.length === 0) {
//     return null;  // Product not found
//   }

//   return data[0];  // Return the first product
// }

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const product = await getProductData(params.id);

//   if (!product) {
//     return notFound(); // If no product found, show 404
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className=" gap-10 mt-10">
       
//         <div className="w-full  justify-center">
//           <section className="  gap-10 w-screen rounded-lg flex">
//             <div>
//             <Image
//               src={product.imageUrl}
//               alt={product.productName}
//               width={500}
//               height={500}
//               className="w-full mx-10 h-[400px] object-cover border-2 border-gray-300 bg-gray-200"
//             /></div>
//             <div className="ml-10 mt-10">
//             <h1 className="text-3xl font-semibold mt-5">{product.productName}</h1>
//             <p className="text-gray-700 text-xl">{product.category}</p>
//             <p className="text-xl ">{product.colors}</p>
//             <p className="text-xl text-red-500 ">{product.status}</p>
//             <p className="text-2xl  font-bold mt-3">Price: {product.price}</p>
//             <p className="text-xl mt-2">Available: {product.inventory}</p>
//             </div></section>
//           <p className="mt-10 font-weight-700 mx-8 text-lg ">{product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";

// Product type interface
export interface Hackathone {
  _id: string;
  productName: string;
  category: string;
  price: string;
  inventory: string;
  colors: string;
  status: string;
  imageUrl: string;
  description: string;
}

// Fetch product data based on id
async function getProductData(id: string) {
  const data: Hackathone[] = await client.fetch(
    `*[_type == "product" && _id == $id]{
      _id,
      productName,
      category,
      price,
      inventory,
      colors,
      status,
      "imageUrl": image.asset->url,
      description,
    }`, { id }
  );

  if (!data || data.length === 0) {
    return null;  // Product not found
  }

  return data[0];  // Return the first product
}

// Updated page component
export default async function ProductPage({
  params,
}: {
  params: { id: string }; // Ensure params has 'id' as string
}) {
  const product = await getProductData(params.id);

  if (!product) {
    return notFound(); // If no product found, show 404
  }

  return (
    <div>
      <Navbar />
      <div className="gap-10 mt-10">
        <div className="w-full justify-center">
          <section className="gap-10 w-screen rounded-lg flex">
            <div>
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={500}
                height={500}
                className="w-full mx-10 h-[400px] object-cover border-2 border-gray-300 bg-gray-200"
              />
            </div>
            <div className="ml-10 mt-10">
              <h1 className="text-3xl font-semibold mt-5">{product.productName}</h1>
              <p className="text-gray-700 text-xl">{product.category}</p>
              <p className="text-xl">{product.colors}</p>
              <p className="text-xl text-red-500">{product.status}</p>
              <p className="text-2xl font-bold mt-3">Price: {product.price}</p>
              <p className="text-xl mt-2">Available: {product.inventory}</p>
            </div>
          </section>
          <p className="mt-10 font-weight-700 mx-8 text-lg">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

