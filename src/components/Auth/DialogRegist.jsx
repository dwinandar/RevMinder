import { UserPlus2 } from "lucide-react";
import logofndlogin from "../../assets/Logo-RevMinder.svg";
import RegistForm from "./RegistForm";

const DialogRegist = () => {
  return (
    <dialog id='my_modal_3_regist' className='modal'>
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
          <p className='text-center text-[32px] pb-3 flex items-center gap-4 text-black '>
            <UserPlus2 size={32} /> Daftar Akun
          </p>
        </div>
        <RegistForm />
      </div>
    </dialog>
  );
};

export default DialogRegist;
