import { whyUsContent } from "../constant/data";

const WhyUs = () => {
  return (
    <section className='xl:px-40 md:px-14 px-7 flex flex-col items-center min-h-screen'>
      <div className='flex items-center flex-col gap-5'>
        <h1 className='capitalize font-bold text-4xl pb-5 mt-10'>
          mengapa harus memilih kami?
        </h1>
        <div className='h-2 w-44 bg-[#0070BA]'> </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-x-28 md:gap-y-14 my-24'>
        {whyUsContent.map((content) => (
          <div
            className='flex gap-5 shadow-[7px_8px_15px_rgba(0,0,0,0.20)] px-6 md:py-11 py-8'
            key={content.id}
          >
            <div className='shrink-0'>
              <img src={content.icon} alt='icon-document' />
            </div>
            <div>
              <h2 className='text-[20px] font-semibold'>{content.title}</h2>
              <p>{content.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
