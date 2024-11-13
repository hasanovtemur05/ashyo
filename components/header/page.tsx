"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const link = [
    { id: 1, link: "/", title: "Tashkent" },
    { id: 2, link: "/", title: "About Us" },
    { id: 3, link: "/", title: "Products" },
    { id: 4, link: "/", title: "Contacts" },
  ];

  const links = [
    { id: 1, link: "/", title: "Aksiyalar" },
    { id: 2, link: "/", title: "Smartfonlar" },
    { id: 3, link: "/", title: "Noutbooklar" },
    { id: 4, link: "/", title: "Kondetsionerlar" },
    { id: 5, link: "/", title: "Telivizorlar" },
    { id: 6, link: "/", title: "Muzlatgichlar" },
    { id: 7, link: "/", title: "Kiryuvish mashinalari" },
    { id: 8, link: "/", title: "Telivizorlar" },
    { id: 9, link: "/", title: "Kiryuvish mashinalari" },
  ];

  const categories = [
    { id: 1, icon: "/aktsiyalar.svg", title: "Aksiyalar" },
    { id: 2, icon: "/tel.svg", title: "Smartfonlar va Aksasuarlar" },
    { id: 3, icon: "/kirmoshina.svg", title: "Kir yuvish mashinalari" },
    { id: 4, icon: "/televezor.svg", title: "Televizorlar" },
    { id: 5, icon: "/koditsoner.svg", title: "Konditsionerlar" },
    { id: 6, icon: "/komp.svg", title: "Kompyuter va jihozlari" },
    { id: 7, icon: "/m.svg", title: "Muzlatgichlar" },
    { id: 8, icon: "/k.svg", title: "Chang yutgichlar" },
  ];

  return (
    <div className="sticky top-0 left-0 shadow-lg">
      <div className="w-full bg-[#EBEFF3] hidden lg:flex">
        <div className="w-[90%] m-auto py-3 flex justify-between">
          <div className="flex gap-5">
            <Image src="/location.svg" alt="toshkent" width={16} height={10} />
            {link.map((item) => (
              <Link href={item.link} key={item.id} className="text-[14px]">
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-[14px] text-[#203F68] font-bold">
              +998 (71) 123-45-67
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-3">
        <div className="w-[90%] m-auto flex flex-col gap-3 sm:flex-row justify-between">
          <div className="flex items-center justify-between">
            <div className="flex">
              <Image src={"/logo1.svg"} alt="logo" width={45} height={45} />
              <Image src={"/logo2.svg"} alt="logo" width={79} height={33} />
            </div>
            <p className="text-[14px] text-[#203F68] font-bold sm:hidden">
              +998 (71) 123-45-67
            </p>
            <button onClick={() => setOpen(!open)} className="sm:hidden">
              <Image src={"/menu.svg"} alt="menu" width={20} height={14} />
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-[#134E9B] text-white flex items-center justify-center py-2 px-5 gap-2 rounded-[5px] text-[12px]"
            >
              Kategoriya
              <Image src={"/bottom.svg"} alt="arrow" width={17} height={16} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-[100%] left-0 sm:left-[200px] w-[250px] bg-white shadow-lg rounded-md mt-2 p-3">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center gap-2 py-2 px-3 hover:bg-[#f1f1f1] rounded-md cursor-pointer"
                  >
                    <Image src={category.icon} alt={category.title} width={20} height={20} />
                    <span className="text-[#203F68] text-[14px]">{category.title}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex bg-[#F2F0FE] rounded-[5px] justify-between overflow-hidden w-full lg:w-[400px] xl:w-[680px]">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-inherit border-none w-full outline-none text-[12px] mx-3"
              />
              <button className="py-2 px-[10px] bg-[#134E9B] text-[12px] rounded-[5px] md:px-[20px]">
                <Image src={"/search.svg"} alt="search" width={16} height={16} />
              </button>
            </div>
          </div>

          <div className="gap-[15px] hidden md:flex">
            <div className="relative w-[40px] h-[40px] rounded-[6px] bg-[#F6F6F6] flex items-center justify-center">
              <Image src="/header_i1.svg" alt="icon" width={20} height={20} />
              <div className="absolute top-[0] right-0 w-[15px] h-[15px] bg-[#E81504] rounded-full text-white text-[8px] flex items-center justify-center">
                2
              </div>
            </div>

            <div className="relative w-[40px] h-[40px] rounded-[6px] bg-[#F6F6F6] flex items-center justify-center">
              <Image src="/heart.svg" alt="icon" width={20} height={20} />
              <div className="absolute top-[0] right-0 w-[15px] h-[15px] bg-[#E81504] rounded-full text-white text-[8px] flex items-center justify-center">
                11
              </div>
            </div>

            <div className="relative w-[40px] h-[40px] rounded-[6px] bg-[#F6F6F6] flex items-center justify-center">
              <Image src="/header_shop.svg" alt="icon" width={20} height={20} />
              <div className="absolute top-[0] right-0 w-[15px] h-[15px] bg-[#E81504] rounded-full text-white text-[8px] flex items-center justify-center">
                7
              </div>
            </div>

            <div className="relative w-[40px] h-[40px] rounded-[6px] bg-[#F6F6F6] flex items-center justify-center">
              <Image src="/user.svg" alt="icon" width={20} height={20} />
            </div>
          </div>
        </div>

        <div className="w-[90%] hidden justify-between items-center m-auto mt-[20px] md:flex">
          {links.map((item) => (
            <Link href={item.link} key={item.id} className="text-[10px] text-[#545D6A] lg:text-[12px] xl:text-[14px]">
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Sidebar / Menu */}
      <div
        className={`fixed top-0 left-0 w-[200px] h-full py-3 pl-3 bg-[#ededed] shadow-lg transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex mb-4">
          <Image src={"/logo1.svg"} alt="logo" width={39} height={39} />
          <Image src={"/logo2.svg"} alt="logo" width={65} height={33} />
        </div>

        {/* Links in the menu */}
        <div className="flex flex-col gap-4">
          {links.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="text-[#203F68] text-[16px] hover:text-[#134E9B] transition-all"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
