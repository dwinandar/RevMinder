import React from "react";
import Sidebar from './Sidebar';
import NavDashboard from './NavDashboard';
import { FaMotorcycle } from "react-icons/fa6";
import { FaCalendarAlt, FaCar } from "react-icons/fa";
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
import { Fa1, Fa2, Fa3 } from "react-icons/fa6";

const Dashboard = () => {
  
  var showdate = new Date();
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  var displaytodaysdate =
    showdate.getDate() +
    "/" +
    (showdate.getMonth() + 1) +
    "/" +
    showdate.getFullYear();
  var dt = showdate.toLocaleDateString('id-ID', options);
  var displaytime =
    showdate.getHours() +
    " : " +
    showdate.getMinutes() +
    " : " +
    showdate.getSeconds();

  return (
    <div>
      <NavDashboard />
      <div className="w-full flex flex-row">
        <Sidebar />
        <section className="grid grid-rows-2 flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
          <div className="m-7 flex-row gap-4">
            <img src="./public/icon-hand.png" alt="" />
            <p className="font-bold text-2xl">Hai, Phoenix!</p>
            <p className="text-sm truncate">
              Selamat datang dilayanan FixNDrive, ayo explore fitur yang kita
              miliki.
            </p>

            {/* Datepicker */}
          
            <div className="flex justify-end py-7 pr-11 text-sm">
              <div class="relative max-w-sm">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  datepicker
                  datepicker-autohide
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={dt} 
                ></input>
              </div>
            </div>
            {/* End Datepicker */}

            <div className="flex flex-row py-11 gap-11 justify-center self-center">
              <button className="shadow-xl py-3 px-11 hover:border-b-2 hover:border-blue-800 flex">
                <FaMotorcycle className="w-10 shadow-xl flex" />
                Motor
              </button>
              <button className="shadow-xl py-3 px-11 hover:border-b-2 hover:border-blue-800  flex">
                <FaCar className="w-10" />
                Mobil
              </button>
            </div>

            <div>
              <p className="font-bold text-2xl">Panduan Penggunaan</p>
            </div>
          </div>

          {/* Overflow Scroll */}
          <div className="overflow-y-auto p-7 flex justify-center bg-primary2 m-7 rounded-lg">
            <div className="h-[10rem]">
              <p className="justify-center flex mb-9 font-bold text-2xl text-primary1">
                3 Langkah Mudah Menggunakan
                <img
                  src="./public/logo2.png"
                  className="pl-1"
                  width="170"
                ></img>
              </p>

              {/* Stepper */}
              <ol class="relative text-gray-500 border-s border-blue-900 dark:border-blue-700 dark:text-gray-400 ml-96">
                <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <Fa1 />
                  </span>
                  <h3 class="font-medium leading-tight">Lakukan Pendaftaran akun</h3>
                  <p class="text-sm">Mulai dengan melakukan pendaftaran di situs kami secara gratis.</p>
                </li>
                <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <Fa2 />
                  </span>
                  <h3 class="font-medium leading-tight">Masukkan Akun</h3>
                  <p class="text-sm">Masuk menggunakan akun yang audah anda daftarkan</p>
                </li>
                <li class="mb-10 ms-6">
                  <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                    <Fa3/>
                  </span>
                  <h3 class="font-medium leading-tight">Jelajahi Fitur</h3>
                  <p class="text-sm">Setelah berhasil login, silahkan jelajahi fitur-fitur yang telah kami sediakan 😊</p>
                </li>
              </ol>
              {/* End Stepper */}
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
