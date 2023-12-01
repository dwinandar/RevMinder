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

  useEffect(() => {
    getMobil();
  }, []);

  const getMobil = async () => {
    const response = await axios.get("http://localhost:8081");
    setData(response.data);
  };

  const handleDelete = (id) => {
    axios.delete('http://localhost:8081/delete/'+id)
    .then(res => {
      location.reload();
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <NavDashboard />
      <div className="w-full flex flex-row shadow-xl">
        <Sidebar />
        <div className="flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
          <div className="m-7">
            <p className="text-3xl font-bold">Informasi Aset</p>
            <div className="flex mt-11 gap-5 ">
              <button className="shadow-2xl font-bold hover:border-b-2 hover:border-blue-800 btn-ghost rounded-xl">
                <FaMotorcycle className="w-10" />
                Motor
              </button>
              <button className="shadow-xl font-bold hover:border-b-2 hover:border-blue-800 btn-ghost rounded-xl">
                <FaCar className="flex w-10 justify-center" />
                Mobil
              </button>
            </div>
          </div>

          <div className="border border-gray-200 m-5 shadow-xl rounded-xl place-content-center overflow-y-auto h-[25rem] bg-primary2">
          {data.map((mobil) => (
            <div className="flex flex-col bg-white m-7 w-80 rounded-xl hover:shadow-2xl">
                <>
                  <div className="flex">
                    <img
                      src="/sportcar.svg"
                      alt=""
                      width="50"
                      className="m-5"
                    />
                    <div className="mt-4">
                      <h1 className="font-bold ">Mobil-{mobil.id}</h1>
                      <p className="">{mobil.nama_kendaraan}</p>
                    </div>

                  </div>

                  <div className="flex justify-end m-5 gap-2 ">
                    <Link
                      to={`/read/${mobil.id}`}
                      className="btn-sm rounded-full bg-primary4 text-white py-1"
                    >
                      Lihat
                    </Link>
                    <Link
                      onClick={ ()=> handleDelete(mobil.id)}
                      className="btn-sm rounded-full bg-primary5 text-white py-1"
                    >
                      Hapus
                    </Link>
                  </div>
                </>
            </div>
            ))}

            {/* Modal Button */}
            <div className="flex justify-end m-9">
              <button
                className=" bg-primary4 rounded-full"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <GoPlus className="w-11 h-11" />
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold">PILIH JENIS KENDARAAN</h3>
                    <div className="flex m-11 gap-9 justify-center">
                      <a>
                        <img
                          src="/motorsport.svg"
                          alt=""
                          width="32"
                          className="flex flex-col mb-2 justify-center"
                        />
                        Motor
                      </a>
                      <a>
                        <Link to="/tambahaset">
                          <img
                            src="/sportcar.svg"
                            alt=""
                            width="50"
                            className="flex flex-col mb-2"
                          />
                          Mobil
                        </Link>
                      </a>
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
