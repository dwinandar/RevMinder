import React from "react";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { RiArticleFill } from "react-icons/ri";
import { MdWebAsset } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="ml-5 border border-gray-200 w-64 shadow-lg mt-11 rounded-lg">
      <div className="avatar pl-7 mt-1">
        <div className="w-16 rounded-full items-center mt-3">
          <img src="/public/Ellipse.svg" />
        </div>
        <h1 className="flex justify-center items-center font-bold p-4">Phoenix</h1>
        <a className="link flex justify-center items-center pl-9">
          <RiMenu3Fill />
        </a>
      </div>

      <div className="menu w-64 p-6 gap-2 flex justify-start">
        <p className="text-lg font-bold justify-start">Dashboard</p>
        <li>
          <a className="font-semibold hover:bg-warning">
          <MdDashboard />
            Dashboard
          </a>
        </li>
        <p className="text-lg font-bold justify-start">Menu Utama</p>
        <li>
          <a className="font-semibold hover:bg-warning">
          <RiCustomerServiceFill />
            Layanan
          </a>
        </li>
        <li>
          <a className="font-semibold hover:bg-warning">
          <MdWebAsset />
            Aset
          </a>
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
      </div>
    </div>
  );
};

export default Sidebar;
