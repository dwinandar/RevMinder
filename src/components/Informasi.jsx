import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

const Informasi = () => {
  return (
    <>
      <div className="flex flex-col flex-1 overflow-y-auto mt-4 ml-5 mr-5 border h-[42rem] rounded-lg border-gray-200">
        <div className="body-font relative bg-gray-200 m-7 rounded-lg ">
          <div className="container py-8">
            <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-2xl text-1xl font-bold title-font mb-4 text-gray-900">
                Kirimkan pesan kepada kami
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Silahkan masukkan kritik dan saran anda melalui kontak dibawah
                ini dan kami berusaha untuk memberikan pelayanan yang
                memuaskan untuk anda.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto ">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-black">
                      Nama
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white bg-opacity-50 rounded-xl border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white bg-opacity-50 rounded-xl border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    ></label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tulis pesan"
                      className="w-full bg-white bg-opacity-50 rounded-xl border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full flex justify-end">
                  <button className="rounded-lg bg-primary1 text-white px-6 py-[10px] font-bold"
                  >Kirim</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="body-font relative bg-primary2 shadow-xl mx-7 my-2 p-6 rounded-lg">
          <h1 className="font-bold text-2xl text-center relative mb-4">
            Kontak Kami
            <span className="underline absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 border-b-2 mt-2 border-primary1"></span>
          </h1>

          <div className="flex justify-center mt-6">
            <ol className="flex flex-row gap-36">
              <li className="flex items-center text-center">
                <img src="/public/phone.svg" alt="Phone Icon" className="" />
                <div className="ml-2 text-left">
                  <p className="font-bold text-primary1">Phone</p>
                  <p className="text-sm">+69812131</p>
                </div>
              </li>

              <li className="flex items-center text-center">
                <img src="/public/email.svg" alt="Email Icon" className="" />
                <div className="ml-2 text-left">
                  <p className="font-bold text-primary1">Email</p>
                  <p className="text-sm">revminder@gmail.com</p>
                </div>
              </li>

              <li className="flex items-center text-center">
                <img src="/public/home.svg" alt="Address Icon" className="" />
                <div className="ml-2 text-left">
                  <p className="font-bold text-primary1">Address</p>
                  <p className="text-sm">Jl. Wedhus</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

      </div>
    </>
  );
};

export default Informasi;
