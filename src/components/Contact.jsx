import phoneIcon from "../assets/phone-contact.svg";
import emailIcon from "../assets/mail-open-contact.svg";
import homeIcon from "../assets/home-contact.svg";

const Contact = () => {
  return (
    <div className=' md:px-72 px-7 w-full' id='contact'>
      <h1 className='text-[32px] font-semibold text-center pt-24 pb-10'>
        Kontak Kami
      </h1>
      <div className='mx-auto bg-[#F5F5FF] gap-5 rounded-xl flex flex-col sm:px-32 md:px-8 lg:grid grid-cols-1 lg:grid-cols-3 lg:place-items-center p-8 shadow-lg shadow-black/10 mb-32 w-fit'>
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
