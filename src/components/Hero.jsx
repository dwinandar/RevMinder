import heroImg from "../assets/hero-img.png";
import DialogLogin from "./Auth/DialogLogin";
import DialogRegist from "./Auth/DialogRegist";

const Hero = () => {
  return (
    <section className='min-h-screen py-8 -mt-32 text-white mb-14 md:px-20 px-7 pt-36 bg-wave'>
      <div className='relative flex flex-col justify-between lg:flex-row'>
        <div className='flex flex-col gap-10 md:pt-14 pt-6'>
          <h1 className='text-[36px] font-semibold capitalize max-w-3xl'>
            Catat dan kontrol riwayat kendaraan anda dengan reVMinder
          </h1>
          <h5 className='max-w-lg'>
            Sebuah website yang membantu merawat kendaraan Anda dengan mudah.
            Catat dan atur pengingat, agar Anda dapat menjaga kondisi kendaraan
            secara hemat dan efisien.
          </h5>
          <div className='flex gap-[21px] font-bold justify-center md:justify-start'>
            <button
              className='text-[#21217A] border border-[#F0F0F0] px-9 py-[6px] rounded-full bg-white '
              onClick={() =>
                document.getElementById("my_modal_3_login").showModal()
              }
            >
              Masuk
            </button>
            <DialogLogin />
            <button
              className='bg-[#F2994A] text-white px-9 py-[6px] rounded-full'
              onClick={() =>
                document.getElementById("my_modal_3_regist").showModal()
              }
            >
              Daftar
            </button>
            <DialogRegist />
          </div>
        </div>
        <img
          src={heroImg}
          alt='hero-img'
          className='right-0 self-center max-w-md lg:absolute -bottom-72 md:max-w-lg '
        />
      </div>
    </section>
  );
};

export default Hero;
