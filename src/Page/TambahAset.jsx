import React from "react";
import NavDashboard from "./NavDashboard";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const TambahAset = () => {
  return (
    <>
      <NavDashboard />
      <div className="w-full flex flex-row shadow-xl">
        <Sidebar />
        <div className="flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
          {/* Arrow */}
          <div>
            <a className="">
              <Link to="/aset">
                <IoMdArrowRoundBack className="m-7 text-4xl " />
              </Link>
            </a>
          </div>
          {/* End Arrow */}

          <div className="overflow-y-auto">
            {/**/}
            <div className="flex flex-col items-center justify-center mt-9">
              <img src="./public/Mobil.svg" alt="" width="200" />
              <p className="font-bold mt-3 text-lg">Tambah Data Mobil</p>
            </div>
            {/* */}

            <div className="bg-primary2 border border-gray-200 w-80 flex flex-col items-center justify-center">
              <p className="font-bold">Data Kepemilikan</p>
            </div>

            <div className="bg-primary2 border border-gray-200 w-80 mt-9">
              <p className="font-bold">Data Kendaraan</p>
            </div>

            <div className="bg-primary2 border border-gray-200 w-80 mt-9">
              <p className="font-bold">Bahan Bakar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TambahAset;
