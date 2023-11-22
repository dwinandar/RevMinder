import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="navbar bg-primary1 shadow-lg rounded-b-lg">
      {/* Logo Navbar */}
      <div className="flex-1 p-5 pl-9">
        <img src="./public/logo1.png"></img>
      </div>
      {/* End Logo Navbar */}

      {/* Icon Notification */}
      <div className="flex-none gap-9">
        <div className="dropdown dropdown-end">
          <a className="link">
            <div className="indicator">
              <img src="./public/bell.png" alt="" />
              <span className="badge badge-xs badge-neutral indicator-item">9</span>
            </div>
          </a>
        </div>
        {/* End Icon Notification */}

        {/* User Profile */}
        <div className="dropdown dropdown-end mr-9">
          <label tabIndex={0} className="btn bg-gray-200 btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full">
            <div className="rounded-lg">
              <img class="w-10 h-10 rounded-full" src="./public/avatar.svg" alt="Rounded avatar"></img>
            </div>
            <p className="text-sm text-start capitalize">Phoenix</p>
            <span className=" rounded-full ">
            <IoIosArrowDown />
            </span>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-xs dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
          >
            <li>
              <a className="justify-center">
                Profile
              </a>
            </li>
            <li>
              <a className="justify-center">Settings</a>
            </li>
            <li>
              <a className="justify-center">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
