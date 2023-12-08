import { Link } from "react-router-dom";
import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

const NavDashboard = () => {


  return (
    <div className="navbar sticky bg-primary1 shadow-lg w-screen px-6">

      {/* Logo Navbar */}
      <div className="relative hidden md:block ml-14 lg:ml-0 lg:translate-x-0 lg:flex">
        <img src="/logo1.png" className="w-60 min-w-50"></img>
      </div>
      {/* End Logo Navbar */}

      <div className="misc-container flex justify-end w-full">
        {/* Icon Notification */}
        <div className="flex items-center gap-5">
          <div className="dropdown dropdown-end">
            <button className="bell">
              <div className="indicator">
                <img src="/bell.png" alt="" />
                <span className="badge badge-xs indicator-item">9</span>
              </div>
            </button>
          </div>
          {/* End Icon Notification */}

          {/* User Profile */}
          <div className="dropdown dropdown-end items-center">
            <label tabIndex={0} className="bg-white flex items-center rounded-full p-0 md:bg-none md:px-4 md:py-1 gap-2">
              <div className="rounded-full">
                <img className="w-12 md:w-10  h-auto rounded-full" src="/avatar.svg" alt="Rounded avatar"></img>
              </div>
              <div className="flex items-center gap-2 hidden md:inline-flex">
                <p className="text-md text-start capitalize">Phoenix</p>
                <span className=" rounded-full ">
                  <IoIosArrowDown />
                </span>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-xs dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-32"
            >
              <li className="block md:hidden">
                <a className="justify-center text-md font-bold border-b-2 border-black rounded-none">Pheonix</a>
              </li>
              <li>
                <a className="justify-center">
                  Profil
                </a>
              </li>
              <li>
                <a className="justify-center">
                  Pengaturan
                </a>
              </li>
              <li>
                <a className="justify-center">
                  Keluar
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>


    </div >
  );
};

export default NavDashboard;
