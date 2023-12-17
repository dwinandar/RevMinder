/* eslint-disable react/prop-types */
import Sidebar from "./Sidebar";
import NavDashboard from "./NavDashboard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { GoPlus } from "react-icons/go";

function Aset() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("mobil");

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
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus data?",
    );

    if (isConfirmed) {
      axios
        .delete(`http://localhost:8081/delete/${selectedVehicle}/${id}`)
        .then(() => {
          location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Penghapusan data dibatalkan.");
    }
  };

  // const handleClick = (vehicleType) => {
  //   setShowData(true);
  //   setSelectedVehicle(vehicleType);
  // };

  const VehicleButton = ({ type, icon, width, selected, onClick }) => (
    <a
      className={`btn btn-wide shadow-2xl font-bold btn-ghost rounded-xl ${
        selected ? "hover:bg-primary2 border-b-4 border-primary1" : ""
      }`}
      onClick={() => onClick(type)}
    >
      <img src={icon} alt='' width={width} />
      {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
      {/* Capitalize the first letter */}
    </a>
  );

  return (
    <div>
      <NavDashboard />
      <div className='flex flex-row w-full shadow-xl md:flex-row font-poppins'>
        <Sidebar />
        <div className='flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl'>
          <div className='m-7'>
            <p className='text-3xl font-bold'>Informasi Aset</p>
            <div className='flex mt-11'>
              <div className='flex'>
                <VehicleButton
                  type='motor'
                  icon='motorsport.svg'
                  width={20}
                  selected={selectedVehicle === "motor"}
                  onClick={(type) => setSelectedVehicle(type)}
                />
                <VehicleButton
                  type='mobil'
                  icon='sportcar.svg'
                  width={30}
                  selected={selectedVehicle === "mobil"}
                  onClick={(type) => setSelectedVehicle(type)}
                />
              </div>
            </div>

            {/* Data Mobil */}
            {showData && (
              <div className='grid grid-cols-2 border border-gray-200 m-3 shadow-xl rounded-xl overflow-y-auto h-[26rem] bg-primary2'>
                {data.length > 0 ? (
                  data.map((vehicle) => (
                    <div
                      key={vehicle.id}
                      className='flex flex-col m-5 bg-white h-fit rounded-xl hover:shadow-2xl'
                    >
                      <div className='flex'>
                        <img
                          src={
                            selectedVehicle === "motor"
                              ? "/motorsport.svg"
                              : "/sportcar.svg"
                          }
                          alt=''
                          width='50'
                          className='m-5'
                        />
                        <div className='mt-4'>
                          <h1 className='font-bold'>
                            {selectedVehicle === "motor" ? "Motor" : "Mobil"} -
                            {vehicle.id}
                          </h1>
                          <p>{vehicle.nama_kendaraan}</p>
                        </div>
                      </div>

                      <div className='flex justify-end gap-2 m-5 '>
                        <Link
                          to={`/read/${selectedVehicle}/${vehicle.id}`}
                          className='py-1 text-white rounded-full btn-sm bg-primary4'
                        >
                          Lihat
                        </Link>
                        <button
                          onClick={() => handleDelete(vehicle.id)}
                          className='py-1 text-white rounded-full btn-sm bg-primary5'
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className='mt-5 text-center'>Belum ada kendaraan.</p>
                )}
              </div>
            )}
            {/* Modal Button */}
            <div className='flex justify-end m-9'>
              <button
                className='p-3 transition-all duration-300 ease-in-out rounded-full bg-primary4 hover:shadow-lg'
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <GoPlus className='w-8 h-8 text-white' />
                <dialog id='my_modal_1' className='modal'>
                  <div className='p-6 bg-white rounded-lg shadow-lg modal-box'>
                    <h3 className='mb-4 text-lg font-bold text-primary1'>
                      PILIH JENIS KENDARAAN
                    </h3>
                    <div className='flex justify-center'>
                      <Link to='/tambahdatamotor' className='mx-4 text-center'>
                        <img
                          src='/motorsport.svg'
                          alt='Motor Icon'
                          width='32'
                          className='mb-2'
                        />
                        <p className='text-sm'>Motor</p>
                      </Link>
                      <Link to='/tambahaset' className='mx-4 text-center'>
                        <img
                          src='/sportcar.svg'
                          alt='Mobil Icon'
                          width='50'
                          className='mb-2'
                        />
                        <p className='text-sm'>Mobil</p>
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
