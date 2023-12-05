import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCustomerServiceFill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { RiArticleFill } from "react-icons/ri";
import { MdWebAsset, MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Dashboardview = () => {
  return (
    <div className='w-64 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl'>
      {/* Avatar Sidebar */}
      <div className='mt-1 avatar pl-7'>
        <div className='items-center w-16 mt-3 rounded-full'>
          <img src='/public/avatar.svg' />
        </div>
        <p className='flex items-center justify-center p-4 font-bold'>
          Phoenix
        </p>
        <a className='flex items-center justify-center link pl-9'>
          <RiMenu3Fill />
        </a>
      </div>
      {/* End Avatar Sidebar */}

      {/* Menu Sidebar */}
      <div className='flex justify-start w-64 gap-3 p-6 menu'>
        <p className='justify-start text-lg font-bold'>Dashboard</p>
        <li>
          <Link
            to='beranda'
            className='font-semibold active:bg-warning hover:bg-primary2 '
          >
            <MdDashboard />
            Dashboard
          </Link>
        </li>
        <p className='justify-start text-lg font-bold'>Menu Utama</p>
        <li>
          <Link to='layanan' className='font-semibold hover:bg-primary2'>
            <RiCustomerServiceFill />
            Layanan
          </Link>
        </li>
        <li>
          <Link to='aset' className='font-semibold hover:bg-primary2'>
            <MdWebAsset />
            Aset
          </Link>
        </li>
        <li>
          <Link to='artikel' className='font-semibold hover:bg-primary2'>
            <RiArticleFill />
            Artikel & Video
          </Link>
        </li>
        <li>
          <Link to='forum' className='font-semibold hover:bg-primary2'>
            <HiChatBubbleLeftRight />
            Forum
          </Link>
        </li>
        <li>
          <Link to='pengaturan' className='font-semibold hover:bg-primary2'>
            <IoSettingsSharp />
            Pengaturan
          </Link>
        </li>
        <p className='justify-start text-lg font-bold'>Informasi</p>
        <li>
          <a className='font-semibold hover:bg-primary2'>
            <FaQuestionCircle />
            Informasi
          </a>
        </li>
        <button className='flex items-center justify-center gap-3 py-2 mt-4 text-blue-500 rounded-full hover:bg-sky-100'>
          <FiLogOut />
          Keluar
        </button>
        {/* End Menu Sidebar */}
      </div>
    </div>
  );
};

export default Dashboardview;
