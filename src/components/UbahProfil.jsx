import Avatar from "./Avatar";

import image from "../assets/UserPhoto.png"

import { useState } from "react";

function triggerInputFile(id) {
  document.getElementById(id).click();
}

const UbahProfil = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const [file, setFile] = useState()
  const handleChange = (e) => {
    let f = e.target.files[0];

    const acc = ["image/jpg", "image/png", "image/jpeg"];
    let isAcc = false;

    acc.forEach((item) => {
      if (f.type.includes(item)) {
        isAcc = f.type.includes(item)
        return;
      }
    })

    if (isAcc) {
      try {
        setFile(URL.createObjectURL(e.target.files[0]));
      }
      catch (e) {
        alert("Terjadi Kesalahan!");
      }

    } else {
      alert("Berkas harus berupa gambar!");
      return
    }
  }


  return (
    <div className={`py-6 mx-10`} >
      <p className="font-[600] text-lg">Lihat/Edit Profil</p>
      <div className={`flex flex-row justify-start gap-10`}>
        <div className="mt-10 block w-[8rem]">
          <button onClick={() => document.getElementById("profil-modal").showModal()}>
            <Avatar dot={true} width={"w-32"} src={`${image}`} attr="border border-[#4C4DDC] border-[3px] p-[1px]" />
          </button>
        </div>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="profil-modal" className="modal">
          <div className="modal-box bg-white">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
            </form>
            <h3 className="font-bold text-lg">Foto Profil</h3>
            <div className="profil-pic flex flex-col gap-8 items-center justify-center my-2">
              <Avatar width={"w-32"} src={`${file === "" ? image : file}`} attr="border border-[#4C4DDC] border-[3px] p-[1px]" />
              <div className="flex flex-col gap-2">
                <button
                  className="text-[#4C4DDC] border-[2px] border-[#4C4DDC] py-2 px-4 rounded-lg bg-white font-bold"
                  onClick={() => triggerInputFile("unggah-foto")}
                >
                  Unggah Foto
                  <input id="unggah-foto" type="file"
                    className="hidden"
                    onChange={(e) => handleChange(e)}
                  />
                </button>

                <button
                  className="bg-[#4C4DDC] py-2 px-4 rounded-lg text-white font-bold"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </dialog>


        <form action="" className="w-full" onSubmit={(e) => handleSubmit(e)}>
          <table className="form-table text-md w-full table-auto border-separate border-spacing-x-4 border-spacing-y-5">
            <thead></thead>
            <tbody className="">
              <tr>
                <td>
                  <label htmlFor="nama_lengkap" className="font-[600]">Nama Lengkap</label>
                </td>
                <td>
                  <input type="text" name="nama_lengkap" defaultValue={"Pheonix"} className="text-gray-600 focus:text-black w-full rounded-lg border-none" required />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="email" className="font-[600]">Email</label>
                </td>
                <td>
                  <input type="text" name="email" defaultValue={"pheonix@gmail.com"} className="text-gray-600 focus:text-black w-full rounded-lg border-none" required />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="no_hp" className="font-[600]">Nomor Whatsapp</label>
                </td>
                <td>
                  <input type="text" name="no_hp" defaultValue={"0812345678"} className="text-gray-600 focus:text-black w-full rounded-lg border-none" required />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="alamat" className="font-[600]">Alamat</label>
                </td>
                <td>
                  <input type="text" name="alamat" defaultValue={"Cengkareng, Jakarta 43123"} className="text-gray-600 focus:text-black w-full rounded-lg border-none" required />
                </td>
              </tr>

              <tr>
                <td>
                </td>
                <td className="text-right">
                  <button type="submit" className="font-bold px-4 py-2 rounded-lg text-white bg-[#4C4DDC]">Simpan</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

      </div >



    </div >
  );

}

export default UbahProfil;

