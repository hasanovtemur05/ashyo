import Image from "next/image";

const page = () => {
  const social = [
    { id: "1", img: "/fasebook.svg" },
    { id: "2", img: "/youtube.svg" },
    { id: "3", img: "/tg.svg" },
    { id: "4", img: "/tw.svg" },
    { id: "5", img: "/insta.svg" },
  ];
  return (
    <div>
      <div className="w-[90%] m-auto mt-[50px] lg:mt-[80px] flex flex-col gap-[15px] md:grid grid-cols-2 md:gap-7 lg:gap-[70px] ">
        <div>
          <div className="flex flex-col gap-5 ">
            <h1>Bizning ijtimoiy tarmoqlarda</h1>
            <div className=" flex gap-[11px] ">
              {social.map((item) => (
                <div
                  key={item.id}
                  className="py-[10px] px-[12px] bg-[#EBEFF3] rounded-[7px] flex items-center justify-center"
                >
                  <Image src={item.img} alt="img" width={24} height={24} />
                </div>
              ))}
            </div>
            <h1>Mobil ilovani yuklab oling</h1>
            <div className="grid grid-cols-2 gap-[12px] justify-between">
              <div className="bg-[#EBEFF3] py-[17px] px-[30px] rounded-[10px] flex items-center justify-center gap-[12px]">
                <Image
                  src="/appstore.svg"
                  alt="img"
                  width={20}
                  height={20}
                  className="lg:w-[32px] lg:h-[32px]"
                />
                <h1 className="text-[12px] lg:text-[16px]">App Store </h1>
              </div>
              <div className="bg-[#EBEFF3] py-[17px] px-[30px] rounded-[10px] flex items-center justify-center gap-[12px]">
                <Image
                  src="/googleplay.svg"
                  alt="img"
                  width={20}
                  height={20}
                  className="lg:w-[32px] lg:h-[32px]"
                />
                <h1 className="text-[12px] lg:text-[16px]">Google Play</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:flex md:justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-[14px] lg:text-[18px] text-[#000000B2]">
              Menyu
            </h1>
            <div>
              <p className="text-[12px] lg:text-[16px] text-[#000000B2]">
                Ashyo haqida
              </p>
              <p className="text-[12px] lg:text-[16px] text-[#000000B2]">
                Foydalanish shartlari
              </p>
              <p className="text-[12px] lg:text-[16px] text-[#000000B2]">
                Maxfiylik va hafsizlik siyosati
              </p>
              <p className="text-[12px] lg:text-[16px] text-[#000000B2]">
                Mahsulotlarni va tovarlarni qaytarish siyosati
              </p>
              <p className="text-[12px] lg:text-[16px] text-[#000000B2]">
                Biz bilan aloqa
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[14px] text-[#000000B2] lg:text-[18px]">
              Aloqa
            </h1>
            <p className="text-[16px] text-[#00000080] ">+998 (71) 123-45-67</p>
            <p className="text-[16px] text-[#000000B2]">Savolingiz bormi?</p>
            <div className="hidden lg:flex bg-[#EBEFF3] rounded-[7px] justify-between px-[11px] gap-[30px] py-[19px] items-center">
              <p className="text-[12px] text-[#0000004D]">
                {" "}
                O’zingiz qiziqtirgan savollarni bering
              </p>
              <Image src="/chat.svg" alt="img" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-[12px] w-[90%] m-auto text-[#00000066] my-[50px]">
        {" "}
        © 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.
      </h1>
    </div>
  );
};

export default page;
