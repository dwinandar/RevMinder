import React from "react";
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { RiArticleFill } from "react-icons/ri";
import { MdWebAsset } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";

const Dashboardview = () => {
  return (
      <div className="ml-5 border border-gray-200 w-64 shadow-xl mt-4 rounded-xl">

        {/* Avatar Sidebar */}
        <div className="avatar pl-7 mt-1">
          <div className="w-16 rounded-full items-center mt-3">
            <img src="/public/avatar.svg" />
          </div>
          <p className="flex justify-center items-center font-bold p-4">
            Phoenix
          </p>
          <a className="link flex justify-center items-center pl-9">
            <RiMenu3Fill />
          </a>
        </div>
        {/* End Avatar Sidebar */}

        {/* Menu Sidebar */}
        <div className="menu w-64 p-6 gap-3 flex justify-start">
          <p className="text-lg font-bold justify-start">Dashboard</p>
          <li>
            <Link to='/Dashboard' className="active:bg-warning font-semibold hover:bg-warning ">
              <MdDashboard />
              Dashboard
            </Link>
          </li>
          <p className="text-lg font-bold justify-start">Menu Utama</p>
          <li>
            <a className="font-semibold hover:bg-warning">
              <RiCustomerServiceFill />
              Layanan
            </a>
          </li>
          <li>
            <Link to='/Aset' className="font-semibold hover:bg-warning">
              <MdWebAsset />
              Aset
            </Link>
          </li>
          <li>
            <a className="font-semibold hover:bg-warning">
              <RiArticleFill />
              Artikel & Video
            </a>
          </li>
          <li>
            <a className="font-semibold hover:bg-warning">
              <HiChatBubbleLeftRight />
              Forum
            </a>
          </li>
          <li>
            <a className="font-semibold hover:bg-warning">
              <IoSettingsSharp />
              Pengaturan
            </a>
          </li>
          <p className="text-lg font-bold justify-start">Informasi</p>
          <li>
            <a className="font-semibold hover:bg-warning">
              <FaQuestionCircle />
              Informasi
            </a>
          </li>
          <button className="flex justify-center items-center text-blue-500 mt-4 rounded-full hover:bg-sky-100 py-2 gap-3">
            <FiLogOut />
            Keluar
          </button>
          {/* End Menu Sidebar */}
          
        </div>
      </div>
  );
};

export default Dashboardview;
