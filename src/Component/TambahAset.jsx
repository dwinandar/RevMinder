import React from "react";
import NavDashboard from "./NavDashboard";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import axios from 'axios';

function TambahAset()  {
  const [values, setValues] = useState({
    nama_pemilik: '',
    no_pol: '',
    nama_kendaraan: '',
    merek: '',
    model: '',
    transmisi: '',
    tahun: '',
    warna: '',
    jenis: '',
    produk: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/mobil', values)
    .then(res => {
      console.log(res);
      navigate('/aset')
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <NavDashboard />
      <div className="w-full flex flex-row shadow-xl">
        <Sidebar />
        <div className="flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
          {/* Arrow */}
          <div>
            <a className="">
              <Link to="/aset">
                <IoMdArrowRoundBack className="m-7 text-4xl " />
              </Link>
            </a>
          </div>
          {/* End Arrow */}

          <div className="overflow-y-auto p-7 flex flex-col items-center">
            {/**/}
            <div className="flex flex-col items-center justify-center mt-9">
              <img src="/Mobil.svg" alt="" width="200" />
              <p className="font-bold mt-3 text-lg">Tambah Data Mobil</p>
            </div>

            {/* */}
            <div className="h-[15rem] flex flex-col items-center">
              <form onSubmit={handleSubmit}>
              <div className="bg-primary2 border border-gray-200 w-96 m-11 items-center justify-center rounded-xl">
                <p className="font-bold m-5">Data Kepemilikan</p>
                <input
                  type="text"
                  placeholder="Nama Pemilik"
                  className="input input-bordered w-full max-w-xs m-3 mb-1 rounded-full form-control" onChange={e => setValues({...values, nama_pemilik: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Nomor Registrasi (NoPol)"
                  className="input input-bordered w-full max-w-xs m-3 mb-5 rounded-full form-control" onChange={e => setValues({...values, no_pol: e.target.value})}
                />
              </div>

              <div className="bg-primary2 border border-gray-200 w-96 m-11 items-center justify-center rounded-xl">

                <p className="font-bold m-5">Data Kendaraan</p>
                <input
                  type="text"
                  placeholder="Nama Kendaraan"
                  className="input input-bordered w-full max-w-xs m-3 mb-1 rounded-full form-control" onChange={e => setValues({...values, nama_kendaraan: e.target.value})}
                />
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Merek"
                    className="input input-bordered w-1/2 max-w-xs m-3 mb-1 rounded-full form-control" onChange={e => setValues({...values, merek: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Model"
                    className="input input-bordered w-1/2 max-w-xs m-3 mb-1 rounded-full form-control" onChange={e => setValues({...values, model: e.target.value})}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Transmisi"
                  className="input input-bordered w-full max-w-xs m-3 mb-1 rounded-full form-control" onChange={e => setValues({...values, transmisi: e.target.value})}
                />
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Tahun"
                    className="input input-bordered w-1/2 max-w-xs m-3 mb-5 rounded-full form-control" onChange={e => setValues({...values, tahun: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Warna"
                    className="input input-bordered w-1/2 max-w-xs m-3 mb-5 rounded-full form-control" onChange={e => setValues({...values, warna: e.target.value})}
                  />
                </div>

              </div>

              <div className="bg-primary2 border border-gray-200 w-96 m-11 items-center justify-center rounded-xl">

                <p className="font-bold m-5">Bahan Bakar</p>
                <input
                  type="text"
                  placeholder="Jenis"
                  className="input input-bordered w-full max-w-xs m-3 mb-1 rounded-full form-control" onChange={e => setValues({...values, jenis: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Produk"
                  className="input input-bordered w-full max-w-xs m-3 mb-5 rounded-full form-control" onChange={e => setValues({...values, produk: e.target.value})}
                />
              </div>
              
              
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn bg-primary3 hover:bg-primary1 text-white"
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
                <div className="modal-box">
                  <p className="py-4 text-center font-bold text-2xl">
                    Tambah Kendaraan Berhasil
                  </p>
                  <div className="modal-action justify-center">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <Link to='/aset' className="btn bg-primary3 hover:bg-primary1 text-white items-center px-9">Close</Link>
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
};

export default TambahAset;