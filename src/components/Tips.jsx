import { useState } from "react";
import VehicleTips from "./VehicleTips";
import { TipsMobil, TipsMotor } from "../constant/data";

const Tips = () => {
  const [vehicle, setVehicle] = useState("Motor");

  return (
    <div className='flex flex-col items-center w-full min-h-screen px-5 mx-auto'>
      <h2 className='py-20 text-3xl font-bold text-center'>
        TIPS & BERITA SEPUTAR OTOMOTIF
      </h2>
      <nav className='flex gap-8 pb-12 text-xl'>
        <button
          className={`block px-6 py-4 hover:text-[#0070BA] focus:outline-none font-bold border-b-4 ${vehicle === "Motor" ? "border-[#0070BA]" : "border-transparent"
            }`}
          onClick={() => {
            setVehicle("Motor");
          }}
        >
          Motor
        </button>
        <button
          className={`block px-6 py-4 hover:text-[#0070BA] focus:outline-none border-b-4 font-bold ${vehicle === "Mobil" ? "border-[#0070BA]" : "border-transparent"
            }`}
          onClick={() => {
            setVehicle("Mobil");
          }}
        >
          Mobil
        </button>
      </nav>
      <div
        className={`text-center w-full ${vehicle === "Mobil" ? "static" : "hidden"
          }`}
      >
        <VehicleTips tipsNBerita={TipsMobil} />
      </div>
      <div
        className={`text-center w-full ${vehicle === "Motor" ? "static" : "hidden"
          }`}
      >
        <VehicleTips tipsNBerita={TipsMotor} />
      </div>
    </div>
  );
};

export default Tips;
