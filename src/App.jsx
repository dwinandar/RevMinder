import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import Artikel1 from "./components/Artikel1";
import RekomendasiProduct from "./components/RekomendasiProduct";
import TambahService from "./components/TambahService";

import TambahPengingat from "./components/TambahPengingat"


export default function App() {
  return (
    <main className='w-full mx-auto'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/artikel/:title" element={<Artikel1 />} />
        <Route path='/tambahservice' element={<TambahService />} />
        <Route path='/tambahpengingat' element={<TambahPengingat />} />
      </Routes>
    </main>
  );
}
