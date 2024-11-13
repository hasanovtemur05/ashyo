"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "/hero.svg", 
      title: "Siz kutgan Xiaomi 12 Mi Lite",
      description: "Originallik va qulay narxni o'zida jamlagan, siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
    },
    {
      id: 2,
      image: "/hero.svg",
      title: "Siz kutgan Xiaomi 12 Mi Lite",
      description: "Originallik va qulay narxni o'zida jamlagan, siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
    },
    {
      id: 3,
      image: "/hero.svg",
      title: "Siz kutgan Xiaomi 12 Mi Lite",
      description: "Originallik va qulay narxni o'zida jamlagan, siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
    },
  ];

  const cards = [
    { id: 1, color: "#67B43733", height: 60, img: "/artel.svg", imgwidth: 55, imghieght: 24 },
    { id: 2, color: "#034EA21A", height: 60, img: "/samsung.svg", imgwidth: 111, imghieght: 38 },
    { id: 3, color: "#0000001A", height: 60, img: "/apple.svg", imgwidth: 49, imghieght: 58 },
    { id: 4, color: "#006DB833", height: 60, img: "/vivo.svg", imgwidth: 61, imghieght: 30 },
    { id: 5, color: "#00439C1F", height: 60, img: "/nokia.svg", imgwidth: 71, imghieght: 40 },
    { id: 6, color: "#FF670033", height: 60, img: "/mi.svg", imgwidth: 93, imghieght: 50 },
    { id: 7, color: "#FF1A1F33", height: 60, img: "/huawie.svg", imgwidth: 69, imghieght: 50 },
  ];

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

      <div className="grid grid-cols-2 w-[90%] m-auto py-8 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:py-[80px]">
        {cards.map((item) => (
          <div key={item.id} style={{ backgroundColor: item.color }} className="py-[20px]  lg:py-[30px] flex justify-center items-center rounded-[4px]" >
            <Image
              src={item.img}
              alt={item.img}
              width={item.imgwidth}
              height={item.imghieght}
              className="lg:w-[110px]"
            />
          </div>
          
        ))}
        <div className="py-[20px] bg-[#0F4A97] flex justify-center items-center rounded-[4px] text-[14px] text-white font-bold" >
            Ko’proq
          </div>
      </div>
    </div>
  );
};

export default Home;
