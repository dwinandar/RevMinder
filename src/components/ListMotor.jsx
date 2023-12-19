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

function ListMotor() {
  const { id } = useParams();

  const [category, setCategory] = useState("progress");

  const [motor, setMotor] = useState([]);
  const [riwayat, setRiwayat] = useState([]);
  const [pengingat, setPengingat] = useState([]);

  // const [backendDate, setBackendDate] = useState('');
  // const [countdown, setCountdown] = useState('');
  const calculateCountdown = (backendDate) => {
    const currentDate = new Date();
    const targetDate = new Date(backendDate);
    const difference = targetDate.getTime() - currentDate.getTime();

    if (difference > 0) {
      const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
      return `${daysDifference} hari lagi.`
      // setCountdown(`There are ${daysDifference} days until ${targetDate.toDateString()}.`);
    } else {
      return 'Please select a future date.'
      // setCountdown('Please select a future date.');
    }
  };

  useEffect(() => {
    axios.defaults.withCredentials = true;
    //Get motor data
    axios
      .get("http://localhost:5050/vehicle/read/motor/" + id)
      .then((res) => {
        setMotor(res.data[0]);
      })
      .catch((err) => console.log(err));
    //
    //
    //Get riwayat service motor
    axios
      .get(`http://localhost:5050/service/motor/${id}/riwayatservice`)
      .then((res) => {
        console.log(res.data);
        setRiwayat(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:5050/service/motor/${id}/pengingat`)
      .then((res) => {
        console.log(res.data)
        setPengingat(res.data);
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
                Informasi Motor
              </p>
              <div className="icon mt-3 mb-1">
                <FaMotorcycle size={"64"}
                // color={"#21217A"}
                />
              </div>

            </div>

            <div className="lg:h-[15rem] flex flex-col  space-y-4 mt-9">
              <div className="bg-gray-200 shadow-md rounded-lg sm:w-96 p-6 ">
                {/* Tipe Mobil */}
                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Tipe Motor</p>
                  <input type="text" className="text-black rounded-lg ring-0 border-none focus:ring-0" value={motor.nama_kendaraan} disabled />
                </div>
                {/* No Polisi */}
                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">No Polisi</p>
                  <input type="text" className="text-black rounded-lg ring-0 border-none focus:ring-0" value={motor.no_pol} disabled />
                </div>

                {/* Bahan Bakar */}

                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Bahan Bakar</p>
                  <input type="text" className="text-black rounded-lg ring-0 border-none focus:ring-0" value={motor.jenis} disabled />
                </div>
                {/* Transmisi */}

                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Transmisi</p>
                  <input type="text" className="text-black rounded-lg ring-0 border-none focus:ring-0" value={motor.transmisi} disabled />
                </div>
                {/* Tahun */}
                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Tahun</p>
                  <input type="text" className="text-black rounded-lg ring-0 border-none focus:ring-0" value={motor.tahun} disabled />
                </div>
                {/* Warna */}

                <div className="flex flex-col mb-4">
                  <p className="font-bold mr-2">Warna</p>
                  <input type="text" className="text-black rounded-lg ring-0 border-none focus:ring-0" value={motor.warna} disabled />
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

                <div className={`bg-primary2 shadow-md rounded-lg w-full sm:w-96  h-96 lg:p-6 flex ${pengingat.length < 1 ? "items-center justify-center" : ""}`}>
                  <p className={`${pengingat.length < 1 ? "" : "hidden"}`}>Pengingat masih kosong</p>
                  <div className={`w-[22rem] h-[24rem] mb-10 mx-auto ${pengingat.length < 1 ? "hidden" : ""}`}>
                    {pengingat.length > 0 && pengingat.map((value, i) => (
                      <div key={i} className="flex flex-col bg-gray-100 px-4 py-2 my-4 rounded-lg shadow-lg">
                        <div className="flex  justify-between">

                          <div className="">
                            <p className="flex flex-col justify-center font-bold">
                              <span>{new Date(value.tanggal).toLocaleDateString("id-ID", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}</span>
                            </p>
                            <p className="flex flex-col">
                              <span>{new Date(value.tanggal).toLocaleTimeString()}
                              </span>
                            </p>

                          </div>
                          <div>
                            <p className="flex flex-col">
                              <span className="font-bold">{value.kategori}</span>
                              <span>{calculateCountdown(value.tanggal)}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <label htmlFor="" className="font-bold mt-8 mb-4 sm:mx-0 mx-2">
                  Riwayat Service
                </label>
                <div className={`bg-primary2 shadow-md rounded-lg w-full sm:w-96 h-96  flex overflow-y-auto  ${riwayat.length < 1 ? " items-center justify-center" : "flex-wrap"}`}>
                  {riwayat.length < 1 ? (
                    <p className="text-gray-500">Riwayat Service masih kosong</p>
                  ) :
                    (
                      <div className="w-[22rem] h-[24rem] mb-10 mx-auto">
                        {riwayat.map((value, i) => (
                          <div key={i} className="flex flex-col justify-center bg-gray-100 px-4 py-2 my-4 rounded-lg shadow-lg">
                            <p className="flex justify-between font-bold">
                              <span>{value.kategori}</span>
                              <span>Rp {value.biaya}</span>
                            </p>
                            <p className="flex justify-between">
                              <span>{value.dikerjakan}</span>
                              <span>{value.jarak.replace("km", "")}Km</span>
                            </p>
                            <p className="flex justify-between">
                              <span>{value.keterangan}</span>
                              <span className="text-right">
                                {new Date(value.tanggal).toLocaleDateString("id-ID", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </p>
                          </div>
                        ))}
                      </div>
                    )

                  }
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
                      <Link to={`/dashboard/aset/motor/${id}/tambahservice`} className="flex flex-col items-center justify-center gap-2 mx-4">
                        <RxCounterClockwiseClock size={"30"} color={"#21217A"} className="hover:scale-110" />
                        <p className="text-sm">Catat Service </p>
                      </Link>

                      <Link to={`/dashboard/aset/motor/${id}/tambahpengingat`} className="flex flex-col items-center justify-center gap-1 mx-4">
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

export default ListMotor;
