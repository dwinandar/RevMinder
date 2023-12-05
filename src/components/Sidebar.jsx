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
    <div className="w-64 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">

      {/* Avatar Sidebar */}
      <div className="mt-1 avatar pl-7">
        <div className="items-center w-16 mt-3 rounded-full">
          <img src="/public/avatar.svg" />
        </div>
        <p className="flex items-center justify-center p-4 font-bold">
          Phoenix
        </p>
        <a className="flex items-center justify-center link pl-9">
          <RiMenu3Fill />
        </a>
      </div>
      {/* End Avatar Sidebar */}

      {/* Menu Sidebar */}
      <div className="flex justify-start w-64 gap-3 p-6 menu">
        <p className="justify-start text-lg font-bold">Dashboard</p>
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
        <p className="justify-start text-lg font-bold">Menu Utama</p>
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
        <p className="justify-start text-lg font-bold">Informasi</p>
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
        <button className="flex items-center justify-center gap-3 py-2 mt-4 text-blue-500 rounded-full hover:bg-sky-100">
          <FiLogOut />
          Keluar
        </button>
        {/* End Menu Sidebar */}
<<<<<<< HEAD
      </div>
    </div>
=======

      </div>
    </div >
>>>>>>> 71fb4d004e941a4c86d7165204a98dd5fc8ecda9
  );
};

export default Dashboardview;
