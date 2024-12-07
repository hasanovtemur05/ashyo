/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { ProductType } from "../page";
import Image from "next/image";
import Link from "next/link";

type CartsType = {
  id: number;
  product_id: ProductType;
};

export default function Page() {
  const [userId, setUserId] = useState<string | null>(null);
  const [carts, setCarts] = useState<CartsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = localStorage.getItem("user_id");
      setUserId(id);
    }
  }, []);

  const fetchCarts = async () => {
    if (!userId) return;
    try {
      setLoading(true);
      const response = await fetch(
        `https://texnoark.ilyosbekdev.uz/carts/user/${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch carts");
      }
      const data = await response.json();
      setCarts(data?.data?.carts || []);
    } catch (err) {
      setError("Failed to load carts data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (cartId: number) => {
    if (!userId) return;
    try {
      const response = await fetch(
        `https://texnoark.ilyosbekdev.uz/carts/delete/${cartId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cart_id: cartId }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      const data = await response.json();
      console.log("Product deleted:", data);

      setCarts((prevCarts) => prevCarts.filter((cart) => cart.id !== cartId));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, [userId]);

  if (loading) {
    return <div className="w-[90%] m-auto mt-[50px]">Loading...</div>;
  }

  if (error) {
    return <div className="w-[90%] m-auto mt-[50px]">{error}</div>;
  }

  if (!carts.length) {
    return <div className="w-[90%] m-auto mt-[50px]">No data available</div>;
  }

  return (
    <div className="w-[90%] m-auto mt-[50px] flex flex-wrap gap-7">
      {carts.map((item) => (
        <div
          key={item.id}
          className="w-[240px] h-auto flex flex-col border-[1px] p-3 rounded-lg"
        >
          <div className="h-[70%] flex justify-center items-center">
          <Link href={`/products/${item.product_id.id}`}>
            <Image
              src={item.product_id.images?.[0] || "/placeholder.png"}
              alt={item.product_id.name || "Product Image"}
              width={200}
              height={100}
              className="object-contain"
            />
            </Link>
          </div>
          <div>
            <h1 className="text-[#545D6A] text-[20px]">
              {item.product_id.name}
            </h1>
            <p className="text-[red]">
              <span className="text-[black]">Price: </span>
              {item.product_id.price} $
            </p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => deleteProduct(item.id)} 
              className="py-[10px] px-[17px] border-[1px] my-3 rounded-[5px] border-[#233C5F]"
            >
              <Image src="/delete.svg" alt="Delete" width={20} height={20} />
            </button>
            <button className="py-[10px] px-[17px] border-[1px] my-3 rounded-[5px] border-[#233C5F] flex gap-2 bg-[#134E9B]">
              <p className="text-[12px] text-white">Sotib olish</p>
              <Image src="/shop.svg" alt="Shop" width={20} height={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
