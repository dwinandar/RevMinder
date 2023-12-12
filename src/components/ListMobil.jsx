import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { FaCar } from "react-icons/fa6";
import { FaMotorcycle } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { X } from "lucide-react";

function ListMobil() {
  const { id } = useParams();

  const [category, setCategory] = useState("progress");

  const [mobil, setMobil] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/read/motor/" + id)
      .then((res) => {
        console.log(res);
        setMobil(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <div className="w-full md:w-[98rem] flex flex-row">
        <div className="flex flex-col w-full md:flex-1 mt-4 lg:ml-5 lg:border lg:border-gray-200 md:shadow-xl md:rounded-xl">
          <div>
            <Link to="/dashboard/aset">
              <IoMdArrowRoundBack className="md:m-7 mx-2 mt-2 mb-6 text-4xl " />
            </Link>
          </div>

          <div className="md:overflow-y-auto  flex flex-col items-center w-full bg-white h-[100%] lg:h-[80%]">
            <div className="flex flex-col items-center justify-center mt-6">
              <p className="font-bold md:mx-3 text-4xl text-black">
                Informasi Mobil
              </p>
              <div className="icon mt-3 mb-1">
                <FaCar size={"64"}
                // color={"#21217A"}
                />
              </div>

            </div>

            <div className="lg:h-[15rem] flex flex-col  space-y-4 mt-9">
              <div className="bg-gray-200 shadow-md rounded-lg sm:w-96 p-6 ">
                {/* Tipe Mobil */}
                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Tipe Mobil</p>
                  <input type="text" className="text-gray-400 rounded-lg ring-0 border-none focus:ring-0" value={mobil.nama_kendaraan} disabled />
                </div>
                {/* No Polisi */}
                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">No Polisi</p>
                  <input type="number" className="text-gray-400 rounded-lg ring-0 border-none focus:ring-0" value={mobil.no_pol} />
                </div>

                {/* Bahan Bakar */}

                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Bahan Bakar</p>
                  <input type="text" className="text-gray-400 rounded-lg ring-0 border-none focus:ring-0" value={mobil.jenis} />
                </div>
                {/* Transmisi */}

                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Transmisi</p>
                  <input type="text" className="text-gray-400 rounded-lg ring-0 border-none focus:ring-0" value={mobil.transmisi} />
                </div>
                {/* Tahun */}
                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Tahun</p>
                  <input type="text" className="text-gray-400 rounded-lg ring-0 border-none focus:ring-0" value={mobil.tahun} />
                </div>
                {/* Warna */}

                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Warna</p>
                  <input type="text" className="text-gray-400 rounded-lg ring-0 border-none focus:ring-0" value={mobil.warna} />
                </div>
              </div>

              <div className="flex flex-col items-start lg:mx-2 ">
                <label htmlFor="" className="font-bold mx-2 sm:mx-0 mt-6 mb-2">
                  Pengingat
                </label>
                <div className="flex space-x-4 items-center mx-2 sm:mx-0 my-3">
                  <button className={`p-3 rounded-lg bg-primary3 ${category === "progress" ? "" : "opacity-50"} px-[1.5rem] font-bold text-white`}
                    onClick={() => setCategory("progress")}
                  >Aktif</button>
                  <button className={`p-3 rounded-lg ${category === "done" ? "" : "opacity-50"} bg-primary3 font-bold px-[1.5rem] text-white`}
                    onClick={() => setCategory("done")}
                  >Selesai</button>

                </div>

                <div className="bg-primary2 shadow-md rounded-lg w-full sm:w-96  h-96 lg:p-6 flex items-center justify-center">
                  <p className="text-gray-500">Pengingat masih kosong</p>
                </div>

                <label htmlFor="" className="font-bold mt-8 mb-4 sm:mx-0 mx-2">
                  Riwayat Service
                </label>
                <div className="bg-primary2 shadow-md rounded-lg w-full sm:w-96 h-96  flex items-center justify-center">
                  <p className="text-gray-500">Riwayat Service masih kosong</p>
                </div>
              </div>
              <div className="flex justify-end mr-6 lg:mr-0 pb-12 md:mb-0">
                <button
                  className="bg-primary3 rounded-full p-3 transition-all duration-300 ease-in-out hover:shadow-lg"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  <GoPlus className="w-8 h-8 text-white" />
                </button>
              </div>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white rounded-lg shadow-lg">
                  <div className="close-dialog flex justify-end">
                    <form method="dialog">
                      <button>
                        <X size={"28"} />
                      </button>
                    </form>
                  </div>
                  <div className="dialog-content flex flex-col items-center justify-center gap-6 mb-6">
                    <h3 className="font-bold text-primary1 text-xl">
                      Pilih Layanan
                    </h3>
                    <div className="flex justify-center gap-2">
                      <Link to="/tambahservice" className="flex flex-col items-center justify-center gap-2 mx-4">
                        <RxCounterClockwiseClock size={"30"} color={"#21217A"} className="hover:scale-110" />
                        <p className="text-sm">Catat Service </p>
                      </Link>

                      <Link to="tambahpengingat" className="flex flex-col items-center justify-center gap-1 mx-4">
                        <LuAlarmClock size={"38"} color={"#21217A"} className="hover:scale-110" />
                        <p className="text-sm">Pengingat</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </dialog>
              {/* <div className="flex"> */}
              {/*   <button className="bg-primary3 px-4 py-2 rounded-lg text-white">Tambah Service</button> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default ListMobil;        
