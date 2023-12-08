import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import ListMotor from "./components/ListMotor";
import ListMobil from "./components/ListMobil";
import Test from "./components/Test";


export default function App() {
  return (
    <main className='w-full mx-auto'>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path="/test" element={<Test />} />

        <Route path='/dashboard/*' element={<Dashboard />} />

        <Route path='/dashboard/read/motor/:id' element={<ListMotor />} />
        <Route path='/dashboard/read/mobil/:id' element={<ListMobil />} />
      </Routes>
    </main>
  );
}
