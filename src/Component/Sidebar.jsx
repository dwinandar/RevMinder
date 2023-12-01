import React from "react";
import { Link } from 'react-router-dom';
import { RiMenu3Fill, RiCustomerServiceFill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { RiArticleFill } from "react-icons/ri";
import { MdWebAsset, MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Dashboardview = () => {
  return (
      <div className="ml-5 border border-gray-200 w-80 shadow-xl mt-4 rounded-xl">

        {/* Avatar Sidebar */}
        <div className="avatar pl-7 mt-3  ">
          <div className="rounded-full items-center mt-3 w-20">
            <img src="/avatar.svg" />
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
        <div className="menu w-80 p-6 gap-3 flex justify-start">
          <p className="text-lg font-bold justify-start">Dashboard</p>
          <li>
            <Link to='/dashboard' className="font-semibold hover:bg-primary2 ">
              <MdDashboard />
              Dashboard
            </Link>
          </li>
          <p className="text-lg font-bold justify-start">Menu Utama</p>
          <li className="flex flex-col justify-center">
            <a className="font-semibold hover:bg-primary2">
              <RiCustomerServiceFill />
              Layanan
            </a>
          </li>
          <li>
            <Link to='/aset' className="font-semibold hover:bg-primary2">
              <MdWebAsset />
              Aset
            </Link>
          </li>
          <li>
            <a className="font-semibold hover:bg-primary2">
              <RiArticleFill />
              Artikel & Video
            </a>
          </li>
          <li>
            <a className="font-semibold hover:bg-primary2">
              <HiChatBubbleLeftRight />
              Forum
            </a>
          </li>
          <li>
            <a className="font-semibold hover:bg-primary2">
              <IoSettingsSharp />
              Pengaturan
            </a>
          </li>
          <p className="text-lg font-bold justify-start">Informasi</p>
          <li>
            <a className="font-semibold hover:bg-primary2">
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
