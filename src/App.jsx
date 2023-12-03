import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import { useState } from "react";


export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <main className='w-full mx-auto max-w-[1707px]'>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/dashboard/*' element={<Dashboard />} />
      </Routes>
    </main>
  );
}
