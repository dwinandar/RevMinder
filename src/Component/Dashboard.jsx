import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import NavDashboard from "./NavDashboard";
import { FaMotorcycle } from "react-icons/fa6";
import { FaCalendarAlt, FaCar } from "react-icons/fa";
import daterangepicker from "flowbite-datepicker/DateRangePicker";
import { Fa1, Fa2, Fa3 } from "react-icons/fa6";
import axios from "axios";
import { TbCircleNumber1 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Dashboard = () => {

  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/jumlahdata');
        const data = await response.json();

        if (response.ok) {
          setTotalCount(data.total);
        } else {
          console.error('Server response not okay:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
    <div>
      <NavDashboard />
      <div className="w-full flex flex-row shadow-xl">
        <Sidebar />
        <div className="flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
          <div className="m-7 flex-row gap-4">
            <img src="/tangan.svg" alt="" />
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
                  daterangepicker
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={dt}
                  disabled
                ></input>
              </div>
            </div>
            {/* End Datepicker */}

            {/* Button */}
            <div className="flex justify-center gap-5">
              {/* Button Motor */}
              <Link to="" className="btn btn-ghost flex flex-col shadow-xl px-11 py-11">
                <div className=" bg-gray-400">
                  <img src="/motorsport.svg" alt="" width="40"/>
                </div>

                <div className="flex flex-col justify-center">
                  <p className=" text-primary1">Motor</p>
                  <p className="text-sm mt-2">yang anda miliki</p>
                </div>
              </Link>

              {/* Button Mobil */}
              <Link to='/aset' className="btn btn-ghost flex flex-col shadow-xl px-11 py-11">
                <div className="bg-yellow-100">
                  <img src="/sportcar.svg" alt="" width="50" />
                </div>

                <div className="flex flex-col justify-center">
                  {totalCount !== null ? ( 
                  <p className="text-primary1">{totalCount}Mobil</p>
                  ) : (
                  
                  <p className="text-sm mt-2">Yang anda miliki</p>
                  )}
                </div>
              </Link>
              {/* End Button Mobil */}
            </div>
            {/* End Button */}

            <div className="mt-3">
              <p className="font-bold text-2xl">Panduan Penggunaan</p>
            </div>
          </div>

          {/* Overflow Scroll */}
          <div className="overflow-y-auto flex justify-center h-[20rem] ml-7 mr-7 bg-primary2 rounded-lg">
          {/* Stepper */}
          <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="mb-10">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              </span>
            </li>
          </ol>
          {/* End Stepper */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
