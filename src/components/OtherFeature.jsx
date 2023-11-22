import { RevMinderFeature } from "../constant/data";
import gearPattern from "../assets/gear-pattern.png";

const OtherFeature = () => {
  return (
    <section
      className='relative z-10 flex flex-col items-center min-h-screen px-5 pt-20 xl:px-40 bg-[#F5F5FF] md:px-14'
      id='other-feature'
    >
      <img
        src={gearPattern}
        alt='gear-pattern'
        className='absolute left-10 -z-10'
      />
      <img
        src={gearPattern}
        alt='gear-pattern'
        className='absolute right-20 -z-10 bottom-10 rotate-180
        '
      />
      <div className='flex flex-col items-center gap-5'>
        <h1 className='mt-10 text-4xl font-semibold text-[#21217A] text-center capitalize'>
          Fitur Lainnya
        </h1>
        <div className='text-[#21217A] text-xl text-center'>
          ReVMinder memiliki sejumlah fitur untuk memenuhi kebutuhan anda
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-10 my-24 md:px-5 lg:gap-20'>
        {RevMinderFeature.slice(2, 5).map((content) => (
          <div
            className='flex gap-5 shadow-[4px_6px_15px_rgba(0,0,0,0.30)] px-8 py-6 justify-center rounded-xl max-w-[23.125rem] bg-white'
            key={content.id}
          >
            <div className='flex flex-col items-center'>
              <div className='shrink-0'>
                <img
                  src={content.icon}
                  alt='icon-content'
                  className='bg-[#F0F0F0] p-3 rounded-2xl'
                />
              </div>
              <h2 className='font-bold text-[#21217A] pt-5 pb-2'>
                {content.title}
              </h2>
              <p className='text-center text-[15px]'>{content.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherFeature;
