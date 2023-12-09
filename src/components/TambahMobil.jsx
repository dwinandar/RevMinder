import { Link } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TambahMobil = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nama_pemilik: "",
    no_pol: "",
    nama_kendaraan: "",
    merek: "",
    model: "",
    transmisi: "",
    tahun: "",
    warna: "",
    jenis: "",
    produk: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/tambahmobil", values)
      .then((res) => {
        console.log(res);
        document.getElementById("my_modal_5").showModal()
        navigate("/dashboard/aset");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="w-full flex flex-row lg:mr-5">
        <div className="flex flex-col flex-1 mt-4 lg:ml-5 md:border md:border-gray-200 md:shadow-xl md:rounded-xl">
          {/* Arrow */}
          <div className="flex my-7 mx-5 gap-3">
            <Link to="/dashboard/aset">
              <IoMdArrowRoundBack className="text-4xl " />
            </Link>
            <div className="text-xl font-bold flex items-center">
              Tambah Aset
            </div>
          </div>
          {/* End Arrow */}

          <div className="overflow-y-auto lg:h-[80%] w-[100%] m-auto p-1 md:px-4 md:py-4 flex flex-col items-center">
            {/**/}
            <div className="flex flex-col items-center justify-center mt-9">
              <img src="/Mobil.svg" alt="" width="200" />
              <p className="font-bold mt-3 text-lg">Tambah Data Mobil</p>
            </div>

            {/* */}
            <div className="lg:h-[15rem] flex flex-col md:items-center gap-10 mt-8">
              <div className="bg-primary2 border border-gray-200 w-[22rem] md:w-96 flex flex-col justify-center lg:flex-none py-2  rounded-xl">
                <p className="font-bold mt-5 mx-4 mb-1">Data Kepemilikan</p>
                <input
                  type="text"
                  placeholder="Nama Pemilik"
                  className="input input-bordered  max-w-xs m-2 rounded-full form-control"
                  onChange={(e) =>
                    setValues({ ...values, nama_pemilik: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Nomor Registrasi (NoPol)"
                  className="input input-bordered w-full max-w-xs m-2 rounded-full form-control"
                  onChange={(e) =>
                    setValues({ ...values, no_pol: e.target.value })
                  }
                />
              </div>


              <div className="bg-primary2 border border-gray-200 w-[22rem] md:w-96 flex flex-col justify-center lg:flex-none py-2  rounded-xl">
                <p className="font-bold mt-5 mx-4 mb-1">Data Kendaraan</p>
                <input
                  type="text"
                  placeholder="Nama Kendaraan"
                  className="input input-bordered w-full max-w-xs m-2 rounded-full form-control"
                  onChange={(e) =>
                    setValues({ ...values, nama_kendaraan: e.target.value })
                  }
                />
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Merek"
                    className="input input-bordered w-full max-w-xs m-2 rounded-full form-control"
                    onChange={(e) =>
                      setValues({ ...values, merek: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Model"
                    className="input input-bordered w-full max-w-xs m-2 rounded-full form-control"
                    onChange={(e) =>
                      setValues({ ...values, model: e.target.value })
                    }
                  />
                </div>

                <input
                  type="text"
                  placeholder="Transmisi"
                  className="input input-bordered w-full max-w-xs m-2 rounded-full form-control"
                  onChange={(e) =>
                    setValues({ ...values, transmisi: e.target.value })
                  }
                />
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Tahun"
                    className="input input-bordered w-full  max-w-xs m-2 rounded-full form-control"
                    onChange={(e) =>
                      setValues({ ...values, tahun: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Warna"
                    className="input input-bordered w-full max-w-xs m-2 rounded-full form-control"
                    onChange={(e) =>
                      setValues({ ...values, warna: e.target.value })
                    }
                  />
                </div>
              </div>


              <div className="bg-primary2 border border-gray-200 w-[22rem] md:w-96 flex flex-col justify-center lg:flex-none py-2  rounded-xl">
                <p className="font-bold mt-5 mx-4 mb-1">Bahan Bakar</p>
                <input
                  type="text"
                  placeholder="Jenis"
                  className="input input-bordered w-full max-w-xs m-2 rounded-full form-control"
                  onChange={(e) =>
                    setValues({ ...values, jenis: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Produk"
                  className="input input-bordered w-full max-w-xs m-2 rounded-full form-control"
                  onChange={(e) =>
                    setValues({ ...values, produk: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-end w-full lg:mr-[rem] mb-40 md:mb-10">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn bg-primary1 hover:bg-primary3 text-white"
                  onClick={() => handleSubmit()}
                >
                  Simpan Data
                </button>
              </div>

              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box bg-white">
                  <p className="py-4 text-center font-bold text-2xl">
                    Tambah Kendaraan Berhasil
                  </p>
                  <div className="modal-action justify-center">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <Link to="/dashboard/aset">
                        <button className="btn bg-primary3 hover:bg-primary1 text-white items-center px-9">Tutup</button>
                      </Link>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default TambahMobil;

