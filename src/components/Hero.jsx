import { ArrowRight } from "lucide-react";
import heroImg from "../assets/hero-img.png";

const Hero = () => {
  return (
    <section className='py-8 pb-16 -mt-40 text-white mb-14 md:px-20 px-7 pt-36 bg-wave'>
      <div className='relative flex flex-col justify-between lg:flex-row'>
        <div className='flex flex-col gap-10 pt-14'>
          <h1 className='text-3xl font-bold capitalize'>
            membantu merawat kendaraan anda <br /> agar tetap sehat.
          </h1>
          <h5 className='md:mr-[148px]'>
            Dengan fitur pengingat yang diberikan kepada pelanggan agar <br />
            melakukan service secara rutin supaya kendaraan mereka tetap sehat{" "}
            <br />
            dan terawat.
          </h5>
          <button className='self-start bg-[#0070BA] flex text-white px-10 py-2 rounded-full font-bold'>
            Jelajahi
            <ArrowRight />
          </button>
        </div>
        <img src={heroImg} alt='hero-img' className='self-center max-w-md' />
      </div>
    </section>
  );
};

export default Hero;
