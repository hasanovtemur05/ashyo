/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

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
const Page = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userId = typeof window !== 'undefined' ? localStorage.getItem('user_id') : '';
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const cards = useMemo(()=>{
    return [
      { id: 1, img: "/header_i1.svg", count: "2", link:"/" },
      { id: 2, img: "/heart.svg", count: count1, link:"/likes" },
      { id: 3, img: "/header_shop.svg", count: count2, link:"/carts" },
    ];
  },[count1, count2])


  const getLikes = async ()=> {
    const response = await fetch(`https://texnoark.ilyosbekdev.uz/likes/user/likes/${userId}`)
    const data = await response.json()
    setCount1(data?.data?.count || 0)
  }

  const getCarts = async ()=> {
    const response = await fetch(`https://texnoark.ilyosbekdev.uz/carts/user/${userId}`)
    const data = await response.json()
    setCount2(data?.data?.count || 0)
  }
  
  useEffect(() => {
    if (userId) {
      getLikes();
      getCarts();
    }
  }, [userId]);


  return (
    <div className="sticky top-0 left-0 shadow-lg z-[99] ">
      <div className="w-full bg-[#EBEFF3] hidden sm:flex">
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
        <div className="w-[90%] m-auto flex flex-col gap-3 md:flex-row justify-between">
          <div className="flex items-center justify-between">
            <Link className="flex" href="/">
              <Image
                src={"/logo1.svg"}
                alt="logo"
                width={35}
                height={35}
                className="md:w-[45px] h-[45px]"
              />
              <Image
                src={"/logo2.svg"}
                alt="logo"
                width={60}
                height={33}
                className="md:w-[75px] h-auto"
              />
            </Link>
            <p className="text-[14px] text-[#203F68] font-bold sm:hidden">
              +998 (71) 123-45-67
            </p>
            <button onClick={() => setOpen(!open)} className="md:hidden">
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
             
                <div className="absolute top-[100%] left-5 md:left-[200px] w-[250px] bg-white shadow-lg rounded-md mt-2 p-3">
               {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center gap-2 py-2 px-3 hover:bg-[#f1f1f1] rounded-md cursor-pointer"
                  >
                    <Image
                      src={category.icon}
                      alt={category.title}
                      width={20}
                      height={20}
                    />
                    <Link href="/category" className="text-[#203F68] text-[14px]">
                      {category.title}
                    </Link>
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
                <Image
                  src={"/search.svg"}
                  alt="search"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>

          <div className="gap-[15px] hidden md:flex">
          {cards.map((item) => (
              <div  key={item.id}> 
              <Link href={item.link} className="relative w-[40px] h-[40px] rounded-[6px] bg-[#F6F6F6] flex items-center justify-center">
                <Image src={item.img} alt="icon" width={20} height={20} />
                <div className="absolute top-0 right-0 w-[15px] h-[15px] bg-[#E81504] rounded-full text-white text-[8px] flex items-center justify-center">
                  {item.count}
                </div>
              </Link>
              </div>
            ))}

            <Link className="relative w-[40px] h-[40px] rounded-[6px] bg-[#F6F6F6] flex items-center justify-center" href={"/login"} >
              <Image src="/user.svg" alt="icon" width={20} height={20} />
            </Link>
          </div>
        </div>

        <div className="w-[90%] hidden justify-between items-center m-auto mt-[20px] md:flex">
          {links.map((item) => (
            <Link
              href={item.link}
              key={item.id}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-[230px] flex flex-col gap-5 h-full py-3 pl-3 bg-[#ededed] shadow-lg transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex">
          <Image src={"/logo1.svg"} alt="logo" width={39} height={39} />
          <Image src={"/logo2.svg"} alt="logo" width={65} height={33} />
        </div>

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

        <div className="gap-[15px] grid grid-cols-4">
        {cards.map((item) => (
              <div  key={item.id}>
                <Link href={item.link} className="relative w-[40px] h-[40px] rounded-[6px] bg-[#F6F6F6] flex items-center justify-center">
                <Image src={item.img} alt="icon" width={20} height={20} />
                <div className="absolute top-0 right-0 w-[15px] h-[15px] bg-[#E81504] rounded-full text-white text-[8px] flex items-center justify-center">
                  {item.count}
                </div>
              </Link>
              </div>
            ))}

            <div className="relative w-[40px] h-[40px] rounded-[6px] bg-[#F6F6F6] flex items-center justify-center">
              <Image src="/user.svg" alt="icon" width={20} height={20} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page;





