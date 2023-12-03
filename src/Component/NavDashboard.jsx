import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="navbar bg-primary1 shadow-lg rounded-b-lg">
      {/* Logo Navbar */}
      <div className="flex-1 p-5 pl-9">
        <img src="/logo1.png" alt="Company Logo" className="w-50 h-10"></img>
      </div>
      {/* End Logo Navbar */}

      {/* Icon Notification */}
      <div className="flex-none gap-9">
        <div className="dropdown dropdown-end">
          <a className="link">
            <div className="indicator">
              <img src="/bell.svg" alt="Notification Bell" className="w-6 h-6" />
              <span className="badge badge-xs badge-primary indicator-item">9</span>
            </div>
          </a>
        </div>
        {/* End Icon Notification */}

        {/* User Profile */}
        <div className="dropdown dropdown-end mr-9">
          <label tabIndex={0} className="btn bg-gray-200 btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full">
            <div className="rounded-full">
              <img className="w-10 h-10 rounded-full" src="/avatar.svg" alt="User Avatar"></img>
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
              <a className="justify-center hover:bg-primary2">
                Profile
              </a>
            </li>
            <li>
              <a className="justify-center hover:bg-primary2">Settings</a>
            </li>
            <li>
              <a className="justify-center hover:bg-primary2">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
