import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

import { useEffect, useState } from "react";

const UbahSandi = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const [isVisible, setVisible] = useState([false, false])

  return (
    <div className={`py-6 mx-10`} >
      <p className="font-[600] text-lg">Ubah Sandi</p>
      <div className="mt-4 w-full flex justify-center">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <table className="form-table text-md w-[38rem] table-auto border-separate border-spacing-y-5">
            <thead></thead>
            <tbody className="">
              <tr>
                <td>
                  <label htmlFor="sandi_sekarang" className="font-[600]">Kata Sandi Sekarang</label>
                </td>
                <td>
                  <div className="flex items-center border border-white rounded-lg bg-white">
                    <input type="password" name="sandi_sekarang" placeholder="Masukkan sandi sekarang"
                      className="text-gray-600 focus:text-black focus:ring-0 w-full border-none rounded-lg" required
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="sandi_baru" className="font-[600]">Kata Sandi Baru</label>
                </td>
                <td>
                  <div className="flex items-center border border-white rounded-lg bg-white">
                    <input type={`${isVisible[0] ? "text" : "password"}`} name="sandi_baru" placeholder="Masukkan kata sandi baru"
                      className="text-gray-600 focus:text-black focus:ring-0 w-full rounded-lg border-none" required />
                    <span className="mr-4 cursor-pointer flex items-center">
                      <button onClick={() => setVisible([!isVisible[0], isVisible[1]])}
                      >
                        {isVisible[0] ? (
                          <FaEye color="gray" size={"20"} />

                        ) : (
                          <FaEyeSlash color="gray" size={"22"} />
                        )}
                      </button>
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="sandi_baru_ulang" className="font-[600]">Kata Sandi Baru</label>
                </td>
                <td>
                  <div className="flex items-center border border-white rounded-lg bg-white">
                    <input type={`${isVisible[1] ? "text" : "password"}`} name="sandi_baru_ulang" placeholder="Ketikkan ulang sandi baru"
                      className="text-gray-600 focus:text-black focus:ring-0 w-full rounded-lg border-none" required />
                    <span className="mr-4 cursor-pointer flex items-center">
                      <button onClick={() => setVisible([isVisible[0], !isVisible[1]])}
                      >
                        {isVisible[1] ? (
                          <FaEye color="gray" size={"20"} />

                        ) : (
                          <FaEyeSlash color="gray" size={"22"} />
                        )}
                      </button>
                    </span>
                  </div>
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
      </div>

    </div >

  )
}

export default UbahSandi;
