import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser';
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';

import { IoMdArrowBack } from 'react-icons/io';
import { DivideIcon } from 'lucide-react';

import Navbar from "./Navbar"
import Footer from "./Footer"

const Artikel1 = () => {
  let { title } = useParams();


  let section_one = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  let section_two = [];

  const [data, setData] = useState({
    "judul": "",
    "nama_author": "",
    "tanggal_publish": "",
    "gambar": { "sumber": "", "path": "" },
    "konten": {
      "section-one": section_one,
      "section-two": section_two
    }
  })
  useEffect(() => {
    axios
      .get("http://localhost:3000/artikel")
      .then((res) => {
        console.log(res);
        setData(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [title]);

  const nunormTitle = (normTitle) => {
    return normTitle.replaceAll("-", " ").toUpperCase();

  }

  return (
    <div>
      <Navbar page={"artikel"} />
      <div className='flex lg:ml-10 lg:mt-10'>
        <Link to="/dashboard/artikel">
          <IoMdArrowBack className={"w-12 md:w-16 h-auto "} />
        </Link>
      </div>

      <article className='h-[100%]'>
        <div className="top">
          <h1 className=' flex md:px-20 justify-start text-justify px-2 text-lg md:text-3xl font-semibold mt-6'>
            {data.judul === "" ? nunormTitle(title) : nunormTitle(data.judul)}
            {/* Manual Vs Matic, enak mana?  -> commented bacause need dynamic title*/}
          </h1>

          <div className="top-section flex flex-col gap-4 my-8">
            <div className='avatar flex gap-3 mx-2 md:mx-20'>
              <div className=''>
                <img src="" alt="" />
              </div>
              <p >Oleh <span className='font-semibold text-sm lg:text-md'>{data.nama_author === "" ? "Bentang Nala Narendrayanto" : data.nama_autho}</span>
                <br />{data.tanggal_publish === "" ? "12 November 2023" : data.tanggal_publish}
              </p>
            </div>

            <div className='flex flex-col '>
              <div className="flex flex-col justify-center mx-2 md:mx-20 ">
                <img className='h-auto mb-2' src={data.gambar.path === "" ? "/public/maticvsmanual.svg" : data.gambar.path} alt="Gambar" />
                <p className='italic text-right'>{data.gambar.sumber === "" ? "sumber: cdns.klimg.com" : data.gambar.sumber}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main flex flex-col gap-2 md:mx-20 mx-2 mb-[10rem]">
          <div className="section-one">
            {data.konten["section-one"] === "" ? "no data" : parse(data.konten["section-one"])}
          </div>
          <div className="section-two">
            <div className='flex flex-col gap-2'>
              {data.konten["section-two"].length < 1 ? "No Data" : data.konten["section-two"].map((c, i) => {
                return parse(c);
              })}
            </div>
          </div>
        </div>


        {/* <div className='flex flex-coltext-justify'> */}
        {/**/}
        {/*   <p className='font-semibold mb-5'> */}
        {/*     1. Kenyamanan Mobil Matic Tidak Ada Lawan */}
        {/*   </p> */}
        {/**/}
        {/*   <p> */}
        {/*     Telah disebutkan di awal tulisan, soal kenyamanan mobil matic vs manual tentu tidak perlu dipertanyakan lagi. */}
        {/*     Mobil matic jauh lebih nyaman saat dipakai berkendara, terlebih saat melewati kemacetan. */}
        {/*     Kaki kamu tidak perlu berpindah untuk menginjak kopling, sehingga berkendara terasa rileks. Apalagi bila mobil yang kamu pakai */}
        {/*     memiliki transmisi CVT, seperti halnya Honda Mobilio dan Toyota Yaris. Faktor kenyamanan yang dirasa saat berkendara lebih nikmat lagi. */}
        {/*     Hal ini lantaran transmisi CVT dikenal lebih halus dalam mendistribusikan tenaga. Dengan transmisi ini, gejala perpindahan gigi sama sekali tidak terasa. */}
        {/*   </p> */}
        {/**/}
        {/**/}
        {/*   <p className='font-semibold'> */}
        {/*     2. Harga Mobil Manual Lebih Murah */}
        {/*   </p> */}
        {/**/}
        {/*   <p className=''> */}
        {/*     Walau kurang nyaman, karena perlu menginjak koling saat berkendara di kemacetan. Mobil manual punya keunggulan dari sisi harga jual. */}
        {/*     Banderolnya jauh lebih murah dari versi matic, dengan selisih rata-rata sekitar Rp 10 jutaan. */}
        {/*     Bila tidak percaya, ini perbandingan harga mobil matic vs manual untuk produk Toyota Avanza. */}
        {/*     Khusus varian 1.3 G AT (otomatis) dijual Rp228,75 juta (OTR Jakarta). */}
        {/*   </p> */}
        {/**/}
        {/*   <p className=''> */}
        {/*     Lalu varian 1.3 G MT (manual) Rp 218,05 juta (OTR Jakarta). */}
        {/*     Contoh lain, Honda Mobilio RS MT (manual) punya harga Rp 248,2 juta (OTR Jakarta). Lalu Mobilio RS CVT banderolnya */}
        {/*     mencapai Rp 259 juta (OTR Jakarta). Dengan membeli mobil manual yang lebih murah, tentu kamu bisa menghemat bujet. */}
        {/*   </p> */}
        {/**/}
        {/*   <p className='font-semibold'> */}
        {/*     Kesimpulan Mobil Matic Vs Manual */}
        {/*   </p> */}
        {/**/}
        {/*   <p className=''> */}
        {/*     Jadi dari pembahasan mobil matic Vs manual di atas, kesimpulannya tidak ada yang lebih unggul. Masing-masing punya kelebihan dan kekurangan. */}
        {/*   </p> */}
        {/**/}
        {/*   <p className=''> */}
        {/*     Mobil matic lebih cocok buat kamu yang punya bujet lebih, kemudian mencari rasa berkendara rileks dan nyaman. */}
        {/*     Sementara mobil manual paling pas untuk kamu dengan bujet terbatas, maklum banderolnya lebih murah serta irit bahan bakar. */}
        {/*   </p> */}
        {/**/}
        {/**/}
        {/*   <p className=''> */}
        {/*     Setelah mengetahui fakta mobil matic Vs manual, kira-kira kamu bakal pilih yang mana? */}
        {/*   </p> */}
        {/**/}
        {/* </div> */}
      </article>
      <Footer />

    </div >
  )
}

export default Artikel1;
