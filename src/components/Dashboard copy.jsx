import { Routes, Route } from "react-router-dom";

import NavDashboard from "./NavDashboard";
import DashboardHome from "./DashboardHome";
import Sidebar from "./Sidebar";
import TambahAset from "./TambahAset";
import Aset from "./Aset.jsx";
import Forum from "../pages/Forum";
import Topic from "../pages/Topic";
import Pengaturan from "../pages/Pengaturan";
import Layanan from "./Layanan.jsx";

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
          <Route path='/aset' element={<Aset />}></Route>
          <Route path='/forum' element={<Forum />}></Route>
          <Route path='/artikel' element={<Topic />}></Route>
          <Route path='/aset/tambahaset' element={<TambahAset />}></Route>
          <Route path='/beranda' element={<DashboardHome />}></Route>
          <Route path='/pengaturan' element={<Pengaturan />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
