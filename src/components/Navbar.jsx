import { LogIn, Menu, X } from "lucide-react";
import logofndlogin from "../assets/LogoFND_Footer.svg";
import logoNavbar from "../assets/logo-navbar-home.svg";
import LoginForm from "./LoginForm";

const Navbar = () => {
  return (
    <header className='flex md:justify-between justify-center items-center md:px-20 px-7 py-7 border-b-[3px] border-b-[#F0f0f0] w-full gap-2 bg-transparent text-white'>
      <div className='flex items-center justify-between w-full shrink-0 lg:w-auto'>
        <img src={logoNavbar} alt='logo-fnd' />
        <label className='btn btn-circle swap swap-rotate lg:hidden'>
          <input type='checkbox' />
          <Menu className='border-none fill-current swap-off ring-0' />
          <X className='fill-current swap-on' />
        </label>
      </div>
      <div className='gap-[46px] font-bold hidden lg:flex flex-col lg:flex-row'>
        <ul className='flex gap-[38px] items-center'>
          <li>Beranda</li>
          <li>Layanan</li>
          <li>Hubungi Kami</li>
        </ul>
        <div className='flex gap-[21px] font-bold'>
          <button
            className='text-[#0070BA] border border-[#F0F0F0] px-8 py-2 rounded-full bg-white'
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Masuk
          </button>
          <dialog id='my_modal_3' className='modal'>
            <div className='modal-box bg-[#F9FAFC] max-w-4xl px-0 relative pt-0'>
              <form
                method='dialog'
                className='flex justify-between border-b-[3px] border-b-[#F0F0F0] py-5 px-10 sticky top-0 bg-white shadow-lg text-black'
              >
                <img src={logofndlogin} alt='logo-fnd' />
                <button className='text-2xl '>✕</button>
              </form>
              <div className='flex flex-col items-center pt-10 pb-8'>
                <p className='text-center text-[32px] pb-6 flex items-center gap-4 text-black'>
                  <LogIn size={32} /> Masuk
                </p>
              </div>
              <LoginForm />
            </div>
          </dialog>
          <button className='bg-[#0070BA] text-white px-8 py-2 rounded-full'>
            Daftar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
