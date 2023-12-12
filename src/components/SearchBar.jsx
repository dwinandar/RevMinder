import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ placeholder, onChange }) => {


  return (
    <>
      <div className="flex justify-center md:justify-end my-6 md:my-6">
        <div className="form-control max-md:w-full px-4 lg:px-0">
          <span className="inline-block flex items-center border border-black rounded-lg">
            <input
              onChange={(e) => { onChange(e.target.value) }}
              type="text"
              placeholder={`${placeholder}`}
              className="input border-none md:w-[360px] w-full focus:outline-none bg-white" />
            <button className="py-3 px-6 mr-[2px] border-1 rounded-lg " onClick={() => console.log("Clicked!")}>
              <FaSearch size={20} color={"#F2994A"} />
            </button>
          </span>
        </div>
      </div>
    </>

  )
}
export default SearchBar;
