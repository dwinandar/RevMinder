import Sidebar from "./Sidebar";
import NavDashboard from "./NavDashboard";
import { FaCar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import TambahAset from "./TambahAset";

const Aset = () => {
  return (

    <section className="flex flex-col w-[80%] mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
      <div className="p-12 flex flex-col gap-4">
        <p className="text-3xl font-bold">Informasi Aset</p>
        <div className="flex mt-11 gap-5 ">
          <button className="shadow-xl p-2 font-bold hover:border-b-2 text-[#21217A] hover:border-[#21217A] w-[10rem] rounded-xl flex justify-center flex-col items-center">
            <FaMotorcycle className="w-10" color={"#21217A"} />
            Motor
          </button>
          <button className="shadow-xl p-2 font-bold hover:border-b-2 text-[#21217A] hover:border-[#21217A] w-[10rem] rounded-xl flex justify-center flex-col items-center">
            <FaCar className="w-10" color={"#21217A"} />
            Mobil
          </button>
        </div>

        <div className="border border-gray-200 mt-6 shadow-xl rounded-xl place-content-center bg-primary2">
          <div className="flex justify-center">
            <p className="text-center text-[#21217A] justify-center font-bold m-11">
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
              <FaPlusCircle className="w-9 h-7" color={"#F2994A"} />
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold border-b-2">
                    Pilih jenis Kendaraan
                  </h3>
                  <div className="flex m-11 gap-11 justify-center">
                    <Link to="/dashboard/aset/tambahaset">
                      <FaMotorcycle />
                    </Link>
                    <Link className="link">
                      <FaCar />
                    </Link>
                  </div>
                </div>
              </dialog>
            </button>
          </div>
          {/* End Modal Button */}
        </div>

      </div>
    </section>
  );
};

export default Aset;
