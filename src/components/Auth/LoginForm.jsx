import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const value = {
      username: data.username,
      password: data.password,
    };

    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post("http://localhost:5050/login", value);

      if (res) {
        console.log(res);
        reset();
        navigate("/dashboard");
      } else {
        console.log(res);
      }
    } catch (error) {
      if (
        error.response
        // error.response.status === 401 ||
        // error.response.status === 404 ||
        // error.response.status === 400
      ) {
        reset();
        toast.error(`${error.response.data.message}`);
        return;
      } else {
        console.error("Login gagal:", error);
      }
    }
  };

  return (
    <div>
      <form
        className='max-w-sm px-6 mx-auto space-y-4 text-black md:space-y-6'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor='username' className='block mb-2 '>
            Username
          </label>
          <input
            type='text'
            name='username'
            id='username'
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
          <label htmlFor='password' className='block mb-2 '>
            Kata Sandi
          </label>
          <input
            type='password'
            name='password'
            id='password'
            {...register("password", {
              required: { value: true, message: "Password harus diisi!" },
            })}
            placeholder='Masukkan Kata Sandi'
            className=' border border-gray-300 rounded-2xl drop-shadow-md block w-full p-2.5 font-normal'
          />
          {errors.password && (
            <p className='mt-2 font-medium text-red-500'>
              {errors.password.message}
            </p>
          )}
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
          <button
            to='/dashboard/beranda'
            type='submit'
            className='bg-[#21217A] text-white px-10 py-2 rounded-2xl mx-auto font-normal'
          >
            Masuk
          </button>
        </div>
      </form>
      <div className='flex justify-center gap-2 pt-4 font-medium text-center text-black'>
        Belum Punya Akun?{" "}
        <form
          method='dialog'
          className='font-bold text-[#390216] hover:underline '
          onClick={() =>
            document.getElementById("my_modal_3_regist").showModal()
          }
        >
          <button>Daftar Sekarang</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
