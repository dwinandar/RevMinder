import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import NavDashboard from './NavDashboard'
import Sidebar from './Sidebar'
import FooterDashboard from './FooterDashboard'

import { MdArrowBack } from 'react-icons/md'

import { sukuCadang } from "../constant/data"

import rek from "../assets/rekomendasiHero.png"



const RekomendasiProduct = () => {
  const { uuid } = useParams();

  const [sparePart, setSparePart] = useState();
  console.log(sukuCadang, sparePart);

  // useEffect(() => {
  //   getRekom(uuid).then((response) => {
  //     setSukuCadang(response.data);
  //   });
  // }, [uuid]);

  async function getRekom(uuid) {
    try {
      return await axios.get("http://localhosts:5050/kategori/sukucadang/" + uuid);
    } catch (e) {
      console.log(e.message);

    }

  }

  return (
    <div className="w-full lg:w-[80%]  lg:mx-5 lg:mt-4 lg:rounded-lg lg:rounded-primary2 lg:border lg:border-primary2 mb-24 xl:mb-3">
      <div className='md:ml-6 mt-4 md:mt-6'>
        <Link to="/dashboard/layanan/rekomendasi">
          <MdArrowBack size={"48"} />
        </Link>
        {/* <img src="public/icon _arrow back_.png" alt="" /> */}
      </div>
      <div className="flex flex-col">

        <div className=' flex flex-col lg:flex-row  items-center sm:justify-center'>
          <img src={rek} alt="" />

          <div className='flex flex-col'>
            <select className='border rounded p-2 mt-2 z-20'
              onChange={() => { setSparePart(sukuCadang) }}
            >
              <option value="pilihan1" >Pilih merek motor</option>
              <option value="pilihan2">Bajaj</option>
              <option value="pilihan3">Harley Davidson</option>
              <option value="pilihan4">KTM</option>
              <option value="pilihan5" selected={true}>Honda</option>
              <option value="pilihan6">Kawasaki</option>
              <option value="pilihan7">Kaisar</option>
              <option value="pilihan8">Minerva</option>
              <option value="pilihan9">Piaggio</option>
              <option value="pilihan10">Suzuki</option>
              <option value="pilihan11">Tosa</option>
              <option value="pilihan12">Vespa</option>
              <option value="pilihan13">Viar</option>
              <option value="pilihan14">Yamaha</option>
              <option value="pilihan15">Lainnya</option>

            </select>

            <select className='border rounded p-2 mt-2'>
              <option value="">Pilih model motor</option>
              <option value="pilihan2">ADV 150</option>
              <option value="pilihan3">ADV 160</option>
              <option value="pilihan4">Beat</option>
              <option value="pilihan5">Beat Street</option>
              <option value="pilihan6">Genio</option>
              <option value="pilihan7">PCX 160</option>
              <option value="pilihan8">PCX Hybrid</option>
              <option value="pilihan9">Scoopy</option>
              <option value="pilihan10">Spacy</option>
              <option value="pilihan11">Vario 150</option>
              <option value="pilihan12" selected={true}>Vario 160</option>
              <option value="pilihan13">Lainnya</option>
            </select>

            <button className='bg-primary3 text-white mt-3 border rounded-lg p-2 '>Lihat Rekomendasi</button>
          </div>
        </div>
        <div className="flex justify-center items-center bg-primary2 mt-[2rem] md:mt-[1rem]  md:shadow-lg  md:border-primary2 md:border ">
          <div className="">
            <div className="flex  justify-center items-center  flex-wrap md:w-[38rem] h-[20rem] ">
              {sukuCadang.length < 1 ? "" : sukuCadang.map((s, i) => (
                <button key={i} className='my-4 lg:my-1' >
                  <div className="">
                    <div className="flex justify-center">
                      <img src={s.path} alt="" className='' />
                    </div>
                    <span className='block text-center'>
                      {s.name}
                    </span>
                  </div>
                </button>
              ))
              }
            </div>
          </div>
          <p className={`relative my-20 items-center text-center justfy-center italic ${sukuCadang.length < 1 ? "" : "hidden"}`}>Hasil rekomendasi akan muncul disini</p>
        </div>



      </div>

    </div>


  )
}

export default RekomendasiProduct
