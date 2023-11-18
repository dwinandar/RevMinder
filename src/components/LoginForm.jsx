const LoginForm = () => {
  return (
    <form
      className='max-w-sm px-6 mx-auto space-y-4 text-black md:space-y-6'
      action='#'
    >
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
        <label htmlFor='password' className='block mb-2 '>
          Kata Sandi
        </label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Masukkan Kata Sandi'
          className=' border border-gray-300 rounded-2xl drop-shadow-md block w-full p-2.5 font-normal'
          required=''
        />
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-start'>
          <div className='flex items-center h-5'>
            <input
              id='remember'
              aria-describedby='remember'
              type='checkbox'
              className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 '
              required=''
            />
          </div>
          <div className='ml-3 text-sm'>
            <label htmlFor='remember' className='font-normal'>
              Ingat Saya
            </label>
          </div>
        </div>
        <a
          href='#'
          className='text-sm font-medium text-[#0070BA] hover:underline dark:text-primary-500'
        >
          Lupa password?
        </a>
      </div>
      <div className='grid place-items-center'>
        <button
          type='submit'
          className='bg-[#0070BA] text-white px-10 py-2 rounded-2xl mx-auto font-normal'
        >
          Masuk
        </button>
      </div>
      <p className='font-medium text-center'>
        Belum Punya Akun?{" "}
        <a href='#' className='font-bold text-[#390216] hover:underline '>
          Daftar Sekarang
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
