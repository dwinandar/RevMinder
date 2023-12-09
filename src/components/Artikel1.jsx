import React from 'react'
import NavDashboard from './NavDashboard'
import FooterDashboard from './FooterDashboard'

const Artikel1 = () => {
  return (
    <div id='4'>
       <NavDashboard />
      
      <div className='flex ml-10 mt-10'>
        <img src="/public/icon _arrow back_.png" alt="" />
      </div>

      <h1 className=' flex ml-20 my-5 text-3xl font-semibold'>Manual Vs Matic, enak mana?</h1>

      <div className='avatar pl-20'>

        <div className='w-12'>
          <img src="/public/bentang.png" alt="" />
        </div>

        <p className='px-6'>Oleh <span className='font-semibold'>Bentang Nala Narendrayanto</span> <br />12 November 2023</p>
      </div>

      
      <div className='flex flex-col items-center m-12'>
          <img className='w-max h-auto mb-2' src="/public/maticvsmanual.svg" alt="" />
          <div className='ml-auto text-right mr-80 italic'>
              <p>sumber: cdns.klimg.com</p>
          </div>
      </div>

      <p className='mx-20 my-12 text-justify'> Dilema antara mobil matic dan manual merupakan hal yang biasa terjadi, terutama saat  membeli mobil.
        Pasalnya, masing-masing mempunyai kelebihan dan kekurangan. Keunggulan mobil matic yang paling utama adalah kenyamanan.
        Tidak perlu menekan kopling untuk berpindah gigi, semuanya dikontrol secara otomatis oleh sistem kelistrikan.
        Alhasil, mobil Anda akan berjalan mulus hanya dengan menekan pedal gas. Namun memilih mobil manual tidaklah haram. Keunggulannya terletak pada harga.
        Mobil jenis ini biasanya lebih murah dibandingkan mobil matic. Dengan begitu, Anda bisa menghemat anggaran pembelian mobil.
        Mau tahu fakta menarik seputar mobil matic dan manual? Apa yang harus saya beli? Simak pembahasan berikut untuk  jawaban selengkapnya: 
      </p>

      <div className='flex flex-col mx-20 my-5 text-justify'>

        <p className='font-semibold mb-5'>
            1. Kenyamanan Mobil Matic Tidak Ada Lawan
        </p>

        <p>
            Telah disebutkan di awal tulisan, soal kenyamanan mobil matic vs manual tentu tidak perlu dipertanyakan lagi. 
            Mobil matic jauh lebih nyaman saat dipakai berkendara, terlebih saat melewati kemacetan. 
            Kaki kamu tidak perlu berpindah untuk menginjak kopling, sehingga berkendara terasa rileks. Apalagi bila mobil yang kamu pakai 
            memiliki transmisi CVT, seperti halnya Honda Mobilio dan Toyota Yaris. Faktor kenyamanan yang dirasa saat berkendara lebih nikmat lagi.
            Hal ini lantaran transmisi CVT dikenal lebih halus dalam mendistribusikan tenaga. Dengan transmisi ini, gejala perpindahan gigi sama sekali tidak terasa.
        </p>


        <p className='mt-10 font-semibold'>
            2. Harga Mobil Manual Lebih Murah
        </p>

        <p className='mt-5'>
            Walau kurang nyaman, karena perlu menginjak koling saat berkendara di kemacetan. Mobil manual punya keunggulan dari sisi harga jual. 
            Banderolnya jauh lebih murah dari versi matic, dengan selisih rata-rata sekitar Rp 10 jutaan.
            Bila tidak percaya, ini perbandingan harga mobil matic vs manual untuk produk Toyota Avanza. 
            Khusus varian 1.3 G AT (otomatis) dijual Rp228,75 juta (OTR Jakarta). 
        </p>

        <p className='mt-5'>
            Lalu varian 1.3 G MT (manual) Rp 218,05 juta (OTR Jakarta).
            Contoh lain, Honda Mobilio RS MT (manual) punya harga Rp 248,2 juta (OTR Jakarta). Lalu Mobilio RS CVT banderolnya 
            mencapai Rp 259 juta (OTR Jakarta). Dengan membeli mobil manual yang lebih murah, tentu kamu bisa menghemat bujet.
        </p>

        <p className='font-semibold mt-12'>
            Kesimpulan Mobil Matic Vs Manual
        </p>

        <p className='mt-5'>
            Jadi dari pembahasan mobil matic Vs manual di atas, kesimpulannya tidak ada yang lebih unggul. Masing-masing punya kelebihan dan kekurangan.
        </p>

        <p className='mt-5'>
            Mobil matic lebih cocok buat kamu yang punya bujet lebih, kemudian mencari rasa berkendara rileks dan nyaman. 
            Sementara mobil manual paling pas untuk kamu dengan bujet terbatas, maklum banderolnya lebih murah serta irit bahan bakar.    
        </p>
           

        <p className='mt-5'>
             Setelah mengetahui fakta mobil matic Vs manual, kira-kira kamu bakal pilih yang mana?
        </p>

      </div>

      <FooterDashboard />
      
    </div>
  )
}

export default Artikel1