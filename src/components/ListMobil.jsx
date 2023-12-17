import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavDashboard from "./NavDashboard";
import Sidebar from "./Sidebar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { LuAlarmClock } from "react-icons/lu";
import { RxCounterClockwiseClock } from "react-icons/rx";

function ListMobil() {
  const { id } = useParams();
  const [mobil, setMobil] = useState([]);
  const [layananData, setLayananData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/read/mobil/${id}`)
      .then((res) => {
        console.log(res);
        setMobil(res.data[0]);
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:8081/layanan/mobil/${id}`)
      .then((res) => {
        console.log(res);
        setLayananData(res.data);
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
                Informasi Mobil
              </p>
              <img
                src='/Mobil.svg'
                alt='Sport Car'
                width='150'
                className='mt-4'
              />
            </div>

            <div className='h-[15rem] flex flex-col items-center space-y-4 mt-9'>
              <div className='p-6 rounded-lg shadow-md bg-primary2 w-96'>
                {/* Tipe Mobil */}
                <div className='flex mb-4'>
                  <p className='mr-2 font-bold'>Tipe Mobil :</p>
                  <p className='text-gray-800'>{mobil.nama_kendaraan}</p>
                </div>
                {/* No Polisi */}
                <div className='flex mb-4'>
                  <p className='mr-2 font-bold'>No Polisi :</p>
                  <p className='text-gray-800 font-md'>{mobil.no_pol}</p>
                </div>
                {/* Bahan Bakar */}
                <div className='flex mb-4'>
                  <p className='mr-2 font-bold'>Bahan Bakar :</p>
                  <p className='text-gray-800'>{mobil.jenis}</p>
                </div>
                {/* Transmisi */}
                <div className='flex mb-4'>
                  <p className='mr-2 font-bold'>Transmisi :</p>
                  <p className='text-gray-800 font-md'>{mobil.transmisi}</p>
                </div>
                {/* Tahun */}
                <div className='flex mb-4'>
                  <p className='mr-2 font-bold'>Tahun :</p>
                  <p className='text-gray-800 font-md'>{mobil.tahun}</p>
                </div>
                {/* Warna */}
                <div className='flex mb-5'>
                  <p className='mr-2 font-bold'>Warna :</p>
                  <p className='text-gray-800'>{mobil.warna}</p>
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
                  Riwayat layanan
                </label>
                <div className='flex items-center justify-center p-6 rounded-lg shadow-md bg-primary2 w-96 h-96'>
                  <ul>
                    {layananData.map((layanan) => (
                      <li key={layanan.id}>
                        {layanan.tanggal}, {layanan.jarak}, {layanan.keterangan}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Start Modal */}
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
                        Pilih Layanan
                      </h3>
                      <div className='flex justify-center'>
                        <Link to='/tambahservice' className='mx-4 text-center'>
                          <RxCounterClockwiseClock className='w-20 h-8 mb-2' />
                          <p className='text-sm'>Catat Service </p>
                        </Link>
                        <Link
                          to='/tambahpengingat'
                          className='mx-4 text-center'
                        >
                          <LuAlarmClock className='w-20 h-8 mb-2' />
                          <p className='text-sm'>Pengingat</p>
                        </Link>
                      </div>
                    </div>
                  </dialog>
                </button>
              </div>
              {/* End Modal */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListMobil;
