import { Menu, X } from "lucide-react";
import logoRM from "../assets/Logo-RevMinder.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [bgNav, setBgNav] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setBgNav(
          "bg-gradient-to-br from-black via-[#00385D] from-2% via-100% to-[#00385D] pt-[18px]",
        );
      } else {
        setBgNav("bg-transparent");
      }
    });
    return () => {
      window.removeEventListener("scroll", setBgNav);
    };
  }, []);

  return (
    <header
      className={`flex md:justify-between justify-center items-center md:px-20 px-7 w-full gap-2 shadow transition-all text-white sticky top-0 z-30 ${bgNav} py-4 duration-200`}
    >
      <div className='flex items-center justify-between w-full shrink-0 lg:w-auto'>
        <img src={logoRM} alt='logo-fnd' className='w-52 h-[2.7rem]' />
        <label className='btn btn-circle swap swap-rotate lg:hidden'>
          <input type='checkbox' />
          <Menu className='border-none fill-current swap-off ring-0' />
          <X className='fill-current swap-on' />
        </label>
      </div>
      {/* <div className='gap-[46px] font-bold hidden lg:flex flex-col lg:flex-row'>
        <ul className='flex gap-[38px] items-center'>
          <li>Beranda</li>
          <li>Layanan</li>
          <li>Hubungi Kami</li>
        </ul>
      </div> */}
    </header>
  );
};

export default Navbar;
