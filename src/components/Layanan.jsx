import RecomItem from "./RecomItem";
import motorIcon from "../assets/icon_motorcycle.svg";
import mobilIcon from "../assets/icon_Car.svg";
import { motorRecom, mobilRecom } from "../constant/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import carousel1 from "../assets/carousel-layanan1.png";
import carousel2 from "../assets/carousel-layanan2.png";
import carousel3 from "../assets/carousel-layanan3.png";
import { Carousel } from "react-responsive-carousel";

const Layanan = () => {
  const [spareRecom, setSpareRecom] = useState("Motor");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='flex flex-col justify-center w-[72%] mx-auto items-center'>
      <div className='w-[719px] mt-2'>
        <Carousel
          autoPlay
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          <div>
            <img src={carousel1} />
          </div>
          <div>
            <img src={carousel2} />
          </div>
          <div>
            <img src={carousel3} />
          </div>
        </Carousel>
      </div>
      <div className='w-[100%] mt-4 ml-5 mb-2'>
        <section className='p-8 pb-0 overflow-y-auto border border-gray-200 shadow-xl rounded-xl'>
          <h1 className='px-10 text-2xl font-semibold bg-white '>
            Layanan Rekomendasi Sparepart
          </h1>
          <nav className='flex flex-wrap justify-center gap-8 text-2xl py-9 pt-7'>
            <button
              className={`px-16 py-4 font-semibold relative shadow-md rounded-lg  ${
                spareRecom === "Motor" ? "bg-[#F3F5F7]" : "bg-white"
              }`}
              onClick={() => {
                setSpareRecom("Motor");
              }}
            >
              <div className='flex items-center gap-7'>
                <img
                  src={motorIcon}
                  alt='motor-icon'
                  className='w-[30px] h-[41px]'
                />{" "}
                Motor
              </div>
              <div
                className={`bg-[#0070BA] w-[70%] h-1 absolute bottom-0 rounded-lg left-1/2 -translate-x-1/2 transition-opacity   ${
                  spareRecom === "Motor" ? "opacity-100" : "opacity-0"
                }`}
              >
                {" "}
              </div>
            </button>
            <button
              className={`px-16 py-4 font-semibold relative shadow-md rounded-lg   ${
                spareRecom === "Mobil" ? "bg-[#F3F5F7]" : "bg-white"
              }`}
              onClick={() => {
                setSpareRecom("Mobil");
              }}
            >
              <div className='flex items-center gap-7'>
                <img
                  src={mobilIcon}
                  alt='mobil-icon'
                  className='w-[40px] h-[41px]'
                />{" "}
                Mobil
              </div>
              <div
                className={`bg-[#0070BA] w-[70%] h-1 absolute bottom-0 rounded-lg left-1/2 -translate-x-1/2 transition-opacity ${
                  spareRecom === "Mobil" ? "opacity-100" : "opacity-0"
                }`}
              >
                {" "}
              </div>
            </button>
          </nav>
          <div className={` ${spareRecom === "Motor" ? "grid" : "hidden"}`}>
            <RecomItem vehicleRecom={motorRecom} />
          </div>
          <div className={` ${spareRecom === "Mobil" ? "grid" : "hidden"}`}>
            <RecomItem vehicleRecom={mobilRecom} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Layanan;
