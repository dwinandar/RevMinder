import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import FaCar from "react-icons/fa"

// import { faCar, faTools } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      .post("http://localhost:5050/service", values)
      .then((res) => {
        console.log(res);
        navigate("/aset");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* <NavDashboard /> */}
      <div className='flex flex-row w-full shadow-xl font-poppins'>
        {/* <Sidebar /> */}
        <div className='flex flex-col flex-1 mt-4 border border-gray-200 shadow-xl lg:mx-5 rounded-xl'>
          <div className='flex flex-col items-center min-h-screen overflow-y-auto bg-white h-96'>
            <div className='flex flex-col items-center justify-center mt-9'>
              <p className='mt-3 text-4xl font-bold '>Tambah Riwayat Service</p>
            </div>
            <div className='h-[15rem] flex flex-col items-center'>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col items-start justify-center p-4 m-4 border border-gray-200 bg-primary2 w-96 rounded-xl'>
                  <p className='mb-3 text-lg font-bold'>Informasi</p>
                  <label htmlFor='cars' className='mb-2 text-primary1'>
                    Tanggal / Jam
                  </label>
                  <input
                    type='datetime-local'
                    placeholder=''
                    className='w-full max-w-xs mb-2 input-bordered form-control'
                    onChange={(e) =>
                      setValues({ ...values, tanggal: e.target.value })
                    }
                  />
                  <input
                    type='text'
                    placeholder='Jarak Tempuh (Km)'
                    className='w-full max-w-xs mb-2 input input-bordered form-control'
                    onChange={(e) =>
                      setValues({ ...values, jarak: e.target.value })
                    }
                  />
                  <input
                    type='text'
                    placeholder='Biaya (IDR)'
                    className='w-full max-w-xs mb-2 input input-bordered form-control'
                    onChange={(e) =>
                      setValues({ ...values, biaya: e.target.value })
                    }
                  />
                  <input
                    type='text'
                    placeholder='Kategori'
                    className='w-full max-w-xs mb-2 input input-bordered form-control'
                    onChange={(e) =>
                      setValues({ ...values, kategori: e.target.value })
                    }
                  />
                  <label htmlFor='cars' className='mb-2 text-primary1'>
                    Dikerjakan oleh:
                  </label>
                  <select
                    id='cars'
                    className='w-full max-w-xs mb-2 input input-bordered form-control'
                    onChange={(e) =>
                      setValues({ ...values, dikerjakan: e.target.value })
                    }
                  >
                    <option value='sendiri'>
                      {/* <FontAwesomeIcon icon={faCar} className="mr-2" /> */}
                      Sendiri
                    </option>
                    <option value='bengkel'>
                      {/* <FontAwesomeIcon icon={faTools} className="mr-2" /> */}
                      Bengkel
                    </option>
                  </select>

                  <textarea
                    placeholder='Keterangan'
                    className='w-full max-w-xs mb-2 input input-bordered form-control'
                    rows='4'
                    onChange={(e) =>
                      setValues({ ...values, keterangan: e.target.value })
                    }
                  />
                </div>

                <button
                  className='ml-4 text-white btn bg-primary3 hover:bg-primary1'
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Simpan Data
                </button>

                <dialog
                  id='my_modal_5'
                  className='modal modal-bottom sm:modal-middle'
                >
                  <div className='p-6 bg-white rounded-lg shadow-lg modal-box'>
                    <p className='py-4 text-2xl font-bold text-center text-primary1'>
                      Tambah Service Berhasil
                    </p>
                    <div className='justify-center modal-action'>
                      <form method='dialog'>
                        <Link
                          to='/dashboard/aset'
                          className='items-center text-white btn bg-primary3 hover:bg-primary1 px-9'
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
  );
}

export default TambahService;
