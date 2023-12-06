import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Menu, X } from "lucide-react"
import { RiMenu3Fill, RiCustomerServiceFill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { RiArticleFill } from "react-icons/ri";
import { MdWebAsset, MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const closeSidebar = (id) => {
  document.getElementById(id).click()
}

const SidebarContent = ({ onPage, setOnPage, clickHandler }) => {
  return (
    <>
      {/* Avatar Sidebar */}
      <div className="avatar lg:mx-6 mx-4  mt-1 border-black border-b-4 pb-4 flex flex-1 justify-between ">
        <div className="w-16 rounded-full items-center mt-3">
          <img src="/public/avatar.svg" />
        </div>
        <div className="user mr-5 pt-5">
          <p className="font-bold text-lg">
            Phoenix
          </p>
          <p>User</p>
        </div>

        <button
          onClick={() => { clickHandler("close-sidebar") }}
          className="lg:flex lg:hidden justify-end items-center lg:ml-6 ml-[2rem]">
          <X size={"34"} />
        </button>

        <button
          onClick={() => { clickHandler("close-sidebar") }}
          className="hidden lg:block">
          <Menu size={"28"} />
        </button>

      </div>
      {/* End Avatar Sidebar */}

      {/* Menu Sidebar */}
      <div className="menu w-64 p-4 lg:p-6 gap-3 flex justify-start">
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

    </>
  )

}

const Dashboardview = () => {
  const [onPage, setOnPage] = useState("")
  return (
    <>
      <div className="drawer lg:hidden left-0 w-0 z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <label htmlFor="my-drawer" className="mx-6 p-2 rounded-lg border-none drawer-button -translate-y-[56px]">
          <Menu size={"32"} color={"white"} />
        </label>
        <div className="drawer-side">

          <label id="close-sidebar" htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-[60rem] bg-white text-base-content">
            {/* <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay flex justify-end px-3"> */}
            {/* </label> */}
            {/*   <X size={"32"} /> */}
            <div className='sidebar-content flex justify-center flex-col my-8'>
              <SidebarContent onPage={onPage} setOnPage={setOnPage} clickHandler={closeSidebar} />
            </div>

          </ul>
        </div>
      </div>

      <div
        className={`ml-5 border border-gray-200 w-64 shadow-xl mt-4 rounded-xl hidden lg:block`}
      >

        <SidebarContent onPage={onPage} setOnPage={setOnPage} />
      </div >
    </>
  );
};

export default Dashboardview;
