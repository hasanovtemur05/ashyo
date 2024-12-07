/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  interface LoginType {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    password: string;
  }
  const router = useRouter();

  const fetchProducts = async (data: LoginType): Promise<void> => {
    try {
      const res = await fetch(
        "https://texnoark.ilyosbekdev.uz/auth/user/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();

      if (result?.statusCode === 201) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const phone_number = (form.elements.namedItem("phone_number") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const first_name = (form.elements.namedItem("first_name") as HTMLInputElement).value;
    const last_name = (form.elements.namedItem("last_name") as HTMLInputElement).value;

    fetchProducts({ phone_number, password, email, first_name, last_name });
  };

  return (
    <div className="w-[90%] h-[100vh] m-auto flex justify-center items-center">
      <div className="w-[90%] h-[auto] bg-slate-200 rounded-lg py-[20px] px-[30px] md:px-[50px] md:w-[70%] lg:w-[60%] xl:w-[50%]">
        <h1 className="text-center my-3 text-[20px] font-bold">Register</h1>
        <form id="save" onSubmit={handleSubmit} className="flex flex-col gap-7">
          <input
            type="text"
            name="first_name"
            required
            placeholder="First Name"
            className="px-[18px] py-[7px] rounded-lg md:text-[18px]"
          />
          <input
            type="text"
            name="last_name"
            required
            placeholder="last Name"
            className="px-[18px] py-[7px] rounded-lg md:text-[18px]"
          />
          <input
            type="text"
            name="phone_number"
            required
            placeholder="Phone number"
            className="px-[18px] py-[7px] rounded-lg md:text-[18px]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
