import { Routes, Route } from "react-router-dom";

import NavDashboard from "./NavDashboard";
import DashboardHome from "./DashboardHome";
import Footer from "./Footer"
import FooterDashboard from "./FooterDashboard"
import Sidebar from "./Sidebar";
import TambahAset from "./TambahAset";
import Aset from "./Aset.jsx";
import Forum from "../pages/Forum";
import Topic from "../pages/Topic"
import Pengaturan from "../pages/Pengaturan";
import Informasi from "./Informasi";
import ListMotor from "./ListMotor";
import ListMobil from "./ListMobil"
import Layanan from "./Layanan";

const Dashboard = () => {

  //TODO: To prevent accessing "/dashboard" from url
  switch (window.location.pathname) {
    case "/dashboard/": window.location.assign("beranda"); break;
    case "/dashboard": window.location.assign("dashboard/beranda"); break;
    default: "/beranda";
  }


  return (
    <div>
      <NavDashboard />
      <div className="w-full flex ">
        <Sidebar />
        <Routes>
          <Route path="/beranda" element={<DashboardHome />}></Route>
          <Route path="/layanan/*" element={<Layanan />} />
          <Route path="/aset" element={<Aset />}>
          </Route>
          <Route path='aset/read/motor/:id' element={<ListMotor />} />
          <Route path='aset/read/mobil/:id' element={<ListMobil />} />
          <Route path="/artikel" element={<Topic />}></Route>
          <Route path="/forum" element={<Forum />}></Route>
          <Route path="/aset/tambahaset/*" element={<TambahAset />}></Route>
          <Route path="/pengaturan" element={<Pengaturan />}></Route>
          <Route path="/informasi" element={<Informasi />}></Route>
        </Routes>

      </div>

      <div className="footer relative clear-both mt-4 bottom-0 mb-0 mx-auto">
        <FooterDashboard />
      </div>

    </div >
  );
};

export default Dashboard;
