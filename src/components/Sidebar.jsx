import { Link } from 'react-router-dom';
import { useState } from 'react';

import { RiMenu3Fill, RiCustomerServiceFill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { RiArticleFill } from "react-icons/ri";
import { MdWebAsset, MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Dashboardview = () => {
  const [onPage, setOnPage] = useState("")
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
          <button
            className={`${onPage === "dashboard" ? "bg-gray-200" : ""} font-semibold hover:bg-primary2`}
            onClick={() => setOnPage("dashboard")}
          >
            <Link
              className={`flex items-center gap-2`}
              to='beranda'>
              <MdDashboard />
              Dashboard
            </Link>
          </button>
        </li>
        <p className="text-lg font-bold justify-start">Menu Utama</p>
        <li>
          <button
            className={`${onPage === "layanan" ? "bg-gray-200" : ""} font-semibold hover:bg-primary2`}
            onClick={() => setOnPage("layanan")}
          >
            <Link
              to='layanan' className={`flex items-center gap-2`}>
              <RiCustomerServiceFill />
              Layanan
            </Link>
          </button>
        </li>
        <li>
          <button
            className={`${onPage === "aset" ? "bg-gray-200" : ""} font-semibold hover:bg-primary2`}
            onClick={() => setOnPage("aset")}
          >
            <Link
              className={`flex items-center gap-2`}
              to='aset' >
              <MdWebAsset />
              Aset
            </Link>
          </button>
        </li>
        <li>
          <button
            className={`flex ${onPage === "artikel" ? "bg-gray-200" : ""}  font-semibold hover:bg-primary2`}
            onClick={() => setOnPage("artikel")}
          >
            <Link
              to='artikel' className={` flex items-center gap-2`}>
              <RiArticleFill />
              Artikel & Video
            </Link>
          </button>
        </li>
        <li>

          <button
            className={`flex ${onPage === "forum" ? "bg-gray-200" : ""}  font-semibold hover:bg-primary2`}
            onClick={() => setOnPage("forum")}
          >
            <Link
              to='forum' className={` flex items-center gap-2`}>
              <HiChatBubbleLeftRight />

              Forum
            </Link>
          </button>
        </li>
        <li>
          <button
            className={`flex ${onPage === "pengaturan" ? "bg-gray-200" : ""}  font-semibold hover:bg-primary2`}
            onClick={() => setOnPage("pengaturan")}
          >
            <Link
              to='pengaturan' className={` flex items-center gap-2`}>
              <IoSettingsSharp />
              Pengaturan
            </Link>
          </button>
        </li>
        <p className="text-lg font-bold justify-start">Informasi</p>
        <li>
          <button
            className={`flex ${onPage === "informasi" ? "bg-gray-200" : ""}  font-semibold hover:bg-primary2`}
            onClick={() => setOnPage("informasi")}
          >
            <Link
              to='informasi' className={` flex items-center gap-2`}>
              <FaQuestionCircle />
              Informasi
            </Link>
          </button>
        </li>
        <button className="flex justify-center items-center text-blue-500 mt-4 rounded-full hover:bg-sky-100 py-2 gap-3">
          <FiLogOut />
          Keluar
        </button>
        {/* End Menu Sidebar */}

      </div>
    </div >
  );
};

export default Dashboardview;
