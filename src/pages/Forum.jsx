import { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";

import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import Avatar from "../components/Avatar";

import { PlusIcon } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

import userPhoto from "../assets/UserPhoto.png"

import { forum } from "../constant/data";





const Topic = ({ key, data }) => {
  return (
    <div key={key} className="lg:p-4 mb-5">
      <div className="rounded-lg bg-gray-200 shadow-xl text-slate-900">
        <div className="flex flex-col text-right">
          <span className="inline-block md:pr-[4rem] pt-6">{data.created}</span>
          <div className="flex flex-col gap-[1rem] justify-start px-3 md:px-[4rem] pb-8">
            <div className="flex flex-row gap-3">
              <Avatar width={"w-22"} src={data.avatar} />
              <div className="flex flex-col justify-center">
                <p className="text-left font-bold text-xl">{data.user}</p>
                <p className="text-left">Topik: {data.topic}</p>
              </div>
            </div>
            <span className="text-justify pb-4">{data.comment}</span>
            <span className="inline-block border-b-2 border-gray-400"></span>
            <div className="exist flex flex-row gap-6">
              <p className="flex justify-start items-center gap-2">
                <span>
                  <FaHeart size={24} color={"#3334CC"} />
                </span>
                {data.likes}
              </p>
              <p className="flex justify-start items-center gap-2">
                <span>
                  <BiSolidCommentDetail size={24} color={"#3334CC"} />
                </span>
                {data.replies.length}
              </p>
              <p className="flex justify-start items-center gap-2">
                <span>
                  <BsThreeDotsVertical size={24} color={"#3334CC"} />
                </span>
              </p>
              <div className="flex justify-end w-full">
                <button className="bg-[#F2994A] hover:bg-[#F2994A] text-white px-[1.5rem] py-3 md:px-[3rem] rounded-lg">Balas</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

const TopicContainer = ({ value, forum }) => {
  return (

    <div className={`lg:h-[24rem] w-full`}>
      {value.length < 1 ? forum.map((data, i) => (
        <Topic key={i} data={data} />
      ))
        : value.map((data, i) => (
          <Topic key={i} data={data} />
        ))}

    </div>
  )

}

const Forum = () => {
  const [val, setVal] = useState([]);
  const [category, setCategory] = useState("semua")
  const [filter, setFilter] = useState("");

  const fetchInfo = async () => {
    return await fetch("http://localhost:3000/discussion").then((res) => res.json()).then((res) => setVal(res));
  }

  useEffect(() => {
    fetchInfo()
  }, [val]);



  const postRef = useRef(null);

  const handleSubmit = (e) => {
    if (postRef.current.value === "") {
      e.preventDefault();
      alert("Value musn't empty");
    } else {
      const postObj = {
        user: "Pheonix",
        avatar: userPhoto,
        comment: postRef.current.value,
        topic: "Motor",
        created: "23-11-2023 09:00:00",
        likes: 0,
        replies: [{
          0: "No Good"
        }]
      }

      try {
        axios.post("http://localhost:3000/discussion", postObj).then((res) => { console.log(res.data.user) });

      } catch (err) {
        alert("Cannot post!")
      }
      postRef.current.value = "";
    }

  }
  return (
    <>
      <div className="md:mt-4 lg:mx-5 rounded-lg lg:w-[80%] mdshadow-xl">
        <div className="forum-container w-auto h-full">
          <div id="Forum" className="title md:p-10 md:p-12 border lg:h-[84vh] rounded-[10px] bg-[#FFFFFF] ">
            <div className="flex text-left flex-col ">
              <p className="text-[24px] font-bold">Selamat Datang di Forum!</p>
            </div>

            <SearchBar placeholder={"Cari topik..."} onChange={setFilter} />

            <div className="text-white grid grid-cols-6 gap-4 mb-4">
              <div className="col-start-1 col-end-3">
                <div className="flex flex-start gap-3">
                  <button className={`p-3 rounded-lg bg-primary1 ${category === "semua" ? "" : "opacity-40"} px-[1.5rem] font-bold text-white`}
                    onClick={() => setCategory("semua")}
                  >Semua</button>
                  <button className={`p-3 rounded-lg bg-primary1 ${category === "populer" ? "" : "opacity-40"} font-bold px-[1.5rem] text-white`}
                    onClick={() => setCategory("populer")}
                  >Populer</button>
                </div>
              </div>
              <div className="col-end-7 col-span-2">
                <div className="flex justify-end">
                  <button className="btn hover:bg-[#F2994A] bg-[#F2994A] md:px-[1.5rem] text-white font-bold text-base" onClick={() => { document.getElementById("my-modal").showModal() }}>
                    <PlusIcon size={24} />
                    Tambah Topic
                  </button>
                </div>
              </div>
            </div>

            <Modal id="my-modal">
              <dialog id="my-modal" className="modal">
                <div className="modal-box bg-white">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <form method="dialog" className="form-control w-full max-w-m px-3" onSubmit={handleSubmit}>
                    <div className="flex gap-4 mb-3">
                      <Avatar width={"24"} round="rounded-full" src={userPhoto} />
                      <span className="self-center font-bold">Pheonix</span>
                    </div>
                    <label className="label">
                      <span className="label-text font-bold">Post</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-32 focus:outline-none resize-none" placeholder="Apa yang sedang kamu pikirkan?" ref={postRef}></textarea>
                    <div className="post-topik flex items-center justify-end">
                      <button className="submit w-[40%] text-center text-white px-1 p-2 rounded-lg  font-bold bg-[#F2994A] my-5" onClick={() => { }} >Tambah</button>
                    </div>
                  </form>
                </div>
              </dialog>
            </Modal>

            <div className="overflow-y-auto mt-2 rounded-lg ">
              <TopicContainer value={val} forum={forum} />
            </div>

          </div>

        </div >

      </div >
    </>
  )
}

export default Forum;
