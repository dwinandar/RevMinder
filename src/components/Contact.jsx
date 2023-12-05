import phoneIcon from "../assets/phone-contact.svg";
import emailIcon from "../assets/mail-open-contact.svg";
import homeIcon from "../assets/home-contact.svg";

const Contact = () => {
  return (
    <div className=' px-7 w-full' id='contact'>
      <h1 className='text-[32px] font-semibold text-center pt-24 pb-10'>
        Kontak Kami
      </h1>
      <div className='flex md:justify-center flex-wrap bg-[#F5F5FF] gap-10 md:gap-14 rounded-xl p-8 shadow-lg shadow-black/10 mb-32 max-w-4xl mx-auto'>

        <div>
          <div className='flex gap-3 pb-1'>
            <img src={phoneIcon} alt='phone-icon' />
            <h2 className='text-xl font-semibold'>Nomor HP</h2>
          </div>
          <p>+62 81252097392</p>
        </div>
        <div>
          <div className='flex gap-3 pb-1'>
            <img src={emailIcon} alt='email-icon' />
            <h2 className='text-xl font-semibold'>Email</h2>
          </div>
          <p>revmindervehicle@gmail.com</p>
        </div>
        <div>
          <div className='flex gap-3 pb-1'>
            <img src={homeIcon} alt='home-icon' />
            <h2 className='text-xl font-semibold'>Alamat</h2>
          </div>
          <p>Kota Batam, Kepulauan Riau 29466</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
