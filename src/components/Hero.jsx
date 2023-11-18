import heroImg from "../assets/hero-img.png";
import DialogLogin from "./Auth/DialogLogin";
import DialogRegist from "./Auth/DialogRegist";

const Hero = () => {
  return (
    <section className='py-8 pb-44 -mt-32 text-white mb-14 md:px-20 px-7 pt-36 bg-wave'>
      <div className='relative flex flex-col justify-between lg:flex-row'>
        <div className='flex flex-col gap-10 pt-14'>
          <h1 className='text-[36px] font-semibold capitalize'>
            membantu merawat kendaraan anda <br /> agar tetap sehat.
          </h1>
          <h5 className='md:mr-[148px]'>
            Dengan fitur pengingat yang diberikan kepada pelanggan agar <br />
            melakukan service secara rutin supaya kendaraan mereka tetap sehat{" "}
            <br />
            dan terawat.
          </h5>
          <div className='flex gap-[21px] font-bold'>
            <button
              className='text-[#0070BA] border border-[#F0F0F0] px-9 py-[6px] rounded-full bg-white'
              onClick={() =>
                document.getElementById("my_modal_3_login").showModal()
              }
            >
              Masuk
            </button>
            <DialogLogin />
            <button
              className='bg-[#42B72A] text-white px-9 py-[6px] rounded-full'
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
          className='self-center mt-20 mr-5 max-w-md md:max-w-lg'
        />
      </div>
    </section>
  );
};

export default Hero;
