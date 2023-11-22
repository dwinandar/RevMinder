import React from "react";
import Sidebar from "./Sidebar";
import NavDashboard from "./NavDashboard";
import { FaCar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import TambahAset from "./TambahAset";

const Aset = () => {
  return (
    <div>
      <NavDashboard />
      <div className="w-full flex flex-row shadow-xl">
        <Sidebar />
        <section className="flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
          <div className="m-7">
            <p className="text-3xl font-bold">Informasi Aset</p>
            <div className="flex mt-11 gap-5 ">
              <button className="shadow-2xl font-bold hover:border-b-2 hover:border-blue-800 btn-wide rounded-xl">
                <FaMotorcycle className="w-10" />
                Motor
              </button>
              <button className="shadow-xl font-bold hover:border-b-2 hover:border-blue-800 btn-wide rounded-xl">
                <FaCar className="flex w-10 justify-center" />
                Mobil
              </button>
            </div>
          </div>
          

          <div className="border border-gray-200 m-5 shadow-xl rounded-xl place-content-center bg-primary2">
            <div className="flex justify-center">
              <p className="text-center justify-center font-bold m-11">
                Belum ada kendaraan
              </p>
            </div>

            {/* Modal Button */}
            <div className="flex justify-end p-11 m-7">
              <button
                className="btn rounded-full"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <FaPlusCircle className="w-9 h-7" />
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold border-b-2">
                      Pilih jenis Kendaraan
                    </h3>
                    <div className="flex m-11 gap-11 justify-center">
                      <a>
                          <FaMotorcycle />
                      </a>
                      <a>
                        <Link to="/tambahaset">
                          <FaCar />
                        </Link>
                      </a>
                    </div>
                  </div>
                </dialog>
              </button>
            </div>
            {/* End Modal Button */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aset;
