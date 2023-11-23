import infoIcon from "../assets/info-rvm-icon.svg";
import gearPattern from "../assets/gear-pattern.png";
import { developers } from "../constant/data";

const Developers = () => {
  return (
    <section
      className='bg-[#F5F5FF] min-h-screen md:px-20 px-7 w-full relative z-10'
      id='developers'
    >
      <img
        src={gearPattern}
        alt='gear-pattern'
        className='absolute right-10 bottom-1/2 -z-10'
      />
      <img
        src={gearPattern}
        alt='gear-pattern'
        className='absolute left-10 -z-10 bottom-10  rotate-180
        '
      />
      <div className='flex flex-col justify-center items-center pt-24 gap-3 text-[#21217A]'>
        <h1 className='text-[32px] font-semibold '>Pengembang</h1>
        <h2 className=' text-xl max-w-4xl text-center'>
          ReVMinder bertujuan agar masyarakat, khususnya pemilik kendaraan motor
          dan mobil, bisa merawat kendaraannya dan terhindar dari hal-hal yang
          tidak diinginkan.
        </h2>
      </div>

      <div className='bg-white max-w-[1000px] mx-auto rounded-lg shadow-md p-5 mt-10'>
        <div className='flex gap-3 pb-3 items-baseline md:items-center'>
          <img src={infoIcon} alt='info-icon' />
          <h2 className='font-semibold text-lg md:text-xl'>
            ReVMinder adalah sebuah project yang diinisiai oleh mentee web
            kelompok Striver
          </h2>
        </div>
        <p className='text-justify'>
          Kelompok Striver menginisiasikan project ReVMinder karena mereka
          melihat bahwa kurangnya kesadaran masyarakat dalam merawat dan
          memelihara kendaraan mereka. Dengan perawatan yang baik, dapat
          menghindari masalah yang tidak perlu, menghemat uang, dan menikmati
          pengalaman berkendara yang lebih menyenangkan dan aman. Perawatan
          kendaraan bukan hanya tentang menjaga penampilan fisiknya, tetapi juga
          tentang memastikan bahwa kendaraan beroperasi dengan optimal, aman,
          dan andal.
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-10 gap-4 lg:gap-y-10 max-w-[1000px] mx-auto pb-24'>
        {developers.map((dev) => (
          <div
            className='flex items-center flex-col bg-white rounded-xl shadow-md py-7 gap-3'
            key={dev.id}
          >
            <img src={dev.photo} />
            <h2 className='text-[#21217A] font-semibold'>{dev.name}</h2>
            <h3>{dev.role}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Developers;
