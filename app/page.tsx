"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  type ProductTYpe = {
    id: number;
    name: string;
    price: number;
    images: string;
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState<ProductTYpe[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://texnoark.ilyosbekdev.uz/products/search"
        );
        const data = await res.json();
        const productsData = data?.data?.products || [];
        setProducts(productsData);
        console.log(productsData);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };
    fetchProducts();
  }, []);


 
    // const getLikes = async (id:number) => {
    //   try {
    //     const res = await fetch(
    //       `https://texnoark.ilyosbekdev.uz/likes/user/likes/${id}`
    //     );
    //     const data = await res.json();
    //     console.log(data?.data?.likes)
        
    //   } catch (error) {
    //     console.error("Xatolik yuz berdi:", error);
    //   }
    // };
    // getLikes(202);



  // const handleLike = async (productId:number) => {
  //   try {
  //     const response = await fetch('https://texnoark.ilyosbekdev.uz/likes/create', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         product_id: productId, 
  //       }),
  //     });

  //     console.log(response, "likes");
      
  //   } catch (error) {
  //     console.error('Server bilan bog‘lanishda xato:', error);
  //     alert('Xatolik yuz berdi!');
  //   }
  // }

  const hero = [
    { id: 1, color: "#5C4F8C", btn: "Noutbooklar", img: "/komp.svg" },
    { id: 2, color: "#797C7D", btn: "Havo sovutgichlar", img: "/product2.svg" },
    { id: 3, color: "#797C7D", btn: "Kiryuvish mashina", img: "/product3.svg" },
    { id: 4, color: "#CEAF75", btn: "Televizorlar", img: "/tv.svg" },
    { id: 5, color: "#888380", btn: "Muzlatgichlar", img: "/product4.svg" },
    { id: 6, color: "#676D86", btn: "Telefonlar", img: "/hero.svg" },
  ];

  const slides = [
    {
      id: 1,
      image: "/hero.svg",
      title: "Siz kutgan Xiaomi 12 Mi Lite",
      description:
        "Originallik va qulay narxni o'zida jamlagan, siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
    },
    {
      id: 2,
      image: "/komp.svg",
      title: "Siz kutgan Dell Noutbook",
      description:
        "Originallik va qulay narxni o'zida jamlagan, siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
    },
    {
      id: 3,
      image: "/tv.svg",
      title: "Siz kutgan Smart Tv",
      description:
        "Originallik va qulay narxni o'zida jamlagan, siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
    },
  ];

  const cards = [
    {
      id: 1,
      color: "#67B43733",
      height: 60,
      img: "/artel.svg",
      imgwidth: 55,
      imghieght: 24,
    },
    {
      id: 2,
      color: "#034EA21A",
      height: 60,
      img: "/samsung.svg",
      imgwidth: 111,
      imghieght: 38,
    },
    {
      id: 3,
      color: "#0000001A",
      height: 60,
      img: "/apple.svg",
      imgwidth: 49,
      imghieght: 58,
    },
    {
      id: 4,
      color: "#006DB833",
      height: 60,
      img: "/vivo.svg",
      imgwidth: 61,
      imghieght: 30,
    },
    {
      id: 5,
      color: "#00439C1F",
      height: 60,
      img: "/nokia.svg",
      imgwidth: 71,
      imghieght: 40,
    },
    {
      id: 6,
      color: "#FF670033",
      height: 60,
      img: "/mi.svg",
      imgwidth: 93,
      imghieght: 50,
    },
    {
      id: 7,
      color: "#FF1A1F33",
      height: 60,
      img: "/huawie.svg",
      imgwidth: 69,
      imghieght: 50,
    },
  ];

  const product = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const product2 = [{ id: 1 }];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="w-full">
      <div className="w-full bg-[#F3F0F0]">
        <div className="relative w-[90%] bg-inherit mx-auto overflow-hidden">
          <div className="relative h-[300px] sm:h-[350px] lg:h-[500px] flex items-center">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex flex-col justify-between h-full md:flex-row">
                  <div className="flex flex-col justify-end h-full gap-2 sm:gap-3 md:justify-center md:gap-4 lg:gap-7">
                    <h1 className="text-[#203F68] font-bold text-[22px] sm:text-[28px] lg:text-[36px] xl:text-[44px] ">
                      {slide.title}
                    </h1>
                    <p className="text-[11px] text-[#203F6899] sm:text-[14px] sm:w-[80%] lg:text-[16px] ">
                      {slide.description}
                    </p>
                    <button className="py-[8px] px-[14px] lg:py-[12px] bg-[#0F4A97] text-[12px] lg:text-[16px] lg:w-[160px] rounded-[4px] w-[100px] text-white">
                      Batafsil
                    </button>
                  </div>
                  <div className="flex justify-end md:items-end md:justify-end">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={200}
                      height={200}
                      priority
                      className="w-auto h-[150px] sm:h-[200px] md:h-[350px] lg:h-[400px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#203F68] text-2xl"
          >
            &#8592;
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#203F68] text-2xl"
          >
            &#8594;
          </button>

          <div className="flex justify-center mt-4 space-x-3 absolute bottom-4 left-1/2 transform -translate-x-1/2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 w-[90%] m-auto py-8 gap-3 lg:gap-5 sm:grid-cols-3 lg:grid-cols-4 lg:py-[80px]">
        {cards.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.color }}
            className="py-[20px]  lg:py-[30px] flex justify-center items-center rounded-[4px]"
          >
            <Image
              src={item.img}
              alt={item.img}
              width={item.imgwidth}
              height={item.imghieght}
              className="lg:w-[110px]"
            />
          </div>
        ))}
        <div className="py-[20px] bg-[#0F4A97] flex justify-center items-center rounded-[4px] text-[14px] text-white font-bold">
          Ko’proq
        </div>
      </div>

      {product.map((item) => (
        <div key={item.id} className="w-[90%] h-auto m-auto mt-[50px]">
          <h1 className="text-[16px] font-bold lg:text-[24px] lg:my-8 mb-3 xl:mb-[50px] xl:text-[32px]">
            Most popular product
          </h1>

          <div className="relative">
            <div
              id="carousel"
              className="flex gap-6 space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory"
            >
              {products.map((item) => (
                <div
                  key={item.id}
                  className="w-[200px] min-w-[200px] snap-center rounded-[5px] overflow-hidden flex-shrink-0"
                >
                  <div className=" rounded-[5px] bg-[#EBEFF3] h-[250px] flex flex-col  gap-[5px] ">
                    <div className="flex justify-end pt-[12px] pr-[12px]">
                      <button className="bg-red-500 p-[3px] flex justify-center items-center rounded-[50%] ">
                        <Image
                          src="/heart.svg"
                          alt="img"
                          width={14}
                          height={14}
                          className="md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px]"
                        />
                      </button>
                    </div>
                    <div className="flex justify-center h-[220px] overflow-hidden ">
                      <Link
                        href={`/products/${item.id}`}
                        className="flex items-center justify-center"
                      >
                        <Image
                          src={item.images?.[0]}
                          alt={item.images}
                          width={203}
                          height={203}
                        />
                      </Link>
                    </div>
                  </div>

                  <h1 className="text-[#545D6A] text-[12px]  mt-3">
                    {item.name}
                  </h1>
                  <div className="flex justify-between items-end">
                    <h1 className="text-[12px]">{item.price}</h1>
                  </div>
                  <div className="flex justify-between">
                    <button className="py-[10px] px-[17px] border-[1px] my-3 rounded-[5px] border-[#233C5F]">
                      <Image src="/card.svg" alt="img" width={20} height={20} />
                    </button>
                    <button className="py-[10px] px-[17px] border-[1px] my-3 rounded-[5px] border-[#233C5F] flex gap-2 bg-[#134E9B]">
                      {" "}
                      <p className="text-[12px] text-white">Savatcha</p>{" "}
                      <Image src="/shop.svg" alt="img" width={20} height={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const carousel = document.getElementById("carousel");
                if (carousel) {
                  carousel.scrollBy({
                    left: -200,
                    behavior: "smooth",
                  });
                } else {
                  console.error("error");
                }
              }}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 text-gray-600 p-2 rounded-full shadow-md"
            >
              &#8592;
            </button>

            <button
              onClick={() => {
                const carousel = document.getElementById("carousel");
                if (carousel) {
                  carousel.scrollBy({
                    left: 200,
                    behavior: "smooth",
                  });
                } else {
                  console.error("error");
                }
              }}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 text-gray-600 p-2 rounded-full shadow-md"
            >
              &#8594;
            </button>
          </div>
        </div>
      ))}

      <div className="grid grid-cols-2 w-[90%] md:grid-cols-3 lg:grid-cols-4 m-auto mt-[60px] gap-5">
        {hero.map((item) => (
          <div
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              objectFit: "cover",
              backgroundColor: `${item.color}`,
            }}
            className=" py-[6px] px-[10px]  w-auto h-[130px] sm:h-[200px] lg:h-[250px]  rounded-[5px] "
            key={item.id}
          >
            <button className="border-[1px] rounded-[16px] text-[white] border-[white] py-[3px] px-[7px] text-[12px] md:text-[16px]">
              {item.btn}
            </button>
          </div>
        ))}
        <div>
          <button className="bg-[#0F4A97] w-full rounded-[16px] text-white py-[10px]">
            kuproq
          </button>
        </div>
      </div>
      {product2.map((item) => (
        <div
          key={item.id}
          className="w-[90%] h-auto m-auto mt-[50px] lg:mt-[80px]"
        >
          <h1 className="text-[16px] font-bold lg:text-[24px] lg:my-8 mb-3 xl:mb-[50px] xl:text-[32px]">
            Aksiyadagi tovarlar
          </h1>

          <div className="relative">
            <div
              id="carousel"
              className="flex gap-6 space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory"
            >
              {products.map((item) => (
                <div
                  key={item.id}
                  className="w-[200px] min-w-[200px] snap-center rounded-[5px] overflow-hidden flex-shrink-0"
                >
                  <div className=" rounded-[5px] bg-[#EBEFF3] h-[250px] flex flex-col  gap-[5px] ">
                    <div className="flex justify-end pt-[12px] pr-[12px]">
                      <div className="bg-red-500 p-[3px] flex justify-center items-center rounded-[50%] ">
                        <Image
                          src="/heart.svg"
                          alt="img"
                          width={14}
                          height={14}
                          className="md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px]"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center h-[220px] overflow-hidden ">
                      <Link
                        href={`/products/${item.id}`}
                        className="flex items-center justify-center"
                      >
                        <Image
                          src={item.images?.[0]}
                          alt={item.images}
                          width={203}
                          height={203}
                        />
                      </Link>
                    </div>
                  </div>

                  <h1 className="text-[#545D6A] text-[12px]  mt-3">
                    {item.name}
                  </h1>
                  <div className="flex justify-between items-end">
                    <h1 className="text-[12px]">{item.price}</h1>
                  </div>
                  <div className="flex justify-between">
                    <button className="py-[10px] px-[17px] border-[1px] my-3 rounded-[5px] border-[#233C5F]">
                      <Image src="/card.svg" alt="img" width={20} height={20} />
                    </button>
                    <button className="py-[10px] px-[17px] border-[1px] my-3 rounded-[5px] border-[#233C5F] flex gap-2 bg-[#134E9B]">
                      {" "}
                      <p className="text-[12px] text-white">Savatcha</p>{" "}
                      <Image src="/shop.svg" alt="img" width={20} height={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const carousel = document.getElementById("carousel");
                if (carousel) {
                  carousel.scrollBy({
                    left: -200,
                    behavior: "smooth",
                  });
                } else {
                  console.error("error");
                }
              }}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 text-gray-600 p-2 rounded-full shadow-md"
            >
              &#8592;
            </button>

            <button
              onClick={() => {
                const carousel = document.getElementById("carousel");
                if (carousel) {
                  carousel.scrollBy({
                    left: 200,
                    behavior: "smooth",
                  });
                } else {
                  console.error("error");
                }
              }}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 text-gray-600 p-2 rounded-full shadow-md"
            >
              &#8594;
            </button>
          </div>
        </div>
      ))}

      <div className="px-[25px] mt-[50px] w-[90%] m-auto flex py-[20px] gap-[15px] rounded-[10px] bg-[#282828]">
        <div className="w-[50%] flex justify-center">
          <Image
            src="/noushnik.svg"
            alt="noushnik"
            width={145}
            height={150}
            className=" sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[380px] "
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center gap-[10px]">
          <h1 className="text-[14px] sm:text-[16px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-[white] font-bold">
            Musiqa zavqini his qilish uchun kop mablag sarflash shart emas!
          </h1>
          <button className="bg-white w-[94px] lg:text-[14px] xl:text-[16px] py-[9px] px-[20px] text-[#282828] rounded-[5px] text-[12px]">
            Batafsil
          </button>
        </div>
      </div>

      {product2.map((item) => (
        <div
          key={item.id}
          className="w-[90%] h-auto m-auto mt-[50px] lg:mt-[80px]"
        >
          <h1 className="text-[16px] font-bold lg:text-[24px] lg:my-8 mb-3 xl:mb-[50px] xl:text-[32px]">
            Oxirgi ko’rgan mahsulotlar
          </h1>

          <div className="relative">
            <div
              id="carousel"
              className="flex gap-6 space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory"
            >
              {products.map((item) => (
                <div
                  key={item.id}
                  className="w-[200px] min-w-[200px] snap-center rounded-[5px] overflow-hidden flex-shrink-0"
                >
                  <div className=" rounded-[5px] bg-[#EBEFF3] h-[250px] flex flex-col  gap-[5px] ">
                    <div className="flex justify-end pt-[12px] pr-[12px]">
                      <div className="bg-red-500 p-[3px] flex justify-center items-center rounded-[50%] ">
                        <Image
                          src="/heart.svg"
                          alt="img"
                          width={14}
                          height={14}
                          className="md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px]"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center h-[220px] overflow-hidden ">
                      <Link
                        href={`/products/${item.id}`}
                        className="flex items-center justify-center"
                      >
                        <Image
                          src={item.images?.[0]}
                          alt={item.images}
                          width={203}
                          height={203}
                        />
                      </Link>
                    </div>
                  </div>

                  <h1 className="text-[#545D6A] text-[12px]  mt-3">
                    {item.name}
                  </h1>
                  <div className="flex justify-between items-end">
                    <h1 className="text-[12px]">{item.price}</h1>
                  </div>
                  <div className="flex justify-between">
                    <button className="py-[10px] px-[17px] border-[1px] my-3 rounded-[5px] border-[#233C5F]">
                      <Image src="/card.svg" alt="img" width={20} height={20} />
                    </button>
                    <button className="py-[10px] px-[17px] border-[1px] my-3 rounded-[5px] border-[#233C5F] flex gap-2 bg-[#134E9B]">
                      {" "}
                      <p className="text-[12px] text-white">Savatcha</p>{" "}
                      <Image src="/shop.svg" alt="img" width={20} height={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const carousel = document.getElementById("carousel");
                if (carousel) {
                  carousel.scrollBy({
                    left: -200,
                    behavior: "smooth",
                  });
                } else {
                  console.error("error");
                }
              }}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 text-gray-600 p-2 rounded-full shadow-md"
            >
              &#8592;
            </button>

            <button
              onClick={() => {
                const carousel = document.getElementById("carousel");
                if (carousel) {
                  carousel.scrollBy({
                    left: 200,
                    behavior: "smooth",
                  });
                } else {
                  console.error("error");
                }
              }}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 text-gray-600 p-2 rounded-full shadow-md"
            >
              &#8594;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Home;
