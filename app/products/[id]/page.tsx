/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const [count, setCount] = useState(1);
  const [values, setValues] = useState("");
  const [comment, setComment] = useState([]);
  const [commentCount, setCommentCount] = useState(1);
  const [pageSize] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedComments = comment.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.ceil(commentCount / pageSize);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues(event.target.value);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
    try {
      const response = await fetch(
        "https://texnoark.ilyosbekdev.uz/comment/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            product_id: product?.id,
            comment: values,
          }),
        }
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error(
          "Error creating comment:",
          errorData.message || "Unknown error"
        );
        return;
      }
  
      // Muvaffaqiyatli bo'lsa:
      setValues(""); // Textarea'ni tozalash
      await getCommit(); // Yangi commentlarni olish
    } catch (error) {
      console.error(error);
    }
  };
  

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleCart = async (id: number) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("access_token") : "";
    try {
      const response = await fetch(
        "https://texnoark.ilyosbekdev.uz/carts/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ product_id: id }),
        }
      );
      if (!response.ok) {
        let errorMessage = "Failed to cart the product";
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch {
          console.error("Error parsing error message");
        }
        throw new Error(errorMessage);
      }

      let cartProducts: number[] = [];
      try {
        cartProducts =
          typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("cartProducts") || "[]")
            : [];
      } catch {
        console.error("Failed to parse cartProducts from localStorage");
        cartProducts = [];
      }

      if (!cartProducts.includes(id)) {
        cartProducts.push(id);
        if (typeof window !== "undefined") {
          localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        }
      }
    } catch (error: any) {
      console.error(error.message || error);
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

    const getCommit = async () => {
      try {
        const response = await fetch(
          `https://texnoark.ilyosbekdev.uz/comment/product/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setComment(data?.data?.comment);
        setCommentCount(data?.data?.count);
      } catch (error) {
        console.log(error);
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
    getCommit();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-[40px]">
      <div className="w-[90%] m-auto mt-[50px] flex flex-col gap-[60px]  md:flex-row">
        <div className="flex gap-[10px] w-full md:w-[65%] ">
          <div className="bg-[#F6F6F6] p-10 rounded-[4px] ">
            
            <Image
              src={product.images?.[0]}
              alt="img"
              width={380}
              height={300}
              className="xl:w-[400px]"
            />
          </div>

          <div className="flex flex-col gap-[10px] w-[200px]">
            <div className="bg-[#F6F6F6]  w-auto h-full flex justify-center py-3 items-center rounded-[4px]">
              <Image
                src={product.images?.[0]}
                alt="img"
                width={500}
                height={200}
                className="w-auto h-auto sm:w-[100px] "
              />
            </div>
            <div className="bg-[#F6F6F6]  w-auto h-full flex justify-center py-3 items-center rounded-[4px]">
              <Image
                src={product.images?.[0]}
                alt="img"
                width={500}
                height={200}
                className="w-auto h-auto sm:w-[100px] "
              />
            </div>
            <div className="bg-[#F6F6F6] w-auto h-full  flex justify-center py-3 items-center rounded-[4px]">
              <Image
                src={product.images?.[0]}
                alt="img"
                width={500}
                height={200}
                className="w-auto h-auto sm:w-[100px]"
              />
            </div>
          </div>
        </div>

        <div className="md:w-[35%] flex flex-col gap-[10px] justify-center lg:gap-[20px]">
          <h1 className="text-[22px] font-bold lg:text-[28px]">
            Product Name: <span className="font-medium">{product.name}</span>
          </h1>
          <h1 className="text-[20px] font-bold text-[red] lg:text-[28px]">
            Price: {(parseFloat(product.price) * count)}$
          </h1>
          <h1 className="lg:text-[22px]">
            <span className="text-[20px] font-mono lg:text-[26px]">
              Description:
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sint tempore mollitia nihil laboriosam ipsam accusamus consequatur.
            Autem, sunt accusantium!
          </h1>

          <div className="grid grid-cols-2">
            <div className="flex items-center">
              <button onClick={increment} className="bg-[#134E9B] w-[40px] h-[40px]  rounded-[5px] mx-2 text-white text-[18px] font-bold">
                +
              </button>
              <h1 className="text-[18px] mx-1">{count}</h1>
              <button onClick={decrement} className="bg-[#134E9B] w-[40px] h-[40px]  rounded-[5px] mx-2 text-white text-[18px] font-bold">
                -
              </button>
            </div>
            <button
              onClick={() => handleCart(product.id)}
              className="bg-[#134E9B] w-full py-[7px] rounded-[5px] text-white text-[18px]"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-[90%] m-auto grid md:flex gap-[35px] md:gap-[100px]">
        <div className="md:w-[52%] flex flex-col gap-3">
          {paginatedComments.length > 0 ? (
            paginatedComments.map((item: any) => (
              <div key={item.id} className="md:w-full p-[10px] rounded-lg h-auto md:h-auto border-[1px]">
                <div className="flex gap-2">
                  <h1>{item.user_id.first_name}</h1>
                  <h1>{item.user_id.last_name}</h1>
                </div>
                <p className="text-[14px] mt-2">{formatTime(item.createdAt)}</p>
                <p className="text-[14px] text-[#666666]"> <span className="font-bold">Comments: </span>  { item.comment}</p>
              </div>
            ))
          ) : (
            <p>No comments available</p>
          )}

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="flex items-center">{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
        <div className="md:w-[35%]">
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Comments"
              className="w-full border-[1px] rounded-[5px] p-[5px] outline-[#134E9B]"
              value={values}
              onChange={handleChange}
              style={{ height: "auto", minHeight: "50px" }}
            />
            <button
              type="submit"
              className="w-[100px] bg-[#134E9B] text-[white] py-[7px] rounded-lg"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
