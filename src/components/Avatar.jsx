import { FaEdit } from "react-icons/fa";

const Avatar = ({ round, width, src, attr, dot }) => {
  return (
    <>
      <div className="avatar">
        <div className={`${width} ${round} ${attr} rounded-full`}>
          <img src={src} className={`${dot ? "cursor-pointer" : ""}`} />
        </div>
        <span className={`${dot ? "bottom-2 left-[94px] absolute w-7 h-7 rounded-full" : "hidden"} `} >
          <FaEdit size={"26"} />
        </span>
      </div >

    </>
  );
}

export default Avatar;
