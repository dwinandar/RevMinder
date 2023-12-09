import { Routes, Route } from "react-router-dom"
import TambahMobil from "./TambahMobil"
import TambahMotor from "./TambahMotor"

const TambahAset = () => {
  return (
    <>
      <Routes>
        <Route path="mobil" element={<TambahMobil />} />
        <Route path="motor" element={<TambahMotor />} />
      </Routes>


    </>
  );
};

export default TambahAset;
