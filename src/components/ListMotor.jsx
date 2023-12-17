import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavDashboard from "./NavDashboard";
import Sidebar from "./Sidebar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";

function ListMotor() {
  const { id } = useParams();
  const [motor, setMotor] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5050/read/motor/" + id)
      .then((res) => {
        console.log(res);
        setMotor(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <NavDashboard />
      <div className='flex flex-row w-full shadow-xl font-poppins'>
        <Sidebar />
        <div className='flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl'>
          <div>
            <a className=''>
              <Link to='/aset'>
                <IoMdArrowRoundBack className='text-4xl m-7 ' />
              </Link>
            </a>
          </div>

          <div className='flex flex-col items-center min-h-screen overflow-y-auto bg-white h-96'>
            <div className='flex flex-col items-center justify-center mt-9'>
              <p className='mt-3 text-4xl font-bold text-primary'>
                Informasi Motor
              </p>
              <img
                src='/classicmotor.svg'
                alt='Sport Car'
                width='150'
                className='mt-4'
              />
            </div>

            <div className='h-[15rem] flex flex-col items-center space-y-4 mt-9'>
              <div className='p-6 rounded-lg shadow-md bg-primary2 w-96'>
                {/* Tipe Motor */}
                <div className='flex mb-4'>
                  <p className='mr-2 font-bold'>Tipe Motor :</p>
                  <p className='text-gray-800'>{motor.nama_kendaraan}</p>
                </div>
                {/* No Polisi */}
                <div className='flex mb-4'>
                  <p className='mr-2 font-bold'>No Polisi :</p>
                  <p className='text-gray-800 font-md'>{motor.no_pol}</p>
                </div>
                {/* Bahan Bakar */}
                <div className='flex mb-4'>
                  <p className='mr-2 font-bold'>Bahan Bakar :</p>
                  <p className='text-gray-800'>{motor.jenis}</p>
                </div>
                {/* Transmisi */}
                <div className='flex mb-4'>
                  <p className='mr-2 font-bold'>Transmisi :</p>
                  <p className='text-gray-800 font-md'>{motor.transmisi}</p>
                </div>
                {/* Tahun */}
                <div className='flex mb-4'>
                  <p className='mr-2 font-bold'>Tahun :</p>
                  <p className='text-gray-800 font-md'>{motor.tahun}</p>
                </div>
                {/* Warna */}
                <div className='flex mb-5'>
                  <p className='mr-2 font-bold'>Warna :</p>
                  <p className='text-gray-800'>{motor.warna}</p>
                </div>
              </div>

              <div className='flex flex-col items-start space-y-4'>
                <label htmlFor='' className='font-bold'>
                  Pengingat
                </label>
                <div className='flex items-center space-x-4'>
                  <button className='btn btn-active'>Aktif</button>
                  <button className='btn btn-active'>Selesai</button>
                </div>

                <div className='flex items-center justify-center p-6 rounded-lg shadow-md bg-primary2 w-96 h-96'>
                  <p className='text-gray-500'>Pengingat masih kosong</p>
                </div>

                <label htmlFor='' className='font-bold'>
                  Riwayat Service
                </label>
                <div className='flex items-center justify-center p-6 rounded-lg shadow-md bg-primary2 w-96 h-96'>
                  <p className='text-gray-500'>Riwayat Service masih kosong</p>
                </div>
              </div>
              <div className='flex justify-end ml-auto'>
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
                        <Link
                          to='/tambahdatamotor'
                          className='mx-4 text-center'
                        >
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListMotor;
