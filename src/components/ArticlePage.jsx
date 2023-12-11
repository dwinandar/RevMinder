import React from 'react';
import { useParams } from 'react-router-dom';
import NavDashboard from './NavDashboard';
import Avatar from './Avatar';
import Author from '../assets/pp-Bentang.png';
import "../assets/tips"
import Gambar from '../assets/briohd.jpg'

const ArticlePage = () => {
const {title}= useParams();

  return (
    <div>
        <NavDashboard/>
        <div className='Container flex flex-col'>
            <div className='Content mx-auto flex flex-col gap-4'>
            <h1 className='font-bold text-[48px]'>
                {title}
            </h1>
            <div className='Author flex items-center gap-2'>
                <Avatar src={Author} width={"w-20"}/>
                <div className="flex flex-col gap-2">
                <p>Oleh<strong> Bentang Nala Narendrayanto</strong></p>
                <p className='text-lg'>5 Desember 2023</p>
                </div>
            </div>
            <div className='flex flex-col items-center m-12'>
                <img className='w-screen h-auto ' src={Gambar} alt="gambar mobil brio" />
                <div className='ml-auto text-right mr-80 italic'>
                    <p>sumber: cdns.klimg.com</p>
                </div>
            </div>
            
            <p className='mx-20 my-12 text-justify'>Tidak terasa sudah 5 tahun saya mengendarai mobil yang dibeli oleh Ayah saya. Dari tahun 2018 hingga sekarang, dari masa SMA hingga kuliah, banyak sekali kenangan yang manis pun pahit ketika mengendarai mobil ini. </p>

            <div className='flex flex-col mx-20 my-5 text-justify'></div>
                <p className='font-semibold mb-5'>
                    Kenyamanan
                </p>

                <p>
                Honda Brio RS selalu dikenal sebagai mobil yang efisien dalam konsumsi bahan bakar, dan hal ini terus terjaga dalam pengalaman keliling kota saya kali ini. Mesin yang tangguh tetap memberikan performa optimal dengan konsumsi bahan bakar yang ramah kantong, seperti yang telah saya nikmati lima tahun yang lalu.
                </p>

                <p className='mt-10 font-semibold'>
                    Perbedaan
                </p>
                    
                <p className='mt-5'>
                    Ketika saya mengemudikan Honda Brio RS saat ini, kesenangan berkendara yang selalu saya rasakan masih sama segar seperti lima tahun yang lalu. Kemampuan manuver yang lincah dan responsif, bersama dengan ukuran yang ideal untuk kepadatan lalu lintas perkotaan, menjadikan setiap perjalanan sebagai petualangan yang menyenangkan.
                </p>

                <p className='mt-12 font-semibold'>
                    Brio RS 2018 vs Brio RS sekarang
                </p>

                <p className='mt-5'>
                Dengan perkembangan teknologi, Honda Brio RS versi terbaru menawarkan fitur-fitur yang tidak hanya meningkatkan keamanan tetapi juga menambah kesenangan perjalanan. Sistem hiburan yang lebih canggih, konektivitas smartphone yang lebih baik, dan berbagai fitur cerdas membuat setiap momen di dalam mobil menjadi lebih berharga. Melihat Honda Brio RS terkini, desain eksterior yang diperbarui menyuntikkan sentuhan modern yang menyegarkan. Garis-garis yang lebih tajam dan elemen desain yang lebih menonjol memberikan penampilan yang lebih atraktif dan mengikuti tren terkini.
                </p>
            </div>
        </div>
            </div>
  )
}

export default ArticlePage