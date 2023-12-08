import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import ListMotor from "./components/ListMotor";
import ListMobil from "./components/ListMobil"



export default function App() {
  return (
    <main className='w-full mx-auto'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />



      </Routes>
    </main>
  );
}
