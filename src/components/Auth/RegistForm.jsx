import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegistForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [terms, setTerms] = useState(true);
  const [repass, setRepass] = useState("");

  const onSubmit = async (data) => {
    const value = {
      username: data.username,
      email: data.email,
      nowa: data.nowa,
      alamat: data.alamat,
      password: data.password,
    };

    if (repass !== value.password) {
      toast.error("Password dan Ulang Password Tidak Sama ");
      return;
    }

    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post("http://localhost:5050/register", value);

      if (res.status === 201) {
        toast.success(res.data);
        setRepass("");
        reset();
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(`${error.response.data}`);
      }
      console.error("Daftar Gagal:", error);
    }
  };

  return (
    <div>
      <form
        className='w-full mx-auto space-y-4 text-black md:px-6 md:space-y-6'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex flex-col justify-center gap-4 px-10 md:gap-16 md:flex-row'>
          <div className='flex flex-col w-full gap-4'>
            <div>
              <label htmlFor='username' className='block mb-2 '>
                Username
              </label>
              <input
                type='text'
                name='username'
                id='username-regist'
                {...register("username", {
                  required: { value: true, message: "Username harus diisi!" },
                })}
                className=' border border-gray-300 rounded-2xl block w-full p-2.5 drop-shadow-md
                font-normal'
                placeholder='Masukkan Username'
              />
              {errors.username && (
                <p className='mt-2 font-medium text-red-500'>
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 '>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email-regist'
                {...register("email", {
                  required: { value: true, message: "Email harus diisi!" },
                })}
                className=' border border-gray-300 rounded-2xl block w-full p-2.5 drop-shadow-md
                font-normal'
                placeholder='Masukkan email yang aktif'
              />
              {errors.email && (
                <p className='mt-2 font-medium text-red-500'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor='nowa' className='block mb-2 '>
                Nomor Whatsapp
              </label>
              <input
                type='text'
                name='nowa'
                id='nowa-regist'
                {...register("nowa", {
                  required: {
                    value: true,
                    message: "Nomor Whatsapp harus diisi!",
                  },
                })}
                className=' border border-gray-300 rounded-2xl block w-full p-2.5 drop-shadow-md
                font-normal'
                placeholder='Masukkan nomor yang aktif'
              />
              {errors.nowa && (
                <p className='mt-2 font-medium text-red-500'>
                  {errors.nowa.message}
                </p>
              )}
            </div>
          </div>
          <div className='flex flex-col w-full gap-4'>
            <div>
              <label htmlFor='alamat' className='block mb-2 '>
                Alamat
              </label>
              <input
                type='text'
                name='alamat'
                id='alamat-regist'
                {...register("alamat", {
                  required: { value: true, message: "Alamat harus diisi!" },
                })}
                className=' border border-gray-300 rounded-2xl block w-full p-2.5 drop-shadow-md
                font-normal'
                placeholder='Masukkan alamat anda'
              />
              {errors.alamat && (
                <p className='mt-2 font-medium text-red-500'>
                  {errors.alamat.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor='password' className='block mb-2 '>
                Kata Sandi
              </label>
              <input
                type='password'
                name='password'
                id='password-regist'
                {...register("password", {
                  required: { value: true, message: "Password harus diisi!" },
                })}
                placeholder='Masukkan sata sandi'
                className=' border border-gray-300 rounded-2xl drop-shadow-md block w-full p-2.5 font-normal'
              />
              {errors.password && (
                <p className='mt-2 font-medium text-red-500'>
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor='password' className='block mb-2 '>
                Ketik Ulang Kata Sandi
              </label>
              <input
                type='password'
                name='repassword'
                id='re-password-regist'
                value={repass}
                onChange={(e) => setRepass(e.target.value)}
                placeholder='Ketikkan ulang kata sandi'
                className=' border border-gray-300 rounded-2xl drop-shadow-md block w-full p-2.5 font-normal'
                required
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center px-10 py-1'>
          <div className='flex items-center h-5'>
            <input
              id='terms'
              aria-describedby='remember'
              type='checkbox'
              className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 '
              required
              onChange={() => setTerms(!terms)}
            />
          </div>
          <div className='ml-3 text-[15px] '>
            <label htmlFor='terms' className='font-normal'>
              Dengan ini saya menyetujui{" "}
              <span className='text-[#0070BA]'>Ketentuan Penggunaan</span> dan
              <span className='text-[#0070BA]'>Kebijakan Privasi</span>{" "}
              FixNDrive
            </label>
          </div>
        </div>
        <div className='grid place-items-center'>
          <button
            type='submit'
            className={`bg-[#21217A] text-white px-10 py-2 rounded-2xl mx-auto font-normal disabled:bg-gray-500 ${terms === true ? "opacity-50 " : "opacity-100"}`}
            disabled={terms}
          >
            Daftar
          </button>
        </div>
      </form>
      <div className='flex justify-center gap-2 pt-4 font-medium text-center text-black'>
        Sudah Punya Akun?{" "}
        <form
          method='dialog'
          className='font-bold text-[#390216] hover:underline '
          onClick={() =>
            document.getElementById("my_modal_3_login").showModal()
          }
        >
          <button>Masuk</button>
        </form>
      </div>
    </div>
  );
};

export default RegistForm;
