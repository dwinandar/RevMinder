import { Routes, Route } from "react-router-dom";

import NavDashboard from "./NavDashboard";
import DashboardHome from "./DashboardHome";
import Footer from "./Footer";
import FooterDashboard from "./FooterDashboard";
import Sidebar from "./Sidebar";
import TambahAset from "./TambahAset";
import Aset from "./Aset.jsx";
import Forum from "../pages/Forum";
import Topic from "../pages/Topic";
import Pengaturan from "../pages/Pengaturan";
import Informasi from "./Informasi";
import ListMotor from "./ListMotor";
import ListMobil from "./ListMobil";
import TambahService from "./TambahService";
import TambahPengingat from "./TambahPengingat";
import Layanan from "./Layanan";

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
      <div className='flex w-full '>
        <Sidebar />
        <Routes>
          <Route path='/beranda' element={<DashboardHome />}></Route>
          <Route path='/layanan/*' element={<Layanan />} />
          <Route path='/aset' element={<Aset />}></Route>
          <Route path='aset/read/motor/:id' element={<ListMotor />} />
          <Route path='aset/read/mobil/:id' element={<ListMobil />} />
          {/* <Route path='aset/tambahservice' element={<TambahService />} /> */}
          {/* <Route path='aset/tambahpengingat' element={<TambahPengingat />} /> */}
          <Route path='/artikel' element={<Topic />}></Route>
          <Route path='/forum' element={<Forum />}></Route>
          <Route path='/aset/tambahaset/*' element={<TambahAset />}></Route>
          <Route path='/pengaturan' element={<Pengaturan />}></Route>
          <Route path='/informasi' element={<Informasi />}></Route>
        </Routes>
      </div>

      <div className='relative bottom-0 clear-both mx-auto mt-4 mb-0 footer'>
        <FooterDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
