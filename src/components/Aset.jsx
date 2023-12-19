import { FaCar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { X } from "lucide-react";

import { Link } from "react-router-dom";
import TambahAset from "./TambahAset";
import { useState, useEffect } from "react";
import axios from "axios";



const Aset = () => {
  const [vehicle, setVehicle] = useState("motor");
  const [reRender, setReRender] = useState(false);
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  // const [selectedVehicle, setSelectedVehicle] = useState("motor");
  const [vehicleId, setVehicleId] = useState("");

  useEffect(() => {
    // Panggil fungsi getVehicle dengan parameter jenis kendaraan yang dipilih
    getVehicle(vehicle);
    handleAxiosDelete(vehicleId);
  }, [vehicle, vehicleId, reRender]); // useEffect akan dipanggil setiap kali selectedVehicle berubah

  const getVehicle = async (vehicleType) => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get(`http://localhost:5050/vehicle/${vehicle}`);
      setData(response.data);
      setShowData(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setShowData(false);
    }
  };

  const handleAxiosDelete = () => {

  }

  const handleDelete = (id) => {

    const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus data?");

    if (isConfirmed) {
      setVehicleId(id)
      axios.defaults.withCredentials = true;
      axios
        .delete(`http://localhost:5050/vehicle/delete/${vehicle}/${id}`)
        .then((res) => {
          console.log(res)
          setReRender(!reRender);

        })
        .catch((err) => console.log(err));
    } else {
      console.log("Penghapusan data dibatalkan.");
    }
  };

  const handleClick = (vehicleType) => {
    setShowData(true);
    // setData([{
    //   "id": 1, "nama_kendaraan": "Alphard", "jenis": "motor"
    // },
    // { "id": 2, "nama_kendaraan": "Mustang", "jenis": "motor" },
    // { "id": 3, "nama_kendaraan": "Toyota", "jenis": "motor" },
    // { "id": 4, "nama_kendaraan": "Mustang", "jenis": "motor" },
    // ])
  };

  // const VehicleButton = ({ type, icon, width, selected, onClick }) => (
  //   <a
  //     className={`btn btn-wide shadow-2xl font-bold btn-ghost rounded-xl ${selected ? "hover:bg-primary2 border-b-4 border-primary1" : ""
  //       }`}
  //     onClick={() => onClick(type)}
  //   >
  //     <img src={icon} alt="" width={width} />
  //     {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
  //     {/* Capitalize the first letter */}
  //   </a>
  // );

  return (

    <section className="flex flex-col w-full lg:w-[80%] mt-4 lg:mx-5 lg:border lg:border-gray-200 lg:shadow-xl lg:rounded-xl">
      <div className="px-2 py-2 lg:p-12 flex flex-col gap-4">
        <p className="text-3xl font-bold">Informasi Aset</p>
        <div className="flex mt-11 gap-5 ">
          <button
            onClick={() => { setVehicle("motor"); handleClick("motor") }}
            className={`shadow-xl px-2 pt-2 font-bold ${vehicle === "motor" || vehicle === "" ? "bg-gray-200" : ""} text-[#21217A] hover:border-[#21217A] w-[10rem] rounded-xl flex justify-center flex-col items-center`}>
            <FaMotorcycle size={"24"} color={"#21217A"} />
            <span className={`inline-block w-[56%] text-lg ${vehicle === "motor" || vehicle === "" ? "border-b-4 border-[#4C4DDC] transition-transform" : "border-trasparent"}`}>
              Motor
            </span>
          </button>
          <button
            onClick={() => { setVehicle("mobil"); handleClick("mobil") }}
            className={`shadow-xl px-2 pt-2 font-bold ${vehicle === "mobil" ? "bg-gray-200" : ""} text-[#21217A] hover:border-[#21217A] w-[10rem] rounded-xl flex justify-center flex-col items-center`}>
            <FaCar size={"24"} color={"#21217A"} />
            <span className={`inline-block w-[56%] text-lg ${vehicle === "mobil" ? "border-b-4 border-[#4C4DDC] transition-transform" : "border-trasparent"}`}>
              Mobil
            </span>
          </button>
        </div>

        {/* <div className="border border-gray-200 mt-6 shadow-xl rounded-xl place-content-center bg-primary2"> */}
        {/*   <div className="flex justify-center"> */}
        {/*     <p className="text-center text-[#21217A] justify-center font-bold m-11"> */}
        {/*       Belum ada kendaraan */}
        {/*     </p> */}
        {/*   </div> */}

        <div className="asset-content bg-[#D9D9D9] rounded-lg">
          <div className="scroll-vehicle overflow-y-auto mx-8">
            <div className={`vehicle-content-container h-[26rem] lg:h-[20rem] flex flex-wrap ${data.length <= 0 ? "justify-center w-full" : ""}`}>
              <div className={`flex justify-center items-center xl:h-[20rem] ${data.length > 0 ? "hidden" : "static"}`}>
                <p className="font-bold text-gray-600 text-xl text-center md:text-start">Data kendaraan belum ada</p>
              </div>

              {/* Data Mobil */}
              {data.length > 0 ? data.map((item, i) =>
                <div key={i} className="vehicle-content pt-6 ">
                  <div className="flex flex-col m-2 px-4 bg-white rounded-lg min-w-[16rem] h-[13rem]">
                    <div className="content flex items-center my-6">
                      <span className="px-4">
                        {vehicle === "motor" ?
                          (
                            <FaMotorcycle size={"56"} color={"#21217A"} />
                          ) :
                          (
                            <FaCar size={"56"} color={"#21217A"} />

                          )
                        }
                      </span>
                      <div className="flex flex-col text-content">
                        <span className="inline-block font-bold text-lg">
                          {`${vehicle.charAt(0).toUpperCase() + vehicle.substring(1, vehicle.length)} ke-${i + 1}`}
                        </span>
                        <span className="inline-block">
                          {item.nama_kendaraan}
                        </span>
                      </div>
                    </div>
                    <div className="card-button flex justify-end items-end mx-3 my-6 gap-3">
                      <Link
                        className="bg-[#F2994A] rounded-lg"
                        to={`read/${vehicle}/${item.id}`}>
                        <button
                          className="px-6 py-2 font-[400] text-white"
                        >Lihat
                        </button>
                      </Link>
                      <button
                        className="bg-[#21217A] rounded-lg"
                        onClick={() => { handleDelete(item.id) }}
                      // to={`dashboard/read/${vehicle}/${data.id}`}
                      >
                        <span
                          className="inline-block px-6 py-2 font-[400] text-white"
                        >Hapus
                        </span>
                      </button>
                    </div>
                  </div>

                </div>
              ) : (<></>)}

            </div>
          </div>

          {/* Modal Button */}
          <div className="flex justify-end pr-8 pb-6">
            <div className="">
              <button
                className="rounded-full border-none "
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <FaPlusCircle size={"38"} color={"#F2994A"} />
              </button>
            </div>
          </div>
          {/* End Modal Button */}


          {/* modal */}
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-white">
              <form method="dialog">
                <div className="flex justify-end mb-3 sm:mb-0">
                  <button className="">
                    <X size={"28"} />
                  </button>
                </div>
              </form>
              <div className="flex flex-col items-center justify-center gap-6 mb-10">
                <h3 className="font-bold text-primary1 text-xl">
                  Pilih jenis Kendaraan
                </h3>
                <div className="flex justify-center gap-12">
                  <Link to="tambahaset/motor">
                    <FaMotorcycle size={"42"} color="#21217A" className="hover:scale-110" />
                  </Link>
                  <Link to="tambahaset/mobil">
                    <FaCar size={"42"} color="#21217A" className=" hover:scale-110" />
                  </Link>
                </div>
              </div>

            </div>
          </dialog>
          {/* modal-end */}

        </div>

      </div >
    </section >
  );
};

export default Aset;
