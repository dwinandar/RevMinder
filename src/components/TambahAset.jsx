
const TambahAset = () => {
  return (
    <>
      <div className="w-full flex flex-row w-[82%]">
        <div className="flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
          {/* Arrow */}
          <div className="text-xl font-bold p-8">
            Tambah Aset
          </div>
          {/* End Arrow */}

          <div className="overflow-y-auto h-[80%] w-[100%] m-auto p-4 flex flex-col items-center">
            {/**/}
            <div className="flex flex-col items-center justify-center mt-9">
              <img src="./public/Mobil.svg" alt="" width="200" />
              <p className="font-bold mt-3 text-lg">Tambah Data Mobil</p>
            </div>

            {/* */}
            <div className="h-[15rem] flex flex-col items-center">
              <div className="bg-primary2 border border-gray-200 w-96 m-11 items-center justify-center rounded-xl">
                <p className="font-bold m-5">Data Kepemilikan</p>
                <input
                  type="text"
                  placeholder="Nama Pemilik"
                  className="input input-bordered w-full max-w-xs m-3 mb-1 rounded-full"
                />
                <input
                  type="text"
                  placeholder="Nomor Registrasi (NoPol)"
                  className="input input-bordered w-full max-w-xs m-3 mb-5 rounded-full"
                />
              </div>

              <div className="bg-primary2 border border-gray-200 w-96 m-11 items-center justify-center rounded-xl">
                <p className="font-bold m-5">Data Kendaraan</p>
                <input
                  type="text"
                  placeholder="Nama Kendaraan"
                  className="input input-bordered w-full max-w-xs m-3 mb-1 rounded-full"
                />
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Merek"
                    className="input input-bordered w-1/2 max-w-xs m-3 mb-1 rounded-full"
                  />
                  <input
                    type="text"
                    placeholder="Model"
                    className="input input-bordered w-1/2 max-w-xs m-3 mb-1 rounded-full"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Transmisi"
                  className="input input-bordered w-full max-w-xs m-3 mb-1 rounded-full"
                />
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Tahun"
                    className="input input-bordered w-1/2 max-w-xs m-3 mb-5 rounded-full"
                  />
                  <input
                    type="text"
                    placeholder="Warna"
                    className="input input-bordered w-1/2 max-w-xs m-3 mb-5 rounded-full"
                  />
                </div>
              </div>

              <div className="bg-primary2 border border-gray-200 w-96 m-11 items-center justify-center rounded-xl">
                <p className="font-bold m-5">Bahan Bakar</p>
                <input
                  type="text"
                  placeholder="Jenis"
                  className="input input-bordered w-full max-w-xs m-3 mb-1 rounded-full"
                />
                <input
                  type="text"
                  placeholder="Produk"
                  className="input input-bordered w-full max-w-xs m-3 mb-5 rounded-full"
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
                <div className="modal-box bg-white">
                  <p className="py-4 text-center font-bold text-2xl">
                    Tambah Kendaraan Berhasil
                  </p>
                  <div className="modal-action justify-center">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn bg-primary3 hover:bg-primary1 text-white items-center px-9">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TambahAset;
