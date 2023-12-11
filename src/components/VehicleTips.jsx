import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

const VehicleTips = ({ tipsNBerita }) => {
  return (
    <>
      <div className='flex flex-col max-w-5xl gap-20 px-5 mx-auto lg:flex-row md:px-10'>
        <iframe
          src='https://www.youtube.com/embed/5qJCWcVp9KE?si=NV_VOf7paiMn3vpc'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          className='w-full h-64 rounded-2xl'
        />
        <iframe
          src='https://www.youtube.com/embed/5qJCWcVp9KE?si=NV_VOf7paiMn3vpc'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          className='w-full h-64 rounded-2xl'
        />
      </div>
      <div className='grid grid-cols-1 gap-10 py-20 mx-5 md:mx-auto xl:grid-cols-3 max-w-7xl md:grid-cols-2'>
        {tipsNBerita.map((tnb) => (
          <div
            className='flex border-2 border-[#F0F0F0] rounded-2xl'
            key={tnb.id}
          >
            <img src={tnb.imgsrc} alt='tnb-img' />
            <div className='flex flex-col justify-center px-5'>
              <h2 className='text-sm font-bold text-start'>{tnb.title}</h2>
              <a href={`/dashboard/topic/tips/${tnb.title}`} className='flex grow-0 text-[#0070BA] items-center text-xs hover:underline cursor-pointer'>
                Baca selengkapnya <ArrowRight size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

VehicleTips.propTypes = {
  tipsNBerita: PropTypes.array,
};

export default VehicleTips;
