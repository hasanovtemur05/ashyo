"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const Page = () => {
  type ProductType = {
    id: number;
    name: string;
    price: string;
    images: string;
  };

  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://texnoark.ilyosbekdev.uz/products/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data.data?.product || null);
      } catch (error) {
        console.log("Error fetching product data:", error);
      }
    };

    if (id) {
      getData();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[90%] m-auto mt-[50px] flex flex-col gap-[60px]  md:flex-row">
      <div className="flex gap-[10px] w-full md:w-[65%] ">
        <div className="bg-[#F6F6F6] p-10 rounded-[4px] ">
          <Image src={product.images?.[0]} alt="img" width={380} height={300}
          className="xl:w-[500px]"
          />
        </div>

        <div className="flex flex-col gap-[10px] w-[200px]">
          
          <div className="bg-[#F6F6F6]  w-auto h-full flex justify-center py-3 items-center rounded-[4px]">
              <Image
                src={product.images?.[0]}
                alt="img"
                width={50}
                height={200}
                className="w-auto h-auto sm:w-[100px] "
              />
          </div>
            <div className="bg-[#F6F6F6]  w-auto h-full flex justify-center py-3 items-center rounded-[4px]">
              <Image
                src={product.images?.[0]}
                alt="img"
                width={50}
                height={200}
                className="w-auto h-auto sm:w-[100px] "
              />
          </div>
            <div className="bg-[#F6F6F6] w-auto h-full  flex justify-center py-3 items-center rounded-[4px]">
              <Image
                src={product.images?.[0]}
                alt="img"
                width={50}
                height={200}
                className="w-auto h-auto sm:w-[100px]"
              />
          </div>
        </div>
      </div>

      <div className="md:w-[35%] flex flex-col gap-[10px] justify-center lg:gap-[20px]">

        <h1 className="text-[20px] font-bold text-[red] lg:text-[28px]">Price: {product.price}$</h1>

        <h1 className="text-[22px] font-bold lg:text-[28px]">Product Name: <span className="font-medium">{product.name}</span></h1>

        <h1 className="lg:text-[22px]">
          <span className="text-[20px] font-mono lg:text-[26px]">Description: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sint
          tempore mollitia nihil laboriosam ipsam accusamus consequatur. Autem,
          sunt accusantium!
        </h1>

        <div className="grid grid-cols-2">
          <div className="flex items-center" >
            <button onClick={increment} className="bg-[#134E9B] w-[40px] h-[40px]  rounded-[5px] mx-2 text-white text-[18px] font-bold">+</button>
            <h1 className="text-[18px] mx-1">{count}</h1>
            <button onClick={decrement} className="bg-[#134E9B] w-[40px] h-[40px]  rounded-[5px] mx-2 text-white text-[18px] font-bold">-</button>
          </div>
          <button className="bg-[#134E9B] w-full py-[7px] rounded-[5px] text-white text-[18px]">Add to cart</button>
        </div>


      </div>
    </div>
  );
};

export default Page;
