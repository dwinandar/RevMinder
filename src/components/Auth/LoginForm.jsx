import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      console.log("Login successful:", response.data);
      // Lakukan hal lain setelah login berhasil
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form
      className='max-w-sm px-6 mx-auto space-y-4 text-black md:space-y-6'
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <label htmlFor='username' className='block mb-2 '>
          Username
        </label>
        <input
          type='text'
          name='username'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Masukkan Kata Sandi'
          className=' border border-gray-300 rounded-2xl drop-shadow-md block w-full p-2.5 font-normal'
          required=''
        />
      </div>
      <div className='flex items-center justify-between'>
        <a
          href='#'
          className='text-sm font-medium text-[#0070BA] hover:underline dark:text-primary-500'
        >
          Lupa password?
        </a>
      </div>
      <div className='grid place-items-center'>
        <Link
          to='/dashboard/beranda'
          type='submit'
          className='bg-[#0070BA] text-white px-10 py-2 rounded-2xl mx-auto font-normal'
        >
          Masuk
        </Link>
      </div>
      <p className='font-medium text-center'>
        Belum Punya Akun?{" "}
        <Link href='#' className='font-bold text-[#390216] hover:underline '>
          Daftar Sekarang
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;

