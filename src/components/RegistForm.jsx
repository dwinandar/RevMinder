const RegistForm = () => {
  return (
    <form
      className='w-full md:px-6 mx-auto space-y-4 text-black md:space-y-6'
      action='#'
    >
      <div className='flex justify-center gap-4 md:gap-16 px-10 flex-col md:flex-row'>
        <div className='w-full flex flex-col gap-4'>
          <div>
            <label htmlFor='username' className='block mb-2 '>
              Username
            </label>
            <input
              type='text'
              name='username'
              id='username'
              className=' border border-gray-300 rounded-2xl block w-full p-2.5 drop-shadow-md
              font-normal'
              placeholder='Masukkan Username'
              required=''
            />
          </div>
          <div>
            <label htmlFor='email' className='block mb-2 '>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className=' border border-gray-300 rounded-2xl block w-full p-2.5 drop-shadow-md
              font-normal'
              placeholder='Masukkan email yang aktif'
              required=''
            />
          </div>
          <div>
            <label htmlFor='nowa' className='block mb-2 '>
              Nomor Whatsapp
            </label>
            <input
              type='text'
              name='nowa'
              id='nowa'
              className=' border border-gray-300 rounded-2xl block w-full p-2.5 drop-shadow-md
              font-normal'
              placeholder='Masukkan nomor yang aktif'
              required=''
            />
          </div>
        </div>
        <div className='w-full flex flex-col gap-4'>
          <div>
            <label htmlFor='alamat' className='block mb-2 '>
              Alamat
            </label>
            <input
              type='text'
              name='alamat'
              id='alamat'
              className=' border border-gray-300 rounded-2xl block w-full p-2.5 drop-shadow-md
              font-normal'
              placeholder='Masukkan alamat anda'
              required=''
            />
          </div>
          <div>
            <label htmlFor='password' className='block mb-2 '>
              Kata Sandi
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Masukkan sata sandi'
              className=' border border-gray-300 rounded-2xl drop-shadow-md block w-full p-2.5 font-normal'
              required=''
            />
          </div>
          <div>
            <label htmlFor='password' className='block mb-2 '>
              Ketik Ulang Kata Sandi
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Ketikkan ulang kata sandi'
              className=' border border-gray-300 rounded-2xl drop-shadow-md block w-full p-2.5 font-normal'
              required=''
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center px-10 py-1'>
        <div className='flex items-center h-5'>
          <input
            id='remember'
            aria-describedby='remember'
            type='checkbox'
            className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 '
            required=''
          />
        </div>
        <div className='ml-3 text-[15px] '>
          <label htmlFor='remember' className='font-normal'>
            Dengan ini saya menyetujui{" "}
            <span className='text-[#0070BA]'>Ketentuan Penggunaan</span> dan
            <span className='text-[#0070BA]'>Kebijakan Privasi</span> FixNDrive
          </label>
        </div>
      </div>
      <div className='grid place-items-center'>
        <button
          type='submit'
          className='bg-[#21217A] text-white px-10 py-2 rounded-2xl mx-auto font-normal'
        >
          Daftar
        </button>
      </div>
      <p className='font-medium text-center'>
        Sudah Punya Akun?{" "}
        <a href='#' className='font-semibold text-[#F2994A] hover:underline '>
          Masuk
        </a>
      </p>
    </form>
  );
};

export default RegistForm;
