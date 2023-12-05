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

    <section className="flex flex-col w-[80%] mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
      <div className="p-12 flex flex-col gap-4">
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

        <div className={`aset-content mt-2 h-[24rem] max-w-[80rem] bg-[#D9D9D9] rounded-lg`}>
          <div className={`fixed translate-x-[30rem] translate-y-[10rem] ${data.length > 0 ? "hidden" : "static"}`}>
            <p className="font-bold text-gray-600 text-xl">Data kendaraan belum ada</p>
          </div>

          {/* Data Mobil */}
          {data.length > 0 ? data.map((item, i) =>
            <div key={i} className="vehicle-container flex p-8">
              <div className="flex flex-col m-2 px-4 bg-white rounded-lg w-[26rem] h-[12rem]">
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
                    to={`/dashboard/read/${vehicle}/${item.id}`}>
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
          {/* {showData && data.length > 0 ? ( */}
          {/**/}
          {/*   data.map((vehicle) => { */}
          {/*     <div */}
          {/*       key={vehicle.id} */}
          {/*       className="flex flex-col bg-white m-7 w-80 rounded-xl hover:shadow-2xl" */}
          {/*     > */}
          {/*       <div className="flex"> */}
          {/*         <img */}
          {/*           src={ */}
          {/*             selectedVehicle === "motor" */}
          {/*               ? "/motorsport.svg" */}
          {/*               : "/sportcar.svg" */}
          {/*           } */}
          {/*           alt="" */}
          {/*           width="50" */}
          {/*           className="m-5" */}
          {/*         /> */}
          {/*         <div className="mt-4"> */}
          {/*           <h1 className="font-bold"> */}
          {/*             {selectedVehicle === "motor" ? "Motor" : "Mobil"} - */}
          {/*             {vehicle.id} */}
          {/*           </h1> */}
          {/*           <p>{vehicle.nama_kendaraan}</p> */}
          {/*         </div> */}
          {/*       </div> */}
          {/**/}
          {/*       <div className="flex justify-end m-5 gap-2 "> */}
          {/*         <Link */}
          {/*           to={`/read/${selectedVehicle}/${vehicle.id}`} */}
          {/*           className="btn-sm rounded-full bg-primary4 text-white py-1" */}
          {/*         > */}
          {/*           Lihat */}
          {/*         </Link> */}
          {/*         <button */}
          {/*           onClick={() => handleDelete(vehicle.id)} */}
          {/*           className="btn-sm rounded-full bg-primary5 text-white py-1" */}
          {/*         > */}
          {/*           Hapus */}
          {/*         </button> */}
          {/*       </div> */}
          {/*     </div> */}
          {/**/}
          {/**/}
          {/*   }) */}
          {/**/}
          {/* ) : ""} */}

          {/* Modal Button */}
          <div className="flex flex-col justify-end items-end mr-12 mt-6 h-[20rem]">
            <button
              className="rounded-full border-none"
              onClick={() =>
                document.getElementById("my_modal_1").showModal()
              }
            >
              <FaPlusCircle size={"38"} color={"#F2994A"} />
            </button>
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
            {/* End Modal Button */}
          </div>
        </div>
        {/* </div> */}

      </div >
    </section >
  );
};

export default Aset;
