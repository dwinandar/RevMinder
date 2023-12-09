// import logoFnd from "../assets/LogoFND_Footer.svg";
// import chatBubble from "../assets/chat-bubble-footer.svg";
// import PhoneIcon from "../assets/phone-footer.svg";

const Footer = () => {
  return (
    <>
      {/* <footer className='footer p-10 pt-16 bg-[#F9FAFC] flex flex-col items-center gap-20'>
        <h1 className='text-[1.75rem] font-bold text-center leading-relaxed'>
          Servis kendaraan mudah bersama FixNDrive
        </h1>
        <div className='flex w-full text-[#0070BA] flex-wrap md:flex-nowrap gap-11'>
          <div className='mx-auto'>
            <img src={logoFnd} alt='logofnd-footer' className='my-0 md:my-5' />
          </div>
          <div className='grid grid-cols-1 gap-6 md:gap-2 md:grid-cols-2 lg:grid-cols-4 md:pr-10'>
            <nav className='flex flex-col gap-1'>
              <header className='opacity-100 footer-title'>Layanan</header>
              <a className='link link-hover'>Perawatan Motor</a>
              <a className='link link-hover'>Pencatatan Service</a>
              <a className='link link-hover'>Artikel & Video Perawatan</a>
            </nav>
            <nav className='flex flex-col gap-1'>
              <header className='opacity-100 footer-title'>Tentang Kami</header>
              <a className='link link-hover'>Tim</a>
              <a className='link link-hover'>Cerita Kami</a>
            </nav>
            <nav className='flex flex-col gap-1'>
              <header className='opacity-100 footer-title'>Lainnya</header>
              <a className='link link-hover'>Forum</a>
              <a className='link link-hover'>FAQ</a>
              <a className='link link-hover'>Beranda</a>
            </nav>
            <nav className='flex flex-col gap-1'>
              <header className='opacity-100 footer-title'>Kontak Kami</header>
              <a className='flex gap-2 link link-hover'>
                <img src={PhoneIcon} alt='chat-bubble' /> +62 21 31187212
              </a>
              <a className='flex gap-2 link link-hover'>
                <img src={chatBubble} alt='phone-icon' /> Mulai obrolan dengan
                kami
              </a>
            </nav>
          </div>
        </div>
      </footer> */}
      <footer className='py-5 footer footer-center bg-black text-base-content rounded-lg '>
        <aside className=' text-white'>
          <p>Copyright © 2023 FixNDrive. Dibuat dengan ❤️ by Striver </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
