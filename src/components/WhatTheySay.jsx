
import { whatTheySayContent } from "../constant/data";

const WhatTheySay = () => {
  return (
    <div className='md:px-24 lg:px-32 px-7 min-h-screen'>
      <h1 className='text-center text-[32px] font-semibold py-24'>
        Apa Kata Mereka ?
      </h1>
      <div className='w-full bg-[#DFE0F3] h-fit carousel flex items-center rounded-xl mb-24'>
        <div
          id='slide1'
          className='relative flex flex-wrap justify-center w-full h-full py-20 carousel-item'
        >
          <div className='flex flex-wrap items-center justify-center gap-14 px-14'>
            {whatTheySayContent.slice(0, 3).map((content) => (
              <div
                className='flex flex-col justify-center items-center gap-3 max-w-sm px-5 bg-white rounded-xl w-[287px] h-[381px] shadow-md'
                key={content.id}
              >
                <img
                  src={content.avatar}
                  className='rounded-full h-[120px] w-[120px] object-contain'
                  alt='avatar'
                />
                <h3 className='font-semibold'>{content.name}</h3>
                <h3>⭐⭐⭐⭐⭐</h3>
                <p className='font-semibold text-center'>{content.comment}</p>
              </div>
            ))}
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:left-14 lg:right-14 top-1/2'>
            <a href='#slide3' className='' aria-label='to-slide-3'>
              {""}
            </a>
            <a
              href='#slide2'
              className='text-6xl hidden md:block'
              aria-label='to-slide-2'
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id='slide2'
          className='relative flex flex-wrap justify-center w-full h-full py-20 carousel-item'
        >
          <div className='flex flex-wrap items-center justify-center h-full gap-14 px-14'>
            {whatTheySayContent.slice(3, 6).map((content) => (
              <div
                className='flex flex-col justify-center items-center gap-3 max-w-sm px-5 bg-white rounded-xl w-[287px] h-[381px] shadow-md'
                key={content.id}
              >
                <img
                  src={content.avatar}
                  className='rounded-full h-[120px] w-[120px] object-contain'
                  alt='avatar'
                />
                <h3 className='font-semibold'>{content.name}</h3>
                <h3>⭐⭐⭐⭐⭐</h3>
                <p className='font-semibold text-center'>{content.comment}</p>
              </div>
            ))}
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:left-14 lg:right-14 top-1/2'>
            <a href='#slide1' className='text-6xl' aria-label='to-slide-1'>
              ❮
            </a>
            <a href='#slide3' className='text-6xl' aria-label='to-slide-1'>
              ❯
            </a>
          </div>
        </div>
        <div
          id='slide3'
          className='relative flex flex-wrap justify-center w-full h-full py-20 carousel-item'
        >
          <div className='flex flex-wrap items-center justify-center h-full gap-14 px-14'>
            {whatTheySayContent.slice(6, 9).map((content) => (
              <div
                className='flex flex-col justify-center items-center gap-3 max-w-sm px-5 bg-white rounded-xl w-[287px] h-[381px] shadow-md'
                key={content.id}
              >
                <img
                  src={content.avatar}
                  className='rounded-full h-[120px] w-[120px] object-contain'
                  alt='avatar'
                />
                <h3 className='font-semibold'>{content.name}</h3>
                <h3>⭐⭐⭐⭐⭐</h3>
                <p className='font-semibold text-center'>{content.comment}</p>
              </div>
            ))}
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:left-14 lg:right-14 top-1/2'>
            <a href='#slide2' className='text-6xl' aria-label='to-slide-2'>
              ❮
            </a>
            <a href='#slide4' className='' aria-label='to-slide-4'>
              {""}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatTheySay;

