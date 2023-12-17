import NavDashboard from "./NavDashboard";
import Sidebar from "./Sidebar";

const Informasi = () => {
  return (
    <>
      <NavDashboard />
      <div className='flex w-full shadow-xl md:flex-row font-poppins'>
        <Sidebar />
        <div className='flex flex-col flex-1 mt-4 ml-5 border border-gray-200 shadow-xl rounded-xl'>
          <div className='relative shadow-xl body-font bg-primary2 m-7'>
            <div className='container px-5 py-3 mx-auto'>
              <div className='flex flex-col w-full text-center m-7'>
                <h1 className='mb-4 font-bold text-gray-900 sm:text-2xl text-1xl title-font'>
                  Kirimkan pesan kepada kami
                </h1>
                <p className='mx-auto text-base leading-relaxed lg:w-2/3'>
                  Silahkan masukkan kritik dan saran anda melalui kontak dibawah
                  ini dan kami berusaha untuk memberikan pelayanan yang
                  memuaskan untuk anda.
                </p>
              </div>
              <div className='mx-auto lg:w-1/2 md:w-2/3 '>
                <div className='flex flex-wrap -m-2'>
                  <div className='w-1/2 p-2'>
                    <div className='relative'>
                      <label
                        htmlFor='name'
                        className='text-sm leading-7 text-black'
                      >
                        Nama
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 outline-none rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200'
                      />
                    </div>
                  </div>
                  <div className='w-1/2 p-2'>
                    <div className='relative'>
                      <label
                        htmlFor='email'
                        className='text-sm leading-7 text-black'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 outline-none rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200'
                      />
                    </div>
                  </div>
                  <div className='w-full p-2'>
                    <div className='relative'>
                      <label
                        htmlFor='message'
                        className='text-sm leading-7 text-gray-600'
                      ></label>
                      <textarea
                        id='message'
                        name='message'
                        placeholder='Tulis pesan'
                        className='w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white bg-opacity-50 border border-gray-300 outline-none resize-none rounded-xl focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200'
                      ></textarea>
                    </div>
                  </div>
                  <div className='flex justify-end w-full p-2'>
                    <button className='py-2 ml-2 text-white border btn rounded-xl bg-primary1'>
                      Kirim
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='relative p-6 rounded-lg shadow-xl body-font bg-primary2 m-7'>
            <h1 className='relative mb-4 text-2xl font-bold text-center'>
              Kontak Kami
              <span className='absolute bottom-0 w-16 mt-2 underline transform -translate-x-1/2 border-b-2 left-1/2 border-primary1'></span>
            </h1>

            <div className='flex justify-center mt-6'>
              <ol className='flex flex-row gap-36'>
                <li className='flex items-center text-center'>
                  <img src='/public/phone.svg' alt='Phone Icon' className='' />
                  <div className='ml-2 text-left'>
                    <p className='font-bold text-primary1'>Phone</p>
                    <p className='text-sm'>+62 81252097392</p>
                  </div>
                </li>

                <li className='flex items-center text-center'>
                  <img src='/public/email.svg' alt='Email Icon' className='' />
                  <div className='ml-2 text-left'>
                    <p className='font-bold text-primary1'>Email</p>
                    <p className='text-sm'>revmindervehicle@gmail.com</p>
                  </div>
                </li>

                <li className='flex items-center text-center'>
                  <img src='/public/home.svg' alt='Address Icon' className='' />
                  <div className='ml-2 text-left'>
                    <p className='font-bold text-primary1'>Address</p>
                    <p className='text-sm'>Kota Batam, Kepulauan Riau 29466</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Informasi;
