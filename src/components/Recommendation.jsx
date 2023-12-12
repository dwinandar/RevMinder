import { useState } from "react";
import { useParams } from "react-router-dom";
import motorIcon from "../assets/icon_motorcycle.svg";
import mobilIcon from "../assets/icon_Car.svg";
import { motorRecom, mobilRecom } from "../constant/data";
import RecomItem from "./RecomItem";

const Recommendation = () => {
  let { item } = useParams();
  const [spareRecom, setSpareRecom] = useState("Motor");

  return (
    <div className='relative flex flex-col items-center w-full min-h-screen px-5 mx-auto bg-[#F9FAFC] mt-10'>
      <h1 className='relative px-10 py-4 text-4xl font-semibold text-center bg-white shadow-lg md:px-32 -top-9 rounded-xl '>
        Layanan Rekomendasi Sparepart
      </h1>
      <h2 className='text-xl'>
        Kami akan merekomendasikan sparepart yang cocok dengan kendaraan anda
      </h2>
      <nav className='flex flex-wrap justify-center gap-8 py-24 text-2xl'>
        <button
          className={`px-16 py-4 font-semibold relative shadow-md rounded-lg  ${spareRecom === "Motor" ? "bg-[#F3F5F7]" : "bg-white"
            }`}
          onClick={() => {
            setSpareRecom("Motor");
          }}
        >
          <div className='flex items-center gap-7'>
            <img src={motorIcon} alt='motor-icon' /> Motor
          </div>
          <div
            className={`bg-[#0070BA] w-[70%] h-1 absolute bottom-0 rounded-lg left-1/2 -translate-x-1/2 transition-opacity   ${spareRecom === "Motor" ? "opacity-100" : "opacity-0"
              }`}
          >
            {" "}
          </div>
        </button>
        <button
          className={`px-16 py-4 font-semibold relative shadow-md rounded-lg   ${spareRecom === "Mobil" ? "bg-[#F3F5F7]" : "bg-white"
            }`}
          onClick={() => {
            setSpareRecom("Mobil");
          }}
        >
          <div className='flex items-center gap-7'>
            <img src={mobilIcon} alt='mobil-icon' /> Mobil
          </div>
          <div
            className={`bg-[#0070BA] w-[70%] h-1 absolute bottom-0 rounded-lg left-1/2 -translate-x-1/2 transition-opacity ${spareRecom === "Mobil" ? "opacity-100" : "opacity-0"
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
    </div>
  );
};

export default Recommendation;
