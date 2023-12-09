import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import ListMotor from "./components/ListMotor";
import ListMobil from "./components/ListMobil"
import Artikel1 from "./components/Artikel1";
import RekomendasiProduct from "./components/RekomendasiProduct";

export default function App() {
  return (
    <main className='w-full mx-auto'>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path="/artikel1" element={<Artikel1 />} />
        <Route path="/rekomendasiproduct" element={<RekomendasiProduct />} />
        <Route path='/dashboard/read/motor/:id' element={<ListMotor />} />
        <Route path='/dashboard/read/mobil/:id' element={<ListMobil />} />
      </Routes>
    </main>
  );
}
