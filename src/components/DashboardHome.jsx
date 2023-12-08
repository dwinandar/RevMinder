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
    <div className="mt-4 lg:mx-5 mx-auto lg:w-[80%]  w-full">
      <section className="flex flex-col gap-2  md:border border-gray-200 md:shadow-xl rounded-xl md:p-12  py-2">
        <div className="flex-col">
          <div className="px-3">
            <img src="/icon-hand.png" alt="" />
            <p className="font-bold text-2xl">Hai, Phoenix!</p>
            <p className="text-sm mb-3">
              Selamat datang dilayanan FixNDrive, ayo explore fitur yang kita
              miliki.
            </p>
          </div>

          {/* Datepicker */}
          <div className="flex justify-center md:justify-end mt-2 mb-4 text-sm">
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 transition-colors duration-300"
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
        </div>

        <div className="container flex flex-col">

          <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
            {/* Button */}
            <button className={`flex flex-col md:flex-row items-center justify-center bg-gray-200 shadow-xl lg:px-12 px-8 py-4 rounded-lg max-w-[30rem]`}>
              <Link to="/dashboard/aset" className="btn btn-ghost hover:scale-105 transition-transform flex gap-4">
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
              </Link>
            </button>

            <button className="flex  items-center bg-gray-200 shadow-xl py-4 lg:px-12 px-8  rounded-lg gap-4">
              <Link to="/dashboard/aset" className="btn btn-ghost hover:scale-105 transition-transform rounded-lg">
                <FaCar size={"46"} color={"#21217A"} />
                <div
                  className="text-[#21217A] flex flex-col"
                >
                  <p
                    className="text-lg"
                  >{`${jumlahDataMobil < 1 ? 0 : jumlahDataMobil} Mobil`}</p>
                  <span className="">
                    Yang Anda miliki
                  </span>
                </div>
              </Link>
            </button>
            {/* End Button */}
          </div>

          <div className="mt-6 mb-2 px-2">
            <p className="font-bold text-2xl">Panduan Penggunaan</p>
          </div>

          <div className="bg-gray-200 rounded-lg pt-3 pb-6 xl:p-0">
            <div className="flex flex-col xl:flex-row gap-2 justify-center items-center font-bold text-xl md:text-2xl px-2 my-4">
              <p className="">3 Langkah Mudah Menggunakan</p>
              <img src="/logo2.png" alt="Revminder Logo" />
            </div>

            <div className="lg:overflow-y-auto lg:h-48 px-6 lg:px-0">
              <div className="flex justify-center xl:ml-[6rem]">
                <ol className="flex flex-col my-2 gap-1 xl:gap-0">
                  <li className="">
                    <div className="step-one flex gap-2 xl:gap-4 justify-center xl:justify-start">
                      <span
                        className="hidden xl:flex flex justify-center items-center ring-[5px] ring-[#F2994A] bg-[#4C4DDC] rounded-full w-8  h-8"
                      >
                        <Fa1 color={"white"} fontFamily="Poppins" />
                      </span>
                      <div className="step-one-content flex flex-col text-center xl:text-start ">
                        <p className="font-bold lg:leading-tight text-[#4C4DDC]">Lakukan Pendaftaran Akun</p>
                        <p className="md:font-medium md:leading-tight">
                          Mulai dengan pendaftaran di situs RevMinder secara gratis
                        </p>
                      </div>
                    </div>
                  </li>

                  <span className="self-center xl:-translate-y-[4px] xl:-translate-x-[315px] rounded-full xl:rounded-none border-s-4 xl:border-s-[5px] border-[#F2994A] block h-10"></span>

                  <li className="">
                    <div className="step-one flex gap-2 xl:gap-4 justify-center xl:justify-start">
                      <span
                        className="hidden xl:flex flex justify-center items-center ring-[5px] ring-[#F2994A] bg-[#4C4DDC] rounded-full w-8  h-8"
                      >
                        <Fa2 color={"white"} fontFamily="Poppins" />
                      </span>
                      <div className="step-one-content flex flex-col text-center xl:text-start ">
                        <p className="font-bold lg:leading-tight text-[#4C4DDC]">Masukkan Akun</p>
                        <p className="md:font-medium md:leading-tight">
                          Masuk menggunakan akun yang sudah Anda daftarkan
                        </p>
                      </div>
                    </div>
                  </li>

                  <span className="self-center xl:-translate-y-[4px] xl:-translate-x-[315px] rounded-full xl:rounded-none border-s-4 xl:border-s-[5px] border-[#F2994A] block h-10"></span>

                  <li className="">
                    <div className="step-one flex gap-2 xl:gap-4">
                      <span
                        className="hidden xl:flex flex justify-center items-center ring-[5px] ring-[#F2994A] bg-[#4C4DDC] rounded-full w-8  h-8"
                      >
                        <Fa3 color={"white"} fontFamily="Poppins" />
                      </span>
                      <div className="step-one-content flex flex-col text-center xl:text-start ">
                        <p className="font-bold lg:leading-tight text-[#4C4DDC]">Jelajahi Fitur</p>
                        <p className="md:font-medium md:leading-tight">
                          Setelah berhasil login, silahkan jelajahi fitur-fitur yang telah kami sediakan 😊
                        </p>
                      </div>
                    </div>
                  </li>

                </ol>
              </div>
            </div>

          </div>

          {/* Overflow Scroll */}
          {/* <div className="hidden bg-primary2  rounded-lg"> */}
          {/*   <div className="md:h-[10rem]"> */}
          {/*     <p className="flex flex-col md:flex-row items-center gap-2 my-4 font-bold text-2xl text-primary1"> */}
          {/*       3 Langkah Mudah Menggunakan */}
          {/*       <img */}
          {/*         src="../../public/logo2.png" */}
          {/*         className="pl-1" */}
          {/*         width="170" */}
          {/*       ></img> */}
          {/*     </p> */}

          {/* Stepper */}
          {/* <ol className="relative text-gray-500 border-s border-blue-900 dark:border-blue-700 dark:text-gray-400 "> */}
          {/*   <li className="mb-10 ms-6"> */}
          {/*     <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"> */}
          {/*       <Fa1 /> */}
          {/*     </span> */}
          {/*     <h3 className="font-medium leading-tight">Lakukan Pendaftaran akun</h3> */}
          {/*     <p className="text-sm">Mulai dengan melakukan pendaftaran di situs kami secara gratis.</p> */}
          {/*   </li> */}
          {/*   <li className="mb-10 ms-6"> */}
          {/*     <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"> */}
          {/*       <Fa2 /> */}
          {/*     </span> */}
          {/*     <h3 className="font-medium leading-tight">Masukkan Akun</h3> */}
          {/*     <p className="text-sm">Masuk menggunakan akun yang audah anda daftarkan</p> */}
          {/*   </li> */}
          {/*   <li className="mb-10 ms-6"> */}
          {/*     <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"> */}
          {/*       <Fa3 /> */}
          {/*     </span> */}
          {/*     <h3 className="font-medium leading-tight">Jelajahi Fitur</h3> */}
          {/*     <p className="text-sm">Setelah berhasil login, silahkan jelajahi fitur-fitur yang telah kami sediakan 😊</p> */}
          {/*   </li> */}
          {/* </ol> */}
          {/* End Stepper */}

          {/* </div> */}
          {/* </div> */}
        </div>
      </section >

    </div >

  )
}
export default DashboardHome;
