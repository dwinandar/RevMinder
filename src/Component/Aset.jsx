import React from "react";
import Sidebar from "./Sidebar";
import NavDashboard from "./NavDashboard";
import { FaCar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import TambahAset from "./TambahAset";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { GoPlus } from "react-icons/go";

function Aset() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("motor");

  useEffect(() => {
    // Panggil fungsi getVehicle dengan parameter jenis kendaraan yang dipilih
    if (selectedVehicle) {
      getVehicle(selectedVehicle);
    }
  }, [selectedVehicle]); // useEffect akan dipanggil setiap kali selectedVehicle berubah

  const getVehicle = async (vehicleType) => {
    try {
      const response = await axios.get(`http://localhost:8081/${vehicleType}`);
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

    if(isConfirmed){
    axios
      .delete(`http://localhost:8081/delete/${selectedVehicle}/${id}`)
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
    setSelectedVehicle(vehicleType);
  };

  const VehicleButton = ({ type, icon, width, selected, onClick }) => (
    <a
      className={`btn btn-wide shadow-2xl font-bold btn-ghost rounded-xl ${
        selected ? "hover:bg-primary2 border-b-4 border-primary1" : ""
      }`}
      onClick={() => onClick(type)}
    >
      <img src={icon} alt="" width={width} />
      {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
      {/* Capitalize the first letter */}
    </a>
  );

  return (
    <div>
      <NavDashboard />
      <div className="w-full flex md:flex-row flex-row shadow-xl font-poppins">
        <Sidebar />
        <div className="flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
          <div className="m-7">
            <p className="text-3xl font-bold">Informasi Aset</p>
            <div className="flex mt-11">
              <div className="flex">
                <VehicleButton
                  type="motor"
                  icon="motorsport.svg"
                  width={20}
                  selected={selectedVehicle === "motor"}
                  onClick={(type) => setSelectedVehicle(type)}
                />
                <VehicleButton
                  type="mobil"
                  icon="sportcar.svg"
                  width={30}
                  selected={selectedVehicle === "mobil"}
                  onClick={(type) => setSelectedVehicle(type)}
                />
              </div>
            </div>

            {/* Data Mobil */}
            {showData && (
              <div className="border border-gray-200 m-3 shadow-xl rounded-xl overflow-y-auto h-[25rem] bg-primary2">
                {data.length > 0 ? (
                  data.map((vehicle) => (
                    <div
                      key={vehicle.id}
                      className="flex flex-col bg-white m-7 w-80 rounded-xl hover:shadow-2xl"
                    >
                      <div className="flex">
                        <img
                          src={
                            selectedVehicle === "motor"
                              ? "/motorsport.svg"
                              : "/sportcar.svg"
                          }
                          alt=""
                          width="50"
                          className="m-5"
                        />
                        <div className="mt-4">
                          <h1 className="font-bold">
                            {selectedVehicle === "motor" ? "Motor" : "Mobil"} -
                             {vehicle.id}
                          </h1>
                          <p>{vehicle.nama_kendaraan}</p>
                        </div>
                      </div>

                      <div className="flex justify-end m-5 gap-2 ">
                        <Link
                          to={`/read/${selectedVehicle}/${vehicle.id}`}
                          className="btn-sm rounded-full bg-primary4 text-white py-1"
                        >
                          Lihat
                        </Link>
                        <button
                          onClick={ () => handleDelete(vehicle.id)}
                          className="btn-sm rounded-full bg-primary5 text-white py-1"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center mt-5">Belum ada kendaraan.</p>
                )}
              </div>
            )}
            {/* Modal Button */}
            <div className="flex justify-end m-9">
              <button
                className="bg-primary4 rounded-full p-3 transition-all duration-300 ease-in-out hover:shadow-lg"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <GoPlus className="w-8 h-8 text-white" />
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="font-bold text-primary1 text-lg mb-4">
                      PILIH JENIS KENDARAAN
                    </h3>
                    <div className="flex justify-center">
                      <Link to="/tambahdatamotor" className="text-center mx-4">
                        <img
                          src="/motorsport.svg"
                          alt="Motor Icon"
                          width="32"
                          className="mb-2"
                        />
                        <p className="text-sm">Motor</p>
                      </Link>
                      <Link to="/tambahaset" className="text-center mx-4">
                        <img
                          src="/sportcar.svg"
                          alt="Mobil Icon"
                          width="50"
                          className="mb-2"
                        />
                        <p className="text-sm">Mobil</p>
                      </Link>
                    </div>
                  </div>
                </dialog>
              </button>
            </div>

            {/* End Modal Button */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aset;
