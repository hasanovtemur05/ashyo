/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  interface LoginType {
    phone_number: string;
    password: string;
  }
  const router = useRouter()

  const fetchProducts = async (data: LoginType): Promise<void> => {
    try {
      const res = await fetch("https://texnoark.ilyosbekdev.uz/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      const access_token = result?.data?.tokens?.access_token;
      if (typeof window !== 'undefined') {
        localStorage.setItem("access_token", access_token);
      localStorage.setItem("user_id" , result?.data?.data?.id)
      }
      router.push('/')

    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const phone_number = (
      form.elements.namedItem("phone_number") as HTMLInputElement
    ).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    fetchProducts({ phone_number, password });
  };

  return (
    <div className="w-[90%] h-[100vh] m-auto flex justify-center items-center">
      <div className="w-[90%] h-[300px] bg-slate-200 rounded-lg py-[20px] px-[30px] md:px-[50px] md:w-[70%] lg:w-[60%] xl:w-[50%]">
        <h1 className="text-center my-3 text-[20px] font-bold">Login</h1>
        <form id="save" onSubmit={handleSubmit} className="flex flex-col gap-7">
          <input
            type="text"
            name="phone_number"
            required
            placeholder="Phone number"
            className="px-[18px] py-[7px] rounded-lg md:text-[18px]"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="px-[18px] py-[7px] rounded-lg md:text-[18px]"
          />
          <button
            type="submit"
            className="w-full text-white bg-orange-500 rounded-lg py-[10px] text-[18px] font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
