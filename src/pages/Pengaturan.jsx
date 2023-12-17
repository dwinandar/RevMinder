import { useState } from "react";
import UbahProfil from "../components/UbahProfil";
import UbahSandi from "../components/UbahSandi";

const Pengaturan = () => {
  const [setting, setSetting] = useState("profil");

  return (
    <div className='mt-4 lg:mx-5 overflow-y-auto  rounded-lg h-[84vh] w-[80rem] border border-primary2 shadow-xl'>
      <div className='flex flex-col flex-1'>
        <div className='w-auto pengaturan-container'>
          <div className='flex flex-row justify-start gap-2 px-6 py-4 '>
            <button
              className={`py-2 px-4 font-bold rounded-lg ${
                setting === "profil" ? " bg-[#F5F5FF]" : ""
              }`}
              onClick={() => setSetting("profil")}
            >
              <span
                className={`block text-lg ${
                  setting === "profil"
                    ? "border-b-4 border-[#4C4DDC] transition"
                    : "border-trasparent"
                }`}
              >
                Ubah Profil
              </span>
            </button>
            <button
              className={`py-2 px-4 font-bold rounded-lg  ${
                setting === "sandi" ? " bg-[#F5F5FF]" : ""
              }`}
              onClick={() => setSetting("sandi")}
            >
              <span
                className={`block text-lg ${
                  setting === "sandi"
                    ? "border-b-4 border-[#4C4DDC] transition"
                    : "border-trasparent"
                }`}
              >
                Ubah Kata Sandi
              </span>
            </button>
          </div>

          <div
            className={`${
              setting === "profil" ? "static" : "hidden"
            } pengaturan-content w-[70%] h-[28rem] mx-6 bg-[#D9D9D9] rounded-lg`}
          >
            <UbahProfil />
          </div>

          <div
            className={`${
              setting === "sandi" ? "static" : "hidden"
            } pengaturan-content w-[70%] h-[28rem] mx-6 bg-[#D9D9D9] rounded-lg`}
          >
            <UbahSandi />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengaturan;
