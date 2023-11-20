import React from "react";
import Sidebar from "./Sidebar";
import NavDashboard from "./NavDashboard";
import { IoLogoModelS } from "react-icons/io";
import { FaMotorcycle } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

const Dashboard = () => {
  var showdate = new Date();
  var displaytodaysdate =
    showdate.getDate() +
    "/" +
    (showdate.getMonth() + 1) +
    "/" +
    showdate.getFullYear();
  var dt = showdate.toDateString();
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

            <div className="flex justify-end py-7 pr-11 text-sm">
              <FaCalendarAlt className="w-9 h-6" />
              {dt} - {displaytime}
            </div>

            <div className="flex py-11 gap-11 justify-center">
              <button className="shadow-xl btn btn-wide">
                <FaMotorcycle className="w-10" />
                Motor
              </button>
              <button className="shadow-xl btn btn-wide">
                <FaCar className="w-10" />
                Mobil
              </button>
            </div>

            <div>
              <p className="font-bold text-2xl">Panduan Penggunaan</p>
            </div>
          </div>

          {/* Overflow Scroll */}
          <div className="overflow-y-auto p-7 justify-center ">
            <div className="h-[10rem]">
              <p className="justify-center flex mb-9 font-bold text-3xl">
                Cara Menggunakan Website FixNDrive
              </p>
              <img
                src="./public/daftarakun.png"
                alt=""
                width="450"
                height="auto"
                className="m-11 mb-9"
              />

              <div className="content">
                <p className="justify-center flex mb-9 font-bold ">
                  Jika belum mempunyai akun silahkan mendaftar terlebih dahulu
                </p>
              </div>

              <img
                src="./public/masuk.png"
                alt=""
                width="450"
                height="auto"
                className="pl-11 mb-9"
              />
              <div className="content ">
                <p className="justify-center flex mb-9 font-bold ">
                  Jika sudah mempunyai akun silahkan login menggunakan akun yang
                  sudah didaftarkan
                </p>
              </div>

              <img
                src="./public/dashboard.png"
                alt=""
                width="450"
                height="auto"
                className=" mb-9"
              />
              <div className="content">
                <p className="justify-center flex mb-9 font-bold ">
                  Jika sudah berhasil login, maka akan diarahkan ke halaman
                  dashboard. Silahkan untuk mencoba fitur kami{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
