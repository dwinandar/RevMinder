import { useState } from "react";
import VehicleTips from "./VehicleTips";
import { TipsMobil, TipsMotor } from "../constant/data";

const Tips = () => {
  const [vehicle, setVehicle] = useState("Motor");

  return (
    <div className='flex flex-col items-center lg:w-full min-h-screen px-5 lg:mx-0 '>
      <h2 className='pt-20 pb-10 text-2xl font-bold text-center'>
        TIPS & BERITA SEPUTAR OTOMOTIF
      </h2>
      <nav className='flex gap-8 pb-12 text-xl'>
        <button
          className={`block px-6 py-4 hover:text-primary1 focus:outline-none font-bold border-b-4 ${vehicle === "Motor" ? "border-primary1" : "border-transparent"
            }`}
          onClick={() => {
            setVehicle("Motor");
          }}
        >
          Motor
        </button>
        <button
          className={`block px-6 py-4 hover:text-primary1 focus:outline-none border-b-4 font-bold ${vehicle === "Mobil" ? "border-primary1" : "border-transparent"
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
