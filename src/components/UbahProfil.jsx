import Avatar from "./Avatar";

import image from "../assets/UserPhoto.png";

import { useState } from "react";

function triggerInputFile(id) {
  document.getElementById(id).click();
}

const UbahProfil = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [file, setFile] = useState("");
  const [profilImage, setProfilImage] = useState("");
  const handleChange = (e) => {
    let f = e.target.files[0];

    const acc = ["image/jpg", "image/png", "image/jpeg"];
    let isAcc = false;

    acc.forEach((item) => {
      if (f.type.includes(item)) {
        isAcc = f.type.includes(item);
        return;
      }
    });

    if (isAcc) {
      try {
        setFile(URL.createObjectURL(e.target.files[0]));
      } catch (e) {
        alert("Terjadi Kesalahan!");
      }
    } else {
      alert("Berkas harus berupa gambar!");
      return;
    }
  };

  return (
    <div className={`py-6 mx-10`}>
      <p className='font-[600] text-lg'>Lihat/Edit Profil</p>
      <div className={`flex flex-row justify-start gap-10`}>
        <div className='mt-10 block w-[8rem]'>
          <button
            onClick={() => document.getElementById("profil-modal").showModal()}
          >
            <Avatar
              dot={true}
              width={"w-32"}
              src={`${profilImage !== "" ? profilImage : image}`}
              attr='border border-[#4C4DDC] border-[3px] p-[1px]'
            />
          </button>
        </div>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id='profil-modal' className='modal'>
          <div className='bg-white modal-box'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='absolute text-xl btn btn-sm btn-circle btn-ghost right-2 top-2'>
                ✕
              </button>
            </form>
            <h3 className='text-lg font-bold'>Foto Profil</h3>
            <div className='flex flex-col items-center justify-center gap-8 my-2 profil-pic'>
              <Avatar
                width={"w-32"}
                src={`${file === "" ? image : file}`}
                attr='border border-[#4C4DDC] border-[3px] p-[1px]'
              />
              <div className='flex flex-col gap-2'>
                <button
                  className='text-[#4C4DDC] border-[2px] border-[#4C4DDC] py-2 px-4 rounded-lg bg-white font-bold'
                  onClick={() => triggerInputFile("unggah-foto")}
                >
                  Unggah Foto
                  <input
                    id='unggah-foto'
                    type='file'
                    className='hidden'
                    onChange={(e) => handleChange(e)}
                  />
                </button>

                <button
                  className='bg-[#4C4DDC] py-2 px-4 rounded-lg text-white font-bold'
                  onClick={() => setProfilImage(file)}
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </dialog>

        <form action='' className='w-full' onSubmit={(e) => handleSubmit(e)}>
          <table className='w-full border-separate table-auto form-table text-md border-spacing-x-4 border-spacing-y-5'>
            <thead></thead>
            <tbody className=''>
              <tr>
                <td>
                  <label htmlFor='nama_lengkap' className='font-[600]'>
                    Nama Lengkap
                  </label>
                </td>
                <td>
                  <input
                    type='text'
                    name='nama_lengkap'
                    defaultValue={"Pheonix"}
                    className='w-full text-gray-600 border-none rounded-lg focus:text-black'
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor='email' className='font-[600]'>
                    Email
                  </label>
                </td>
                <td>
                  <input
                    type='text'
                    name='email'
                    defaultValue={"pheonix@gmail.com"}
                    className='w-full text-gray-600 border-none rounded-lg focus:text-black'
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor='no_hp' className='font-[600]'>
                    Nomor Whatsapp
                  </label>
                </td>
                <td>
                  <input
                    type='text'
                    name='no_hp'
                    defaultValue={"0812345678"}
                    className='w-full text-gray-600 border-none rounded-lg focus:text-black'
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor='alamat' className='font-[600]'>
                    Alamat
                  </label>
                </td>
                <td>
                  <input
                    type='text'
                    name='alamat'
                    defaultValue={"Cengkareng, Jakarta 43123"}
                    className='w-full text-gray-600 border-none rounded-lg focus:text-black'
                    required
                  />
                </td>
              </tr>

              <tr>
                <td></td>
                <td className='text-right'>
                  <button
                    type='submit'
                    className='font-bold px-4 py-2 rounded-lg text-white bg-[#4C4DDC]'
                  >
                    Simpan
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default UbahProfil;
