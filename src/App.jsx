import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import Aset from "./Component/Aset";
import TambahAset from './Component/TambahAset';
import Dashboard from './Component/Dashboard';
import Home from "./Component/Home";
import TambahDataMotor from "./Component/TambahDataMotor";
import ListMotor from "./Component/ListMotor";
import Informasi from "./Component/Informasi";
import ListMobil from "./Component/ListMobil";
import TambahPengingat from "./Component/TambahPengingat";
import TambahService from "./Component/TambahService";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/aset" element={<Aset />}></Route>
          <Route path="/tambahaset" element={<TambahAset/>}></Route>
          <Route path="/tambahdatamotor" element={<TambahDataMotor/>}></Route>
          <Route path="/informasi" element={<Informasi/>}></Route>
          <Route path="/read/motor/:id" element={<ListMotor/>}></Route>
          <Route path="/read/mobil/:id" element={<ListMobil/>}></Route>
          <Route path="/tambahpengingat" element={<TambahPengingat/>}></Route>
          <Route path="/tambahservice" element={<TambahService/>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
