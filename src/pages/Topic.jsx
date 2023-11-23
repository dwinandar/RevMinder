import SearchBar from "../components/SearchBar";
import Tips from "../components/Tips"



const Topic = () => {
  return (
    <>

      <div className="flex flex-col flex-1">
        <div className="mt-4 ml-5 overflow-y-auto oveflow-hidden rounded-lg h-[84vh] w-[80rem]">
          <div className="forum-container w-auto">

            <div className="discussion-container">
              <div className="title p-10 md:p-12 border rounded-[10px] bg-[#FFFFFF] w-full">
                <div className="flex text-left flex-col ">
                  <p className="text-[24px] font-bold">Artikel dan Video</p>
                  <p>Artikel edukatif dan konten video yang menyenangkan</p>
                </div>

                <SearchBar placeholder={"Cari artikel, video..."} />

                <Tips />


              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topic;

