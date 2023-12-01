import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavDashboard from "./NavDashboard";
import Sidebar from "./Sidebar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

function ListMobil() {
  const { id } = useParams();
  const [mobil, setMobil] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + id)
      .then((res) => {
        console.log(res);
        setMobil(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <NavDashboard />
      <div className="w-full flex flex-row shadow-xl">
        <Sidebar />
        <div className="flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl">
          <div>
            <a className="">
              <Link to="/aset">
                <IoMdArrowRoundBack className="m-7 text-4xl " />
              </Link>
            </a>
          </div>

          <div className="overflow-y-auto p-7 flex flex-col items-center">
            {/**/}
            <div className="flex flex-col items-center justify-center mt-9">
              <p className="font-bold mt-3 m-11 text-3xl">Informasi Mobil</p>
              <img src="/sportcar.svg" alt="" width="150" />
            </div>

            <div className="h-[15rem] flex flex-col items-center">
            <div className="bg-primary2 border border-gray-200 m-11 items-center justify-center rounded-xl w-96">
              {/*Tipe Mobil*/}
              <p className="font-bold m-5">Tipe Mobil</p>
              <p className="input w-full max-w-xs ml-3 mb-2 rounded-full" aria-disabled> 
                {mobil.nama_kendaraan}
              </p>
              {/*No Polisi*/}
              <p className="font-bold m-5">No Polisi</p>
              <p className="input w-full max-w-xs ml-3 mb-2 rounded-full font-md">
                {mobil.no_pol}
              </p>
              {/*Bahan Bakar*/}
              <p className="font-bold m-5">Bahan Bakar</p>
              <p className="bg-white w-full max-w-xs m-3 mb-2 py-2 rounded-full font-md">
                {mobil.jenis}
              </p>
              {/*Transmisi*/}
              <p className="font-bold m-5">Transmisi</p>
              <p className="input w-full max-w-xs m-3 mb-2 rounded-full font-md">
                {mobil.transmisi}
              </p>
              {/*Tahun*/}
              <p className="font-bold m-5">Tahun</p>
              <p className="input w-full max-w-xs m-3 mb-2 rounded-full font-md">
                {mobil.tahun}
              </p>
              {/*Warna*/}
              <p className="font-bold m-5">Warna</p>
              <p className="input w-full max-w-xs m-3 mb-5 rounded-full font-md">
                {mobil.warna}
              </p>
            </div>

            <div className="">
              <button className="btn btn-normal">Aktif</button>
              <button className="btn btn-normal">Selesai</button>
            </div>

            <div className="bg-primary2 border border-gray-200 w-96 h-96 m-11 items-center justify-center rounded-xl">
              <p>pengingat masih kosong</p>
            </div>
          </div>
          </div>

         
        </div>
      </div>
    </>
  );
}

export default ListMobil;
