import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { RiMenu3Fill, RiCustomerServiceFill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { RiArticleFill } from "react-icons/ri";
import { MdWebAsset, MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  
  return (
    <div className="ml-5 border border-gray-200 w-80  shadow-xl mt-4 rounded-xl font-poppins">

    {/* Avatar Sidebar */}
    <div className="avatar pl-7 mt-3">
      <div className="rounded-full items-center mt-3 w-20">
        <img src="/avatar.svg" alt="User Avatar" className="rounded-full" />
      </div>
      <p className="flex justify-center items-center font-bold p-4 text-black">
        Phoenix
      </p>
      <a className="link flex justify-center items-center pl-9">
        <RiMenu3Fill />
      </a>
    </div>
    {/* End Avatar Sidebar */}
  
    {/* Menu Sidebar */}
    <div className="menu w-80 p-6 gap-3 flex flex-col">
      <div className="text-lg font-bold text-black">Dashboard</div>
      <li>
        <Link to='/' className="font-semibold hover:bg-primary2 text-black hover:btn-active">
          <MdDashboard className="mr-2" />
          Dashboard
        </Link>
      </li>
      <div className="text-lg font-bold text-black">Menu Utama</div>
      <li>
        <a className="font-semibold hover:bg-primary2 text-black">
          <RiCustomerServiceFill className="mr-2" />
          Layanan
        </a>
      </li>
      <li>
        <Link to='/aset' className="font-semibold hover:bg-primary2 text-black">
          <MdWebAsset className="mr-2" />
          Aset
        </Link>
      </li>
      <li>
        <a className="font-semibold hover:bg-primary2 text-black">
          <RiArticleFill className="mr-2" />
          Artikel & Video
        </a>
      </li>
      <li>
        <a className="font-semibold hover:bg-primary2 text-black">
          <HiChatBubbleLeftRight className="mr-2" />
          Forum
        </a>
      </li>
      <li>
        <a className="font-semibold hover:bg-primary2 text-black">
          <IoSettingsSharp className="mr-2" />
          Pengaturan
        </a>
      </li>
      <div className="text-lg font-bold text-black">Informasi</div>
      <li>
        <Link to="/informasi" className="font-semibold hover:bg-primary2 text-black">
          <FaQuestionCircle className="mr-2" />
          Informasi
        </Link>
      </li>
      <button className="flex justify-center items-center text-blue-500 mt-2 rounded-full hover:bg-sky-100 py-2 gap-3">
        <FiLogOut className="mr-2" />
        Keluar
      </button>
      {/* End Menu Sidebar */}
    </div>
  </div>
  
  );
};

export default Sidebar;
