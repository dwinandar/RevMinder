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

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:5050/verify")
      .then((res) => {
        if (res.data && res.data.username) {
          setAuth(true);
          setUsername(res.data.username);
        } else {
          alert("Ada yang salah");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Terjadi kesalahan dalam mengambil data");
        navigate("/");
      });
  }, []);


  return (
    <div>
      <NavDashboard username={username} />
      <div className='flex w-full '>
        <Sidebar username={username} />
        <Routes>
          <Route path='/beranda' element={<DashboardHome />}></Route>
          <Route path='/layanan/*' element={<Layanan />} />
          <Route path='/aset' element={<Aset />}></Route>
          <Route path='aset/read/motor/:id' element={<ListMotor />} />
          <Route path='aset/read/mobil/:id' element={<ListMobil />} />
          <Route path='aset/:vehicle/:id/tambahservice' element={<TambahService />} />
          <Route path='aset/:vehicle/:id/tambahpengingat' element={<TambahPengingat />} />
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
