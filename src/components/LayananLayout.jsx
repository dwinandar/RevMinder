import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousel1 from "../assets/carousel-layanan1.png";
import carousel2 from "../assets/carousel-layanan2.png";
import carousel3 from "../assets/carousel-layanan3.png";

import RecomItem from "./RecomItem";
import { motorRecom, mobilRecom } from "../constant/data";

import { FaCar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";


export const RekomItem = ({ vehicleRecom }) => {
  return (
    <div className="items-containter grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 ">
      {vehicleRecom.map((recom, i) =>
      (
        <div key={i} className="flex font-medium items-center justify-center mx-2 gap-2 px-8 py-2 my-4 border border-primary2 rounded-lg shadow-lg md:hover:scale-110 hover:scale-105">
          <img src={recom.icon} alt={`${recom.name}-icon`} />
          <h2 className=''>{recom.name}</h2>
        </div>
      ))}
    </div>
  )
}

RekomItem.propTypes = {
  vehicleRecom: PropTypes.array
};


const LayananLayout = () => {
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
    <div className=" md:border md:border-primary2 rounded-lg mt-4 xl:ml-5 lg:w-[80%] lg:h-[42rem] shadow-xl">

      <div className="flex flex-col my-10 md:px-6">
        <div className="carousel-container mx-2 md:mx-[4rem] lg:mx-[10rem] mb-10 md:mb-2 flex justify-center">
          <Carousel
            autoPlay
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
          // width={700}
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
        <nav className="my-6">
          <div className="flex justify-center lg:gap-6 md:gap-4 gap-6">
            <button
              className={`flex flex-col items-center justify-center font-semibold hover:scale-110 shadow-xl rounded-lg px-6 md:px-10 py-2 text-xl ${spareRecom === "Motor" ? "bg-[#F3F5F7]" : "bg-white"}`}
              onClick={() => { setSpareRecom("Motor"); }}
            >

              <span className={`border-b-4 ${spareRecom === "Motor" ? "border-primary1" : "border-none"} transition ease-in-out`}>
                <span className="inline-flex items-center gap-2 md:gap-4">
                  <FaMotorcycle size={"46"} />
                  Motor
                </span>
              </span>
            </button>

            <button
              className={`flex flex-col items-center justify-center font-semibold hover:scale-110 shadow-xl rounded-lg  px-6 md:px-10 py-2 text-xl ${spareRecom === "Mobil" ? "bg-[#F3F5F7]" : "bg-white"}`}
              onClick={() => { setSpareRecom("Mobil"); }}
            >
              <span className={`border-b-4 ${spareRecom === "Mobil" ? "border-primary1" : "border-none"}  transition ease-in-out`}>
                <span className="inline-flex items-center gap-2 md:gap-4">
                  <FaCar size={"46"} />
                  Motor
                </span>
              </span>

            </button>

          </div>
          <div className={`${spareRecom === "Motor" ? "flex justify-center" : "hidden"}`}>
            <RekomItem vehicleRecom={motorRecom} />
          </div>
          <div className={` ${spareRecom === "Mobil" ? "flex justify-center" : "hidden"}`}>
            <RekomItem vehicleRecom={mobilRecom} />
          </div>


        </nav>

      </div>

    </div>
  )
}

export default LayananLayout;
