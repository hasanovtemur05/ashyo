/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { ProductType } from "../page";
import Image from "next/image";

type LikesType = {
  ind: number;
  product_id: ProductType;
};

export default function Page() {
  const userId = localStorage.getItem("user_id");
  if (!userId) {
    console.error("User ID not found in localStorage");
    return <div>Error: User ID not found</div>;
  }

  const [likes, setLikes] = useState<LikesType[]>([]);

  const getLikes = async () => {
    try {
      const response = await fetch(
        `https://texnoark.ilyosbekdev.uz/likes/user/likes/${userId}`
      );
      const data = await response.json();
      console.log(data?.data?.likes, "likes");
      setLikes(data?.data?.likes || []);
      console.log(data?.data?.likes, "data");
    } catch (error) {
      console.error("Error fetching likes:", error);
    }
  };

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div className="w-[90%] m-auto mt-[50px] flex flex-wrap gap-7 ">
      {likes?.length
        ? likes.map((item) => (
            <div key={item.product_id.id} className="w-[240px] h-auto flex flex-col border-[1px] p-3 rounded-lg ">
              <div className="h-[70%] flex justify-center items-center">
                <Image
                  src={item.product_id.images?.[0]}
                  alt="img"
                  width={200}
                  height={100}
                />
              </div>
              <div>
                <h1 className="text-[#545D6A] text-[20px]">{item.product_id.name}</h1>
                <p className="text-[red]"><span className="text-[black]">Price: </span> {item.product_id.price} $</p>
              </div>
              <div className="flex justify-between">
                <button className="py-[10px] px-[17px] border-[1px] my-3 rounded-[5px] border-[#233C5F]">
                  <Image src="/card.svg" alt="img" width={20} height={20} />
                </button>
                <button className="py-[10px] px-[17px] border-[1px] my-3 rounded-[5px] border-[#233C5F] flex gap-2 bg-[#134E9B]">
                 
                  <p className="text-[12px] text-white">Savatcha</p>{" "}
                  <Image src="/shop.svg" alt="img" width={20} height={20} />
                </button>
              </div>
            </div>
          ))
        : "no data"}
    </div>
  );
}
