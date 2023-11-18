import { whatWeOfferContent } from "../constant/data";

const WhatWeOffer = () => {
  return (
    <section className='xl:px-40 md:px-14 px-5 flex flex-col items-center min-h-screen'>
      <div className='flex items-center flex-col gap-5'>
        <h1 className='capitalize font-semibold text-[#4C4DDC] text-4xl mt-10 text-center'>
          Apa Yang Kami Tawarkan ?
        </h1>
        <div className='text-[#0070BA] text-xl text-center'>
          Berikut adalah beberapa fitur yang kami tawarkan:
        </div>
      </div>
      <div className='flex lg:gap-x-8 my-24 flex-wrap justify-center lg:gap-y-20 gap-10'>
        {whatWeOfferContent.map((content) => (
          <div
            className='flex gap-5 shadow-[4px_6px_15px_rgba(0,0,0,0.30)] px-8 py-6 justify-center rounded-xl max-w-[23.125rem]'
            key={content.id}
          >
            <div className='flex items-center flex-col'>
              <div className='shrink-0'>
                <img
                  src={content.icon}
                  alt='icon-content'
                  className='bg-[#F0F0F0] p-3 rounded-2xl'
                />
              </div>
              <h2 className='font-bold text-[#0070BA] pt-5 pb-2'>
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

export default WhatWeOffer;
