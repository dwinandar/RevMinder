import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCustomerServiceFill } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { RiArticleFill } from "react-icons/ri";
import { MdWebAsset, MdDashboard } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className='mt-4 ml-5 border border-gray-200 shadow-xl w-80 rounded-xl font-poppins'>
      {/* Avatar Sidebar */}
      <div className='mt-3 avatar pl-7'>
        <div className='items-center w-20 mt-3 rounded-full'>
          <img src='/avatar.svg' alt='User Avatar' className='rounded-full' />
        </div>
        <p className='flex items-center justify-center p-4 font-bold text-primary1'>
          Phoenix
        </p>
        <a className='flex items-center justify-center link pl-9'>
          <RiMenu3Fill />
        </a>
      </div>
      {/* End Avatar Sidebar */}

      {/* Menu Sidebar */}
      <div className='flex flex-col gap-3 p-6 menu w-80'>
        <div className='text-lg font-bold text-primary1'>Dashboard</div>
        <li>
          <Link
            to='/'
            className='font-semibold hover:bg-primary2 text-primary1 hover:btn-active'
          >
            <MdDashboard className='mr-2' />
            Dashboard
          </Link>
        </li>
        <div className='text-lg font-bold text-primary1'>Menu Utama</div>
        <li>
          <a className='font-semibold hover:bg-primary2 text-primary1'>
            <RiCustomerServiceFill className='mr-2' />
            Layanan
          </a>
        </li>
        <li>
          <Link
            to='/aset'
            className='font-semibold hover:bg-primary2 text-primary1'
          >
            <MdWebAsset className='mr-2' />
            Aset
          </Link>
        </li>
        <li>
          <a className='font-semibold hover:bg-primary2 text-primary1'>
            <RiArticleFill className='mr-2' />
            Artikel & Video
          </a>
        </li>
        <li>
          <a className='font-semibold hover:bg-primary2 text-primary1'>
            <HiChatBubbleLeftRight className='mr-2' />
            Forum
          </a>
        </li>
        <li>
          <a className='font-semibold hover:bg-primary2 text-primary1'>
            <IoSettingsSharp className='mr-2' />
            Pengaturan
          </a>
        </li>
        <div className='text-lg font-bold text-primary1'>Informasi</div>
        <li>
          <Link
            to='/informasi'
            className='font-semibold hover:bg-primary2 text-primary1'
          >
            <FaQuestionCircle className='mr-2' />
            Informasi
          </Link>
        </li>
        <button className='flex items-center justify-center gap-3 py-2 mt-2 text-blue-500 rounded-full hover:bg-sky-100'>
          <FiLogOut className='mr-2' />
          Keluar
        </button>
        {/* End Menu Sidebar */}
      </div>
    </div>
  );
};

export default Sidebar;
