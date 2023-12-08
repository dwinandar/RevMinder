import React from "react";
import NavDashboard from "./NavDashboard";
import Sidebar from "./Sidebar";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { faCar, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TambahService() {

  const navigate = useNavigate();
  const { id } = useParams();
  const [values, setValues] = useState({
    tanggal: "",
    jarak: "",
    biaya: "",
    kategori: "",
    dikerjakan: "",
    keterangan: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post("http://localhost:8081/layanan", values)
      .then((res) => {
        console.log(res);
        navigate("/aset");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavDashboard />
      <div className="w-full flex flex-row shadow-xl font-poppins">
        <Sidebar />
        <div className="flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
          <div className="overflow-y-auto h-96 flex flex-col items-center bg-white min-h-screen">
            <div className="flex flex-col items-center justify-center mt-9">
              <p className="font-bold mt-3 text-4xl ">Tambah Riwayat Service</p>
            </div>
            <div className="h-[15rem] flex flex-col items-center">
              <form onSubmit={handleSubmit}>
                <div className="bg-primary2 border border-gray-200 w-96 m-4 p-4 flex flex-col items-start justify-center rounded-xl">
                  <p className="font-bold  text-lg mb-3">Informasi</p>
                  <label htmlFor="cars" className="text-primary1 mb-2">
                    Tanggal / Jam
                  </label>
                  <input
                    type="datetime-local"
                    placeholder=""
                    className="input-bordered w-full max-w-xs mb-2  form-control"
                    onChange={(e) =>
                      setValues({ ...values, tanggal: e.target.value })
                    }
                  />
                  <input
                    type="text"

                    placeholder="Jarak Tempuh (Km)"
                    className="input input-bordered w-full max-w-xs mb-2  form-control"
                    onChange={(e) =>
                      setValues({ ...values, jarak: e.target.value })
                    }
                  />
                  <input
                    type="text"

                    placeholder="Biaya (IDR)"
                    className="input input-bordered w-full max-w-xs mb-2  form-control"
                    onChange={(e) =>
                      setValues({ ...values, biaya: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Kategori"
                    className="input input-bordered w-full max-w-xs mb-2  form-control"
                    onChange={(e) =>
                      setValues({ ...values, kategori: e.target.value })
                    }
                  />
                  <label htmlFor="cars" className="text-primary1 mb-2">
                    Dikerjakan oleh:
                  </label>
                  <select
                    id="cars"

                    className="input input-bordered w-full max-w-xs mb-2  form-control"
                    onChange={(e) =>
                      setValues({ ...values, dikerjakan: e.target.value })
                    }
                  >
                    <option value="sendiri">
                      <FontAwesomeIcon icon={faCar} className="mr-2" />
                      Sendiri
                    </option>
                    <option value="bengkel">
                      <FontAwesomeIcon icon={faTools} className="mr-2" />
                      Bengkel
                    </option>
                  </select>

                  <textarea
                    placeholder="Keterangan"

                    className="input input-bordered w-full max-w-xs mb-2  form-control"
                    rows="4"
                    onChange={(e) =>
                      setValues({ ...values, keterangan: e.target.value })
                    }
                  />
                </div>

                <button
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
                          to="/aset"
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

export default TambahService;