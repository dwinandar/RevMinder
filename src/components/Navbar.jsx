import { Menu, X } from "lucide-react";
import logoRM from "../assets/Logo-RevMinder.svg";
import { useEffect, useRef, useState } from "react";

const Navbar = (props) => {
  const [bgNav, setBgNav] = useState("");
  const [detailsOpen, setDetailsOpen] = useState(false);
  const detailsRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setBgNav("gradient-navbar pt-4");
      } else {
        setBgNav("bg-transparent");
      }
    });
    return () => {
      window.removeEventListener("scroll", setBgNav);
    };
  }, []);

  useEffect(() => {
    const closeDetails = (event) => {
      if (
        detailsOpen &&
        detailsRef.current &&
        !detailsRef.current.contains(event.target)
      ) {
        setDetailsOpen(false);
      }
    };

    window.addEventListener("click", closeDetails);

    return () => {
      window.removeEventListener("click", closeDetails);
    };
  }, [detailsOpen]);

  const closeSideBar = () => {
    document.getElementById("my-drawer-4").click();
  };

  return (
    <header
      className={`flex md:justify-between justify-center items-center md:px-20 px-7 w-full gap-2 transition-all text-white sticky top-0 z-30 ${props.page === "artikel" ? "bg-[#000]" : bgNav} py-3 duration-200`}
    >
      <div className='flex items-center justify-between w-full shrink-0 lg:w-auto '>
        <img src={logoRM} alt='logo-fnd' className='w-52 h-[2.7rem]' />
        <div className='drawer drawer-end text-white w-fit'>
          <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content'>
            {/* Page content here */}
            <label
              className='btn border-none swap swap-rotate lg:hidden'
              htmlFor='my-drawer-4'
            >
              <Menu className='border-none fill-current swap-off ring-0' />
              <X className='fill-current swap-on' />
            </label>
          </div>
          <div className='drawer-side z-50'>
            <label
              htmlFor='my-drawer-4'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <ul className='menu p-4 w-72 min-h-screen bg-black text-base-content '>
              {/* Sidebar content here */}
              <li
                className='hover:bg-slate-700 rounded-lg'
                onClick={closeSideBar}
              >
                <a href='#' aria-label='close sidebar'>
                  Beranda
                </a>
              </li>
              <li
                onClick={closeSideBar}
                className='hover:bg-slate-700 rounded-lg'
              >
                <a href='#' aria-label='nav-to-about'>
                  Tentang
                </a>
              </li>
              <li>
                <details open={detailsOpen} ref={detailsRef}>
                  <summary className='hover:bg-slate-700 rounded-lg'>
                    Fitur
                  </summary>
                  <ul className='w-48 bg-black'>
                    <li className='hover:bg-slate-700 rounded-lg w-full'>
                      <a
                        href='#main-feature'
                        aria-label='link-to-main-feature'
                        onClick={() => {
                          if (detailsOpen) {
                            setDetailsOpen(false);
                            closeSideBar();
                          }
                        }}
                        onMouseDown={() => setDetailsOpen(!detailsOpen)}
                      >
                        Fitur Utama
                      </a>
                    </li>
                    <li className='hover:bg-slate-700 rounded-lg'>
                      <a
                        href='#other-feature'
                        aria-label='link-to-other-feature'
                        onClick={() => {
                          if (detailsOpen) {
                            setDetailsOpen(false);
                            closeSideBar();
                          }
                        }}
                        onMouseDown={() => setDetailsOpen(!detailsOpen)}
                      >
                        Fitur Lainnya
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li
                className='hover:bg-slate-700 rounded-lg'
                onClick={closeSideBar}
              >
                <a href='#developers' aria-label='nav-to-developers'>
                  Pengembang
                </a>
              </li>
              <li
                className='hover:bg-slate-700 rounded-lg'
                onClick={closeSideBar}
              >
                <a href='#contact' aria-label='nav-to-contact'>
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className='menu lg:menu-horizontal text-lg break-before-avoid hidden lg:flex '>
        <li>
          <a href='#' aria-label='nav-to-home'>
            Beranda
          </a>
        </li>
        <li>
          <a href='#' aria-label='nav-to-about'>
            Tentang
          </a>
        </li>
        <li>
          <details open={detailsOpen} ref={detailsRef}>
            <summary>Fitur</summary>
            <ul className='w-48 bg-black'>
              <li className='hover:bg-slate-700 rounded-lg w-full'>
                <a
                  href='#main-feature'
                  aria-label='link-to-main-feature'
                  onClick={() => {
                    if (detailsOpen) {
                      setDetailsOpen(false);
                    }
                  }}
                  onMouseDown={() => setDetailsOpen(!detailsOpen)}
                >
                  Fitur Utama
                </a>
              </li>
              <li className='hover:bg-slate-700 rounded-lg'>
                <a
                  href='#other-feature'
                  aria-label='link-to-other-feature'
                  onClick={() => {
                    if (detailsOpen) {
                      setDetailsOpen(false);
                    }
                  }}
                  onMouseDown={() => setDetailsOpen(!detailsOpen)}
                >
                  Fitur Lainnya
                </a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a href='#developers' aria-label='nav-to-developers'>
            Pengembang
          </a>
        </li>
        <li>
          <a href='#contact' aria-label='nav-to-contact'>
            Kontak
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
