import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import NavDashboard from "./NavDashboard";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';

const Dashboard = () => {

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
    <div>
      <NavDashboard />
      <div className="w-full flex flex-row shadow-xl">
        <Sidebar />
        <div className="flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
        <div className="m-7 flex-row gap-4">
      <AnimatedContent>
        <img src="/tangan.svg" alt="" />
      </AnimatedContent>
      <AnimatedContent>
        <p className="font-bold text-2xl">Hai, Phoenix!</p>
      </AnimatedContent>
      <AnimatedContent>
        <p className="text-sm truncate">
          Selamat datang dilayanan FixNDrive, ayo explore fitur yang kita miliki.
        </p>
      </AnimatedContent>

            {/* Datepicker */}

            <div className="flex justify-end py-7 pr-11 ml-auto text-sm">
              <div class="relative max-w-sm">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400 transition-colors duration-300"
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={dt}
                  disabled
                ></input>
              </div>
            </div>
            {/* End Datepicker */}

            {/* Button */}
            <div className="flex justify-center gap-5">
              {/* Button Motor */}
              <Link to="/aset" className="btn btn-ghost flex flex-col shadow-xl px-11 py-11 hover:scale-105 transition-transform">
                <div className=" bg-gray-100 rounded-full p-3">
                  <img src="/motorsport.svg" alt="" width="40"/>
                </div>

                <div className="flex flex-col items-center justify-center mt-4">
                  <p className=" text-primary1 font-semibold">{jumlahDataMotor} Motor</p>
                  <p className="text-sm mt-2">yang anda miliki</p>
                </div>
              </Link>

              {/* Button Mobil */}
              <Link to='/aset' className="btn btn-ghost flex flex-col shadow-xl px-11 py-11 hover:scale-105 transition-transform">
                <div className="bg-gray-100 rounded-full p-3">
                  <img src="/sportcar.svg" alt="" width="50" />
                </div>

                <div className="flex flex-col items-center justify-center mt-4" >
                  <p className="text-primary1 font-semibold">{jumlahDataMobil} Mobil</p>
                  <p className="text-sm mt-2">Yang anda miliki</p>
                </div>
              </Link>
              {/* End Button Mobil */}

            </div>
            {/* End Button */}

            <div className="mt-5">
              <p className="font-bold text-2xl">Panduan Penggunaan</p>
            </div>
          </div>

          {/* Overflow Scroll */}
          <div className="overflow-y-auto flex justify-center h-[20rem] ml-7 mr-7 bg-primary2 rounded-lg">
          {/* Stepper */}
          
          {/* End Stepper */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
