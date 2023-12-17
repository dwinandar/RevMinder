import { LogIn } from "lucide-react";
import logofndlogin from "../../assets/Logo-RevMinder.svg";
import LoginForm from "./LoginForm";
import { ToastContainer } from "react-toastify";

const DialogLogin = () => {
  return (
    <dialog id='my_modal_3_login' className='z-20 modal'>
      <ToastContainer position='top-center' />

      <div className='modal-box bg-[#F9FAFC] max-w-4xl px-0 relative pt-0'>
        <form
          method='dialog'
          className='flex justify-between border-b-[3px] border-b-[#F0F0F0] py-5 px-10 sticky top-0 bg-white shadow-lg text-black z-40'
        >
          <img
            src={logofndlogin}
            alt='logo-fnd'
            className='md:w-[30%] w-[180px]'
          />
          <button className='text-2xl '>✕</button>
        </form>
        <div className='flex flex-col items-center pt-10 pb-8'>
          <p className='text-center text-[32px] pb-6 flex items-center gap-4 text-black md:pt-4 pt-2'>
            <LogIn size={32} /> Masuk
          </p>
        </div>
        <LoginForm />
      </div>
    </dialog>
  );
};

export default DialogLogin;
