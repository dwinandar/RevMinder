import { IoIosArrowDown } from "react-icons/io";

const NavDashboard = () => {
  return (
    <div className="navbar bg-primary1 shadow-lg px-6 ">
      {/* Logo Navbar */}
      <div className="flex flex-1">
        <img src="/logo1.png"></img>
      </div>
      {/* End Logo Navbar */}

      {/* Icon Notification */}
      <div className="flex-none gap-6 items-center p-0">
        <div className="dropdown dropdown-end">
          <a className="link">
            <div className="indicator">
              <img src="/bell.png" alt="" />
              <span className="badge badge-xs badge-neutral bg-white indicator-item">9</span>
            </div>
          </a>
        </div>
        {/* End Icon Notification */}

        {/* User Profile */}
        <div className="dropdown dropdown-end mr-9 items-center">
          <label tabIndex={0} className="btn bg-white hover:bg-white btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-full">
            <div className="rounded-lg">
              <img className="w-10 h-auto rounded-full" src="/avatar.svg" alt="Rounded avatar"></img>
            </div>
            <p className="text-sm text-start capitalize">Phoenix</p>
            <span className=" rounded-full ">
              <IoIosArrowDown />
            </span>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-xs dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-32"
          >
            <li>
              <a className="justify-center">
                Profile
              </a>
            </li>
            <li>
              <a className="justify-center">Settings</a>
            </li>
            <li>
              <a className="justify-center">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavDashboard;
