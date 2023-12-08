import Sidebar from "./Sidebar";
import NavDashboard from "./NavDashboard";
import { FaCar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import TambahAset from "./TambahAset";
import { useState, useEffect } from "react";
import axios from "axios";



const Aset = () => {
  const [vehicle, setVehicle] = useState("motor");
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("motor");

  useEffect(() => {
    // Panggil fungsi getVehicle dengan parameter jenis kendaraan yang dipilih
    getVehicle(vehicle);
  }, [vehicle]); // useEffect akan dipanggil setiap kali selectedVehicle berubah

  const getVehicle = async (vehicleType) => {
    try {
      const response = await axios.get(`http://localhost:8080/${vehicleType}`);
      setData(response.data);
      setShowData(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setShowData(false);
    }
  };

  const handleDelete = (id) => {

    const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus data?");

    if (isConfirmed) {
      axios
        .delete(`http://localhost:8080/delete/${vehicle}/${id}`)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Penghapusan data dibatalkan.");
    }
  };

  const handleClick = (vehicleType) => {
    setShowData(true);
    setData([{
      "id": 1, "nama_kendaraan": "Alphard", "jenis": "motor"
    },
    { "id": 2, "nama_kendaraan": "Mustang", "jenis": "motor" },
    { "id": 3, "nama_kendaraan": "Toyota", "jenis": "motor" },
    { "id": 4, "nama_kendaraan": "Mustang", "jenis": "motor" },
    ])
  };

  const VehicleButton = ({ type, icon, width, selected, onClick }) => (
    <a
      className={`btn btn-wide shadow-2xl font-bold btn-ghost rounded-xl ${selected ? "hover:bg-primary2 border-b-4 border-primary1" : ""
        }`}
      onClick={() => onClick(type)}
    >
      <img src={icon} alt="" width={width} />
      {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
      {/* Capitalize the first letter */}
    </a>
  );
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
                  <div className="flex flex-col m-2 px-4 bg-white rounded-lg min-w-[20rem] h-[13rem]">
                    <div className="content flex items-center my-6">
                      <span className="px-4">
                        <FaCar size={"56"} color={"#21217A"} />
                      </span>
                      <div className="flex flex-col text-content">
                        <span className="inline-block font-bold text-lg">
                          {`Mobil ke-${i + 1}`}
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
              <h3 className="font-bold border-b-2 border-black">
                Pilih jenis Kendaraan
              </h3>
              <div className="flex m-11 gap-12 justify-center">
                <Link to="/dashboard/aset/tambahaset">
                  <FaMotorcycle size={"36"} color="#21217A" />
                </Link>
                <Link className="link">
                  <FaCar size={"36"} color="#21217A" />
                </Link>
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
