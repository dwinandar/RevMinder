import React, {useState} from 'react'
import NavDashboard from './NavDashboard'
import Sidebar from './Sidebar'
import FooterDashboard from './FooterDashboard'



const RekomendasiProduct = () => {


  return (
    
    <div className="h-screen ">
        <NavDashboard />
        
        <div className="relative flex my-5 ">
            <Sidebar />

            <div className="flex-grow mx-5 mt-5 flex flex-col">

                <div>
                    <img src="public/icon _arrow back_.png" alt="" />
                </div>
                <div className='mb-5 flex items-center justify-center'>
                    <img src="/rek.png" alt="" />

                    <div className='ml-5 flex flex-col'>
                        <select className='border rounded p-2 mt-2 z-50'> 
                            <option value="pilihan1" disabled selected hidden>Pilih merek motor</option>
                            <option value="pilihan2">Bajaj</option>
                            <option value="pilihan3">Harley Davidson</option>
                            <option value="pilihan4">KTM</option>
                            <option value="pilihan5">Honda</option>
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
                            <option value="pilihan12">Vario 160</option>
                            <option value="pilihan13">Lainnya</option>
                        </select>

                        <button className='bg-primary3 text-white mt-5 border rounded-lg p-2 '>Lihat Rekomendasi</button>
                    </div>
                </div>
                <div className="bg-white shadow-lg p-8 rounded-lg h-80">
                   <p className='relative my-20 items-center text-center justfy-center italic'>Hasil rekomendasi akan muncul disini</p>
                </div>

             

            </div>
           
        </div>
        
        <FooterDashboard />
    
        </div>

  )
}

export default RekomendasiProduct