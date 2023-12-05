import { Routes, Route } from "react-router-dom";

import NavDashboard from "./NavDashboard";
import Sidebar from "./Sidebar";
import Layanan from "./Layanan.jsx";
import DashboardHome from "./DashboardHome.jsx";

const Dashboard = () => {
  //TODO: To prevent accessing "/dashboard" from url
  switch (window.location.pathname) {
    case "/dashboard/":
      window.location.assign("beranda");
      break;
    case "/dashboard":
      window.location.assign("dashboard/beranda");
      break;
    default:
      "/beranda";
  }

  return (
    <div>
      <NavDashboard />
      <div className='flex flex-row w-full'>
        <Sidebar />
        <Routes>
          <Route path='/layanan' element={<Layanan />}></Route>
          <Route path='/beranda' element={<DashboardHome />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
