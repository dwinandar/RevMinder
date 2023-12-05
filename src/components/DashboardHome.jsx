import { FaMotorcycle } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { Fa1, Fa2, Fa3 } from "react-icons/fa6";

import axios from "axios";
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from "react";

const DashboardHome = () => {
  const AnimatedContent = ({ children }) => {
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 1000 },
    });

    return <animated.div style={props}>{children}</animated.div>;
  };

  const [jumlahDataMobil, setJumlahDataMobil] = useState(null);
  const [jumlahDataMotor, setJumlahDataMotor] = useState(null);

  useEffect(() => {
    const fetchDataMobil = async () => {
      try {
        const response = await fetch('http://localhost:8081/jumlahdatamobil');
        const data = await response.json();
        setJumlahDataMobil(data[0]['COUNT(*)']);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDataMobil();
  }, []);

  useEffect(() => {
    const fetchDataMotor = async () => {
      try {
        const response = await fetch('http://localhost:8081/jumlahdatamotor');
        const data = await response.json();
        setJumlahDataMotor(data[0]['COUNT(*)']);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDataMotor();
  }, []);

  var showdate = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var displaytodaysdate =
    showdate.getDate() +
    "/" +
    (showdate.getMonth() + 1) +
    "/" +
    showdate.getFullYear();
  var dt = showdate.toLocaleDateString("id-ID", options);
  var displaytime =
    showdate.getHours() +
    " : " +
    showdate.getMinutes() +
    " : " +
    showdate.getSeconds();

  return (
    <div className="h-[42rem] mt-4 ml-5 w-[80%]">
      <section className=" h-[100%] overflow-y-auto border border-gray-200 shadow-xl rounded-xl p-12">
        <div className="flex-row gap-4">
          <img src="/icon-hand.png" alt="" />
          <p className="text-2xl font-bold">Hai, Phoenix!</p>
          <p className="text-sm truncate">
            Selamat datang dilayanan FixNDrive, ayo explore fitur yang kita
            miliki.
          </p>

          {/* Datepicker */}
          <div className="flex justify-end ml-auto text-sm py-7 pr-11">
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 transition-colors duration-300 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={dt}
                disabled
              ></input>
            </div>
          </div>
          {/* End Datepicker */}

          {/* <div className="flex self-center justify-center py-11 gap-11"> */}
          {/*   <button className="py-3 shadow-xl px-11 hover:border-b-2 hover:border-blue-800"> */}
          {/*     <FaMotorcycle className="w-10 shadow-xl" /> */}
          {/*     Motor */}
          {/*   </button> */}
          {/*   <button className="py-3 shadow-xl px-11 hover:border-b-2 hover:border-blue-800 text-primary2"> */}
          {/*     <FaCar className="w-10" /> */}
          {/*     Mobil */}
          {/*   </button> */}
          {/* </div> */}

          <div>
            <p className="text-2xl font-bold">Panduan Penggunaan</p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center gap-5">
          {/* Button Motor */}
          <div className="flex self-center justify-center py-11 gap-11">
            <Link to="/dashboard/aset" className="transition-transform btn btn-ghost hover:scale-105">
              <button className={`flex items-center  bg-gray-200 shadow-xl px-12 py-4 rounded-lg gap-4`}
              >
                <FaMotorcycle size={"46"} color={"#21217A"} />
                <div className="flex flex-col items-center text-[#21217A]">
                  <p
                    className="text-lg"
                  >{`${jumlahDataMotor < 1 ? 0 : jumlahDataMotor} Motor`}</p>
                  <span
                  >
                    Yang Anda miliki
                  </span>
                </div>
              </button>
            </Link>

            <Link to="/dashboard/aset" className="transition-transform rounded-lg btn btn-ghost hover:scale-105">
              <button className="flex items-center gap-4 px-12 py-4 bg-gray-200 rounded-lg shadow-xl">
                <FaCar size={"46"} color={"#21217A"} />
                <div
                  className="text-[#21217A] flex flex-col"
                >
                  <p
                    className="text-lg"
                  >{`${jumlahDataMobil < 1 ? 0 : jumlahDataMobil} Mobil`}</p>
                  <span className="">
                    Yand Anda miliki
                  </span>
                </div>
              </button>
            </Link>
          </div>
        </div>
        {/* End Button */}


        {/* Overflow Scroll */}
        <div className="overflow-y-auto p-7 flex justify-center bg-primary2 m-6 rounded-lg h-[26rem]">
          <div className="h-[10rem]">
            <p className="flex justify-center text-2xl font-bold mb-9 text-primary1">
              3 Langkah Mudah Menggunakan
              <img
                src="../../public/logo2.png"
                className="pl-1"
                width="170"
              ></img>
            </p>

            {/* Stepper */}
            <ol className="relative text-gray-500 border-blue-900 border-s dark:border-blue-700 dark:text-gray-400 ml-96">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                  <Fa1 />
                </span>
                <h3 className="font-medium leading-tight">Lakukan Pendaftaran akun</h3>
                <p className="text-sm">Mulai dengan melakukan pendaftaran di situs kami secara gratis.</p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <Fa2 />
                </span>
                <h3 className="font-medium leading-tight">Masukkan Akun</h3>
                <p className="text-sm">Masuk menggunakan akun yang audah anda daftarkan</p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                  <Fa3 />
                </span>
                <h3 className="font-medium leading-tight">Jelajahi Fitur</h3>
                <p className="text-sm">Setelah berhasil login, silahkan jelajahi fitur-fitur yang telah kami sediakan 😊</p>
              </li>
            </ol>
            {/* End Stepper */}

          </div>
        </div>
      </section>

    </div>

  )
}
export default DashboardHome;
