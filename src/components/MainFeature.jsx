import { RevMinderFeature } from "../constant/data";

const MainFeature = () => {
  return (
    <section
      className='flex flex-col items-center min-h-screen px-5 pt-20 xl:px-40 md:px-14'
      id='main-feature'
    >
      <div className='flex flex-col items-center gap-5'>
        <h1 className='mt-10 text-4xl text-[#21217A] font-semibold text-center capitalize'>
          Fitur RevMinder
        </h1>
        <div className='text-[#21217A] text-xl text-center'>
          ReVMinder adalah website yang tepat untuk anda
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-10 my-24 lg:gap-20'>
        {RevMinderFeature.slice(0, 2).map((content) => (
          <div
            className='flex gap-5 shadow-[4px_6px_15px_rgba(0,0,0,0.30)] px-8 py-6 justify-center rounded-xl max-w-[23.125rem]'
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

export default MainFeature;
