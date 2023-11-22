import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import NavDashboard from './Component/NavDashboard';
import Sidebar from './Component/Sidebar'
import { IoLogoModelS } from "react-icons/io";
import { FaMotorcycle } from "react-icons/fa6";
import Aset from "./Component/Aset";
import TambahAset from './Component/TambahAset';
import Dashboard from './Component/Dashboard';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/aset" element={<Aset />}></Route>
          <Route path="/tambahaset" element={<TambahAset/>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
