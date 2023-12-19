import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
// import FaCar from "react-icons/fa"

// import { faCar, faTools } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TambahService() {
  const navigate = useNavigate();
  const { id, vehicle } = useParams();

  const [values, setValues] = useState({
    tanggal: "",
    jarak: "",
    biaya: "",
    kategori: "",
    dikerjakan: "Sendiri",
    keterangan: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios.defaults.withCredentials = true;
    axios
      .post(`http://localhost:5050/service/tambahservice/${vehicle}/${id}`, values)
      .then((res) => {
        console.log(res);
        document.getElementById("my_modal_5").showModal()
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* <NavDashboard /> */}
      <div className='flex flex-row w-full shadow-xl font-poppins'>
        {/* <Sidebar /> */}
        <div className='flex flex-col flex-1 mt-4 lg:border lg:border-gray-200 lg:shadow-xl lg:mx-5 lg:rounded-xl'>
          <div className="pl-2 sm:pl-8 mt-4">
            <Link to="/dashboard/aset">
              <IoMdArrowRoundBack className="md:m-7 mx-2 mt-2 mb-6 text-4xl " />
            </Link>
          </div>
          <div className='flex flex-col lg:items-center min-h-screen overflow-y-auto bg-white h-96'>
            <div className='flex flex-col items-center justify-center mt-9'>
              <p className='mt-3 text-4xl font-bold '>Tambah Riwayat Service</p>
            </div>
            <div className='h-[15rem] flex flex-col items-center'>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col items-start justify-center p-4 my-2 lg:m-4 border border-gray-200 bg-primary2 sm:w-[22rem] rounded-xl'>
                  <p className='mb-3 text-lg font-bold'>Informasi</p>
                  <label htmlFor='cars' className='mb-2 text-primary1'>
                    Tanggal / Jam
                  </label>
                  <input
                    type='datetime-local'
                    placeholder=''
                    className='w-full max-w-xs mb-2 input-bordered form-control '
                    onChange={(e) =>
                      setValues({ ...values, tanggal: e.target.value })
                    }
                    required />
                  <input
                    type='text'
                    placeholder='Jarak Tempuh (Km)'
                    className='w-full max-w-xs mb-2 input input-bordered focus:border-none focus:ring-0 form-control'
                    onChange={(e) =>
                      setValues({ ...values, jarak: e.target.value })
                    }
                  />
                  <input
                    type='text'
                    placeholder='Biaya (IDR)'
                    className='w-full max-w-xs mb-2 input input-bordered focus:border-none focus:ring-0 form-control'
                    onChange={(e) =>
                      setValues({ ...values, biaya: e.target.value })
                    }
                    required />
                  <input
                    type='text'
                    placeholder='Kategori'
                    className='w-full max-w-xs mb-2 input input-bordered focus:border-none focus:ring-0 form-control'
                    onChange={(e) =>
                      setValues({ ...values, kategori: e.target.value })
                    }
                    required />
                  <label htmlFor='cars' className='mb-2 text-primary1'>
                    Dikerjakan oleh:
                  </label>
                  <select
                    id='cars'
                    className='w-full max-w-xs mb-2 input input-bordered focus:border-none focus:ring-0 form-control'
                    onChange={(e) =>
                      setValues({ ...values, dikerjakan: e.target.value })
                    }
                    required >
                    <option value='Sendiri'>
                      {/* <FontAwesomeIcon icon={faCar} className="mr-2" /> */}
                      Sendiri
                    </option>
                    <option value='Bengkel'>
                      {/* <FontAwesomeIcon icon={faTools} className="mr-2" /> */}
                      Bengkel
                    </option>
                  </select>

                  <textarea
                    placeholder='Keterangan'
                    className='w-full max-w-xs mb-2 input input-bordered focus:border-none focus:ring-0 form-control'
                    rows='4'
                    onChange={(e) =>
                      setValues({ ...values, keterangan: e.target.value })
                    }
                    required />
                </div>

                <button
                  className='ml-4 text-white btn bg-primary3 hover:bg-primary1'

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
