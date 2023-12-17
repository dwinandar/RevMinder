/* eslint-disable react/prop-types */
import { useState } from "react";

const Modal = (props) => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={() => document.getElementById(props.id).showModal()}>open modal</button> */}
      {/* <dialog id={props.id} className="modal"> */}
      {/*   <div className="modal-box"> */}
      {/*     <form method="dialog"> */}
      {/* if there is a button in form, it will close the modal */}
      {/*   <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button> */}
      {/* </form> */}
      {props.children}
      {/*   </div> */}
      {/* </dialog> */}
    </>
  );
};

export default Modal;
