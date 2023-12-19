import React from "react";
import NavDashboard from "./NavDashboard";
import Sidebar from "./Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FaCar, FaMotorcycle, FaTools } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";


const TambahPengingat = () => {
  const { vehicle, id } = useParams();


  const navigate = useNavigate();
  const [values, setValues] = useState({
    tanggal: "",
    kategori: "",
    ingatkan: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios.defaults.withCredentials = true;
    axios
      .post(`http://localhost:5050/service/tambahpengingat/${vehicle}/${id}`, values)
      .then((res) => {
        console.log(res);
        navigate("/dashboard/aset");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* <NavDashboard /> */}
      <div className="w-full flex flex-row lg:shadow-xl font-poppins">
        {/* <Sidebar /> */}
        <div className="flex flex-col flex-1 mt-4 lg:ml-5 lg:border lg:border-gray-200 lg:shadow-xl lg:rounded-xl">
          <div className='flex gap-3 mx-5 my-7'>
            <Link to='/dashboard/aset'>
              <IoMdArrowRoundBack className='text-4xl ' />
            </Link>
            {/* <div className='flex items-center text-xl font-bold'> */}
            {/*   Aset */}
            {/* </div> */}
          </div>

          <div className="overflow-y-auto h-96 flex flex-col items-center bg-white min-h-screen">
            <div className="flex flex-col items-center justify-center mt-9">
              <p className="font-bold mt-3 text-4xl ">Tambah Pengingat Service</p>
            </div>
            <div className="h-[15rem] flex flex-col items-center">
              <form onSubmit={handleSubmit}>
                <div className="bg-primary2 border border-gray-200 w-96 m-4 p-4 flex flex-col items-start justify-center rounded-xl">
                  <p className="font-bold  text-lg mb-3">Informasi</p>
                  <label htmlFor="cars" className="text-primary1 mb-2">
                    Pengingat
                  </label>
                  <input
                    type="datetime-local"
                    className="input-bordered w-full max-w-xs mb-2  form-control"
                    onChange={(e) =>
                      setValues({ ...values, tanggal: e.target.value })
                    }
                  />
                  <input
                    type="textarea"
                    placeholder="Keterangan"
                    className="input input-bordered w-full max-w-xs mb-2  form-control"
                    onChange={(e) =>
                      setValues({ ...values, kategori: e.target.value })
                    }
                  />
                  <label htmlFor="remind" className="text-primary1 mb-2">
                    Ingatkan
                  </label>
                  <select
                    id="remind"
                    className="input input-bordered w-full max-w-xs mb-2  form-control"
                    onChange={(e) =>
                      setValues({ ...values, ingatkan: e.target.value })
                    }
                  >
                    <option value="3 Menit Sebelumnya">
                      <FaCar />
                      {/* <FontAwesomeIcon icon={faCar} className="mr-2" /> */}
                      3 Menit Sebelumnya
                    </option>
                    <option value="5 Menit Sebelumnya">
                      {/* <FontAwesomeIcon icon={faTools} className="mr-2" /> */}
                      <FaTools />
                      5 Menit Sebelumnya
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn bg-primary3 hover:bg-primary1 text-white ml-4"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Simpan Data
                </button>

                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box bg-white p-6 rounded-lg shadow-lg">
                    <p className="py-4 text-center font-bold text-2xl text-primary1">
                      Tambah Service Berhasil
                    </p>
                    <div className="modal-action justify-center">
                      <form method="dialog">
                        <Link
                          to="/dashboard/aset"
                          className="btn bg-primary3 hover:bg-primary1 text-white items-center px-9"
                        >
                          Close
                        </Link>
                      </form>
                    </div>
                  </div>
                </dialog>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TambahPengingat
