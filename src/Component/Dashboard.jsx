import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="navbar bg-base-500 shadow-lg">
      <div className="flex-1 p-5 pl-9">
        <img src="./public/logo.svg"></img>
      </div>
      <div className="flex-none gap-9">
        <div className="dropdown dropdown-end">
          <a className="link">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-neutral indicator-item">9</span>
            </div>
          </a>
        </div>
        <div className="dropdown dropdown-end mr-9">
          <label tabIndex={0} className="btn btn-base-500 btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full">
            <div className=" rounded-full">
              <img
                alt="Phoenix"
                src="/public/Ellipse.svg"
              />
            </div>
            <p>Phoenix</p>
            <span>
             <IoIosArrowDown />
            </span>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
