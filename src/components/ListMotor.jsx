import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavDashboard from "./NavDashboard";
import Sidebar from "./Sidebar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaMotorcycle } from "react-icons/fa";

function ListMotor() {
  const { id } = useParams();
  const [motor, setMotor] = useState([]);
  const [category, setCategory] = useState("progress")
  useEffect(() => {
    axios
      .get("http://localhost:8081/read/motor/" + id)
      .then((res) => {
        console.log(res);
        setMotor(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {/* <NavDashboard /> */}
      <div className="w-[98rem] flex flex-row">
        {/* <Sidebar /> */}
        <div className="flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
          <div>
            <Link to="/dashboard/aset">
              <IoMdArrowRoundBack className="m-7 text-4xl " />
            </Link>
          </div>

          <div className="overflow-y-auto h-96 flex flex-col items-center bg-white h-[80%]">
            <div className="flex flex-col items-center justify-center mt-9">
              <p className="font-bold mx-3 text-4xl text-black">
                Informasi Mobil
              </p>
              <div className="icon mt-3 mb-1">
                <FaMotorcycle size={"64"}
                // color={"#21217A"}
                />
              </div>

            </div>

            <div className="h-[15rem] flex flex-col items-center space-y-4 mt-9">
              <div className="bg-gray-200 shadow-md rounded-lg w-96 p-6">
                {/* Tipe Mobil */}
                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Tipe Motor</p>
                  <input type="text" className="text-gray-400 rounded-lg ring-0 border-none focus:ring-0" value={motor.nama_kendaraan} />
                </div>
                {/* No Polisi */}
                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">No Polisi</p>
                  <input type="number" className="text-gray-400 rounded-lg ring-0 border-none focus:ring-0" value={motor.no_pol} />
                </div>

                {/* Bahan Bakar */}

                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Bahan Bakar</p>
                  <input type="text" className="text-gray-400 rounded-lg ring-0 border-none focus:ring-0" value={motor.jenis} />
                </div>
                {/* Transmisi */}

                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Transmisi</p>
                  <input type="text" className="text-gray-400 rounded-lg ring-0 border-none focus:ring-0" value={motor.transmisi} />
                </div>
                {/* Tahun */}
                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Tahun</p>
                  <input type="text" className="text-gray-400 rounded-lg ring-0 border-none focus:ring-0" value={motor.tahun} />
                </div>
                {/* Warna */}

                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Warna</p>
                  <input type="text" className="text-gray-400 rounded-lg ring-0 border-none focus:ring-0" value={motor.warna} />
                </div>
              </div>

              <div className="flex flex-col items-start ">
                <label htmlFor="" className="font-bold mt-6 mb-4">
                  Pengingat
                </label>
                <div className="flex space-x-4 items-center my-3">
                  <button className={`p-3 rounded-lg bg-[#0070BA] ${category === "progress" ? "" : "opacity-50"} px-[1.5rem] font-bold text-white`}
                    onClick={() => setCategory("progress")}
                  >Aktif</button>
                  <button className={`p-3 rounded-lg ${category === "done" ? "" : "opacity-50"} bg-[#0070BA] font-bold px-[1.5rem] text-white`}
                    onClick={() => setCategory("done")}
                  >Selesai</button>
                </div>
                <div className="bg-primary2 shadow-md rounded-lg w-96 h-96 p-6 flex items-center justify-center">
                  <p className="text-gray-500">Pengingat masih kosong</p>
                </div>

                <label htmlFor="" className="font-bold mt-8 mb-4">
                  Riwayat Service
                </label>
                <div className="bg-primary2 shadow-md rounded-lg w-96 h-96 p-6 flex items-center justify-center">
                  <p className="text-gray-500">Riwayat Service masih kosong</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  );
}

export default ListMotor;
